import Head from "next/head";
import Link from "next/link";
import GoogleMapReact from "google-map-react";
import { Consumer } from "../components/Provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";
import Card from "../components/card2";
import { Marker, apiUrl } from "../components/variables";

export default function Home() {
  return (
    <Consumer>
      {({ state }) => (
        <div>
          <Navbar state={state} />
          <section className="main_slider_area">
            <div className="cover-text">
              Siz xəyal qurun, biz onu <br/>
              gözəl şəkildə gerçəkləşdirək.
            </div>
          </section>
          <section className="welcome_bakery_area cake_feature_main p_100">
            <div className="container">
              <div className="main_title">
                <h2>Bizim şirniyyatlarımız</h2>
                <h5>gündəlik bişirilən tort və şirniyyatlarımız</h5>
              </div>
              <div className="cake_feature_row row">
                {/* {posts.map((item, i) => {
                  return (
                    <Card
                      key={i}
                      item={item}
                      pageType={types[i]}
                      addCart={state.addCart}
                      // avatar={`../../static/images/stadion/${i}.jpg`}
                    />
                  );
                })} */}
              </div>
            </div>
          </section>
          <section className="service_we_offer_area p_100">
            <div className="container">
              <div className="single_w_title">
                <h2>Xidmətlərimiz</h2>
              </div>
              <div className="row we_offer_inner">
                <div className="col-lg-4">
                  <div className="s_we_item">
                    <div className="media">
                      <div className="d-flex">
                        <i className="flaticon-food-6"></i>
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h4>Hər cür sifariş</h4>
                        </a>
                        <p>
                          Lorem Ipsum is simply my text of the printing and
                          Ipsum is simply text of the Ipsum is simply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="s_we_item">
                    <div className="media">
                      <div className="d-flex">
                        <i className="flaticon-food-5"></i>
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h4>Kurabiyələr</h4>
                        </a>
                        <p>
                          Lorem Ipsum is simply my text of the printing and
                          Ipsum is simply text of the Ipsum is simply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="s_we_item">
                    <div className="media">
                      <div className="d-flex">
                        <i className="flaticon-food-3"></i>
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h4>Tortlar</h4>
                        </a>
                        <p>
                          Lorem Ipsum is simply my text of the printing and
                          Ipsum is simply text of the Ipsum is simply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="s_we_item">
                    <div className="media">
                      <div className="d-flex">
                        <i className="flaticon-book"></i>
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h4>Xonçalar</h4>
                        </a>
                        <p>
                          Lorem Ipsum is simply my text of the printing and
                          Ipsum is simply text of the Ipsum is simply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="s_we_item">
                    <div className="media">
                      <div className="d-flex">
                        <i className="flaticon-food-4"></i>
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h4>Gözəl kafemiz</h4>
                        </a>
                        <p>
                          Lorem Ipsum is simply my text of the printing and
                          Ipsum is simply text of the Ipsum is simply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="s_we_item">
                    <div className="media">
                      <div className="d-flex">
                        <i className="flaticon-transport"></i>
                      </div>
                      <div className="media-body">
                        <a href="#">
                          <h4>Ünvana çatdırılma</h4>
                        </a>
                        <p>
                          Lorem Ipsum is simply my text of the printing and
                          Ipsum is simply text of the Ipsum is simply.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="map_area">
            <GoogleMapReact
              bootstrapURLKeys={{
                key: "AIzaSyDOevhnBcgnunLKBjvbup6Ra6P-Obox-lY",
              }}
              defaultCenter={{
                lat: 40.397456057446895,
                lng: 49.86928900875125,
              }}
              defaultZoom={16}
            >
              <Marker lat={40.397456057446895} lng={49.86928900875125} />
            </GoogleMapReact>
          </section>
          <Footer />
          <Search />
        </div>
      )}
    </Consumer>
  );
}

// export async function getStaticProps() {
//   const res = await fetch(`${apiUrl}vitrin/`);
//   const posts = await res.json();
//   const res2 = await fetch(`${apiUrl}homepageproductcount/`);
//   const posts2 = await res2.json();
//   const types = []
//   for(let i=0; i<posts2[0].vitrin; i++){
//     types.push("vitrin")
//   }
//   for(let i=0; i<posts2[0].marsipan; i++){
//     types.push("marsipan")
//   }
//   for(let i=0; i<posts2[0].flower; i++){
//     types.push("flower")
//   }
//   for(let i=0; i<posts2[0].xonca; i++){
//     types.push("xonca")
//   }
//   return {
//     props: {
//       posts: posts.slice(0,8),
//       types
//     },
//     revalidate: 5,
//   };
// }
