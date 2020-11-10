import Head from "next/head";
import Link from "next/link";
import { Consumer } from "../../components/Provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/search";

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
                        // action="https://designarc.biz/demos/cake/theme/cake-html/contact_process.php"
                        // method="post"
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
                            // onBlur={state.inputHandler}
                            readOnly
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="adress">Ünvan *</label>
                          <input
                            type="text"
                            className="form-control"
                            id="adress"
                            name="adress"
                            placeholder="Nərimanov rayonu, Həsənoğlu 4"
                            spellCheck="false"
                            maxLength="127"
                            onBlur={state.inputHandler}
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="adress2">Ünvan qeyd</label>
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
                        </div>
                        <div className="form-group col-md-6">
                          <label htmlFor="phone">Mobil nömrə *</label>
                          <input
                            type="number"
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Mobil nömrə"
                            spellCheck="false"
                            onBlur={state.inputHandler}
                          />
                        </div>
                        <div className="form-group col-md-12">
                          <label htmlFor="phone">Qeyd</label>
                          <textarea
                            className="form-control"
                            name="message"
                            id="message"
                            rows="1"
                            placeholder="Qeyd"
                            spellCheck="false"
                            maxLength="255"
                            onBlur={state.inputHandler}
                          ></textarea>
                        </div>
                        <a className="pink_more form-submit" onClick={state.postOrderForm}>Növbəti</a>
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
                                <h5>
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
                        {/* <div id="accordion" className="accordion_area">
                          <div className="card">
                            <div className="card-header" id="headingOne">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link"
                                  data-toggle="collapse"
                                  data-target="#collapseOne"
                                  aria-expanded="true"
                                  aria-controls="collapseOne"
                                >
                                  Direct Bank Transfer
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseOne"
                              className="collapse show"
                              aria-labelledby="headingOne"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order won’t be shipped until the
                                funds have cleared in our account.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingTwo">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseTwo"
                                  aria-expanded="false"
                                  aria-controls="collapseTwo"
                                >
                                  Check Payment
                                </button>
                              </h5>
                            </div>
                            <div
                              id="collapseTwo"
                              className="collapse"
                              aria-labelledby="headingTwo"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order won’t be shipped until the
                                funds have cleared in our account.
                              </div>
                            </div>
                          </div>
                          <div className="card">
                            <div className="card-header" id="headingThree">
                              <h5 className="mb-0">
                                <button
                                  className="btn btn-link collapsed"
                                  data-toggle="collapse"
                                  data-target="#collapseThree"
                                  aria-expanded="false"
                                  aria-controls="collapseThree"
                                >
                                  Paypal
                                  <img src="/img/checkout-card.png" alt="" />
                                </button>
                                <a href="#">What is PayPal?</a>
                              </h5>
                            </div>
                            <div
                              id="collapseThree"
                              className="collapse"
                              aria-labelledby="headingThree"
                              data-parent="#accordion"
                            >
                              <div className="card-body">
                                Make your payment directly into our bank
                                account. Please use your Order ID as the payment
                                reference. Your order won’t be shipped until the
                                funds have cleared in our account.
                              </div>
                            </div>
                          </div>
                        </div> */}
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
