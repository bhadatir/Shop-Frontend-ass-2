import {useState,useEffect} from "react";

export function useSearchByCat(category: string){

    const [filteredProductsByCat, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
            fetch(`https://dummyjson.com/products/category/${category}`)
            .then((res)=>{
                if(!res.ok)
                {
                    throw new Error("Failed to fetch products");
                }
                return res.json();
            })
            .then((data)=>{
                setCategories(data.products);
                setLoading(false);
            })
            .catch((error)=>{
                setError(error.message);
                setLoading(false);
            });
        }, []);

    return { filteredProductsByCat, loading, error };
}