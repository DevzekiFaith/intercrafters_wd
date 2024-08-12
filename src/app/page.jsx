import Image from "next/image";
import { Poppins } from "next/font/google";
import { Montserrat } from "next/font/google";
import Link from "next/link";
import NavigationPath from "@/component/Header/NavigationPath";
import React from "react";

const HomePage = () => {
  return (
    <div className="bg-slate-200">
      <NavigationPath />
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <div className="bg-yellow-500 p-[2rem]">
          <h1 className="text-red-500 font-Montserrat text-[2.5rem] font-[900]">
            This the Main first cause of the Internship
          </h1>
          <p className="uppercase font-poppins font-[400] text-slate-500">
            Navigation
          </p>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
