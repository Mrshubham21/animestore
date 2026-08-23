import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import {
  getProducts,
  getFeaturedProducts,
} from "../services/productService";

const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [featuredProducts, setFeaturedProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      const productsData = await getProducts();
      const featuredData = await getFeaturedProducts();

      setProducts(productsData.products || []);
      setFeaturedProducts(featuredData.products || []);
    } catch (error) {
      console.error("ProductContext Error:", error);
    } finally {
      setLoading(false);
    }
  };

  const getProductById = (id) => {
    return products.find((product) => product._id === id);
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        featuredProducts,
        loading,
        refreshProducts: fetchProducts,
        getProductById,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProducts = () => {
  return useContext(ProductContext);
};