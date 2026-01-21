import { useState } from 'react'
import ShopNavbar from './ShopNavbar'
import ShopSidebar from './ShopSidebar'
import ProductDetail from './ProductDetail'

function Home() {

    const [searchTerm, setSearchTerm] = useState("");
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [hasSearched, setHasSearched] = useState(false);

    const products = JSON.parse(localStorage.getItem('products') || '[]');  

    function handleSearch() {
        setHasSearched(true);
        if(searchTerm===""){setFilteredProducts(products); return;}
        const filtered = products.filter((product: any) => 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.category.toLowerCase().includes(searchTerm.toLowerCase())
        );
        setFilteredProducts(filtered);
    }

    return (
        <div>
            {window.innerWidth <= 768 ? <ShopSidebar /> : <ShopNavbar />}

            <div className="mt-20 flex p-1 w-full ">
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
            </div>

            <h3 className="mt-5 font-bold">Products:</h3>

            { filteredProducts.length < 0 && hasSearched ? (
                <p>No products found</p>
            ) : (                
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
                    {filteredProducts.map((product: any) => (
                        <div className="product-item">
                            <ProductDetail
                                id={product.id}
                                name={product.name}
                                price={product.price}
                                category={product.category}
                                stock={product.stock}
                            />
                        </div>
                    ))}
                </div>
            )}
            
            { !hasSearched && <div>
                {(() => {
                    return products.length > 0 ? (
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-4 p-4">
                            
                            {products.map((product: any) => (
                                <div className="product-item">
                                    <ProductDetail
                                        id={product.id}
                                        name={product.name}
                                        price={product.price}
                                        category={product.category}
                                        stock={product.stock}
                                    />
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p>No products found</p>
                    );
                })()}
            </div>}

        </div>
    )
}

export default Home