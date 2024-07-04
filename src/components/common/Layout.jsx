import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main style={{ minHeight: "50vh" }}>{children}</main>
      <Footer/>
    </>
  );
};
