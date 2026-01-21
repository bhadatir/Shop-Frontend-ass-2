import { Button } from '@material-tailwind/react';
import React from 'react';
// whta is type
interface ProductDetailProps {
    id: number;
    name: string;
    price: number;
    category: string;
    stock: number;
}

const deleteProduct = (id: number) => {
    const products = JSON.parse(localStorage.getItem('products') || '[]');
    const updatedProducts = products.filter((product: ProductDetailProps) => product.id !== id);
    localStorage.setItem('products', JSON.stringify(updatedProducts));
    window.location.reload();
};

// arrow fun
const ProductDetail: React.FC<ProductDetailProps> = ({ id, name, price, category, stock }) => {
    return (
        <div className="product-detail p-4 border m-4">
            <h2>{name}</h2>
            <p>{category}</p>
            <p>Price: ${price.toFixed(2)}</p>
            <div>
                {stock > 0 && <p>{`Stock: ${stock} available`}</p>}
                {stock === 0 && <div className="text-red-200 font-bold bg-red-600 m-1">Out of Stock</div>}
                {stock > 0 && stock < 5 && <div className="text-orange-200 font-bold bg-orange-600 m-1">Limited Quantity</div>}
                {price > 500 && <div className="text-yellow-200 font-bold bg-yellow-600 m-1">Premium</div>}
            </div>
            <button onClick={() => deleteProduct(id)} className="mt-0">
                Delete Product
            </button>
            {/* <button onClick={() => editProduct(id)} className="mt-0">
                Edit Product
            </button> */}
        </div>
    );
};

export default ProductDetail;