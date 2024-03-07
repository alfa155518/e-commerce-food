import HomePageSLider from "../../sections/HomePageSLider";
import MainHeader from "../../layout/MainHeader";
import NavBar from "../../layout/NavBar";
import SecondNav from "../../layout/SecondNav";
import PopularProducts from "../../sections/PopularProducts";

function Home() {
  return (
    <>
      {/* ========== LayOut ============= */}
      <MainHeader />
      <NavBar />
      <SecondNav />
      {/* ============ Slider ============ */}
      <HomePageSLider />
      {/* ================================ */}

      <PopularProducts />
    </>
  );
}

export default Home;
