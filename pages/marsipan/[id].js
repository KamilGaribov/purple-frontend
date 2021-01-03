import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { Consumer } from "../../components/Provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/search";
import {apiUrl, } from "../../components/variables";

function Post({ post }) {
  const router = useRouter()
  const back = () => {
    router.back()
  }
  const goOrder = (func) => {
    if(func){
      router.push("/sebet")
    }
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
                        src={post.image ? post.image : "/img/product/product-details-1.jpg"}
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="product_details_text">
                      <h4>{post.name}</h4>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequ untur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est,
                      </p>
                      <h5>
                        Qiymət: <span>{post.price}</span>{" "}
                        <img src="/img/azn.png" className="card-azn" />
                      </h5>
                      <div className="quantity_box">
                        <label htmlFor="quantity">Miqdar: </label>
                        <input type="text" placeholder="1" id="quantity" />
                      </div>
                      <a
                        className="pink_more"
                        onClick={() => {
                          state.addCart(post, "marsipan");
                        }}
                      >
                        səbətə əlavə et
                      </a>
                      <Link href="/sebet">
                        <a className="pink_more order_btn" onClick={() => {
                          goOrder(state.addCart(post, "marsipan", true))
                        }}>sifariş ver</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="product_details_back"><i className="fa fa-chevron-left" onClick={back}/></div>
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
                      pageType={"marsipan"}
                      addCart={state.addCart}
                    />
                  ) : null}
                  {post.similar2 ? (
                    <Card
                      item={post.similar2}
                      pageType={"marsipan"}
                      addCart={state.addCart}
                    />
                  ) : null}
                  {post.similar3 ? (
                    <Card
                      item={post.similar3}
                      pageType={"marsipan"}
                      addCart={state.addCart}
                    />
                  ) : null}
                  {post.similar4 ? (
                    <Card
                      item={post.similar4}
                      pageType={"marsipan"}
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

const marsipanApi = "http://web:8000/marsipan/";
// const marsipanApi = "http://192.168.31.51:8000/marsipan/"

export async function getStaticPaths() {
  const res = await fetch(`${apiUrl}marsipan/`)
  const posts = await res.json();
  const paths = posts.map((post) => {
    return { params: { id: post.id.toString() } };
  });
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const res = await fetch(`${apiUrl}marsipan/${params.id}/`)
  const post = await res.json();
  return { props: { post } };
}

export default Post;
