import "../sass/sections/categories.css";
import imgOne from "../images/category-1.gif";
import imgTow from "../images/category-2.gif";
import imgThree from "../images/category-3.gif";
import imgFour from "../images/category-4.gif";
import imgFive from "../images/category-5.gif";
import FilterByPrice from "../components/FilterByPrice";

// import NewProductsCategory from "../components/NewProductsCategory";
function Categories() {
  return (
    <section className="categories">
      <h3>Categories</h3>
      <div className="container-name">
        <ul className="categories-name">
          <li>
            <img src={imgOne} alt="category-img" />
            <span className="name">Foods</span>
            <span className="number">5</span>
          </li>
          <li>
            <img src={imgTow} alt="category-img" />
            <span className="name">Fruits</span>
            <span className="number">5</span>
          </li>
          <li>
            <img src={imgThree} alt="category-img" />
            <span className="name">Coffee</span>
            <span className="number">5</span>
          </li>
          <li>
            <img src={imgFour} alt="category-img" />
            <span className="name">Meals</span>
            <span className="number">5</span>
          </li>
          <li>
            <img src={imgFive} alt="category-img" />
            <span className="name">Beans</span>
            <span className="number">5</span>
          </li>
        </ul>
      </div>
      <FilterByPrice />
      {/* <NewProductsCategory /> */}
    </section>
  );
}

export default Categories;
