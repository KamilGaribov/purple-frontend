import Head from "next/head";
import Link from "next/link";
import { Consumer } from "../components/Provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";
import { apiUrl } from "../components/variables";

export default function Cafe({ posts }) {
  return (
    <Consumer>
      {({ state }) => (
        <div>
          <Navbar state={state} />
          <section className="cafe">
            <div className="cafe-carousel">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  {posts.map((item, i) => {
                    return (
                      <li
                        data-target="#carouselExampleIndicators"
                        data-slide-to={i}
                        className={i == 0 ? "active" : null}
                      ></li>
                    );
                  })}
                </ol>
                <div className="carousel-inner">
                  {posts.map((item, i) => {
                    return (
                      <div
                        key={i}
                        className={
                          i == 0 ? "carousel-item active" : "carousel-item"
                        }
                      >
                        <img
                          className="d-block w-100"
                          src={item.image}
                          alt="Purple şirniyyat butiki"
                        />
                      </div>
                    );
                  })}
                </div>
                <a
                  className="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Previous</span>
                </a>
                <a
                  className="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="sr-only">Next</span>
                </a>
              </div>
            </div>
          </section>
          <Footer />
          <Search />
        </div>
      )}
    </Consumer>
  );
}


export async function getStaticProps() {
  const res = await fetch(`${apiUrl}cafe/`);
  const posts = await res.json();
  return {
    props: {
      posts,
    },
    revalidate: 5,
  };
}
