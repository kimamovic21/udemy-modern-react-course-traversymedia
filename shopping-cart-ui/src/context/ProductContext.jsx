import {
  createContext,
  useContext,
  useEffect,
  useState
} from 'react';
import dbData from '../data/db.json';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        if (import.meta.env.VITE_NODE_ENV === 'production') {
          setProducts(dbData.products || []);
        } else {
          const res = await fetch('/api/products');
          if (!res.ok) throw new Error('Failed to fetch products');
          const data = await res.json();
          setProducts(data);
        };
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      };
    };

    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{
      products,
      loading,
      error
    }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};