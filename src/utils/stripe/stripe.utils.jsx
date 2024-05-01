import { loadStripe } from "@stripe/stripe-js";

export const stripePromise = loadStripe(
  "pk_test_51NlkZgBsTc8e4sQZjqPpgCiYK8DW5dbfTCscVeOIeINg7AcRCAqJw3KUcQ8z00XXtSFI7xxnSUxEv6iRbHRHNuRV00msJGpk3K"
);