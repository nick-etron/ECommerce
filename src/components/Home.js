import ProductCard from "./ProductCard";
import CarouselBanner from "./CarouselBanner";
import { useEffect, useState } from "react";
const Home = () => {
  const [product, setProduct] = useState([]);
  const [filtredProduct, setFilteredProduct] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    getProductList();
  }, []);

  async function getProductList() {
    const url = await fetch("https://fakestoreapi.com/products");
    const data = await url.json();
    setProduct(data);
    setFilteredProduct(data);
  }

  function handleSearch(e) {
    const term = e.target.value;
    setSearchText(term);
    const filtered = product.filter((item) =>
      item.title.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredProduct(filtered);
  }

  return (
    <div className="page-margin">
      <CarouselBanner />
      <div className="p-3">
        <div className="search-container">
          <input
            className="search-bar"
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={handleSearch}
          />
        </div>
        <div className="grid md:grid-cols-4 ">
          {filtredProduct.length == 0 ? (
            <div className="bg-red-500 text-white m-2 rounded-md">
              <p className="font-bold p-3 ">Sorry! No Product Found</p>
            </div>
          ) : (
            filtredProduct.map((item, index) => {
              return <ProductCard {...item} key={index} index={index} />;
            })
          )}
        </div>
      </div>
    </div>
  );
};
export default Home;
