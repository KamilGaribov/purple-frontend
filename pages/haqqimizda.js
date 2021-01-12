import Head from "next/head";
import Link from "next/link";
import GoogleMapReact from "google-map-react";
import { Consumer } from "../components/Provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";
import { Marker } from "../components/variables";

function About() {
  return (
    <div>
      <Head>
        <title>Purple Haqqımızda</title>
      </Head>
      <Consumer>
        {({ state }) => (
          <div>
            <Navbar state={state} />
            <section className="our_bakery_area p_100">
              <div className="container">
                <div className="our_bakery_text">
                  <h2>Purple Cake Boutique</h2>
                  <h6>
                    "Siz xəyal qurun, biz onu gözəl şəkildə gerçəkləşdirək"
                    fikrinə əsaslanaraq son illərdə insanlarda böyük tələbat
                    doğuran bu xidmət sahəsi üzrə 2009-cu ildən etibarən Bakı
                    şəhərində fəaliyyət göstəririk. Məhsullar hər kəsə özəl
                    hazırlanır. Tamamən fərdi zövqlərə cavab vermək niyyətimiz
                    və böyük təcrübəmiz bizə sənət əsəri olan tortları
                    hazırlamağa imkan verir. Mütəxəssislərlə, peşəkar ustalarla
                    ve heykəltaraşlarla çalışırıq. Təqdim etdiyimiz hər tortun
                    müştərilərimiz tərəfindən də əsl incəsənət nümunəsi kimi
                    qəbul olunması bizim üçün xüsusilə xoşdur. Xüsusi, evsayağı,
                    fərqli çeşidlərlə şirniyyat və qurabiyə satışı da həyata keçirilir.
                  </h6>
                </div>
              </div>
            </section>
            <section className="contact_form_area p_100">
              <div className="container">
                <div className="main_title">
                  <h2>Bizə yaz</h2>
                  <h5>
                    Şikayət və təkliflərinizi bizə bildirin..
                  </h5>
                </div>
                <div className="row">
                  <div className="col-lg-7">
                    <form
                      className="row contact_us_form"
                      method="post"
                      id="contactForm"
                      noValidate="novalidate"
                    >
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="name"
                          name="name"
                          placeholder="Adınız *"
                          onBlur={(e) => state.contactHandler(e)}
                        />
                        <div className="input-error">
                          bu xana doldurulmalıdır
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email *"
                          onBlur={(e) => state.contactHandler(e)}
                        />
                        <div className="input-error">
                          bu xana doldurulmalıdır
                        </div>
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="number"
                          className="form-control"
                          id="phone"
                          name="phone"
                          placeholder="Mobil nömrə"
                          onBlur={(e) => state.contactHandler(e)}
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Mövzu *"
                          onBlur={(e) => state.contactHandler(e)}
                        />
                        <div className="input-error">
                          bu xana doldurulmalıdır
                        </div>
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="1"
                          placeholder="Məktub *"
                          onBlur={(e) => state.contactHandler(e)}
                        ></textarea>
                        <div className="input-error">
                          bu xana doldurulmalıdır
                        </div>
                      </div>
                      <div className="form-group col-md-12">
                        {state.contactSuccess ? state.contactSuccess : null}
                      </div>
                      <div className="form-group col-md-12">
                        <button
                          type="button"
                          // value="submit"
                          className="btn order_s_btn form-control"
                          onClick={state.postContact}
                        >
                          göndər
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="col-lg-4 offset-md-1">
                    <div className="contact_details">
                      <div className="contact_d_item">
                        <h3>Ünvan :</h3>
                        <p>
                          Bakı şəhəri, Nərimanov rayonu, Həsənoğlu 4. <br />{" "}
                          Heydər Əliyev mərkəzinin arxası.
                        </p>
                      </div>
                      <div className="contact_d_item">
                        <h5>
                          Telefon :{" "}
                          <a href="tel:01372466790">
                            +994 51 746 8384, +994 77 746 8384
                          </a>
                        </h5>
                        <h5>
                          Email :{" "}
                          <a href="mailto:rockybd1995@gmail.com">
                            contact@purplecakeboutique.az
                          </a>
                        </h5>
                      </div>
                      <div className="contact_d_item">
                        <h3>İş saatları :</h3>
                        <p>9:00 – 22:00</p>
                        <p>Hər gün</p>
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
    </div>
  );
}

export default About;
