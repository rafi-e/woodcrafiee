import { BodyOne, Caption, CustomLink, Title } from "./CustomComponent";
import LogoImg from "../../assets/common/logo-nav.png";

export const Footer = () => {
  return (
    <>
      <footer className="py-14 px-10">
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <img src={LogoImg} alt="LogoImg" className="h-16 -ml-5" />
            <div className="flex flex-col gap2 mt-5">
              <Caption>Address : 451 Wall Street, UK, London</Caption>
              <Caption>Email : woodcrafiee@gmail.com</Caption>
              <Caption>Mobile : +1 (123) 456-7890 </Caption>
            </div>
            <br />
            <BodyOne>Subscribe To Our Newsletter</BodyOne>
            <input
              type="text"
              className="p-3 w-full border bg-white-100 border-gray-300 rounded-md outline-none"
              placeholder="Enter your email address"
            />
          </div>
          <div>
            <Title level={5}>Our Stores</Title>
            <div className="flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop with Sidebar</CustomLink>
              <CustomLink>Shop with Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Usefull Links</Title>
            <div className="flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop with Sidebar</CustomLink>
              <CustomLink>Shop with Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
          <div>
            <Title level={5}>Our Blog</Title>
            <div className="flex flex-col gap-4">
              <CustomLink>Normal</CustomLink>
              <CustomLink>Shop with Sidebar</CustomLink>
              <CustomLink>Shop with Category</CustomLink>
              <CustomLink>Shop Filters Top Bar</CustomLink>
              <CustomLink>Shop Wide</CustomLink>
              <CustomLink>My Account</CustomLink>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
