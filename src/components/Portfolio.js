import React from "react";
import "../css/Portfolio.css";
import amazonCloneImage from "../images/portfolio/amazon-clone.jpg";
import netlixCloneImage from "../images/portfolio/netflix-clone.jpg";
import moviesAppImage from "../images/portfolio/movies-app.jpg";
import tunesAppImage from "../images/portfolio/react-tunes.jpg";

const portfolioItems = [
  {
    title: "Amazon Clone",
    link: "https://clone-5631a.web.app/",
    image: amazonCloneImage,
  },
  {
    title: "Netflix Clone",
    link: "https://tender-nobel-e7c41d.netlify.app/",
    image: netlixCloneImage,
  },
  {
    title: "React Movies App",
    link: "https://eloquent-curran-396f3e.netlify.app/",
    image: moviesAppImage,
  },
  {
    title: "React Tunes App",
    link: "https://mystifying-fermat-17715f.netlify.app",
    image: tunesAppImage,
  },
];

const PortfolioItem = ({ title, link, image }) => {
  return (
    <div
      className="portfolio__item"
      style={{
        background: ` #161415 url(${image}) no-repeat top center`,
        backgroundSize: "cover",
      }}
    >
      <div className="product__itemDescription">
        <a href={link} target="_blank" rel="noopener noreferrer">
          {title}
        </a>
      </div>
    </div>
  );
};

function Portfolio() {
  return (
    <div className="portfolio" id="works">
      <div className="portfolio__heading">
        <h3>CHECK OUT SOME OF MY WORKS.</h3>
      </div>

      <div className="portfolio__container">
        {portfolioItems.map((item) => (
          <PortfolioItem
            title={item.title}
            link={item.link}
            image={item.image}
            key={item.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Portfolio;
