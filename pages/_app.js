import App, { Container } from "next/app";
import Provider from "../components/Provider";
import Head from "next/head";
import "../styles/globals.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import Router from "next/router";
import GoogleMapReact from "google-map-react";
import { Marker } from "../components/variables";

// function MyApp({ Component, pageProps }) {
class MyApp extends App {
  componentDidMount() {
    var decodedCookie = decodeURIComponent(document.cookie);
    var cookies = decodedCookie.split("; ");
    var basket = document.querySelector("#basketCount");
    if (cookies[0] != "") {
      basket.innerHTML = cookies.length;
    }
    else{
      basket.innerHTML = 0
    }
    Router.events.on("routeChangeComplete", (url) => {
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookies = decodedCookie.split("; ");
      var basket = document.querySelector("#basketCount");
      if (cookies[0] != "") {
        basket.innerHTML = cookies.length;
      }
      else{
        basket.innerHTML = 0
      }
    });
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <div>
        <Head>
          <title>Purple Cake Boutique</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Provider>
          <Component {...pageProps} />
        </Provider>
        <div id="popup-map" className="display-none">
          <div id="popup-map-inner">
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
          </div>
        </div>
        <script src="/js/theme.js"></script>
        <script src="/js/jquery-3.2.1.js"></script>
        <script src="/js/popper.js"></script>
        <script src="/js/bootstrap.js"></script>
      </div>
    );
  }
}

export default MyApp;
