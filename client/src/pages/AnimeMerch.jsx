import { useState, useMemo, useEffect } from "react";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/product/ProductCard";

const PRODUCTS_PER_PAGE = 8;

const AnimeMerch = () => {
  const { products, loading } = useProducts();

  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("Newest");
  const [currentPage, setCurrentPage] = useState(1);

  // Categories
  const categories = useMemo(() => {
    return ["All", ...new Set(products.map((p) => p.category))];
  }, [products]);

  // Filter + Sort
  const filteredProducts = useMemo(() => {
    let filtered = products.filter((product) => {
      const keyword = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(keyword) ||
        product.anime.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword);

      const matchesCategory =
        category === "All" || product.category === category;

      return matchesSearch && matchesCategory;
    });

    filtered = [...filtered];

    switch (sortBy) {
      case "Price Low":
        filtered.sort((a, b) => a.price - b.price);
        break;

      case "Price High":
        filtered.sort((a, b) => b.price - a.price);
        break;

      case "Rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;

      case "Newest":
      default:
        filtered.sort(
          (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
        );
        break;
    }

    return filtered;
  }, [products, search, category, sortBy]);

  // Reset page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, category, sortBy]);

  // Pagination
  const totalPages = Math.ceil(
    filteredProducts.length / PRODUCTS_PER_PAGE
  );

  const startIndex = (currentPage - 1) * PRODUCTS_PER_PAGE;

  const endIndex = startIndex + PRODUCTS_PER_PAGE;

  const currentProducts = filteredProducts.slice(
    startIndex,
    endIndex
  );

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="section-p1">
      <div className="merch-header">
        <h1>Anime Merchandise</h1>

        <p>
          Discover premium anime clothing, figures, accessories and
          collectibles from your favorite anime series.
        </p>
      </div>

      <div className="filter-bar">
        <input
          type="text"
          placeholder="🔍 Search by product, anime, category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-box"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Newest">Newest</option>
          <option value="Price Low">Price: Low to High</option>
          <option value="Price High">Price: High to Low</option>
          <option value="Rating">Highest Rated</option>
        </select>
      </div>
      <button
        className="clear-btn"
        onClick={() => {
          setSearch("");
          setCategory("All");
          setSortBy("Newest");
        }}
      >
        Clear Filters
      </button>
      <div className="results-bar">
        <p>
          Showing{" "}
          <strong>{startIndex + 1}</strong>
          –
          <strong>
            {Math.min(endIndex, filteredProducts.length)}
          </strong>{" "}
          of{" "}
          <strong>{filteredProducts.length}</strong>{" "}
          Products
        </p>
      </div>

      <div className="products-grid">
        {currentProducts.length > 0 ? (
          currentProducts.map((product) => (
            <ProductCard
              key={product._id}
              product={product}
            />
          ))
        ) : (
          <h2>No products found.</h2>
        )}
      </div>

      {totalPages > 1 && (
        <div className="pagination">

          <button
            onClick={() =>
              setCurrentPage((prev) => prev - 1)
            }
            disabled={currentPage === 1}
          >
            Previous
          </button>

          {Array.from(
            { length: totalPages },
            (_, index) => (
              <button
                key={index}
                className={
                  currentPage === index + 1
                    ? "active-page"
                    : ""
                }
                onClick={() =>
                  setCurrentPage(index + 1)
                }
              >
                {index + 1}
              </button>
            )
          )}

          <button
            onClick={() =>
              setCurrentPage((prev) => prev + 1)
            }
            disabled={currentPage === totalPages}
          >
            Next
          </button>

        </div>
      )}
    </div>
  );
};

export default AnimeMerch;