import { NavLink } from "react-router-dom";
import { BodyOne } from "../common/CustomComponent";
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";

export const RenderRatingStars = (rating) => {
  const totalStars = 5;
  const fullStars = Math.floor(rating);
  const hasHalfStars = rating % 1 !== 0;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= fullStars) {
      stars.push(<FaStar key={i} color="#ff8a00" />);
    } else if (hasHalfStars && i === fullStars + 1) {
      stars.push(<FaStarHalfAlt key={i} color="#ff8a00" />);
    } else {
      stars.push(<FaRegStar key={i} color="#ff8a00" />);
    }
  }
  return stars;
};

export const ProductCard2 = ({
  id,
  title,
  images,
  price,
  discount,
  rating,
  featured,
  //   category,
  //   color,
}) => {
  return (
    <>
      <div className="product card">
        <NavLink to={`/product-details/${id}`}>
          <div className="images h-96">
            {images.map((cover, index) => (
              <img
                key={index}
                src={cover.image}
                alt={id}
                className="w-full h-full object-cover"
              />
            ))}
            <div className="flex justify-between w-full p-5 absolute top-0 left-0">
              {discount && (
                <button className="discount-btn">{discount}%</button>
              )}
              {featured && (
                <button className="feature-btn">
                  {featured === true && "Featured"}
                </button>
              )}
            </div>
          </div>
          <div className="details flex  items-center flex-col bg-white pt-6">
            <BodyOne>{title}</BodyOne>
            <div className="flex items-center gap-2 mt-2 mb-2">
              {RenderRatingStars(rating)}
            </div>
            <div className="flex items-center gap-3">
              {price.slice(0, 1).map((priceItem, index) => (
                <>
                  <BodyOne className="line-through" key={index}>
                    ${priceItem.value}
                  </BodyOne>
                  <BodyOne className="text-primary-green">
                    $
                    {(
                      priceItem.value -
                      (priceItem.value * discount) / 100
                    ).toFixed(2)}
                  </BodyOne>
                </>
              ))}
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};
