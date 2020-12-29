import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
    error: false,
    setOrderError: () => {
      console.log("new github")
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
    perPage: 4,
    currentPage: 1,
    currentType: "hamısı",
    sortedData: null,
    pagesSorted: null,
    navActive: "Home",
    sortData: (data, e) => {
      let type = e.target.innerHTML.toLowerCase();
      this.setState({ currentType: type });
      let perPage = 4;
      let pagesSorted = [];
      if (type == "hamısı") {
        for (let i = 1; i <= Math.ceil(data.length / perPage); i++) {
          pagesSorted.push(i);
        }
        this.setState({ sortedData: data });
      } else {
        let sortedData = [];
        for (let i = 0; i < data.length; i++) {
          if (data[i].category.name == type) {
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
      if (e.target.innerHTML == "Home") {
        this.setState({ navActive: null });
      } else {
        this.setState({ navActive: e.target.innerHTML });
      }
    },
    showMap: () => {
      document.querySelector("#popup-map").classList.remove("display-none");
    },

    basketItems: null,
    basketCount: null,
    basketTotal: null,
    showBasket: () => {
      let basketItems = [];
      let basket = document.querySelector(".basket");
      if (basket.classList.contains("display-block")) {
        return basket.classList.remove("display-block");
      } else {
        var decodedCookie = decodeURIComponent(document.cookie);
        var cookies = decodedCookie.split("; ");
        let basketTotal = 0;
        for (let i = 0; i < cookies.length; i++) {
          if (cookies[i].split("=")[1] == "added to shop cart") {
            let arr = [];
            cookies[i] = cookies[i].split("=")[0];
            arr.push(cookies[i].split(", ")[0]);
            arr.push(cookies[i].split(", ")[1]);
            arr.push(cookies[i].split(", ")[2]);
            arr.push(cookies[i].split(", ")[3]);
            arr.push(cookies[i].split(", ")[4]);
            arr.push(cookies[i].split(", ")[5]);
            arr.push(cookies[i].split(", ")[6]);
            basketItems.push(arr);
            basketTotal += parseFloat(cookies[i].split(", ")[5]);
          }
        }
        basketTotal = parseFloat(basketTotal).toFixed(2);
        this.setState({ basketCount: basketItems.length });
        this.setState({ basketItems: basketItems });
        this.setState({ basketTotal: basketTotal });
        basket.classList.add("display-block");
      }
    },
    changeBasket: (e, item) => {
      var days = 30;
      var d = new Date();
      d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie =
        `${item[0]}, ${item[1]}, ${item[2]}, ${item[3]}, ${item[4]}, ${item[5]}, ${item[6]}` +
        "=" +
        "added to shop cart" +
        ";" +
        "expires=Thu, 01 Jan 1970 00:00:01 GMT" +
        ";path=/";
      let total = (parseFloat(e.target.value) * parseFloat(item[3])).toFixed(2);
      document.cookie =
        `${item[0]}, ${item[1]}, ${item[2]}, ${item[3]}, ${e.target.value}, ${total}, ${item[6]}` +
        "=" +
        "added to shop cart" +
        ";" +
        expires +
        ";path=/";
      let basketItems = [];
      let basket = document.querySelector(".basket");
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookies = decodedCookie.split("; ");
      if (cookies[0].slice(2, 7) == "http") {
        return basket.classList.add("display-block");
      }
      let basketTotal = 0;
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].split("=")[1] == "added to shop cart") {
          cookies[i] = cookies[i].split("=")[0];
          let arr = [];
          arr.push(cookies[i].split(", ")[0]);
          arr.push(cookies[i].split(", ")[1]);
          arr.push(cookies[i].split(", ")[2]);
          arr.push(cookies[i].split(", ")[3]);
          arr.push(cookies[i].split(", ")[4]);
          arr.push(cookies[i].split(", ")[5]);
          arr.push(cookies[i].split(", ")[6]);
          basketItems.push(arr);
          basketTotal += parseFloat(cookies[i].split(", ")[5]);
        }
      }
      basketTotal = parseFloat(basketTotal).toFixed(2);
      this.setState({ basketCount: basketItems.length });
      this.setState({ basketItems: basketItems });
      this.setState({ basketTotal: basketTotal });
    },
    deleteBasket: (e, item) => {
      // let basket = document.querySelector(".basket");
      let tr = e.target.closest("tr");
      let item4 = tr.querySelector(".product_select").value;
      document.cookie =
        `${item[0]}, ${item[1]}, ${item[2]}, ${item[3]}, ${item4}, ${item[5]}, ${item[6]}` +
        "=" +
        "added to shop cart" +
        ";" +
        "expires=Thu, 01 Jan 1970 00:00:01 GMT" +
        ";path=/";
      let basketItems = [];
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookies = decodedCookie.split("; ");
      let basketTotal = 0;
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].split("=")[1] == "added to shop cart") {
          cookies[i] = cookies[i].split("=")[0];
          let arr = [];
          arr.push(cookies[i].split(", ")[0]);
          arr.push(cookies[i].split(", ")[1]);
          arr.push(cookies[i].split(", ")[2]);
          arr.push(cookies[i].split(", ")[3]);
          arr.push(cookies[i].split(", ")[4]);
          arr.push(cookies[i].split(", ")[5]);
          arr.push(cookies[i].split(", ")[6]);
          basketItems.push(arr);
          basketTotal += parseFloat(cookies[i].split(", ")[5]);
        }
      }
      basketTotal = parseFloat(basketTotal).toFixed(2);
      // if (basketItems[0][0] == "") {
      //   this.setState({ basketCount: null });
      //   this.setState({ basketItems: null });
      //   this.setState({ basketTotal: null });
      // } else {
      this.setState({ basketCount: basketItems.length });
      this.setState({ basketItems: basketItems });
      this.setState({ basketTotal: basketTotal });
      // }
    },
    addCart: (item, type) => {
      let basket = document.querySelector(".basket");
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookies = decodedCookie.split("; ");
      for (let i = 0; i < cookies.length; i++) {
        cookies[i] = cookies[i].split("=")[0];
        cookies[i] = cookies[i].split(", ")[2];
      }
      if (cookies.indexOf(item.name) == -1) {
        if (basket.classList.contains("display-block")) {
          basket.classList.remove("display-block");
        }
        var days = 30;
        var d = new Date();
        d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
        var expires = "expires=" + d.toUTCString();
        if (item.image) {
          var src = "/" + item.image;
        } else {
          var src = "/img/cake-feature/c-feature-9.jpg";
        }
        if (item.discount) {
          var price = item.discount;
        } else {
          var price = item.price;
        }
        document.cookie =
          // `${type}/${item.id}, ${src}, ${item.name}, ${price}, 1, ${item.price}` +
          `${item.id}, ${src}, ${item.name}, ${price}, 1, ${price}, ${type}` +
          "=" +
          "added to shop cart" +
          ";" +
          expires +
          ";path=/";
      } else {
        alert("Bu məhsul artıq səbətə əlavə edilmişdir");
      }
      let basketItems = [];
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookies = decodedCookie.split("; ");
      // if (cookies[0].slice(3, 7) != "http") {
      //   return basket.classList.add("display-block");
      // }
      let basketTotal = 0;
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].split("=")[1] == "added to shop cart") {
          cookies[i] = cookies[i].split("=")[0];
          let arr = [];
          arr.push(cookies[i].split(", ")[0]);
          arr.push(cookies[i].split(", ")[1]);
          arr.push(cookies[i].split(", ")[2]);
          arr.push(cookies[i].split(", ")[3]);
          arr.push(cookies[i].split(", ")[4]);
          arr.push(cookies[i].split(", ")[5]);
          arr.push(cookies[i].split(", ")[6]);
          basketItems.push(arr);
          basketTotal += parseFloat(cookies[i].split(", ")[5]);
        }
      }
      basketTotal = parseFloat(basketTotal).toFixed(2);
      this.setState({ basketCount: basketItems.length });
      this.setState({ basketItems: basketItems });
      this.setState({ basketTotal: basketTotal });
      basket.classList.add("display-block");
    },
    getBasketItems: () => {
      let basketItems = [];
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookies = decodedCookie.split("; ");
      // if (cookies[0].slice(3, 7) != "http") {
      //   return this.setState({ basketItems: basketItems });
      // }
      let basketTotal = 0;
      for (let i = 0; i < cookies.length; i++) {
        if (cookies[i].split("=")[1] == "added to shop cart") {
          cookies[i] = cookies[i].split("=")[0];
          let arr = [];
          arr.push(cookies[i].split(", ")[0]);
          arr.push(cookies[i].split(", ")[1]);
          arr.push(cookies[i].split(", ")[2]);
          arr.push(cookies[i].split(", ")[3]);
          arr.push(cookies[i].split(", ")[4]);
          arr.push(cookies[i].split(", ")[5]);
          arr.push(cookies[i].split(", ")[6]);
          basketItems.push(arr);
          basketTotal += parseFloat(cookies[i].split(", ")[5]);
        }
      }
      basketTotal = parseFloat(basketTotal).toFixed(2);
      this.setState({ basketCount: basketItems.length });
      this.setState({ basketItems: basketItems });
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
      let url = `http://api.purplecakeboutique.az/contact/`;
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
      name: "K",
      surname: "G",
      city: "Baki",
      address: "A",
      address2: null,
      email: "E",
      note: null,
      amount: 1
    },
    query: "?",
    postOrderForm: () => {
      var decodedCookie = decodeURIComponent(document.cookie);
      var cookies = decodedCookie.split("; ");
      var amount = 0
      let basket = {}
      for (let i = 0; i < cookies.length; i++) {
        if(cookies[i].split('=')[1] == 'added to shop cart'){
          amount += parseFloat(cookies[i].split(', ')[5]);
          let value = cookies[i].split(', ')[4]
          basket[cookies[i].split(', ')[6].split('=')[0] + ":" + cookies[i].split(', ')[0]] = value
        }
      }
      // return console.log(basket)
      if(isNaN(amount)){
        return alert("Səbət boşdur")
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
      // return console.log("ppost_________: ", this.state.input);
      this.setState({ orderControl: false });
      // console.log("stringfy: ", JSON.stringify({data: this.state.input}))
      let form = {
        body: JSON.stringify({data: this.state.input, amount: amount, basket: basket}),
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // method: "GET",
        // headers: {'Content-Type': 'application/xml'},
      };
      // let url = "http://192.168.31.51:8000/test/";
      let url = "http://api.purplecakeboutique.az/test/"
      fetch(url, form)
        .then((res) => res.json())
        .then((response) => {
          console.log("response_: ", response);
          if (response.Status == "00") {
            var decodedCookie = decodeURIComponent(document.cookie);
            var cookies = decodedCookie.split("; ");
            for (let i = 0; i < cookies.length; i++) {
              if (cookies[i].split("=")[1] == "added to shop cart") {
                console.log("it is");
                document.cookie =
                  cookies[i].split("=")[0] +
                  "=" +
                  "added to shop cart" +
                  ";" +
                  "expires=Thu, 01 Jan 1970 00:00:01 GMT" +
                  ";path=/";
              }
            }
            return window.location = response.url;
          }
          alert("Biraz sonra cəhd edin", response.Status)
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
