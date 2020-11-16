import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Consumer } from "../../components/Provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/search";
import { apiUrl } from "../../components/variables";
import Card from "../../components/card2";

function Post({ post }) {
  const router = useRouter();
  const back = () => {
    router.back();
  };
  const src = "/" + post.image;
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
                          post.image ? src : "/img/cake-feature/c-feature-9.jpg"
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
                      <p>
                        <b>Çəki:</b> {post.weight} kq
                      </p>
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
                      <Link href="/sebet">
                        <a className="pink_more order_btn">sifariş ver</a>
                      </Link>
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

// const res = await fetch(`http://127.0.0.1:8000/api/cake/${params.id}`);
// const res = await fetch(`http://34.69.209.226:8000/api/cake/${params.id}/`);
// const res = await fetch(`http://192.168.31.51:8000/api/cake/${params.id}/`);
// const res = await fetch(`http://web:8000/api/cake/${params.id}/`);
// const res = await fetch(`https://5f8ede96693e730016d7a9be.mockapi.io/cake/all/${params.id}`);
// const vitrinApi = "http://192.168.31.51:8000/cake/"
const vitrinApi = "http://web:8000/cake/";

export async function getStaticPaths() {
  const res = await fetch(`${apiUrl}vitrin/`);
  const posts = await res.json();
  const paths = posts.map((post) => {
    return { params: { id: post.id.toString() } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${apiUrl}vitrin/${params.id}/`);
  const post = await res.json();

  return { props: { post } };
}

export default Post;

// const put = () => {
//   let form = {
//     method: "PATCH",
//     body: JSON.stringify({
//       city: "Masalli",
//     }),
//     headers: {
//       "Content-type": "application/json; charset=UTF-8",
//     },
//   };
//   console.log("___form", form);
//   let url = `http://192.168.31.51:8000/api/stadion/${post.id}/`;
//   fetch(url, form)
//     .then((res) => res.json())
//     .then((response) => console.log("Success:", response))
//     .catch((error) => console.error("Error:", error));
// };
