import React from 'react';

function ShopSidebar() {
    return (
        <aside className="bg-gray-900 w-60 min-h-screen p-4 fixed left-0 top-0">
            <div className="text-white font-bold mb-8">Vendor Portal</div>
            <div className="space-y-4">
            <div className="text-gray-400">Home</div>
            <div className="text-gray-400">Products</div>
            </div>
        </aside>
    );
}

export default ShopSidebar;