import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";
import { createOrder } from "@/app/utils";

const stripeKey = `${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!}`;
const stripe = new Stripe(stripeKey);
const host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000/';

export async function POST(request: NextRequest) {
  try {
    const { formData, cartItems, subTotalCartPrice } = await request.json();

    const lineItems = cartItems.map(item => ({
        price_data: {
          currency: 'ron',
          product_data: {
            name: item.name,
            images: [item.images[0].src]
          },
          unit_amount: item.price * 100, 
        },
        quantity: item.quantity,
      }));

      const shippingFee = subTotalCartPrice >= 300 ? 0 : 1999; 
      lineItems.push({
        price_data: {
          currency: 'ron',
          product_data: {
            name: "Transport fee",
          },
          unit_amount: shippingFee,
        },
        quantity: 1,
      });


      const shorterListOfCartItems = cartItems.map( item => ({
        id:item.id,
        quantity: item.quantity
      }))

      const orderResponse = await createOrder(formData, shorterListOfCartItems, subTotalCartPrice);

      if (!orderResponse || !orderResponse.data) {
        console.error("Failed to create order.");
        return NextResponse.json({ error: "Failed to create order." }, { status: 500 });
      }
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        cancel_url: `${host}`,
        success_url: `${host}success/${orderResponse?.data.id}`,
        metadata: {
          orderId: orderResponse.data.id.toString(),
        },
      });

    return NextResponse.json({ sessionId: session.id });

  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "Error in checkout session" }, { status: 500});
  }
}
