import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Badges, BodyOne, Title } from "../common/CustomComponent";
import {
  CartActions,
  clearCart,
  selectTotalPrice,
  selectTotalQuantity,
} from "../../redux/slice/cartSlice";
import { CheckoutForm } from "./CheckoutForm";
import { IoCartOutline, IoCloseOutline, IoHeartOutline } from "react-icons/io5";
import {
  FavoriteActions,
  selectTotalFavorites,
} from "../../redux/slice/favouriteSlice";

export const ModelCart = () => {
  const totalQuantity = useSelector(selectTotalQuantity);
  const cartItems = useSelector((state) => state.cart.itemList);
  const favItems = useSelector((state) => state.favorites.favoritesItemList);
  const totalPrice = useSelector(selectTotalPrice);
  const totalFavorites = useSelector(selectTotalFavorites);

  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [activeTab, setActiveTab] = useState("cart");

  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflowX = "hidden";
  };

  const closeModal = () => {
    setIsClosing(true);
    document.body.style.overflowX = "auto";
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handlePaymentSuccess = () => {
    console.log("=======================");
    console.log("Payment Success");
    console.log("=======================");
    clearCart();
  };
  return (
    <>
      <button onClick={openModal} className="relative z-20">
        <IoHeartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-[#0D775E]">{totalFavorites}</Badges>
        </div>
      </button>
      <button onClick={openModal} className="relative z-20">
        <IoCartOutline size={23} />
        <div className="absolute -top-2 -right-1.5">
          <Badges color="bg-[#0D775E]">{totalQuantity}</Badges>
        </div>
      </button>

      {isOpen && (
        <>
          <div className="cartoverlay" onClick={closeModal}></div>
          <div
            className={`cartmodel w-4/5 md:w-1/2 p-16 text-primary ${
              isClosing ? "closing" : ""
            }`}
          >
            <div className="flex justify-between gap-5">
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "cart" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("cart")}
              >
                Shopping Cart
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  {totalQuantity}
                </span>
              </button>
              <button
                className={`flex items-center gap-2 font-medium ${
                  activeTab === "wishtlist" ? "text-primary" : ""
                }`}
                onClick={() => handleTabChange("wishlist")}
              >
                Wishlist
                <span className="w-7 h-7 text-[11px] font-normal rounded-full text-white grid place-content-center bg-primary">
                  {totalFavorites}
                </span>
              </button>
            </div>
            <div className="line-container">
              <div
                className={`line ${activeTab === "cart" ? "active" : ""}`}
              ></div>
              <div
                className={`line ${activeTab === "wishlist" ? "active" : ""}`}
              ></div>
            </div>
            {activeTab == "cart" ? (
              <>
                <div className="h-64 md:h-80 overflow-auto">
                  {cartItems.map((item) => (
                    <CartProduct
                      key={item.id}
                      id={item.id}
                      cover={item.cover}
                      title={item.title}
                      price={item.price}
                      quantity={item.quantity}
                    />
                  ))}
                </div>
                <div className="total flex items-center justify-between mt-10">
                  <Title level={6}>Subtotal:</Title>
                  <Title level={6}>${totalPrice.toFixed(2)}</Title>
                </div>
                <div className="checkout">
                  <CheckoutForm
                    total={totalPrice}
                    handlePaymentSuccess={handlePaymentSuccess}
                  />
                </div>
                <NavLink to="/cart">
                  <button className="primary-btn w-full">View Cart</button>
                </NavLink>
              </>
            ) : (
              <>
                {favItems.map((item) => (
                  <FavoriteProduct
                    key={item.id}
                    id={item.id}
                    cover={item.cover}
                    title={item.title}
                    price={item.price}
                    quantity={item.quantity}
                  />
                ))}
                <NavLink to="/ ">
                  <button className="primary-btn w-full mt-8">
                    Check your Favourite
                  </button>
                </NavLink>
              </>
            )}
          </div>
        </>
      )}
    </>
  );
};

export const CartProduct = ({ id, cover, title, price, quantity }) => {
  const dispatch = useDispatch();
  const removeCartItems = () => {
    dispatch(CartActions.removeAllFromCart(id));
  };
  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((images, i) => (
              <img
                src={images?.image}
                key={i}
                alt=""
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className="details w-1/2">
            <BodyOne>{title}</BodyOne>
            <p className="text-primary-green">
              {quantity} x ${price?.toFixed(2)}
            </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={25} onClick={removeCartItems} />
          </button>
        </div>
      </div>
    </>
  );
};

export const FavoriteProduct = ({ id, cover, title, price, quantity }) => {
  const dispatch = useDispatch();
  const removeFavoriteItems = () => {
    dispatch(FavoriteActions.removeFromFavorites(id));
  };
  return (
    <>
      <div className="mt-5 border-b-2 border-gray-200 pb-5">
        <div className="flex items-center gap-5">
          <div className="images w-20 h-20">
            {cover?.slice(0, 1).map((images, i) => (
              <img
                src={images?.image}
                key={i}
                alt=""
                className="w-full h-full object-cover"
              />
            ))}
          </div>
          <div className="details w-1/2">
            <BodyOne>{title}</BodyOne>
            <p className="text-primary-green">
              {quantity} x ${price?.toFixed(2)}
            </p>
          </div>
          <button className="w-10 h-10 bg-gray-200 flex items-center justify-center rounded-full text-primary">
            <IoCloseOutline size={25} onClick={removeFavoriteItems} />
          </button>
        </div>
      </div>
    </>
  );
};
