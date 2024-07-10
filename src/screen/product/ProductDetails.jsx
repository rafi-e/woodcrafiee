import { useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CartActions } from "../../redux/slice/cartSlice";
import { FavoriteActions } from "../../redux/slice/favouriteSlice";
import { productlists } from "../../assets/data/data";
import { FilterDiscover, ProductSlideCard } from "../../router";
import {
  BodyOne,
  Caption,
  Title,
} from "../../components/common/CustomComponent";
import { RenderRatingStars } from "../../components/product/ProductCard";
import { BiMinus, BiPlus } from "react-icons/bi";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const colorsValue = {
  red: "#fe7fef",
  yellow: "#ffff00",
  green: "#008000",
  blue: "#0000ff",
  white: "#f8f8f8",
  brown: "#a52a2a",
  clear: "#ffffff",
  "dark brown": "#654321",
  light: "#f5f5dc",
  black: "#000000",
  natural: "#8b4513",
  "light brown": "#deb887",
  dark: "#696969",
  gray: "#808080",
  beige: "#f5f5dc",
};

export const ProductDetails = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const product = productlists.find(
    (product) => product.id === parseInt(productId)
  );
  //Define Product
  const { id, title, images, price, description, discount, rating, color } =
    product;

  const [selectedColor, setSelectedColor] = useState(color[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    price.find((price) => price.color === color[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = price.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };

  if (!product) {
    return <div>Product not Found</div>;
  }

  //Slider Images
  const CustomPage = ({ index, onClick }) => (
    <div>
      <img src={images[index].image} alt="" onClick={onClick} />
    </div>
  );
  const settings = {
    customPaging: (i) => <CustomPage index={i} />,
    dots: true,
    dotsClass: "slick-dots slick-thumb",
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    SlideToScroll: 1,
  };

  //Cart function
  const cartItems = useSelector((state) => state.cart.itemList);
  const discountPrice = price[0].value - (price[0].value * discount) / 100;

  const addToCart = () =>
    dispatch(
      CartActions.addToCart({ id, title, price: discountPrice, images })
    );
  const removeCartItems = () => dispatch(CartActions.removeFromCart(id));
  //Add to favorite
  const addToFavorites = () =>
    dispatch(
      FavoriteActions.addToFavorites({
        id,
        title,
        price: discountPrice,
        images,
      })
    );
  return (
    <>
      <section className="container mt-32 slideproduct">
        <div key={id} className="flex justify-between flex-col lg:flex-row">
          <div className="images lg:w-1/2">
            <div>
              <Slider {...settings}>
                {images.map((image, index) => (
                  <img
                    src={image.image}
                    key={index}
                    className="w-full h-full"
                    alt=""
                  />
                ))}
              </Slider>
            </div>
          </div>
          <div className="details lg:w-1/2 px-0 md:px-12 pt-16">
            <button className="feature-btn bg-indigo-600">
              SALE {discount}% OFF
            </button>
            <Title level={2} className="my-3">
              {title}
            </Title>
            <div className="flex items-center gap-2 -mt-5 mb-5">
              <div className="flex items-center gap-1">
                {RenderRatingStars(rating)}
              </div>
              <p>{product.rating} Review</p>
            </div>
            <p className="text-[15px]">{description}</p>
            <br />
            <Caption>Colors</Caption>
            <div className="flex items-center gap-3 mt-5">
              {color.map((colorOption, index) => (
                <div
                  key={index}
                  onClick={() => handleColorClick(colorOption.value)}
                  className={`w-4 h-4 rounded-full -mt-3 cursor-pointer border-gray-300 ${
                    selectedColor === colorOption.value ? "selected" : ""
                  }`}
                  style={{ backgroundColor: colorsValue[colorOption.value] }}
                ></div>
              ))}
            </div>
            <div className="mt-5">
              <Caption>Prices</Caption>
              <div className="flex items-center gap-3">
                <BodyOne className="line-through">
                  ${selectedPrice.value}
                </BodyOne>
                <Title level={4} className="text-primary-green">
                  ${""}
                  {(
                    selectedPrice.value -
                    (selectedPrice.value * product.discount) / 100
                  ).toFixed(2)}
                </Title>
              </div>
            </div>
            <br />
            <div className="flex flex-col md:flex-row items-start md:items-center gap-4">
              {cartItems
                .filter((item) => item.id === id)
                .map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <button
                      onClick={addToCart}
                      className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300"
                    >
                      <BiPlus size={20} />
                    </button>
                    {item.id >= 1 ? (
                      <input
                        type="text"
                        value={item.quantity}
                        className="w-20 h-12 text-center text-primary outline-none border border-gray-300 px-6"
                      />
                    ) : (
                      <input
                        type="text"
                        value="0"
                        className="w-20 h-12 text-center text-primary outline-none border border-gray-300 px-6"
                      />
                    )}
                    <button
                      onClick={removeCartItems}
                      className="w-12 h-12 grid place-items-center bg-gray-100 text-primary border border-gray-300"
                    >
                      <BiMinus size={20} />
                    </button>
                  </div>
                ))}
              <button onClick={addToCart} className="primary-btn p-5 w-[320px]">
                ADD TO CART
              </button>
            </div>
            <button
              onClick={addToFavorites}
              className="flex items-center secondary-btn text-lg mt-6 w-[320px]"
            >
              Add to Wishlist
            </button>
            <div className="flex items-center gap-3"></div>
            <hr className="my-3" />
            <label htmlFor="">
              <span className="text-primary font-bold mb-4">SKU :</span>{" "}
              PRT84E63A
            </label>
            <br />
            <label htmlFor="">
              <span className="text-primary font-bold mb-4">Category :</span>{" "}
              Wooden Product
            </label>
          </div>
        </div>
        <div className=" flex justify-between flex-col lg:flex-row my-10">
          <div className="lg:w-1/2">
            <Title level={3}>Fits Your Child</Title>
            <Caption>
              Designed for superior child cofort, Onefit provides extra
              rear-facing legroom and multiple recline option in every mode of
              use. With the widest range of height adjustmen, the easy-adjust
              headrest syste with the harness to grow with your child. Onefit
              accomodates tiny passangers from te very start with a removable
              head and body support insert for newborns weighting 5-11 lb
            </Caption>
            <Title level={3}>Specifications</Title>
            <div className="flex flex-col gap-3 mt-2">
              <Caption>
                Assembled Dimensions (L x W x H): 21.5" x 19" x 27"
              </Caption>
              <Caption>Assembled Product Weight: 25 lbs.</Caption>
              <Caption>Harness Mode - Rear-Facings-40 lbs </Caption>
              <Caption>Harness Mode - Forward-Facing25-65 lbs </Caption>
              <Caption>Booster Mode - Harness + Booster40-100 lbs </Caption>
              <Caption>Booster Mode - Backlessn/a </Caption>
              <Caption>Rear-Facing Child Max Height Capacity43 in </Caption>
              <Caption>Forward-Facing Child Max Height Capacity54 in </Caption>
            </div>
          </div>
          <div className="lg:w-1/2 grid grid-cols-2 gap-5 lg:px-8 mt-5">
            <ProductDetailsBox
              title="All-In-One Car Seat"
              desc="One car seat taht fiits your child, vehicle and live from birth throughh booster"
            />
            <ProductDetailsBox
              title="Space-Saving Design"
              desc="Slim, space-saving design take up less space in vehicle without compromising cofort"
            />
            <ProductDetailsBox
              title="Easiest to Install Correctly"
              desc="No need long time to install and the procedure is easy to follow for any ages"
            />
            <ProductDetailsBox
              title="No Added Cheicals"
              desc="ClearTex product meet federal flammability standards without added chemicals"
            />
          </div>
        </div>
        <Title level={3} className="gap-y-5">
          Related Products
        </Title>
        <ProductSlideCard />
      </section>
      <br />
      <FilterDiscover />
    </>
  );
};

export const ProductDetailsBox = ({ title, desc }) => {
  return (
    <>
      <div className="flex items-center justify-center flex-col gap-3 text-center bg-gray-100 p-8 lg:p-0">
        <Title level={5}>{title}</Title>
        <Caption>{desc}</Caption>
      </div>
    </>
  );
};
