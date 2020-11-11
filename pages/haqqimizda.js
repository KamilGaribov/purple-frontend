import Head from "next/head";
import Link from "next/link";
import GoogleMapReact from "google-map-react";
import { Consumer } from "../components/Provider";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Search from "../components/search";
import {Marker} from "../components/variables"


function About() {
  return (
    <div>
      <Head>
        <title>Purple - haqqımızda</title>
      </Head>
      <Consumer>
        {({ state }) => (
          <div>
            <Navbar state={state} />
            <section className="our_bakery_area p_100">
              <div className="container">
                <div className="our_bakery_text">
                  <h2>Our Bakery Approach </h2>
                  <h6>
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo.
                  </h6>
                  <p>
                    Siz hayal gucunuzu zorlayin bizde sanatsalini yapalim
                    sozunden yola cikarak son yillarda insanlardan buyuk taleb
                    goren bu hizmet sektoruyle yaklasik 2009 yilindan bu yana
                    Bakude faaliyetlerimizi surdurmekteyiz.Tasarimlar sadece
                    kisiye ozeldir .Tamamen ayricalikli tatlar pesinde olmamiz
                    ve tasarim konusundaki gecmise yonelik tecrubelerimiz bizi
                    sanatsal pastalari yaratmaya zorlamistir. Ortaya cikan her
                    pastanin gercek anlamda birer gorsel show olarak
                    musterilemiz tarafindan da kabul gormesi ayri bir mutluluk
                    kaynagidir bizim icin. ilginizi cekebilecek dallarimiz…
                  </p>
                </div>
                <div className="row our_bakery_image">
                  <div className="col-md-4 col-6">
                    <img
                      className="/img-fluid"
                      src="img/our-bakery/bakery-1.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      className="/img-fluid"
                      src="img/our-bakery/bakery-2.jpg"
                      alt=""
                    />
                  </div>
                  <div className="col-md-4 col-6">
                    <img
                      className="/img-fluid"
                      src="img/our-bakery/bakery-3.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </section>
            <section className="our_mission_area p_100">
              <div className="container">
                <div className="row our_mission_inner">
                  <div className="col-lg-3">
                    <div className="single_m_title">
                      <h2>Our Mission</h2>
                    </div>
                  </div>
                  <div className="col-lg-9">
                    <div className="mission_inner_text">
                      <h6>
                        Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudan-tium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo.
                      </h6>
                      <p>
                        Nemo enim ipsam voluptatem quia voluptas sit aspernatur
                        aut odit aut fugit, sed quia consequuntur magni dolores
                        eos qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatu
                      </p>
                      <ul className="nav">
                        <li>
                          <a href="#">Custom cakes</a>
                        </li>
                        <li>
                          <a href="#">Birthday cakes</a>
                        </li>
                        <li>
                          <a href="#">Wedding cakes</a>
                        </li>
                        <li>
                          <a href="#">European delicacies</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className="contact_form_area p_100">
              <div className="container">
                <div className="main_title">
                  <h2>Bizə yaz</h2>
                  <h5>
                    Do you have anything in your mind to let us know? Kindly
                    don't delay to connect to us by means of our contact form.
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
                          placeholder="Adınız"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          id="email"
                          name="email"
                          placeholder="Email"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <input
                          type="text"
                          className="form-control"
                          id="subject"
                          name="subject"
                          placeholder="Mövzu"
                        />
                      </div>
                      <div className="form-group col-md-12">
                        <textarea
                          className="form-control"
                          name="message"
                          id="message"
                          rows="1"
                          placeholder="Məktub"
                        ></textarea>
                      </div>
                      <div className="form-group col-md-12">
                        <button
                          type="submit"
                          value="submit"
                          className="btn order_s_btn form-control"
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
                            purplecakeboutique@hotmail.com
                          </a>
                        </h5>
                      </div>
                      <div className="contact_d_item">
                        <h3>İş saatları :</h3>
                        <p>9:00 – 22:00</p>
                        <p>Bazar ertəsi – Bazar</p>
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
                <Marker
                  lat={40.397456057446895}
                  lng={49.86928900875125}
                />
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
