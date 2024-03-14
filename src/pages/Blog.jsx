import MainHeader from "../layout/MainHeader";
import NavBar from "../layout/NavBar";
import SecondNav from "../layout/SecondNav";
import Footer from "../layout/Footer";
import man_img from "../images/blog-1.jpg";
import blog_img_1 from "../images/blog-2.jpg";
import blog_img_2 from "../images/blog-3.jpg";
import "../sass/pages/blog.css";

function Blog() {
  return (
    <>
      <MainHeader />
      <NavBar />
      <SecondNav />
      <section className="wrapper-blog">
        <div className="section-img">Our Blog</div>
        <div className="main-img">
          <h2>Read Our Blog</h2>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Blog;
