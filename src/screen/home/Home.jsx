import {
  Banner,
  Hero,
  InstagramPost,
  Product,
  ProductSlide,
  ShippingInfo,
  Testimoni,
} from "../../router";
import { Caption, Title } from "../../components/common/CustomComponent";
import { ProductSlideCard } from "../../components/product/ProductSlide";

export const Home = () => {
  return (
    <>
      <Hero />
      <Product />
      <ShippingInfo />
      <Banner />
      <ProductSlide />
      <Testimoni />
      <div className="hidden lg:block container my-16 slideproduct">
        <Title level={3}>Recent Product</Title>
        <Caption>DISCOVER THE MOST TRENDING PRODUCTS IN WOODCRAFIEE.</Caption>
        <br />
        <ProductSlideCard />
      </div>
      <InstagramPost />
    </>
  );
};
