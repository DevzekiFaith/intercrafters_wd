// import React from "react";
import Link from "next/link";
import Style from "./Header.module.scss";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { AiOutlineProduct } from "react-icons/ai";
import { GrCatalog } from "react-icons/gr";

import React from "react";

const NavigationPath = () => {
  return (
    <div>
      <div className=" ">
        <div className={Style.header}>
          <Link href="/">
            {/* <h1 className="text-[6px]">About</h1> */}
            <FaHome />
          </Link>
          <Link href="/contact">
            {/* <h1 className={Style.next}>Contact</h1> */}
            <IoMdContact />
          </Link>
          <Link href="/product">
            {/* <h1 className="text-[6px]">Product</h1> */}
            <AiOutlineProduct />
          </Link>
          <Link href="/catalogue">
            {/* <h1 className="text-[6px]">Catalogue</h1> */}
            <GrCatalog />
          </Link>
        </div>
        {/* <p className="Nav_work">This is the navigation</p> */}
      </div>
    </div>
  );
};

export default NavigationPath;
