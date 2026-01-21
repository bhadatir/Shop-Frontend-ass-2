import {useState,useEffect} from "react";

export function useSearch(products: string){

    const [filteredProducts, setFilteredProducts] = useState(products);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch('https://dummyjson.com/products/search?q='+ products)
            .then((res)=>{
                if(!res.ok)
                {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then((data)=>{
                setFilteredProducts(data.products);
                setLoading(false);
            })
            .catch((error)=>{
                setError(error.message);
                setLoading(false);
            });
        }, []);

    return { filteredProducts, loading, error };
}