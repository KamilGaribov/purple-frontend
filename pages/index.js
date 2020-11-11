import Head from "next/head";
import Link from "next/link";
import GoogleMapReact from "google-map-react";
import { Consumer } from "../components/Provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";
import { Marker } from "../components/variables";

export default function Home() {
  console.log("home")
  return (
    <Consumer>
      {({ state }) => (
        <div>
          <Navbar state={state} />
          <section className="main_slider_area">
            <div className="cover-text">
              <span id="currentpx"></span> <br />
              <span id="test-logo">Siz</span> hayal gücünüzü zorlayın ...
              <br />
              biz de sanatsalını yapalım
            </div>
          </section>
          <section className="welcome_bakery_area cake_feature_main p_100">
            <div className="container">
              <div className="main_title">
                <h2>Bizim şirniyyatlarımız</h2>
                <h5>gündəlik bişirilən tort və şirniyyatlarımız</h5>
              </div>
              <div className="cake_feature_row row">
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-1.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-2.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-3.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-4.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-1.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-2.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-3.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-4 col-6">
                  <div className="cake_feature_item">
                    <div className="cake_img">
                      <img src="img/cake-feature/c-feature-4.jpg" alt="" />
                    </div>
                    <div className="cake_text">
                      <h4>29</h4>
                      <h3>Şirniyyat</h3>
                      <a className="pest_btn">Add to cart</a>
                    </div>
                  </div>
                </div>
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
