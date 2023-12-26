"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'
import CategoriesData from './CategoriesData'

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
      {showCategories && <CategoriesData />}
  </div>
  )
}

export default CategoriesBtn