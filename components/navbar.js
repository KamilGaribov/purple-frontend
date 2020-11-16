import Link from "next/link";

function Navbar(props) {
  const {
    changeUrl,
    navActive,
    showMap,
    basketItems,
    basketCount,
    showBasket,
    deleteBasket,
    basketTotal,
    changeBasket,
  } = props.state;
  function fixed(a, b) {
    a = a * b;
    return a.toFixed(2);
  }
  // const setCount = (e) => {
  //   let count
  // }
  return (
    <header className="main_header_area">
      <div className="top_header_area row m0">
        <div className="container">
          <div className="float-left">
            <a className="call-web">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>+994 51 746 8384</span>
            </a>
            <a className="call-mob callmob" href="tel:+994517468384">
              <i className="fa fa-phone" aria-hidden="true"></i>
              <span>+994 51 746 8384</span>
            </a>
            <a className="call-mob" href="https://api.whatsapp.com/send?phone=+994507468384">
              <i className="fa fa-whatsapp" aria-hidden="true"></i>
              <span>watsapp</span>
            </a>
            <a onClick={showMap}>
              <i className="fa fa-map-marker" aria-hidden="true"></i>
              <span>xəritədə göstər</span>
            </a>
          </div>
          <div className="float-right">
            <ul className="h_social list_style">
              <li>
                <a
                  href="https://www.facebook.com/purplecakeboutiquebaku"
                  target="_blank"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/purplecakeboutique/"
                  target="_blank"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
            </ul>
            <ul className="h_search list_style">
              <li className="shop_cart" onClick={showBasket}>
                <a>
                  <i className="lnr lnr-cart"></i>
                  <span id="basketCount">
                    {basketCount != null ? basketCount : 0}
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="main_menu_area">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="my_toggle_menu">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link href="/vitrin">
                    <a
                      onClick={changeUrl}
                      className={navActive == "Vitrin" ? "active" : null}
                    >
                      Vitrin
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/marsipan">
                    <a
                      onClick={changeUrl}
                      className={
                        navActive == "Marsipan tortlar" ? "active" : null
                      }
                    >
                      Marsipan tortlar
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/kafe">
                    <a
                      onClick={changeUrl}
                      className={navActive == "Kafe" ? "active" : null}
                    >
                      Kafe
                    </a>
                  </Link>
                </li>
              </ul>
              <ul className="navbar-nav justify-content-end">
                <li>
                  <Link href="/gul">
                    <a
                      onClick={changeUrl}
                      className={navActive == "Gül" ? "active" : null}
                    >
                      Gül
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/xonca">
                    <a
                      onClick={changeUrl}
                      className={navActive == "Xonça" ? "active" : null}
                    >
                      Xonça
                    </a>
                  </Link>
                </li>
                <li>
                  <Link href="/haqqimizda">
                    <a
                      onClick={changeUrl}
                      className={navActive == "Haqqımızda" ? "active" : null}
                    >
                      Haqqımızda
                    </a>
                  </Link>
                </li>
                <li id="last-row">
                  <a>.</a>
                </li>
              </ul>
              <div className="navbar-logo-web">
                <Link href="/">
                  <img
                    src="/img/logo4.png"
                    onClick={changeUrl}
                    className={
                      navActive == "Home"
                        ? "navbar-logo-img active"
                        : "navbar-logo-img"
                    }
                  />
                </Link>
              </div>
            </div>
          </nav>
        </div>
        <div className="navbar-logo-mob">
          <Link href="/">
            <img
              src="/img/logo4.png"
              onClick={changeUrl}
              className={
                navActive == "Home"
                  ? "navbar-logo-img active"
                  : "navbar-logo-img"
              }
            />
          </Link>
        </div>
      </div>
      <div className="basket">
        <div className="basket-container">
          <table>
            <thead>
              <tr>
                <th>Şəkil</th>
                <th>Məhsul</th>
                <th>Qiymət</th>
                <th>Miqdar</th>
                <th>Cəm</th>
                <th>Sil</th>
              </tr>
            </thead>
            <tbody>
              {basketItems != null ? (
                basketItems.map((item, i) => {
                  return (
                    <tr key={i}>
                      <td>
                        <Link
                          href={`/${item[6]}/[id]`}
                          as={`/${item[6]}/${item[0]}`}
                        >
                          <img src={item[1]} alt="" />
                        </Link>
                      </td>
                      <td>{item[2]}</td>
                      <td className="basket-price">{item[3]}</td>
                      <td>
                        <select
                          className="product_select"
                          onChange={(e) => changeBasket(e, item)}
                          value={item[4]}
                        >
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>
                      </td>
                      <td className="basket-total">{item[5]}</td>
                      <td>
                        <i
                          className="fa fa-close"
                          onClick={(e) => deleteBasket(e, item)}
                        />
                      </td>
                    </tr>
                  );
                })
                ) : (
                 null
                )}
            </tbody>
          </table>
          {basketItems == null ?
          <span className="basket-null">Səbət boşdur</span>
        : null}
        </div>
        <div className="basket-footer">
          <Link href="/sebet">
            <a className="pest_btn order_btn">Sifariş ver</a>
          </Link>
          <div className="basket-total-all">
            Cəm: <span>{basketTotal ? basketTotal : "0.00"}</span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
