import { SelectedProduct } from "../../../app/[locale]/interface";
import { NextResponse } from "next/server";
import { Host } from "../../../apiUsers";
const stripe = require("stripe")(process.env.STRIPE_SECRET);

const getActiveProducts = async () => {
  const checkProducts = await stripe.products.list();
  const availableProducts = checkProducts.data.filter(
    (product: any) => product.active === true
  );
  return availableProducts;
};

export const POST = async (request: any) => {
  const { products, user } = await request.json();

  const data: SelectedProduct[] = products;

  let activeProducts = await getActiveProducts();
  try {
    for (const product of data) {
      const stripeProduct = activeProducts.find(
        (stripeProduct: any) =>
          stripeProduct?.name?.toLowerCase() == product?.title?.toLowerCase()
      );
      if (stripeProduct == undefined) {
        await stripe.products.create({
          name: product.title,
          default_price_data: {
            unit_amount: Number(product.price) * 100,
            currency: "usd",
          },
        });
      }
    }
  } catch (error) {
    console.error(error);
  }
  activeProducts = await getActiveProducts();
  let stripeItems: any = [];

  console.log(activeProducts, "active");
  for (const product of data) {
    console.log(product, "jjj");
    const stripeProduct = activeProducts?.find(
      (prod: any) => prod?.name?.toLowerCase() == product?.title?.toLowerCase()
    );

    console.log(stripeProduct, "stripeproduct");
    if (stripeProduct) {
      stripeItems.push({
        price: stripeProduct?.default_price,
        quantity: product?.quantity,
      });
    }
  }
  if (stripeItems.length === 0) {
    throw new Error("No valid items to purchase");
  }
  const session = await stripe.checkout.sessions.create({
    line_items: stripeItems, // Ensure stripeItems is correctly defined and populated
    mode: "payment",
    customer_email: user.email, // Ensure user.email is correctly defined
    payment_intent_data: {
      metadata: {
        id: user.sub, // Ensure user.sub is correctly defined
        phone: user.phone, // Ensure user.phone is correctly defined
        city: user.city, // Ensure user.city is correctly defined
        address: user.address, // Ensure user.address is correctly defined
      },
    },
    success_url: `${Host}/success`, // Ensure Host is correctly defined
    cancel_url: `${Host}/cancel`, // Ensure Host is correctly defined
  });

  console.log("Stripe Session:", session);

  return NextResponse.json({ url: session.url });
};
