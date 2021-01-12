import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Consumer } from "../../components/Provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/search";
import { apiUrl } from "../../components/variables";
import Card from "../../components/card2";

function Post({ post } = {}) {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  const goOrder = (func) => {
    if (func) {
      router.push("/sebet");
    }
  };

  if (!post) {
    return null;
  }

  return (
    <div>
      <Head>
        <title>{post.name}</title>
      </Head>
      <Consumer>
        {({ state }) => (
          <div>
            <Navbar state={state} />
            <section className="product_details_area p_100">
              <div className="container">
                <div className="row product_d_price">
                  <div className="col-lg-6">
                    <div className="product_img">
                      <img
                        className="img-fluid"
                        src={
                          post.image
                            ? post.image
                            : "/img/cake-feature/c-feature-9.jpg"
                        }
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product_details_text">
                      <h4>{post.name}</h4>
                      <p>
                        <b>Ingredientər:</b> {post.ingredient}
                      </p>
                      {post.weight ? (
                        <p>
                          <b>Çəki:</b> {post.weight} kq
                        </p>
                      ) : (
                        <p>
                          <b>Ədəd:</b> 1
                        </p>
                      )}
                      {post.discount ? (
                        <p>
                          <b>Qiymət:</b>{" "}
                          <span className="product_discount">{post.price}</span>{" "}
                          {post.discount} azn
                        </p>
                      ) : (
                        <p>
                          <b>Qiymət:</b> {post.price} azn
                        </p>
                      )}
                      <div className="quantity_box">
                        <label htmlFor="quantity">Miqdar: </label>
                        <input type="text" placeholder="1" id="quantity" />
                      </div>
                      <a
                        className="pink_more"
                        onClick={() => {
                          state.addCart(post, "vitrin");
                        }}
                      >
                        səbətə əlavə et
                      </a>
                      <a
                        className="pink_more order_btn"
                        onClick={() => {
                          goOrder(state.addCart(post, "vitrin", true));
                        }}
                      >
                        sifariş ver
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_details_back">
                <i className="fa fa-chevron-left" onClick={back} />
              </div>
            </section>
            <section className="similar_product_area p_100">
              <div className="container">
                <div className="main_title">
                  <h2>Oxşar məhsullar</h2>
                </div>
                <div className="row similar_product_inner">
                  {post.similar1 ? (
                    <Card
                      item={post.similar1}
                      pageType={"vitrin"}
                      addCart={state.addCart}
                    />
                  ) : null}
                  {post.similar2 ? (
                    <Card
                      item={post.similar2}
                      pageType={"vitrin"}
                      addCart={state.addCart}
                    />
                  ) : null}
                  {post.similar3 ? (
                    <Card
                      item={post.similar3}
                      pageType={"vitrin"}
                      addCart={state.addCart}
                    />
                  ) : null}
                  {post.similar4 ? (
                    <Card
                      item={post.similar4}
                      pageType={"vitrin"}
                      addCart={state.addCart}
                    />
                  ) : null}
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

export async function getStaticPaths() {
  let paths = [];

  try {
    const res = await fetch(`${apiUrl}vitrin/`);
    const posts = await res.json();

    paths = posts.map((post) => {
      return { params: { id: post.id.toString() } };
    });
  } catch (error) {
    console.error(error);
  }

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const props = { post: {} };
  try {
    const res = await fetch(`${apiUrl}vitrin/${params.id}/`);
    const post = await res.json();

    props.post = post;
  } catch (error) {
    console.error(error);
  }

  return { props };
}

export default Post;
