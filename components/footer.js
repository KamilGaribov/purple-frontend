import Link from "next/link";

function Footer() {
  return (
    <div className="footer_area">
      <div className="footer_widgets">
        <div className="container">
          <div className="row footer_wd_inner">
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_about_widget">
                <img src="/img/purple_logo123.png" alt="" />
                {/* <p>
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui
                  bland itiis praesentium voluptatum deleniti atque corrupti.
                </p> */}
                <ul className="nav">
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
              </aside>
            </div>
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_link_widget">
                <div className="f_title">
                  <h3>İş saatları</h3>
                </div>
                <ul className="list_style">
                  <li>
                    <a href="#">Hər gün: 9:00 - 22:00</a>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_contact_widget">
                <div className="f_title">
                  <h3>Ünvan</h3>
                </div>
                <p>
                  Bakı şəhəri, Nərimanov rayonu, Həsənoğlu 4. <br />
                  Heydər Əliyev mərkəzinin arxası.
                </p>
              </aside>
            </div>
            <div className="col-lg-3 col-6">
              <aside className="f_widget f_contact_widget">
                <div className="f_title">
                  <h3>Əlaqə</h3>
                </div>
                <h4>+994 51 746 8384</h4>
                <h4>+994 70 746 8384</h4>
                <h5>contact@purplecakeboutique.az</h5>
              </aside>
            </div>
          </div>
        </div>
      </div>
      <div className="footer_copyright">
        <div className="container">
          <div className="copyright_inner">
            <div className="float-left">
              <h5>
                © Copyright
                <Link href={"https://microservice.az"}>
                  <a target="_blank" id="agency-href"> Microservice </a>
                </Link>
                Agency. All rights reserved.
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
