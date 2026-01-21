import React from 'react';
import { useState } from 'react';
import AddProduct from './AddProduct';

function ShopNavbar() {

    const [showForm, setShowForm] = useState(false);
    return (
        <>
        <nav className="bg-blue-800 p-4 fixed top-0 left-0 w-full">
            <div className="flex justify-between ">
            <div className="text-white font-bold text-[25px]">Vendor Portal</div>
            <div className="space-x-4">
                <button onClick={() => setShowForm(true)} className="text-black">Add Product</button>
            </div>
            </div>
        </nav>
        {showForm && (
                <div className="fixed inset-0 bg-transparent flex items-center justify-center">
                    <div className="bg-gray-200 p-8 w-96">
                        <button onClick={() => setShowForm(false)} className="float-right text-gray-600 mb-5">X</button>
                        <AddProduct />
                    </div>
                </div>
            )}
        </>
    );
};

export default ShopNavbar;
