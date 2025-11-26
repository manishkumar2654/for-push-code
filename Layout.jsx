import { Outlet } from "react-router-dom";
// import Header from "./components/Header";
// import Footer from "./components/Footer";

const Layout = () => {
  return (
    <>
     
      <div id="container">
        <h1>header</h1>
        <Outlet />
      </div>
    <h1>footer</h1>
    </>
  );
};

export default Layout;
