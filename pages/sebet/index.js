import Head from "next/head";
import Link from "next/link";
import { Consumer } from "../../components/Provider";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Search from "../../components/search";

function Basket() {
  return (
    <div>
      <Head>
        <title>Purple - səbət</title>
      </Head>
      <Consumer>
        {({ state }) => (
          <div id="basket-order">
            <Navbar state={state} />
            <section className="cart_table_area p_100">
              <div className="container">
                <div className="table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th scope="col">Şəkil</th>
                        <th scope="col">Məhsul</th>
                        <th scope="col">Qiymət</th>
                        <th scope="col">Miqdar</th>
                        <th scope="col">Cəm</th>
                        <th scope="col">Sil</th>
                      </tr>
                    </thead>
                    <tbody>
                      {state.basketItems ? (
                        state.basketItems.map((item, i) => {
                          return (
                            <tr key={i}>
                              <td>
                                <Link href={`/${item[6]}/[id]`} as={`/${item[6]}/${item[0]}`}>
                                  <img src={item[1]} alt="" />
                                </Link>
                              </td>
                              <td>{item[2]}</td>
                              <td>{item[3]}</td>
                              <td>
                                <select
                                  className="product_select"
                                  onChange={(e) => state.changeBasket(e, item)}
                                  value={item[4]}
                                >
                                  <option value="1">1</option>
                                  <option value="2">2</option>
                                  <option value="3">3</option>
                                  <option value="4">4</option>
                                  <option value="5">5</option>
                                </select>
                              </td>
                              <td>{item[5]}</td>
                              <td>
                                <i
                                  className="fa fa-close"
                                  onClick={(e) => state.deleteBasket(e, item)}
                                />
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr className="load-basketItems">
                          <td></td>
                          <td onClick={state.getBasketItems}>səbəti göstər</td>
                          <td></td>
                          <td></td>
                          <td></td>
                          <td></td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="row cart_total_inner">
                  <div className="col-lg-7"></div>
                  <div className="col-lg-5">
                    <div className="cart_total_text">
                      <div className="cart_head">Ümumi məbləğ: {state.basketTotal ? `${state.basketTotal} azn` : "0.00 azn"}</div>
                      <div className="cart_footer">
                          {state.basketTotal != null ?
                        <Link href="sebet/sifaris">
                          <a className="pest_btn">Ünvana sifariş ver</a>
                        </Link>
                        : null}
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

export default Basket;
