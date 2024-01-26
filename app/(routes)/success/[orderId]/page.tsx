import Image from "next/image";
import Link from "next/link";
import React from "react";
import Logo from "@/app/assets/logo.png";
import { PiCheckCircleThin } from "react-icons/pi";

const Success = ({ params }) => {
  const orderId = params.orderId;
  

  return (
    <div className="border-b border-gray-300">
      <div className="max-w-screen-xl mx-auto bg-white border-l border-gray-300">
        <div className="flex flex-col lg:flex-row">
          <div className="p-5 lg:w-3/5">
            <header className="w-full h-[90px] border-b border-gray-300 flex items-center justify-center bg-white">
              <Link href="/">
                <Image className="h-12 w-16" src={Logo} alt="logo" />
              </Link>
            </header>
            <div>
              <PiCheckCircleThin size="80px" color="#1773B0" />
            </div>
          </div>
          <div className="hidden lg:block lg:w-2/5">
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Success;