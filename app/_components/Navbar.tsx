"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaRegUser } from "react-icons/fa6";
import Logo from "../assets/logo.png";
import Image from "next/image";
import Login from "./LoginModal";
import { getTotalCartQuantity } from "../utils/cartUtils";
import Cart from "./CartModal";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const [isModalLoginOpen, setModalLoginOpen] = useState(false);
  const [isModalCartOpen, setModalCartOpen] = useState(false);
  const [cartQuantity, setCartQuantity] = useState(0);

  const pathname = usePathname();
  const isCheckoutPage = pathname === "/checkout";
  const isSuccessPage =
    pathname.startsWith("/success/") && pathname.split("/").length > 2;

  useEffect(() => {
    const updateCartQuantity = () => {
      const totalQuantity = getTotalCartQuantity();
      setCartQuantity(totalQuantity);
    };
    window.addEventListener("cartUpdated", updateCartQuantity);
    updateCartQuantity();
    return () => {
      window.removeEventListener("cartUpdated", updateCartQuantity);
    };
  }, []);

  const openModal = () => {
    setModalCartOpen(true);
  };

  const closeModal = () => {
    setModalCartOpen(false);
  };

  const handleNav = (): void => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      {!isCheckoutPage && !isSuccessPage && (
        <nav className="relative flex items-center justify-between p-4 shadow-md mb-10">
          <div onClick={handleNav} className="block flex-none md:hidden">
            <button className="flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-black transition-colors active:bg-gray-400">
              <AiOutlineMenu className="transition-all ease-in-out hover:scale-125" />
            </button>
          </div>
          <div className="flex w-full items-center">
            <div className="flex w-full md:w-1/3 md:mr-6">
              <Link
                href="/"
                className="flex md:mr-6 w-full items-center md:w-auto justify-center text-2xl font-extrabold"
              >
                <Image
                  width={180} // Aceste valori ar trebui să corespundă cu dimensiunile container-ului
                  height={80}
                  src={Logo}
                  alt="logo"
                />
              </Link>
              <ul className="hidden md:flex gap-6 md:items-center text-sm">
                <li>
                  <Link
                    href="/woman"
                    className="text-neutral-500 hover:text-black hover:underline"
                  >
                    Woman
                  </Link>
                </li>
                <li>
                  <Link
                    href="/man"
                    className="text-neutral-500 hover:text-black hover:underline"
                  >
                    Man
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                    className="text-neutral-500 hover:text-black hover:underline"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden justify-center md:flex md:w-1/3">
              <SearchBar />
            </div>
            <div className="flex justify-end md:w-1/3 gap-2">
              <button
                className="hidden md:flex active:bg-gray-400 rounded-md"
                onClick={() => setModalLoginOpen(true)}
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-gray-700">
                  <FaRegUser className="h-5 w-5 transition-all ease-in-out hover:scale-125" />
                </div>
              </button>
              <button
                onClick={openModal}
                className="active:bg-gray-400 rounded-md"
              >
                <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-gray-700">
                  <BsCart2 className="h-5 w-5 transition-all ease-in-out hover:scale-125" />
                  {cartQuantity > 0 && (
                    <span className="absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-blue-600 text-[11px] font-medium text-white">
                      {cartQuantity}
                    </span>
                  )}
                </div>
              </button>
            </div>
          </div>
          {/* mobile menu */}
          <div
            className={
              menuOpen
                ? "fixed left-0 top-0 w-full md:hidden h-screen p-4 bg-white transform translate-x-0 transition-transform ease-in-out duration-400 z-10"
                : "fixed left-0 top-0 w-full md:hidden h-screen p-4 bg-white transform -translate-x-full transition-transform ease-in-out duration-300 z-10"
            }
          >
            <button
              onClick={handleNav}
              className="flex mb-4 h-11 w-11 items-center justify-center rounded-md border border-gray-300"
            >
              <AiOutlineClose className="text-lg" />
            </button>
            <div className="mb-4 w-full">
              <SearchBar setMenuOpen={setMenuOpen} />
            </div>
            <ul className="flex w-full flex-col">
              <li className="py-2">
                <Link
                  href="/woman"
                  className="text-xl text-black hover:text-neutral-500 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Woman
                </Link>
              </li>
              <li className="py-2">
                <Link
                  href="/man"
                  className="text-xl text-black hover:text-neutral-500 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Man
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-xl text-black hover:text-neutral-500 hover:underline"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
            <button
              className="active:bg-gray-400"
              onClick={() => setModalLoginOpen(true)}
            >
              <div className="relative flex py-2 items-center justify-center text-gray-700 gap-2">
                <FaRegUser className="h-4 w-4 transition-all ease-in-out hover:scale-125" />
                <p className="text-xl text-black hover:text-neutral-500 hover:underline">
                  LOGIN / REGISTER
                </p>
              </div>
            </button>
          </div>
          {isModalLoginOpen && (
            <Login closeModal={() => setModalLoginOpen(false)} />
          )}
          {isModalCartOpen && <Cart closeModal={closeModal} />}
        </nav>
      )}
    </>
  );
};
export default Navbar;
