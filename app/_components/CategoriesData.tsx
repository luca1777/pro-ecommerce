import React from 'react'
import Link from 'next/link';


const CategoriesData = ({ categoriesData }) => {

    return (
        <ul className="absolute z-40 w-full rounded-b-md bg-white p-4 shadow-md">
            {categoriesData.map((category) => (<li key={category.id}>
                <Link className="mt-2 flex text-sm text-black hover:underline" href={`/category/${category.slug}`}>
                    {category.name}
                </Link>
            </li>))}
        </ul>
    );
}

export default CategoriesData