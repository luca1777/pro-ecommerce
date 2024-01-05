"use client";
import React, { useEffect, useState } from 'react'
import { getCategories } from '../utils';
import Link from 'next/link';

interface Category {
    id: number;
    name: string;
    slug: string;
}

const CategoriesData = () => {
        const [categoriesData, setCategoriesData] = useState<Category[]>([]);

        useEffect(() => {
                const loadCategories = async () => {
                        const data = await getCategories();
                        setCategoriesData(data);
                };

                loadCategories();
        }, []);

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