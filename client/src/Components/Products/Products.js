import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import productsLocal, { updateQuantity } from "../../Data/products";
import WishList from "../Home/WishList/WishList";

const Products = () => {
  const [searchItem, setSearchItem] = useState("");
  const [products, setProducts] = useState(productsLocal);
  const [filteredProducts, setFilteredProducts] = useState(products);
  const [filterProducts, setFilterProducts] = useState([]);
  const [isWishlistActive, setIsWishlistActive] = useState(false);
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh((prevRefresh) => !prevRefresh);
  };

  const isActive = (product) => {
    return product.fav;
  };
  localStorage.setItem("products", JSON.stringify(products));
  // localStorage.setItem("products", JSON.stringify(products));
  // const local = localStorage.getItem("products")
  // let proucts = JSON.parse(local);
  // setProducts(proucts)



  const updateProducts = (id, newData) => {
    const index = products.findIndex((item) => item._id === id);
    if (index !== -1) {
      products[index] = { ...products[index], ...newData };
      setProducts(products);
      localStorage.setItem("products", JSON.stringify(products));
      return true;
    }
    return false;
  };

  useEffect(() => {}, [products]);

  const handleToggleWishlist = (id, product) => {
    product.fav = !product.fav;
    const updated = updateProducts(id, product);
    if (updated) {
      setFilteredProducts([...products]);
    } else {
      console.log("Product not found");
    }
  };
  const handleAddToCart = (id, product) => {
    product.cart = true;
    const updated = updateProducts(id, product);
    if (updated) {
      setFilteredProducts([...products]);
    } else {
      console.log("Product not found");
    }
  };

  const handleInputChange = (e) => {
    let searchTerm = e.target.value;
    setSearchItem(searchTerm);

    let filteredItems = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredProducts(filteredItems);
  };


  return (
    <div className="bg-white">
      <div className="max-w-2xl mx-auto pb-10 px-4 sm:px-6 lg:max-w-7xl lg:px-8 pt-10 sm:pt-10">
        <div className="flex justify-between align-center">
          <h2 className="text-2xl font-display font-semibold tracking-wide text-teal-700">
            Our Products
          </h2>

          <div className="col-12 align-middle justify-content-center flex">
            <button
              type="button"
              className="btn btn-light mr-6 text-teal-600 text-lg"
              data-toggle="collapse"
              data-target="#filters"
            >
              Filters <i class="fa fa-filter"></i>
            </button>
            <input
              type="text"
              className="col-6 border border-1 rounded p-1 sm:p-2 text-teal-800 border-teal-300 placeholder-gray-600 focus:border-teal-500"
              placeholder="Search medicine..."
              id="search-filter"
              value={searchItem}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {filteredProducts.map((product) => (
            <div key={product._id} className="group shadow-4xl">
              <Link to={`/productDetails/${product._id}`}>
                <div className="w-104px h-104px flex justify-center">
                  <img
                    src={product.image}
                    alt={product.imageAlt}
                    className="w-full h-full object-center object-cover lg:w-full lg:h-full"
                  />
                </div>

                {/* name and price */}
                <div className="mt-4 flex justify-between px-2">
                  <div>
                    <h3 className="text-md text-gray-900 font-display tracking-wide">
                      <a href={product.href}>
                        <span aria-hidden="true" className="inset-0" />
                        {product.name}
                      </a>
                    </h3>
                  </div>
                  <p className="text-md font-medium text-teal-600 flex">
                    {product.price}£
                  </p>
                </div>

                <div>
                  <p className="text-sm mt-1 px-2 text-gray-900 font-sans tracking-wide">
                    {product.brand}
                  </p>
                </div>
              </Link>
              {/*  wishlist, quick view, add to cart buttons */}
              <div className="flex justify-between my-4 px-2 items-center">
                <div>
                  <button
                    className="hover:bg-teal-400 text-gray-900 hover:text-teal-50 p-2 rounded-full transition duration-150 ease-in-out"
                    title="Add to Wishlist"
                    onClick={() => handleToggleWishlist(product._id, product)}
                  >
                    <svg
                      className="w-5 h-5  transition duration-150 ease-in-out"
                      // fill="none"
                      fill={product.fav ? "teal" : "none"}
                      stroke={product.fav ? "none" : "teal"}
                      // stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      ></path>
                    </svg>
                  </button>
                  <Link to={`/productDetails/${product._id}`}>
                    <button
                      className="hover:bg-teal-400 text-gray-900 hover:text-teal-50 p-2 rounded-full transition duration-150 ease-in-out"
                      title="Quick View"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </button>
                  </Link>
                </div>

                <button
                  className="flex py-2 px-3 text-sm rounded shadow-lg bg-teal-500 focus:outline-none active:bg-teal-500 text-white transition duration-150 ease-in-out hover:bg-teal-700"
                  title="Add to Wishlist"
                  onClick={() => handleAddToCart(product._id, product)}
                >
                  Add to Cart
                </button>
              </div>
              {/* </Link> */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
