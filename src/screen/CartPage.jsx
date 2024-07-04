import { useDispatch, useSelector } from "react-redux";
import {
  CartActions,
  selectTotalPrice,
  clearCart,
} from "../redux/slice/cartSlice";
import { BodyOne, Title } from "../components/common/CustomComponent";
import StripeCheckout from "react-stripe-checkout";
import BgImage from "../assets/common/Frame.png";
import { BiMinus, BiPlus } from "react-icons/bi";
import { IoCloseOutline } from "react-icons/io5";

export const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.itemList);
  const totalPrice = useSelector(selectTotalPrice);
  const dispact = useDispatch();

  const handleToken = (token) => {
    console.log("=======================");
    console.log(token);
    console.log("=======================");
    dispact(clearCart());
  };
  return (
    <>
      <section className="mt-16">
        <div className="h-[50vh]">
          <div className="images absolute top-0 left-0 w-full h-1/2">
            <img src={BgImage} alt="" className="w-full h-full object-cover" />
          </div>
          <div className="text absolute top-48 left-[45%]">
            <Title level={1}> Cart</Title>
          </div>
        </div>
        <div className="container flex flex-col lg:flex-row justify-start lg:justify-between gap-5">
          <div className="w-full lg:w-2/3">
            <div className="relative overflow-x-auto sm:rounded-lg">
              <table className="w-full text-sm text-left rtl:text-right">
                <thead className="text-xs text-center text-primary uppercase bg-gray-50">
                  <tr>
                    <th scope="col" className="px-16 py-5">
                      Thumbnail
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Product
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Price
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Quantity
                    </th>
                    <th scope="col" className="px-6 py-3">
                      Subtotal
                    </th>
                    <th scope="col" className="px-6 py-3"></th>
                  </tr>
                </thead>
                <tbody>
                  {cartItems?.map((item) => (
                    <CartPageCard
                      key={item?.id}
                      id={item?.id}
                      cover={item?.cover}
                      title={item?.title}
                      price={item?.price}
                      quantity={item?.quantity}
                    />
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="w-full ld:w-2/6 ml-0 ld:ml-16">
            <div className="bg-gray-100 p-5">
              <p className="text-3xl font-bold text-primary">Cart Totals</p>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32 ">Subtotal</p>
                {""}
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Shipping</p>
                {""}
                <p className="text-sm font-normal">
                  Enter your address to view shipping options.
                </p>
              </div>
              <hr className="my-2 h-[2px] bg-gray-200" />
              <div className="text-lg font-medium text-primary flex items-center gap-5">
                <p className="w-32">Total</p>
                {""}
                <p className="text-sm font-normal">${totalPrice.toFixed(2)}</p>
              </div>
              <StripeCheckout
                token={handleToken}
                stripeKey={import.meta.env.REACT_APP_STRIPE_KEY}
                amount={totalPrice * 100}
                name="Woodcrafiee Website"
                description="Payment test using stripe"
              >
                <button className="primary-btn mt-5">
                  Proceed To Checkout
                </button>
              </StripeCheckout>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export const CartPageCard = ({
  id,
  cover,
  title,
  price,
  quantity,
}) => {
  const dispatch = useDispatch();
  const incCartItems = () =>
    dispatch(CartActions.addToCart({ id, title, price }));
  const removeCartItems = () => dispatch(CartActions.removeFromCart(id));
  const removeAllCartItems = () => dispatch(CartActions.removeAllFromCart(id));
  return (
    <>
      <tr className="bg-white border-b hover:bg-gray-50">
        <td className="p-4">
          {cover?.slice(0, 1).map((image, i) => (
            <img
              key={i}
              src={image.image}
              alt={i}
              className="w-36 h-36 object-cover"
            />
          ))}
        </td>
        <td className="px-6 py-4">
          <BodyOne>{title}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${price.toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <div className="flex items-center gap-3">
            <button
              onClick={incCartItems}
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiPlus size={30} />
            </button>
            <input
              type="text"
              value={quantity}
              readOnly
              className="w-16 h-12 text-primary font-semibold text-base outline-none border border-gray-300 px-6"
            />
            <button
              onClick={removeCartItems}
              className="w-12 h-12 grid place-content-center bg-gray-100 text-primary border border-gray-300"
            >
              <BiMinus size={30} />
            </button>
          </div>
        </td>
        <td className="px-6 py-4">
          <BodyOne>${(price * quantity).toFixed(2)}</BodyOne>
        </td>
        <td className="px-6 py-4">
          <button className="w-12 h-12 bg-[#0D775E] flex items-center justify-center rounded-full text-white">
            <IoCloseOutline size={30} onClick={removeAllCartItems} />
          </button>
        </td>
      </tr>
    </>
  );
};

