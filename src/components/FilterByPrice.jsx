import { useContext } from "react";
import { PopularProductsContext } from "../context/ContextProducts";

function FilterByPrice() {
  const { showProductsByPrice } = useContext(PopularProductsContext);

  return (
    <div className="filter-by-price">
      <h3>Filter By Prices</h3>
      <div className="ranges">
        <form>
          <input
            type="range"
            // min={10}
            max={1000}
            step={10}
            onChange={(e) => showProductsByPrice(e.target.value)}
          />
          <div className="prices">
            <span>from:$10</span>
            <span>to:$1000</span>
          </div>

          <div className="colors">
            <h5>Color</h5>

            <div className="box">
              <input type="checkbox" id="one" />
              <label htmlFor="one">Red(56)</label>
            </div>

            <div className="box">
              <input type="checkbox" id="tow" />
              <label htmlFor="tow">Green(70)</label>
            </div>

            <div className="box">
              <input type="checkbox" id="three" />
              <label htmlFor="three">Blue(90)</label>
            </div>
          </div>
          <div className="collections">
            <h5>Items Collections</h5>
            <div className="items">
              <input type="checkbox" id="one" />
              <label htmlFor="one">New(560)</label>
            </div>

            <div className="items">
              <input type="checkbox" id="tow" />
              <label htmlFor="tow">Used(1000)</label>
            </div>

            <div className="items">
              <input type="checkbox" id="three" />
              <label htmlFor="three">Returned(90)</label>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default FilterByPrice;
