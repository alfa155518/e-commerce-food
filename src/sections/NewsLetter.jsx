import "../sass/sections/news-letter.css";

import img from "../images/newsletter.png";

function NewsLetter() {
  return (
    <section className="news-letter">
      <div className="container-img">
        <img src={img} alt="img" />
      </div>
      <div className="letter">
        <h2 className="message">
          Stay home & get your daily needs from our shop
        </h2>
        <strong>
          Start You`r Daily Shopping with <em>Ahmed Hassob</em>
        </strong>
        <form>
          <input type="email" placeholder="Your email address" />
          <button>Subscribe</button>
        </form>
      </div>
    </section>
  );
}

export default NewsLetter;
