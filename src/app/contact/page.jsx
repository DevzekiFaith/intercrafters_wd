import React from "react";
import Image from "next/image";
import Link from "next/link";

const ContactPage = () => {
  return (
    <div className="ml-[2rem]">
      <h1>
        This is the <mark className="rounded-xl px-2">Contact Page</mark>
      </h1>
      <div>
        <h1>The body of Card will be here</h1>
        <div>
          <div className="border w-[16rem] rounded-2xl shadow-xl p-[.5rem]">
            <Image
              className="rounded-2xl shadow-xl"
              src="/BUSINESS BRAND.PNG"
              alt="New_face"
              width={300}
              height={300}
            />
          </div>
          <div className="border w-[16rem] mt-[1rem] p-[12px] rounded-2xl drop-shadow-xl ">
            <h1 className="font-Poppins font-[600]">
              This is the Card for Photos
            </h1>
            <p className="font-Montserrat text-[10px] text-slate-400">
              This is the right outfit for work 📢{" "}
            </p>
          </div>
        </div>
        <div>
          <form className="flex flex-col">
            <label className="font-Montserrat mt-[1.5rem]">Login</label>
            <div>
              <input
                className="text-black bg-pink-500 text-center font-Poppins font-[600] w-[22rem] rounded-2xl cursor-pointer h-[2rem]"
                type="button"
                value="Sign-Up!"
              />
            </div>
            <div className="mt-[.5rem]">
              <input
                className="text-black bg-pink-500 text-center font-Poppins font-[600] w-[22rem] rounded-2xl cursor-pointer h-[2rem]"
                type="button"
                value="Sign-In!"
              />
            </div>
            <Link href="/">
              <button className="h-[3rem] w-[22rem] bg-slate-600 rounded-2xl mt-3 font-Poppins text-[1.8rem] text-white">
                Click ME!
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
