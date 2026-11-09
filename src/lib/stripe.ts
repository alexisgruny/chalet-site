import "server-only";
import Stripe from "stripe";

let stripe: Stripe | undefined;

export function getStripe(): Stripe {
  const secretKey = process.env.STRIPE_SECRET_KEY;

  if (!secretKey) {
    throw new Error("STRIPE_SECRET_KEY is required to use Stripe.");
  }

  if (!stripe) {
    stripe = new Stripe(secretKey);
  }

  return stripe;
}
