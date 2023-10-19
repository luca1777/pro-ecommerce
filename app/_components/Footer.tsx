import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Logo from "@/app/assets/logo.png"

const Footer = () => {
  return (
    <footer>
      <div className="mx-auto w-full max-w-7xl flex px-6 py-12 flex-col gap-6 md:gap-12 md:px-4 md:flex-row text-gray-400">
        <div>
          <Link
            href="/"
            className="flex w-full items-center md:w-auto md:justify-center"
          >
            <Image className="h-10 w-14" src={Logo} alt="logo" />
          </Link>
        </div>
        <nav>
          <ul className='text-lg font-normal'>
            <li className='p-2 hover:text-black hover:underline text-gray-500'>
              <Link href="/">Home</Link>
            </li>
            <li className='p-2 hover:text-black hover:underline'>
              <Link href="/">About</Link>
            </li>
            <li className='p-2 hover:text-black hover:underline'>
              <Link href="/">Terms & Conditions</Link>
            </li>
            <li className='p-2 hover:text-black hover:underline'>
              <Link href="/">Shipping & Return Policy</Link>
            </li>
            <li className='p-2 hover:text-black hover:underline'>
              <Link href="/">Privacy Policy</Link>
            </li>
            <li className='p-2 hover:text-black hover:underline'>
              <Link href="/">FAQ</Link>
            </li>
          </ul>
        </nav>
        <div></div>
      </div>
      <div className='border-t border-gray-300 w-full text-gray-400 py-6 text-sm'>
        <div className='flex flex-col md:flex-row w-full max-w-7xl mx-auto items-center justify-center gap-1'>
            <p>© 2023 CODE VILLAGE, All right reserved.</p>
            <hr className='h-4 w-[1px] bg-gray-300 mx-2 hidden md:inline-block'></hr>
            <p>Designed in Bucharest</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer