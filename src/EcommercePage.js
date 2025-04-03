import { useEffect, useState } from "react";

const EcommercePage = () => {
  const [products, setProducts] = useState([]); // Store all products
  const [page, setPage] = useState(1); // Current page
  const productsPerPage = 5; // Products per page
  const totalPages = Math.ceil(products.length / productsPerPage); // Total pages

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const startIndex = (page - 1) * productsPerPage; // 1-1*5=0 //2-1* 5 =5

  const currentProducts = products.slice(
    startIndex,
    startIndex + productsPerPage
  ); //0 +5=5,5+5=10

  const handleSkipPage = (e) => {
    let targetPage = Number(e.target.value);
    if (targetPage >= 1 && targetPage <= totalPages) {
      setPage(targetPage);
    }
  };

  return (
    <div>
      <h2>Products</h2>
      <ul>
        {currentProducts.map((product) => (
          <li key={product.id}>
            <img src={product.image} alt={product.title} width="50" />
            {product.title} - ${product.price}
          </li>
        ))}
      </ul>

      {/* Pagination Controls */}
      <button onClick={() => setPage(page - 1)} disabled={page === 1}>
        Previous
      </button>

      <span>
        {" "}
        Page {page} of {totalPages}{" "}
      </span>

      <button onClick={() => setPage(page + 1)} disabled={page === totalPages}>
        Next
      </button>

      {/* Skip to Page Input */}
      <input
        type="number"
        placeholder="Go to page"
        onChange={handleSkipPage}
        min="1"
        max={totalPages}
      />
    </div>
  );
};

export default EcommercePage;
