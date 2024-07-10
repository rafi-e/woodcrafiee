import { useState } from "react";
import Slider from "react-slick";
import { BodyOne, Caption, Title } from "../common/CustomComponent";
import { herolist } from "../../assets/data/data";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden md:flex absolute bottom-4 right-[148px] md:right-80 lg:right-0 lg:left-1/2 slider-btn z-20"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowRight size={50} />
      </button>
    </div>
  );
}
function SamplePrevArrow(props) {
  const { onClick } = props;
  return (
    <div
      className="hidden md:flex absolute bottom-4 bg-white text-primary left-[148px] md:left-80 lg:left-auto lg:right-1/2 slider-btn z-20"
      onClick={onClick}
    >
      <button className="next">
        <MdKeyboardArrowLeft size={50} />
      </button>
    </div>
  );
}

export const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };
  return (
    <>
      <section className="h-[60vh] lg:h-[90vh] mt-12 md:mt-20 bg-white-100 relative z-10">
        <Slider {...settings}>
          {herolist.map((item) => (
            <HeroItem
              key={item.id}
              title={item.title}
              description={item.description}
              shop={item.shop}
              prices={item.price}
              colors={item.color}
              image={item.image}
            />
          ))}
        </Slider>
      </section>
      <Banner />
    </>
  );
};

export const HeroItem = ({ title, description, shop, prices, colors, image }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0].value);
  const [selectedPrice, setSelectedPrice] = useState(
    prices.find((price) => price.color === colors[0].value)
  );

  const handleColorClick = (color) => {
    const newSelectedPrice = prices.find((price) => price.color === color);
    setSelectedColor(color);
    setSelectedPrice(newSelectedPrice);
  };
  return (
    <>
      <section className="content flex justify-between lg:px-16 h-[60vh] lg:h-[90vh] relative z-20">
        <div className="left w-1/2 p-4 md:p-8 lg:py-32 lg:px-16">
          <Title
            level={5}
            className="leading-none font-medium text-[20px] md:text-3xl lg:text-[60px] lg:leading-snug pb-2"
          >
            {title}
          </Title>
          <BodyOne className="text-sm tracking-tight">{description}</BodyOne>
          <div className="flex items-start gap-8 my-5">
            <div>
              <Caption>Prices</Caption>
              <div className="mt-3">
                <Title
                  level={5}
                  className=" text-base md:text-lg lg:text-[22px]"
                >
                  ${selectedPrice.value.toFixed(2)}
                </Title>
              </div>
            </div>
            <div>
              <Caption>Colors</Caption>
              <div className="flex items-center justify-center gap-3 mt-5">
                {colors.map((color, i) => (
                  <div
                    key={i}
                    onClick={() => handleColorClick(color.value)}
                    className={`w-3 h-3 md:w-4 md:h-4 rounded-full cursor-pointer border-gray-300 ${
                      selectedColor === color.value ? "selected" : ""
                    }`}
                    style={{ backgroundColor: color.value }}
                  ></div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8">
            <Link to={`/product-details/${shop}`}>
              <button className="primary-bton uppercase text-[10px] lg:text-base md:px-6 lg:px-10">
                view details
              </button>
            </Link>
            <Link to="/shop">
              <button className="secondary-bton uppercase text-[10px] lg:text-base md:px-6 lg:px-10">
                view shop
              </button>
            </Link>
          </div>
        </div>
        <div className="right bg-white p-5  w-1/2 h-full flex justify-center items-center relative z-50">
          <img src={image} alt="" className="h-[60vh] w-full object-contain" />
        </div>
        <div className="lg:bg-black lg:h-[90vh] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:-z-10"></div>
      </section>
    </>
  );
};

const Banner = () => {
  return (
    <>
      <div className="py-20 container flex flex-col md:flex-row items-center gap-5">
        <div>
          <BannerCard
            title="Wooden water Bottle"
            desc="UP TO 60% OF"
            cover="../images/hero/product1-1.png"
          />
        </div>
        <div className="hidden md:flex justify-between flex-col gap-8">
          <BannerCard
            title="Wooden Tooth Brush"
            desc="UP TO 60% OF"
            cover="../images/hero/product2.png"
            className={true}
          />
          <BannerCard
            title="Organic Wofen Bag"
            desc="UP TO 60% OF"
            cover="../images/hero/product3.png"
            className={true}
            classSecond={true}
          />
        </div>
      </div>
    </>
  );
};

const BannerCard = ({ title, desc, cover, className, classSecond }) => {
  return (
    <>
      <div className="w-full h-full relative">
        <img src={cover} alt="" />
        <div
          className={`${
            className
              ? "absolute bottom-0 p-8 w-full"
              : "flex absolute bottom-0 p-8 w-full"
          } ${className && classSecond ? "left-0 lg:left-48 top-0 w-96" : ""}`}
        >
          <div>
            <div className=" text-[24px] lg:text-[40px] font-[700] text-primary">
              {title}
            </div>
            <p className="text-lg font-normal leading-none">{desc}</p>
          </div>
          <div className="w-1/2 mt-5">
            <Link to="/shop">
              <button className="secondary-btn flex justify-end">
                Shop now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
