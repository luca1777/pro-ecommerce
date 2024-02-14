import React from 'react'
import { getProductsByPriceAsc, getSubcategories } from '@/app/utils';
import Link from 'next/link';
import Image from 'next/image';
import SortByBtn from '@/app/_components/SortByBtn';
import CategoriesBtn from '@/app/_components/CategoriesBtn';

const ProductPriceAsc = async ({ params }) => {
    const categorySlug = params?.subCategorySlug;
    const data = await getProductsByPriceAsc(categorySlug);
    const categorySlugMan = 'man';
    const subcategories = await getSubcategories(categorySlugMan);

  return (
    <div className="mx-auto flex flex-col gap-8 px-4 pb-4 text-black md:flex-row max-w-screen-2xl border-b border-gray-300">
      <div className='w-full md:max-w-[125px] hidden md:block'>
        <p className='font-semibold pb-2'>Categories</p>
        <ul className="flex flex-col">
          {subcategories.map((subcategory) => (<li key={subcategory.id} className='pb-2 hover:underline text-sm'><Link href={`/${categorySlugMan}/${subcategory.slug}`}>{subcategory.name}</Link></li>))}
        </ul>
      </div>
      <div>
        <div className='flex w-full items-center justify-between gap-4'>
        <CategoriesBtn />
        <SortByBtn  subCategorySlug={categorySlug} categorySlug={categorySlugMan}/>
        </div>
        <div className="pt-4 w-full">
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {data?.map((product) => (
              <li
                key={product.id}
                className="relative flex flex-col items-center justify-center pb-10"
              >
                <Link href={`/product/${product.id}`} className='relative h-full w-full'>
                  <div className='group flex h-full w-full items-center justify-center overflow-hidden'>
                    <Image
                      src={product.images[0].src}
                      alt={product.name}
                      width={200} 
                      height={500} 
                      layout="responsive"
                      objectFit="fill"
                      className='relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105'
                    />
                  </div>
                  <div className='flex flex-col items-center justify-center'>
                    <p>{product.name} - M</p>
                    <p className='font-semibold'>{product.price} lei</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ProductPriceAsc;