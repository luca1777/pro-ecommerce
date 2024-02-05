import { createOrder } from "@/app/utils";
import Cors from "micro-cors";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

const stripe = require("stripe")(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

const cors = Cors({
  allowMethods: ["POST", "HEAD"],
});

const secret = process.env.NEXT_PUBLIC_STRIPE_WEBHOOK_SECRET || "";

export async function POST(req: Request) {
  try {
    const body = await req.text();

    const signature = headers().get("stripe-signature");

    const event = stripe.webhooks.constructEvent(body, signature, secret);

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      const formData = JSON.parse(session.metadata.formData);

      const cartItems = JSON.parse(session.metadata.cartItems);

      if (!Array.isArray(cartItems)) {
        console.error("cartItems nu este un array: ", cartItems);
        return NextResponse.json(
          { message: "cartItems nu este un array", ok: false },
          { status: 500 }
        );
      }

      console.log(session)
      const totalPrice = JSON.parse(session.metadata.shippingFee);


      const orderResponse = await createOrder(formData, cartItems, totalPrice);

      if (orderResponse) {
        console.log("Order created successfully", orderResponse.data);
      } else {
        console.log("Error creating order");
      }
    }

    return NextResponse.json({ result: event, ok: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      {
        message: "something went wrong",
        ok: false,
      },
      { status: 500 }
    );
  }
}
