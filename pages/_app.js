import App, { Container } from "next/app";
import Provider from "../components/Provider";
import Head from "next/head";
import "../styles/globals.css";
import Link from "next/link";
import Navbar from "../components/navbar";
import Router from "next/router";
import GoogleMapReact from "google-map-react";
import { Marker } from "../components/variables";

class MyApp extends App {
  componentDidMount() {
    var url = window.location.pathname;
    if (url == "/") {
      document
        .querySelector("ul.navbar-nav li a[data-name=home]")
        .classList.add("active");
    } else if (url.startsWith("/vitrin")) {
      document
        .querySelector("ul.navbar-nav li a[data-name=vitrin]")
        .classList.add("active");
    } else if (url.startsWith("/marsipan")) {
      document
        .querySelector("ul.navbar-nav li a[data-name=marsipan]")
        .classList.add("active");
    } else if (url.startsWith("/kafe")) {
      document
        .querySelector("ul.navbar-nav li a[data-name=cafe]")
        .classList.add("active");
    } else if (url.startsWith("/gul")) {
      document
        .querySelector("ul.navbar-nav li a[data-name=flower]")
        .classList.add("active");
    } else if (url.startsWith("/xonca")) {
      document
        .querySelector("ul.navbar-nav li a[data-name=xonca]")
        .classList.add("active");
    } else if (url.startsWith("/haqqimizda")) {
      document
        .querySelector("ul.navbar-nav li a[data-name=about]")
        .classList.add("active");
    }
    var basket = document.querySelector("#basketCount");
    if (window.localStorage.getItem("basket")) {
      basket.innerHTML = JSON.parse(window.localStorage.getItem("basket")).length
    } else {
      basket.innerHTML = 0;
    }
    Router.events.on("routeChangeComplete", (url) => {
      var basket = document.querySelector("#basketCount");
      if (window.localStorage.getItem("basket")) {
        basket.innerHTML = JSON.parse(window.localStorage.getItem("basket")).length
      } else {
        basket.innerHTML = 0;
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
          <meta
            name="description"
            property="og:title"
            content='"The Purple Cake Boutique" çox ləzzətli və özəl sənət əsəri olan tortlar təqdim edir...'
            key="title"
          />
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
