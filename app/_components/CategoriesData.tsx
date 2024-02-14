import React from 'react'
import Link from 'next/link';


const CategoriesData = ({ subcategories, categorySlug }) => {

    return (
        <ul className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md">
            {subcategories.map((subcategory) => (<li key={subcategory.id}>
                <Link className="mt-2 flex text-sm text-black hover:underline" href={`/${categorySlug}/${subcategory.slug}`}>
                    {subcategory.name}
                </Link>
            </li>))}
        </ul>
    );
}

export default CategoriesData