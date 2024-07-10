import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { CustomLink, CustomNavLink } from "./CustomComponent";
import { ModelCart } from "../cart/ModelCart";
import { menulists } from "./../../assets/data/data";
import LogoImg from "../../assets/common/logo-nav.png";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  //close menu if click outside close menu button
  const closeMenuSide = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // handle scroll with animation
  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeMenuSide);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", closeMenuSide);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  const isHomePage = location.pathname === "/";
  return (
    <>
      <header
        className={
          isHomePage
            ? `header px-5 md:px-10 bg-white-100 relative z-20 ${
                isScrolled ? "scrolled" : ""
              }`
            : `header px-5 md:px-10 bg-white-100 relative z-20 ${
                isScrolled ? "scrolled" : ""
              }`
        }
      >
        {isHomePage && (
          <div
            className={` ${
              isScrolled ? "lg:bg-none" : "lg:bg-black"
            } lg:h-[80px] lg:absolute lg:top-0 lg:right-0 lg:w-1/3 lg:z-10
            `}
          ></div>
        )}
        <nav className="flex justify-between items-center relative py-2 px-0 md:px-4">
          <div className="flex items-center gap-14">
            <Link to="/">
              <img
                src={LogoImg}
                alt="LogoImg"
                className="h-12 md:h-16 w-auto"
              />
            </Link>
            <div className="hidden lg:flex items-center text-lg justify-between gap-8">
              {menulists.map((list) => (
                <li key={list.id} className="uppercase list-none">
                  <CustomNavLink href={list.path}>{list.link}</CustomNavLink>
                </li>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-8 icons">
            <div className="hidden uppercase md:flex gap-2 lg:block text-inherit relative z-20">
              <CustomLink
                className={`${
                  isScrolled || !isHomePage
                    ? "lg:text-primary"
                    : "lg:text-white"
                }`}
              >
                Login
              </CustomLink>
              <span
                className={`my-0 ${
                  isScrolled || !isHomePage
                    ? "lg:text-primary"
                    : "lg:text-white"
                }`}
              >
                /
              </span>
              <CustomLink
                className={`${
                  isScrolled || !isHomePage
                    ? "lg:text-primary"
                    : "lg:text-white"
                }`}
              >
                Register
              </CustomLink>
            </div>
            <div
              className={`icon flex items-center justify-center gap-6 ${
                isScrolled || !isHomePage ? "lg:text-primary" : "lg:text-white"
              }`}
            >
              <ModelCart />

              <button
                onClick={toggleMenu}
                className="lg:hidden w-10 h-10 flex justify-center items-center text-black focus:outline-none"
              >
                {isOpen ? (
                  <AiOutlineClose size={24} />
                ) : (
                  <AiOutlineMenu size={24} />
                )}
              </button>
            </div>
          </div>

          {/* Responsivemmenu if below 768px */}
          <div
            ref={menuRef}
            className={` lg:none lg:items-center lg:w-auto w-full p-5 absolute right-0 top-full menu-container ${
              isOpen ? "open" : "closed"
            }`}
          >
            {menulists.map((list) => (
              <li key={list.id} className="uppercase list-none py-2">
                <CustomNavLink href={list.path} className="text-white">
                  {list.link}
                </CustomNavLink>
              </li>
            ))}
          </div>
        </nav>
      </header>
    </>
  );
};
