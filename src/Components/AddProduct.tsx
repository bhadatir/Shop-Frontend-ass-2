import React from 'react';
import { useForm } from 'react-hook-form';

interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
}

export default function AddProduct() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<Omit<Product, 'id'>>();

    const onSubmit = (data: Omit<Product, 'id'>) => {
        const products = JSON.parse(localStorage.getItem('products') || '[]');
        const newProduct: Product = {
            id: products.length > 0 ? Math.max(...products.map((p: Product) => p.id)) + 1 : 1,
            ...data
        }; 
        products.push(newProduct);
        localStorage.setItem('products', JSON.stringify(products));
        alert('Product saved successfully!');
        reset();
        window.location.reload();
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="p-6 max-w-md">
    
            <input
                {...register('name', { required: 'Name is required' })}
                placeholder="Product Name"
                className="w-full p-2 mb-4 border"
            />
            {errors.name && <p className="text-red-500 mb-4">{errors.name.message}</p>}

            <input
                {...register('price', { required: 'Price is required', valueAsNumber: true })}
                type="number"
                placeholder="Price"
                className="w-full p-2 mb-4 border"
            />
            {errors.price && <p className="text-red-500 mb-4">{errors.price.message}</p>}

            <input
                {...register('category', { required: 'Category is required' })}
                placeholder="Category"
                className="w-full p-2 mb-4 border"
            />
            {errors.category && <p className="text-red-500 mb-4">{errors.category.message}</p>}

            <input
                {...register('stock', { required: "Stock is required", valueAsNumber: true })}
                type="number"
                placeholder="Stock Quantity"
                className="w-full p-2 mb-4 border"
            />
            {errors.stock && <p className="text-red-500 mb-4">{errors.stock.message}</p>}

            <button type="submit" className="text-black">
                Add Product
            </button>
        </form>
    );
}
