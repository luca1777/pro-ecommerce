import Stripe from "stripe";
import { NextRequest, NextResponse } from "next/server";

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY!}`);
const host = process.env.NEXT_PUBLIC_HOST || 'http://localhost:3000';

export async function POST(request: NextRequest) {
  try {
    const { cartItems, totalPrice } = await request.json();

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

      const shippingFee =  totalPrice >= 300 ? 0 : 1999; 
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
  
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        line_items: lineItems,
        mode: "payment",
        cancel_url: `${host}`,
        success_url: `${host}/success`,
      });

    return NextResponse.json({ sessionId: session.id });

  } catch (err) {
    return NextResponse.json({ error: "Error in checkout session" }, { status: 500});
  }
}
