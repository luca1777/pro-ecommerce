"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const CategoriesBtn = () => {
    const [showCategories, setShowCategories] = useState(false);
    const catRef = useRef<HTMLDivElement>(null);


    const toggleShowCategories = () => {
        setShowCategories(!showCategories);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (catRef.current && !catRef.current.contains(event.target)) {
                setShowCategories(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };

    }, []);

  return (
    <div ref={catRef} className='relative md:hidden w-full'>
        <button onClick={toggleShowCategories} className='w-full'>
            <div className='flex w-full items-center justify-between rounded border border-black/30 px-4 py-2 text-sm'>
                <p>Categories</p>
                <IoIosArrowDown />
            </div>
        </button>
      {showCategories && <div className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md">
      <Link className='mt-2 flex text-sm text-black hover:underline' href="/">Pants</Link>
      <Link className='mt-2 flex text-sm text-black hover:underline' href="/">T-Shirts</Link>
      <Link className='mt-2 flex text-sm text-black hover:underline' href="/">Jackets</Link>
      <Link className='mt-2 flex text-sm text-black hover:underline' href="/">Hoodies</Link>
      <Link className='mt-2 flex text-sm text-black hover:underline' href="/">Shoes</Link>
    </div>}
  </div>
  )
}

export default CategoriesBtn