import { useDispatch } from "react-redux";
import StripeCheckout from "react-stripe-checkout";
import { clearCart } from "../../redux/slice/cartSlice";

export const CheckoutForm = ({ total, handlePaymentSuccess }) => {
  const dispact = useDispatch();

  const handleToken = (token) => {
    handlePaymentSuccess();
    dispact(clearCart());
  };
  return (
    <>
      <StripeCheckout
        token={handleToken}
        stripeKey={import.meta.env.REACT_APP_STRIPE_KEY}
        amount={total * 100}
        name="Woodcrafiee Website"
        description="Payment test using stripe"
      >
        <button className="w-full bg-gray-300 py-3.5 my-3 font-medium">
          Pay ${total?.toFixed(2)}
        </button>
      </StripeCheckout>
    </>
  );
};
