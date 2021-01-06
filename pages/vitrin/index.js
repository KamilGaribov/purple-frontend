import Head from "next/head";
import Link from "next/link";
import { Consumer } from "../../components/Provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/search";
import Card from "../../components/card";
import { apiUrl, perPage } from "../../components/variables";

function CakeList({ posts }) {
  let pages = [];
  const postsCount = posts.length;
  for (let i = 1; i <= Math.ceil(postsCount / perPage); i++) {
    pages.push(i);
  }
  let pagesCount = pages.length;

  return (
    <div>
      <Head>
        <title>Purple Vitrin</title>
      </Head>
      <Consumer>
        {({ state }) => (
          <div>
            <Navbar state={state} />
            <section className="product_area p_100">
              <div className="container">
                <div className="row product_inner_row">
                  <div className="col-lg-9">
                    <div className="row product_item_inner">
                      {state.sortedData == null
                        ? posts
                            .slice(
                              (state.currentPage - 1) * perPage,
                              state.currentPage * state.perPage
                            )
                            .map((item, i) => {
                              return (
                                <Card
                                  key={item.id}
                                  item={item}
                                  pageType={"vitrin"}
                                  addCart={state.addCart}
                                />
                              );
                            })
                        : state.sortedData
                            .slice(
                              (state.currentPage - 1) * perPage,
                              state.currentPage * state.perPage
                            )
                            .map((item, i) => {
                              return (
                                <Card
                                  key={item.id}
                                  item={item}
                                  pageType={"vitrin"}
                                  addCart={state.addCart}
                                />
                              );
                            })}
                    </div>
                    <div className="product_pagination">
                      <div className="left_btn"></div>
                      <div className="middle_list">
                        <nav aria-label="Page navigation example">
                          <ul className="pagination">
                            {state.sortedData == null
                              ? pages.map((i) => {
                                  return (
                                    <li
                                      key={i}
                                      className={
                                        i == state.currentPage
                                          ? "page-item active"
                                          : "page-item"
                                      }
                                      onClick={() => {
                                        state.changePage(i, pagesCount);
                                      }}
                                    >
                                      <a className="page-link" href="#">
                                        {i}
                                      </a>
                                    </li>
                                  );
                                })
                              : state.pagesSorted.map((i) => {
                                  return (
                                    <li
                                      key={i}
                                      className={
                                        i == state.currentPage
                                          ? "page-item active"
                                          : "page-item"
                                      }
                                      onClick={() => {
                                        state.changePage(i, pagesCount);
                                      }}
                                    >
                                      <a className="page-link" href="#">
                                        {i}
                                      </a>
                                    </li>
                                  );
                                })}
                          </ul>
                        </nav>
                      </div>
                      <div className="right_btn">
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3">
                    <div className="product_left_sidebar">
                      <aside className="left_sidebar search_widget">
                        <div className="input-group" id="search-cake">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="axtar.."
                          />
                          <div className="input-group-append">
                            <button className="btn" type="button">
                              <i className="fa fa-search"></i>
                            </button>
                          </div>
                        </div>
                      </aside>
                      <aside className="left_sidebar p_catgories_widget">
                        <div className="p_w_title">
                          <h3>Məhsul çeşidləri</h3>
                        </div>
                        <ul className="list_style" id="cake-types">
                          <li>
                            <a
                              className={
                                state.currentType == "hamısı" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Hamısı
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "tort" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Tort
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "mini tort"
                                  ? "active"
                                  : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Mini tort
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "cupcake" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Cupcake
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "ekler" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Ekler
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "tartalet"
                                  ? "active"
                                  : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Tartalet
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "kurabiyə"
                                  ? "active"
                                  : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Kurabiyə
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "paxlava" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Paxlava
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "börək" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Börək
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "qarışıq" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Qarışıq
                            </a>
                          </li>
                          <li>
                            <a
                              className={
                                state.currentType == "digər" ? "active" : null
                              }
                              onClick={(e) => {
                                state.sortData(posts, e);
                              }}
                            >
                              Digər
                            </a>
                          </li>
                        </ul>
                      </aside>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <Footer />
            <Search />
          </div>
        )}
      </Consumer>
    </div>
  );
}

export async function getStaticProps() {
  const props = { posts: [] };

  try {
    const res = await fetch(`${apiUrl}vitrin/`);
    const posts = await res.json();

    props.posts = posts;
  } catch (error) {
    console.log("error", error);
  }

  return {
    props,
    // revalidate: 1,
  };
}

export default CakeList;
