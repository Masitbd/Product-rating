import React from "react";
import Logo from "../../images/logo.jpg";
import CustomLink from "../CustomLink/CustomLink";
import "./Header.css";

const Header = () => {
  return (
    <div>
      <nav className="flex items-center place-content-between bg-orange-400 px-16">
        <div className="invisible md:visible lg:visible">
          <CustomLink to="/">
            <img className="h-16 w-16 rounded-full " src={Logo} alt="" />
          </CustomLink>
        </div>

        <div className="flex flex-col sm:flex-row px-4">
          <CustomLink className="mr-6 font-medium text-white" to="/">
            HOME
          </CustomLink>
          <CustomLink className="mr-6 font-medium text-white" to="/reviews">
            REVIEWS
          </CustomLink>
          <CustomLink className="mr-6 font-medium text-white" to="/dashboard">
            DASHBOARD
          </CustomLink>
          <CustomLink className="mr-6 font-medium text-white" to="/blogs">
            BLOGS
          </CustomLink>
          <CustomLink className="mr-6 font-medium text-white" to="/about">
            ABOUT
          </CustomLink>
        </div>
      </nav>
    </div>
  );
};

export default Header;
