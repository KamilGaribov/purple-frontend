import React, { Component } from "react";
import { apiUrl, perPage } from "./variables";

const Context = React.createContext();

class Provider extends Component {
  state = {
    error: false,
    setOrderError: () => {
      this.setState({ orderError: true });
    },
    orderControl: false,
    setOrderControl: () => {
      if (this.state.orderControl) {
        return this.setState({ orderControl: false });
      }
      this.setState({ orderControl: true });
      this.setState({ orderError: false });
    },
    perPage: perPage,
    currentPage: 1,
    currentType: "hamısı",
    sortedData: null,
    pagesSorted: null,
    navActive: null,
    sortData: (data, e) => {
      let type = e.target.innerHTML.toLowerCase();
      this.setState({ currentType: type });
      let pagesSorted = [];
      if (type == "hamısı") {
        for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
          pagesSorted.push(i);
        }
        this.setState({ sortedData: null });
      } else {
        let sortedData = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].category && data[i].category.name == type) {
            sortedData.push(data[i]);
          }
        }
        for (let i = 1; i <= Math.ceil(sortedData.length / perPage); i++) {
          pagesSorted.push(i);
        }
        this.setState({ sortedData: sortedData });
      }
      this.setState({ pagesSorted: pagesSorted });
      this.setState({ currentPage: 1 });
    },
    changePage: (e) => {
      this.setState({ currentPage: e });
    },
    changeUrl: (e) => {
      this.setState({
        currentPage: 1,
        currentType: "hamısı",
        sortedData: null,
        pagesSorted: null,
      });
      if (e.target.innerHTML) {
        this.setState({ navActive: e.target.innerHTML });
      } else {
        this.setState({ navActive: "Ana səhifə" });
      }
    },
    showMap: () => {
      document.querySelector("#popup-map").classList.remove("display-none");
    },

    basketItems: null,
    basketCount: null,
    basketTotal: null,
    showBasket: () => {
      let basket = document.querySelector(".basket");
      if (basket.classList.contains("display-block")) {
        return basket.classList.remove("display-block");
      } else {
        let basketTotal = 0;
        if (JSON.parse(window.localStorage.getItem("basket"))) {
          var localStorage = JSON.parse(window.localStorage.getItem("basket"));
          for (let i = 0; i < localStorage.length; i++) {
            basketTotal += parseFloat(localStorage[i].total);
          }
        } else {
          var localStorage = [];
        }
        basketTotal = parseFloat(basketTotal).toFixed(2);
        this.setState({ basketCount: localStorage.length });
        this.setState({ basketItems: localStorage });
        this.setState({ basketTotal: basketTotal });
        return basket.classList.add("display-block");
      }
    },
    changeBasket: (e, item) => {
      let bskt = JSON.parse(window.localStorage.getItem("basket"));
      let newBskt = [];
      let basketTotal = 0;
      for (let i = 0; i < bskt.length; i++) {
        if (bskt[i].id == item.id && bskt[i].type == item.type) {
          bskt[i].quantity = parseFloat(e.target.value);
          bskt[i].total = (
            parseFloat(e.target.value) * parseFloat(bskt[i].price)
          ).toFixed(2);
        }
        newBskt.push(bskt[i]);
        basketTotal += parseFloat(bskt[i].total);
      }
      window.localStorage.setItem("basket", JSON.stringify(newBskt));
      basketTotal = parseFloat(basketTotal).toFixed(2);
      this.setState({ basketCount: newBskt.length });
      this.setState({ basketItems: newBskt });
      this.setState({ basketTotal: basketTotal });
    },
    deleteBasket: (e, item) => {
      let bskt = JSON.parse(window.localStorage.getItem("basket"));
      let newBskt = [];
      let basketTotal = 0;
      for (let i = 0; i < bskt.length; i++) {
        if (
          parseInt(bskt[i].id) == parseInt(item.id) &&
          bskt[i].type == item.type
        ) {
        } else {
          newBskt.push(bskt[i]);
          basketTotal += parseFloat(bskt[i].total);
        }
      }
      window.localStorage.setItem("basket", JSON.stringify(newBskt));
      basketTotal = parseFloat(basketTotal).toFixed(2);
      this.setState({ basketCount: newBskt.length });
      this.setState({ basketItems: newBskt });
      this.setState({ basketTotal: basketTotal });
    },
    addCart: (item, type, order) => {
      let basket = document.querySelector(".basket");
      let basketTotal = 0;
      if (basket.classList.contains("display-block")) {
        basket.classList.remove("display-block");
      }
      if (item.image) {
        var src = item.image;
      } else {
        var src = "/img/cake-feature/c-feature-9.jpg";
      }
      if (item.discount) {
        var price = item.discount;
      } else {
        var price = item.price;
      }
      let bskt = {};
      bskt.id = item.id;
      bskt.image = src;
      bskt.name = item.name;
      bskt.price = price;
      bskt.quantity = 1;
      bskt.total = price;
      bskt.type = type;
      if (JSON.parse(window.localStorage.getItem("basket"))) {
        var localStorage = JSON.parse(window.localStorage.getItem("basket"));
      } else {
        var localStorage = [];
      }
      for (let i = 0; i < localStorage.length; i++) {
        if (localStorage[i].id == item.id && localStorage[i].type == type) {
          if (order) {
            return true;
          }
          this.state.showBasket();
          return alert("Bu məhsul artıq səbətə əlavə edilmişdir");
        }
      }
      localStorage.push(bskt);
      for (let i = 0; i < localStorage.length; i++) {
        basketTotal += parseFloat(localStorage[i].total);
      }
      window.localStorage.setItem("basket", JSON.stringify(localStorage));
      basketTotal = parseFloat(basketTotal).toFixed(2);
      this.setState({ basketCount: localStorage.length });
      this.setState({ basketItems: localStorage });
      this.setState({ basketTotal: basketTotal });
      if (order) {
        return true;
      }
      basket.classList.add("display-block");
    },
    getBasketItems: () => {
      let basketTotal = 0;
      if (JSON.parse(window.localStorage.getItem("basket"))) {
        var localStorage = JSON.parse(window.localStorage.getItem("basket"));
        for (let i = 0; i < localStorage.length; i++) {
          basketTotal += parseFloat(localStorage[i].total);
        }
      } else {
        var localStorage = [];
      }
      basketTotal = parseFloat(basketTotal).toFixed(2);
      this.setState({ basketCount: localStorage.length });
      this.setState({ basketItems: localStorage });
      this.setState({ basketTotal: basketTotal });
    },

    cInput: {
      name: null,
      email: null,
      phone: null,
      subject: null,
      message: null,
    },
    cPost: "",
    postContact: () => {
      // let form = {
      //   method: "POST",
      //   body: JSON.stringify({
      //     name: "Aslan",
      //     email: "aslan@gmail.com",
      //     gender: "male",
      //   }),
      //   headers: {
      //     "Content-type": "application/json; charset=UTF-8",
      //     Authorization: localStorage.getItem("token"),
      //   },
      // };
      // let url = "http://localhost:8000/income/";
      // fetch(url, form)
      //   .then((res) => res.json())
      //   .then((response) => {
      //     console.log(response);
      //   })
      //   .catch((error) => {
      //     console.log("salam");
      //     console.log(error);
      //   });
      // return true;
      let form = {
        method: "POST",
        body: JSON.stringify({
          name: this.state.cInput.name,
          email: this.state.cInput.email,
          phone: this.state.cInput.phone,
          subject: this.state.cInput.subject,
          message: this.state.cInput.message,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      };
      if (this.state.cInput.name == null || this.state.cInput.name == "") {
        return document
          .querySelector(".contact_form_area input[name=name]")
          .parentElement.classList.add("input-div-error");
      }
      if (this.state.cInput.email == null || this.state.cInput.email == "") {
        return document
          .querySelector(".contact_form_area input[name=email]")
          .parentElement.classList.add("input-div-error");
      }
      if (
        this.state.cInput.subject == null ||
        this.state.cInput.subject == ""
      ) {
        return document
          .querySelector(".contact_form_area input[name=subject]")
          .parentElement.classList.add("input-div-error");
      }
      if (
        this.state.cInput.message == null ||
        this.state.cInput.message == ""
      ) {
        return document
          .querySelector(".contact_form_area textarea")
          .parentElement.classList.add("input-div-error");
      }
      // let url = `http://192.168.31.51:8000/contact/`;
      // let url = `http://api.purplecakeboutique.az/contact/`;
      // let url = `${apiUrl}contact/`;
      fetch(url, form)
        .then((res) => res.json())
        .then((response) => {
          let inputs = document.querySelectorAll(".contact_form_area input");
          for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = null;
          }
          document.querySelector(".contact_form_area textarea").value = null;
          this.setState({ contactSuccess: "Mesajınız uğurla göndərildi." });
        })
        .catch((error) => this.setState({ contactSuccess: "Xəta baş verdi." }));
    },
    contactHandler: (e) => {
      const { name, value } = e.target;
      if (name != "message") {
        document
          .querySelector(`.contact_form_area input[name=${name}`)
          .parentElement.classList.remove("input-div-error");
      } else {
        document
          .querySelector(`.contact_form_area textarea`)
          .parentElement.classList.remove("input-div-error");
      }
      let formInput = { ...this.state.cInput };
      switch (name) {
        case "name":
          if (value) {
            if (
              this.state.cPost.indexOf(`${name}=${this.state.cInput.name}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.cPost.replace(
                    `${name}=${this.state.cInput.name}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                cPost: this.state.cPost + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.cPost.indexOf(`${name}=${this.state.cInput.name}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.cPost.replace(
                  `${name}=${this.state.cInput.name}&`,
                  ""
                ),
              });
            }
          }
          formInput.name = value;
          break;
        case "email":
          if (value) {
            if (
              this.state.cPost.indexOf(`${name}=${this.state.cInput.email}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.cPost.replace(
                    `${name}=${this.state.cInput.email}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                cPost: this.state.cPost + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.cPost.indexOf(`${name}=${this.state.cInput.email}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.cPost.replace(
                  `${name}=${this.state.cInput.email}&`,
                  ""
                ),
              });
            }
          }
          formInput.email = value;
          break;
        case "phone":
          if (value) {
            if (
              this.state.cPost.indexOf(`${name}=${this.state.cInput.phone}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.cPost.replace(
                    `${name}=${this.state.cInput.phone}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                cPost: this.state.cPost + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.cPost.indexOf(`${name}=${this.state.cInput.phone}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.cPost.replace(
                  `${name}=${this.state.cInput.phone}&`,
                  ""
                ),
              });
            }
          }
          formInput.phone = value;
          break;
        case "subject":
          if (value) {
            if (
              this.state.cPost.indexOf(
                `${name}=${this.state.cInput.subject}&`
              ) != -1
            ) {
              this.setState({
                query:
                  this.state.cPost.replace(
                    `${name}=${this.state.cInput.subject}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                cPost: this.state.cPost + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.cPost.indexOf(
                `${name}=${this.state.cInput.subject}&`
              ) != -1
            ) {
              this.setState({
                query: this.state.cPost.replace(
                  `${name}=${this.state.cInput.subject}&`,
                  ""
                ),
              });
            }
          }
          formInput.subject = value;
          break;
        case "message":
          if (value) {
            if (
              this.state.cPost.indexOf(
                `${name}=${this.state.cInput.message}&`
              ) != -1
            ) {
              this.setState({
                query:
                  this.state.cPost.replace(
                    `${name}=${this.state.cInput.message}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                cPost: this.state.cPost + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.cPost.indexOf(
                `${name}=${this.state.cInput.message}&`
              ) != -1
            ) {
              this.setState({
                query: this.state.cPost.replace(
                  `${name}=${this.state.cInput.message}&`,
                  ""
                ),
              });
            }
          }
          formInput.message = value;
          break;
      }
      this.setState({ cInput: formInput });
    },

    input: {
      name: null,
      surname: null,
      city: "Baki",
      address: null,
      address2: null,
      email: null,
      note: null,
      amount: 0,
    },
    query: "?",
    postOrderForm: () => {
      var amount = 0;
      let basket = {};
      if (JSON.parse(window.localStorage.getItem("basket"))) {
        var localStorage = JSON.parse(window.localStorage.getItem("basket"));
        for (let i = 0; i < localStorage.length; i++) {
          console.log("salam");
          console.log(parseFloat(localStorage[i].total));
          amount += parseFloat(localStorage[i].total);
          basket[localStorage[i].type + ":" + localStorage[i].id] = localStorage[i].quantity
        }
      }
      else{
        var localStorage = []
      }
      if (isNaN(amount)) {
        return alert("Səbət boşdur");
      }
      if (amount < 20) {
        return alert("Minimum sifariş məbləği 20.00 AZN-dir");
      }
      if (this.state.input.name == null || this.state.input.name == "") {
        return document
          .querySelector(".billing_details_area input[name=name]")
          .parentElement.classList.add("input-div-error");
      }
      if (this.state.input.surname == null || this.state.input.surname == "") {
        return document
          .querySelector(".billing_details_area input[name=surname]")
          .parentElement.classList.add("input-div-error");
      }
      if (this.state.input.address == null || this.state.input.address == "") {
        return document
          .querySelector(".billing_details_area input[name=address]")
          .parentElement.classList.add("input-div-error");
      }
      if (this.state.input.email == null || this.state.input.email == "") {
        return document
          .querySelector(".billing_details_area input[name=email]")
          .parentElement.classList.add("input-div-error");
      }
      this.setState({ orderControl: false });
      let form = {
        body: JSON.stringify({
          data: this.state.input,
          amount: amount,
          basket: basket,
        }),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // method: "GET",
        // headers: {'Content-Type': 'application/xml'},
      };
      let url = `${apiUrl}test/`;
      fetch(url, form)
        .then((res) => res.json())
        .then((response) => {
          if (response.Status == "00") {
            window.localStorage.removeItem("basket");
            return (window.location = response.url);
          }
          alert("Xəta baş verdi, yeniden cəhd edin");
        })
        .catch((error) => {
          console.log("error: ", error);
        });
    },
    inputHandler: (e) => {
      const { name, value } = e.target;
      if (name != "note") {
        document
          .querySelector(`.billing_details_area input[name=${name}`)
          .parentElement.classList.remove("input-div-error");
      } else {
        document
          .querySelector(`.billing_details_area textarea`)
          .parentElement.classList.remove("input-div-error");
      }
      let formInput = { ...this.state.input };
      switch (name) {
        case "name":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.name}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.name}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.name}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.name}&`,
                  ""
                ),
              });
            }
          }
          formInput.name = value;
          break;
        case "surname":
          if (value) {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.surname}&`
              ) != -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.surname}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.surname}&`
              ) != -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.surname}&`,
                  ""
                ),
              });
            }
          }
          formInput.surname = value;
          break;
        case "city":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.city}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.city}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.city}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.city}&`,
                  ""
                ),
              });
            }
          }
          formInput.city = value;
          break;
        case "address":
          if (value) {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.address}&`
              ) != -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.address}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.address}&`
              ) != -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.address}&`,
                  ""
                ),
              });
            }
          }
          formInput.address = value;
          break;
        case "address2":
          if (value) {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.address2}&`
              ) != -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.address2}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.address2}&`
              ) != -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.address2}&`,
                  ""
                ),
              });
            }
          }
          formInput.address2 = value;
          break;
        case "email":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.email}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.email}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.email}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.email}&`,
                  ""
                ),
              });
            }
          }
          formInput.email = value;
          break;
        case "phone":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.phone}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.phone}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.phone}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.phone}&`,
                  ""
                ),
              });
            }
          }
          formInput.phone = value;
          break;
        case "note":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.note}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.note}&`,
                    ""
                  ) +
                  `${name}=` +
                  value +
                  "&",
              });
            } else {
              this.setState({
                query: this.state.query + `${name}=` + value + "&",
              });
            }
          } else {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.note}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.note}&`,
                  ""
                ),
              });
            }
          }
          formInput.note = value;
          break;
      }
      this.setState({ input: formInput });
    },
  };
  render() {
    return (
      <Context.Provider value={{ state: this.state }}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

const Consumer = Context.Consumer;

export default Provider;
export { Consumer };
