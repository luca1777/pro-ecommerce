"use client"
import Link from 'next/link';
import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa';
import { BsCart2 } from "react-icons/bs";
import { AiOutlineMenu,AiOutlineClose } from "react-icons/ai"
import  Logo  from "../assets/logo.png"
import Image from 'next/image';

const Navbar = () => {
    const [menuOpen, setMenuOpen] = useState<boolean>(false);

    const handleNav = ():void => {
        setMenuOpen(!menuOpen);
    }


  return (
    <nav className="relative flex items-center justify-between p-4 md:px-6">
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
            <Image className="h-10 w-14" src={Logo} alt="logo" />
          </Link>
          <ul className="hidden md:flex gap-6 md:items-center text-sm">
            <li>
              <Link
                href="/"
                className="text-neutral-500 hover:text-black hover:underline"
              >
                All
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-neutral-500 hover:text-black hover:underline"
              >
                Shirts
              </Link>
            </li>
            <li>
              <Link
                href="/"
                className="text-neutral-500 hover:text-black hover:underline"
              >
                Stickers
              </Link>
            </li>
          </ul>
        </div>
        <div className="hidden justify-center md:flex md:w-1/3">
          <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-black placeholder:text-gray-500"
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center text-gray-500 text-sm">
              <FaSearch />
            </div>
          </form>
        </div>
        <div className="flex justify-end md:w-1/3">
          <button className="active:bg-gray-400 rounded-md">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-md border border-gray-300 text-gray-700">
              <BsCart2 className="h-5 w-5 transition-all ease-in-out hover:scale-125" />
            </div>
          </button>
        </div>
      </div>
      {/* mobile menu */}
      <div
        className={
          menuOpen
            ? "fixed left-0 top-0 w-full md:hidden h-screen p-4 bg-white transform translate-x-0 transition-transform ease-in-out duration-400"
            : "fixed left-0 top-0 w-full md:hidden h-screen p-4 bg-white transform -translate-x-full transition-transform ease-in-out duration-300"
        }
      >
        <button
          onClick={handleNav}
          className="flex mb-4 h-11 w-11 items-center justify-center rounded-md border border-gray-300"
        >
          <AiOutlineClose className="text-lg" />
        </button>
        <div className="mb-4 w-full">
          <form className="w-max-[550px] relative w-full lg:w-80 xl:w-full">
            <input
              type="text"
              placeholder="Search for products..."
              className="w-full rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-black placeholder:text-gray-500"
            />
            <div className="absolute right-0 top-0 mr-3 flex h-full items-center text-gray-500 text-sm">
              <FaSearch />
            </div>
          </form>
        </div>
        <ul className="flex w-full flex-col">
          <li className='py-2'>
            <Link
              href="/"
              className="text-xl text-black hover:text-neutral-500 hover:underline"
            >
              All
            </Link>
          </li>
          <li className='py-2'>
            <Link
              href="/"
              className="text-xl text-black hover:text-neutral-500 hover:underline"
            >
              Shirts
            </Link>
          </li>
          <li className='py-2'>
            <Link
              href="/"
              className="text-xl text-black hover:text-neutral-500 hover:underline"
            >
              Stickers
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar