import Head from "next/head";
import Link from "next/link";
import { Consumer } from "../../components/Provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/search";
import Checkbox from "../../components/checkbox";

function Order() {
  return (
    <div>
      <Head>
        <title>Purple - sifariş</title>
      </Head>
      <Consumer>
        {({ state }) => (
          <div>
            <Navbar state={state} />
            <section className="billing_details_area p_100">
              <div className="container">
                <div className="row">
                  <div className="col-lg-7">
                    <div className="main_title">
                      <h2>Ödəniş formu</h2>
                    </div>
                    <div className="billing_form_area">
                      <form
                        className="billing_form row"
                        id="contactForm"
                        noValidate="novalidate"
                        onSubmit={state.order}
                      >
                        <div className="form-group col-md-6">
                          <label htmlFor="name">Ad *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Ad"
                            spellCheck="false"
                            maxLength="63"
                            onBlur={(e) => state.inputHandler(e)}
                          />
                          <div className="input-error">bu xana doldurulmalıdır</div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="surname">Soyad *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="surname"
                            name="surname"
                            placeholder="Soyad"
                            spellCheck="false"
                            maxLength="63"
                            onBlur={state.inputHandler}
                          />
                          <div className="input-error">bu xana doldurulmalıdır</div>
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="city">Şəhər *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="city"
                            name="city"
                            placeholder="Şəhər"
                            value="Bakı"
                            spellCheck="false"
                            tabIndex="-1"
                            readOnly
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="address">Ünvan *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address"
                            name="address"
                            placeholder="Nərimanov rayonu, Həsənoğlu 4"
                            spellCheck="false"
                            maxLength="127"
                            onBlur={state.inputHandler}
                          />
                          <div className="input-error">bu xana doldurulmalıdır</div>
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="address2">Ünvan qeyd</label>
                          <input
                            type="text"
                            className="form-control"
                            id="address2"
                            name="address2"
                            placeholder="Heydər Əliyev mərkəzinin arxası"
                            spellCheck="false"
                            maxLength="255"
                            onBlur={state.inputHandler}
                          />
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="email">Email *</label>
                          <input
                            type="email"
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email"
                            spellCheck="false"
                            onBlur={state.inputHandler}
                          />
                          <div className="input-error">bu xana doldurulmalıdır</div>
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="phone">Mobil nömrə *</label>
                          <input
                            type="number"
                            className="form-control"
                            id="number"
                            name="number"
                            placeholder="Mobil nömrə"
                            spellCheck="false"
                            onBlur={state.inputHandler}
                          />
                          <div className="input-error">bu xana doldurulmalıdır</div>
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="note">Qeyd</label>
                          <textarea
                            className="form-control"
                            name="note"
                            id="note"
                            rows="1"
                            placeholder="Qeyd"
                            spellCheck="false"
                            maxLength="255"
                            onBlur={state.inputHandler}
                          ></textarea>
                        </div>
                        <div className="payment-control form-group col-md-12">
                          <ul>
                            <li>Hazır məhsul Bakı şəhəri daxilində 1 saat ərzində ünvana çatdırılır</li>
                            <li>Çatdırılma pulsuzdur</li>
                            <li>Məhsul geri qaytarılmır</li>
                            <li>Ödəniş kart vasitəsi ilə qəbul olunur</li>
                            <li>Minimum sifariş məbləği 20 AZN-dir</li>
                            <li>Qaynar xətt: +994 51 746 8384</li>
                          </ul>
                          <div className="payment-cart">
                            {/* <span>Kredit kartı</span> */}
                            <img src="/img/mastercard3.png"/>
                          </div>
                          <div>
                            <Checkbox
                              name="payment-control"
                              label="Oxudum, qəbul edirəm."
                              input={state.orderControl}
                              checkboxHandler={state.setOrderControl}
                              error={state.orderError}
                            />
                          </div>
                        </div>
                        {state.orderControl ? (
                          <a
                            className="pink_more form-submit"
                            onClick={state.postOrderForm}
                          >
                            Sifariş ver
                          </a>
                        ) : (
                          <a
                            className="pink_more pink_more_none form-submit"
                            onClick={state.setOrderError}
                          >
                            Sifariş ver
                          </a>
                        )}
                      </form>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="order_box_price">
                      <div className="main_title">
                        <h2>Sifarişiniz</h2>
                      </div>
                      <div className="payment_list">
                        <div className="price_single_cost">
                          {state.basketItems ? (
                            state.basketItems.map((item, i) => {
                              return (
                                <h5 key={i}>
                                  {item[2]} <span>{item[5]}</span>
                                </h5>
                              );
                            })
                          ) : (
                            <h5
                              onClick={state.getBasketItems}
                              className="show-basket"
                            >
                              səbəti göstər
                            </h5>
                          )}
                          <h3>
                            Cəm <span>{state.basketTotal}</span>
                          </h3>
                        </div>
                      </div>
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

export default Order;
