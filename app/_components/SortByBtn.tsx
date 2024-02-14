"use client"
import Link from 'next/link'
import React, { useEffect, useRef, useState } from 'react'
import { IoIosArrowDown } from 'react-icons/io'

const SortByBtn = ({ categorySlug, subCategorySlug }) => {
    const [showSort, setShowSort] = useState(false);
    const sortRef = useRef<HTMLDivElement>(null);

    const toggleShowSort = () => {
        setShowSort(!showSort);
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (sortRef.current && !sortRef.current.contains(event.target)) {
                setShowSort(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

  return (
    <div ref={sortRef} className='relative w-full md:max-w-[225px]'>
        <button onClick={toggleShowSort} className='w-full'>
            <div className='flex items-center justify-between rounded border border-black/30 px-4 py-2 text-sm'>
                <p>Sort by</p>
                <IoIosArrowDown />
            </div>
        </button>
        {showSort && (
        <div className='absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md'>
          <Link className='mt-2 flex text-sm text-black hover:underline' href={`/${categorySlug}/${subCategorySlug}/new-in`}>New in</Link>
          <Link className='mt-2 flex text-sm text-black hover:underline' href={`/${categorySlug}/${subCategorySlug}/price-asc`}>Price: Low to High</Link>
          <Link className='mt-2 flex text-sm text-black hover:underline' href={`/${categorySlug}/${subCategorySlug}/price-desc`}>Price: High to Low</Link>
        </div>
      )}
  </div>
  )
}

export default SortByBtn