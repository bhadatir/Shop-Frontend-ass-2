import { useState, useMemo } from 'react'
import ShopNavbar from './ShopNavbar'
import ProductDetail from './ProductDetail'
import { useSearch } from '../hooks/useSearch';
import { useProduct } from '../hooks/useProduct';
import { useCategories } from '../hooks/useCategories';
import { useSearchByCat } from '../hooks/useSearchByCat';


export default function Home() {

    const [searchTerm, setSearchTerm] = useState<any>('');
    const [hasSearched, setHasSearched] = useState(false);
    const [sortBy, setSortBy] = useState<string>('');

    const { products } = useProduct();
    const { filteredProducts } = useSearch(searchTerm);
    const { categories } = useCategories();
    const { filteredProductsByCat } = useSearchByCat(sortBy);
    console.log("Filtered Products after Search:", filteredProducts);
    console.log("Filtered Products by Category:", filteredProductsByCat);

    function handleSearch() {
        setHasSearched(true);
        console.log("Search Term:", searchTerm);
        console.log("Filtered Products after Search:", filteredProducts);
    }
   
     const displayedProducts = useMemo(() => {
        const result = hasSearched ? filteredProducts : (sortBy ? filteredProductsByCat : products);
        return Array.isArray(result) ? result : [];
    }, [hasSearched, filteredProducts, sortBy, filteredProductsByCat, products]);

    return (
        <div>
            <ShopNavbar />
            <div className="mt-25 ml-10 flex p-1 w-full ">
                <input
                    type="text"
                    placeholder="Search products..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full p-2 mr-4 border"
                />
                <button onClick={handleSearch} className="text-black">
                    Search
                </button>
                <div className="ml-4 mr-20">
                    <select className="p-2 border" onChange={(e) => {
                        setSortBy(e.target.value);  
                    }}>
                        <option value="">All</option>
                        {categories.map((category: string) => (
                            <option key={category} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            <h3 className="mt-5 ml-8 font-bold">Products:</h3>

            {displayedProducts.length > 0 ? (                                 
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
                    {displayedProducts.map((product: any) => (
                        <div className="product-item">
                            <ProductDetail
                                id={product.id}
                                name={product.title}
                                price={product.price}
                                category={product.category}
                                stock={product.stock}
                                img={product.thumbnail}
                            />
                        </div>
                    ))}
                </div>
            ) : (<p>No products found</p>)}
                    
        </div>
    )
}