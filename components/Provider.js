import React, { Component } from "react";

const Context = React.createContext();

class Provider extends Component {
  state = {
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
      let basket = document.querySelector(".basket");
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
      name: null,
      surname: null,
      city: null,
      adress: null,
      adress2: null,
      email: null,
      number: null,
      note: null,
    },
    query: "?",
    postOrderForm: () => {
      console.log("post: ");
      console.log("_", this.state.query);
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.open("POST", "https://e-commerce.kapitalbank.az/index.jsp?");
      var xmlDoc;
      xmlhttp.onreadystatechange = function () {
        if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
          xmlDoc = xmlhttp.responseXML;
          console.log(xmlDoc);
        }
      };
      xmlhttp.setRequestHeader("Content-Type", "text/xml");
      var xml = `<?xml version="1.0" encoding="UTF-8"?>
        <TKKPG>
        <Request>
           <Operation>CreateOrder</Operation>
           <Language>RU</Language>
           <Order>
             <OrderType>Purchase</OrderType>
             <Merchant>E1000010</Merchant>
             <Amount>123456</Amount>
             <Currency>944</Currency>
             <Description>xxxxxxxx</Description>
             <ApproveURL>/testshopPageReturn.jsp</ApproveURL>
             <CancelURL>/testshopPageReturn.jsp</CancelURL>
             <DeclineURL>/testshopPageReturn.jsp</DeclineURL>
           </Order>
        </Request>
        </TKKPG>`;
      xmlhttp.send(xml);
    },
    inputHandler: (e) => {
      const { name, value } = e.target;
      console.log("name: ", name);
      console.log("value: ", value);
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
        case "adress":
          if (value) {
            if (
              this.state.query.indexOf(`${name}=${this.state.input.adress}&`) !=
              -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.adress}&`,
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
              this.state.query.indexOf(`${name}=${this.state.input.adress}&`) !=
              -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.adress}&`,
                  ""
                ),
              });
            }
          }
          formInput.adress = value;
          break;
        case "adress2":
          if (value) {
            if (
              this.state.query.indexOf(
                `${name}=${this.state.input.adress2}&`
              ) != -1
            ) {
              this.setState({
                query:
                  this.state.query.replace(
                    `${name}=${this.state.input.adress2}&`,
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
                `${name}=${this.state.input.adress2}&`
              ) != -1
            ) {
              this.setState({
                query: this.state.query.replace(
                  `${name}=${this.state.input.adress2}&`,
                  ""
                ),
              });
            }
          }
          formInput.adress2 = value;
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

// let trow = `
//         <tr>
//         <td>
//         <img src="/img/product/cart-img.jpg" alt="" />
//         </td>
//         <td id="basket-name">${item.name}</td>
//         <td class="basket-price">${item.price}</td>
//         <td>
//         <select class="product_select">
//         <option data-display="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         </select>
//         </td>
//         <td class="basket-total">${item.price}</td>
//         <td>
//         <i class="fa fa-close"/>
//         </td>
//         </tr>
//     `;
