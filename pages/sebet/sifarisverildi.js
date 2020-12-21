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
        <title>Purple - sifaris</title>
      </Head>
      <Consumer>
        {({ state }) => (
          <div id="basket-order">
            <Navbar state={state} />
            <section id="order-approved">
              <div>
                <h1>Sifariş verildi</h1>
                <h5>Təşəkkür edirik</h5>
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
