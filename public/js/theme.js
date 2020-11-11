document.querySelector("#popup-map").addEventListener("click", function (e) {
  if (e.target == document.querySelector("#popup-map")) {
    document.querySelector("#popup-map").classList.add("display-none");
  }
});

window.addEventListener("scroll", function () {
  var navbarEl = document.querySelector("header");
  navbarEl.classList.toggle("navbar_fixed", window.scrollY > 130);
});


// var basket = document.querySelector(".basket");
// document.querySelector(".shop_cart").addEventListener("click", function () {
//   if (basket.classList.contains("display-block")) {
//     basket.classList.remove("display-block");
//   } else {
//     var decodedCookie = decodeURIComponent(document.cookie);
//     var cookies = decodedCookie.split("; ");
//     document.querySelector(".basket-container tbody").innerHTML = "";
//     for (let i = 0; i < cookies.length; i++) {
//       cookies[i] = cookies[i].split("=")[0];
//       let name = cookies[i].split(", ")[0];
//       let price = cookies[i].split(", ")[1];
//       let trow = `
//         <tr>
//         <td>
//         <img src="/img/product/cart-img.jpg" alt="" />
//         </td>
//         <td id="basket-name">${name}</td>
//         <td class="basket-price">${price}</td>
//         <td>
//         <select class="product_select">
//         <option data-display="1">1</option>
//         <option value="2">2</option>
//         <option value="3">3</option>
//         <option value="4">4</option>
//         <option value="5">5</option>
//         </select>
//         </td>
//         <td class="basket-total">${price}</td>
//         <td>
//         <i class="fa fa-close"/>
//         </td>
//         </tr>
//     `;
//       document.querySelector(".basket-container tbody").innerHTML += trow;
//     }
//     if (cookies[0] == "") {
//       document.querySelector(".basket-container tbody").innerHTML =
//         "səbət boşdur";
//     } else {
//       var basketSelects = document.querySelectorAll(".basket select");
//       for (let i = 0; i < basketSelects.length; i++) {
//         let total = basketSelects[i]
//           .closest("tr")
//           .querySelector(".basket-total");
//         let price = basketSelects[i]
//           .closest("tr")
//           .querySelector(".basket-price").innerHTML;
//         total.innerHTML = basketSelects[i].value * price;

//         let totals = document.querySelectorAll(".basket-total");
//         let totalPrice = 0;
//         for (let i = 0; i < totals.length; i++) {
//           totalPrice += parseInt(totals[i].innerHTML);
//         }
//         document.querySelector(".basket-total-all span").innerHTML = totalPrice;
//       }
//       for (let i = 0; i < basketSelects.length; i++) {
//         basketSelects[i].addEventListener("change", function () {
//           let total = basketSelects[i]
//             .closest("tr")
//             .querySelector(".basket-total");
//           let price = basketSelects[i]
//             .closest("tr")
//             .querySelector(".basket-price").innerHTML;
//           total.innerHTML = basketSelects[i].value * price;

//           let totals = document.querySelectorAll(".basket-total");
//           let totalPrice = 0;
//           for (let i = 0; i < totals.length; i++) {
//             totalPrice += parseInt(totals[i].innerHTML);
//           }
//           document.querySelector(
//             ".basket-total-all span"
//           ).innerHTML = totalPrice;
//         });
//       }
//       var basketDel = document.querySelectorAll(".basket i.fa-close");
//       for (let i = 0; i < basketDel.length; i++) {
//         basketDel[i].addEventListener("click", function () {
//           let row = basketDel[i].closest("tr");
//           let parent = row.parentElement;
//           parent.removeChild(row);
//           let name = row.querySelector("#basket-name").innerHTML;
//           let price = row.querySelector(".basket-price").innerHTML;
//           document.cookie =
//             `${name}, ${price}` +
//             "=" +
//             "added to shop cart" +
//             ";" +
//             "expires=Thu, 01 Jan 1970 00:00:01 GMT;" +
//             ";path=/";
//           let totals = document.querySelectorAll(".basket-total");
//           let totalPrice = 0;
//           for (let i = 0; i < totals.length; i++) {
//             totalPrice += parseInt(totals[i].innerHTML);
//           }
//           document.querySelector(
//             ".basket-total-all span"
//           ).innerHTML = totalPrice;
//           var basket = document.querySelector("#basketCount");
//           basket.innerHTML = parseInt(basket.innerHTML) - 1;
//         });
//       }
//     }
//     basket.classList.toggle("display-block");
//   }
// });

// var basketSelects = document.querySelectorAll(".basket select");
// for (let i = 0; i < basketSelects.length; i++) {
//   basketSelects[i].addEventListener("change", function () {
//     let total = basketSelects[i].closest("tr").querySelector(".basket-total");
//     let price = basketSelects[i].closest("tr").querySelector(".basket-price")
//       .innerHTML;
//     total.innerHTML = basketSelects[i].value * price;

//     let totals = document.querySelectorAll(".basket-total");
//     let totalPrice = 0;
//     for (let i = 0; i < totals.length; i++) {
//       totalPrice += parseInt(totals[i].innerHTML);
//     }
//     document.querySelector(".basket-total-all span").innerHTML = totalPrice;
//   });
// }

// function orderDelRow(e) {
//   let orderItems = document.querySelectorAll("#basket-order table tbody tr");
//   orderItems[e].parentElement.removeChild(orderItems[e]);
//   let name = orderItems[e].querySelector(".order-name").innerHTML;
//   let price = orderItems[e].querySelector(".order-price").innerHTML;
//   document.cookie =
//     `${name}, ${price}` +
//     "=" +
//     "added to shop cart" +
//     ";" +
//     "expires=Thu, 01 Jan 1970 00:00:01 GMT;" +
//     ";path=/";
//   let totals = document.querySelectorAll(".order-total");
//   let totalPrice = 0;
//   for (let i = 0; i < totals.length; i++) {
//     totalPrice += parseInt(totals[i].innerHTML);
//   }
//   document.querySelector(".order-total-all span").innerHTML = totalPrice;
//   var basket = document.querySelector("#basketCount");
//   basket.innerHTML = parseInt(basket.innerHTML) - 1;
// }

// function orderChangeRow(e) {
//   let orderItems = document.querySelectorAll("#basket-order table tbody tr");
//   let item = orderItems[e];
//   let total = item.closest("tr").querySelector(".order-total");
//   let price = item.closest("tr").querySelector(".order-price").innerHTML;
//   total.innerHTML = item.value * price;

//   let totals = document.querySelectorAll(".order-total");
//   let totalPrice = 0;
//   for (let i = 0; i < totals.length; i++) {
//     totalPrice += parseInt(totals[i].innerHTML);
//   }
//   document.querySelector(".order-total-all span").innerHTML = totalPrice;
// }

// // ==============================================
// (function ($) {
//   "use strict";

//   var nav_offset_top = $("header").height();
//   /*-------------------------------------------------------------------------------
// 	  Navbar
// 	-------------------------------------------------------------------------------*/

//   //* Navbar Fixed
//   // function navbarFixed(){
//   //     if ( $('.main_header_area, .main_header_three, .box_header_four').length ){
//   //         $(window).scroll(function() {
//   //             var scroll = $(window).scrollTop();
//   //             if (scroll >= nav_offset_top ) {
//   //                 console.log("added class")
//   //                 $(".main_header_area, .main_header_three, .box_header_four").addClass("navbar_fixed");
//   //             } else {
//   //                 console.log("removed class")
//   //                 $(".main_header_area, .main_header_three, .box_header_four").removeClass("navbar_fixed");
//   //             }
//   //         });
//   //     };
//   // };
//   // navbarFixed();

//   /*----------------------------------------------------*/
//   /*  Main Slider js
//     /*----------------------------------------------------*/
//   function main_slider() {
//     if ($("#main_slider").length) {
//       $("#main_slider").revolution({
//         sliderType: "standard",
//         sliderLayout: "auto",
//         delay: 4000000,
//         disableProgressBar: "on",
//         navigation: {
//           onHoverStop: "off",
//           touch: {
//             touchenabled: "on",
//           },
//           arrows: {
//             style: "zeus",
//             enable: true,
//             hide_onmobile: true,
//             hide_under: 992,
//             hide_onleave: true,
//             hide_delay: 200,
//             hide_delay_mobile: 1200,
//             tmp:
//               '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
//             left: {
//               h_align: "left",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//             right: {
//               h_align: "right",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//           },
//         },
//         responsiveLevels: [4096, 1199, 992, 767, 480],
//         gridwidth: [1170, 970, 750, 700, 400],
//         gridheight: [625, 625, 550, 550, 500],
//         lazyType: "smart",
//         fallbacks: {
//           simplifyAll: "off",
//           nextSlideOnWindowFocus: "off",
//           disableFocusListener: false,
//         },
//       });
//     }
//   }
//   main_slider();
//   /*----------------------------------------------------*/
//   /*  Main Slider js
//     /*----------------------------------------------------*/
//   function main_slider3() {
//     if ($("#main_slider3").length) {
//       $("#main_slider3").revolution({
//         sliderType: "standard",
//         sliderLayout: "auto",
//         delay: 4000000,
//         disableProgressBar: "on",
//         navigation: {
//           onHoverStop: "off",
//           touch: {
//             touchenabled: "on",
//           },
//           arrows: {
//             style: "zeus",
//             enable: true,
//             hide_onmobile: true,
//             hide_under: 992,
//             hide_onleave: true,
//             hide_delay: 200,
//             hide_delay_mobile: 1200,
//             tmp:
//               '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
//             left: {
//               h_align: "left",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//             right: {
//               h_align: "right",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//           },
//         },
//         responsiveLevels: [4096, 1199, 992, 767, 480],
//         gridwidth: [1170, 970, 750, 700, 400],
//         gridheight: [798, 798, 600, 600, 500],
//         lazyType: "smart",
//         fallbacks: {
//           simplifyAll: "off",
//           nextSlideOnWindowFocus: "off",
//           disableFocusListener: false,
//         },
//       });
//     }
//   }
//   main_slider3();
//   /*----------------------------------------------------*/
//   /*  Main Slider js
//     /*----------------------------------------------------*/
//   function main_slider4() {
//     if ($("#main_slider4").length) {
//       $("#main_slider4").revolution({
//         sliderType: "standard",
//         sliderLayout: "auto",
//         delay: 4000000,
//         disableProgressBar: "on",
//         navigation: {
//           onHoverStop: "off",
//           touch: {
//             touchenabled: "on",
//           },
//           arrows: {
//             style: "zeus",
//             enable: true,
//             hide_onmobile: true,
//             hide_under: 767,
//             hide_onleave: true,
//             hide_delay: 200,
//             hide_delay_mobile: 1200,
//             tmp:
//               '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
//             left: {
//               h_align: "left",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//             right: {
//               h_align: "right",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//           },
//         },
//         responsiveLevels: [4096, 1370, 1199, 992, 767, 480],
//         gridwidth: [1170, 1170, 970, 750, 540, 400],
//         gridheight: [767, 767, 767, 600, 600, 500],
//         lazyType: "smart",
//         fallbacks: {
//           simplifyAll: "off",
//           nextSlideOnWindowFocus: "off",
//           disableFocusListener: false,
//         },
//       });
//     }
//   }
//   main_slider4();
//   /*----------------------------------------------------*/
//   /*  Main Slider js
//     /*----------------------------------------------------*/
//   function main_slider5() {
//     if ($("#main_slider5").length) {
//       $("#main_slider5").revolution({
//         sliderType: "standard",
//         sliderLayout: "auto",
//         delay: 4000000,
//         disableProgressBar: "on",
//         navigation: {
//           onHoverStop: "off",
//           touch: {
//             touchenabled: "on",
//           },
//           arrows: {
//             style: "zeus",
//             enable: true,
//             hide_onmobile: true,
//             hide_under: 992,
//             hide_onleave: true,
//             hide_delay: 200,
//             hide_delay_mobile: 1200,
//             tmp:
//               '<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
//             left: {
//               h_align: "left",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//             right: {
//               h_align: "right",
//               v_align: "center",
//               h_offset: 50,
//               v_offset: 0,
//             },
//           },
//         },
//         responsiveLevels: [4096, 1370, 1199, 992, 767, 480],
//         gridwidth: [1170, 1170, 970, 750, 700, 400],
//         gridheight: [620, 620, 620, 550, 550, 500],
//         lazyType: "smart",
//         fallbacks: {
//           simplifyAll: "off",
//           nextSlideOnWindowFocus: "off",
//           disableFocusListener: false,
//         },
//       });
//     }
//   }
//   main_slider5();

//   /*----------------------------------------------------*/
//   /*  Cake Feature Slider
//     /*----------------------------------------------------*/
//   function cake_carousel() {
//     if ($(".cake_feature_slider").length) {
//       $(".cake_feature_slider").owlCarousel({
//         loop: true,
//         margin: 30,
//         items: 4,
//         nav: true,
//         autoplay: true,
//         smartSpeed: 1500,
//         dots: true,
//         navContainerClass: "cake_feature_slider",
//         navText: [
//           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//           '<i class="fa fa-angle-right" aria-hidden="true"></i>',
//         ],
//         responsiveClass: true,
//         responsive: {
//           0: {
//             items: 1,
//           },
//           430: {
//             items: 2,
//           },
//           768: {
//             items: 3,
//           },
//           992: {
//             items: 4,
//           },
//         },
//       });
//     }
//   }
//   cake_carousel();

//   /*----------------------------------------------------*/
//   /*  Cake Feature Slider
//     /*----------------------------------------------------*/
//   function client_say_slider() {
//     if ($(".client_says_slider").length) {
//       $(".client_says_slider").owlCarousel({
//         loop: true,
//         margin: 30,
//         items: 1,
//         nav: true,
//         autoplay: true,
//         smartSpeed: 1500,
//         dots: false,
//         navContainerClass: "client_says_slider",
//         navText: [
//           '<i class="fa fa-angle-left" aria-hidden="true"></i>',
//           '<i class="fa fa-angle-right" aria-hidden="true"></i>',
//         ],
//         responsiveClass: true,
//       });
//     }
//   }
//   client_say_slider();

//   /*----------------------------------------------------*/
//   /*  Cake Feature Slider
//     /*----------------------------------------------------*/
//   function arivals_slider() {
//     if ($(".arivals_slider").length) {
//       $(".arivals_slider").owlCarousel({
//         loop: true,
//         margin: 30,
//         items: 2,
//         nav: false,
//         autoplay: true,
//         smartSpeed: 1500,
//         dots: true,
//         responsiveClass: true,
//         responsive: {
//           0: {
//             items: 1,
//           },
//           420: {
//             items: 2,
//           },
//         },
//       });
//     }
//   }
//   arivals_slider();

//   /*----------------------------------------------------*/
//   /*  Special Recipe Slider
//     /*----------------------------------------------------*/
//   function recipe_slider() {
//     if ($(".special_recipe_slider").length) {
//       $(".special_recipe_slider").owlCarousel({
//         loop: true,
//         margin: 0,
//         items: 1,
//         nav: false,
//         autoplay: true,
//         smartSpeed: 1500,
//         dots: true,
//         responsiveClass: true,
//       });
//     }
//   }
//   recipe_slider();

//   // $(document).ready(function() {
//   // 	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
//   // 		disableOn: 700,
//   // 		type: 'iframe',
//   // 		mainClass: 'mfp-fade',
//   // 		removalDelay: 160,
//   // 		preloader: false,

//   // 		fixedContentPos: false
//   // 	});
//   // });

//   // $('#datetimepicker3').datetimepicker({

//   // });
//   // $('#datetimepicker4').datetimepicker({
//   // 	format: 'LT'
//   // });

//   // $(document).ready(function() {
//   //   $('.product_select, .short').niceSelect();
//   // });

//   /*----------------------------------------------------*/
//   /*  portfolio_isotope
//     /*----------------------------------------------------*/
//   function grid_gallery() {
//     if ($(".grid_portfolio_area").length) {
//       // Activate isotope in container
//       $(".grid_portfolio_area").imagesLoaded(function () {
//         $(".grid_portfolio_area").isotope({
//           layoutMode: "masonry",
//           percentPosition: true,
//           columnWidth: 1,
//         });
//       });
//     }
//   }
//   grid_gallery();

//   /*----------------------------------------------------*/
//   /*  Portfolio Isotope js
//     /*----------------------------------------------------*/
//   function portfolio_isotope() {
//     if ($(".portfolio_filter ul li").length) {
//       // Add isotope click function
//       $(".portfolio_filter ul li").on("click", function () {
//         $(".portfolio_filter ul li").removeClass("active");
//         $(this).addClass("active");

//         var selector = $(this).attr("data-filter");
//         $(".grid_portfolio_area").isotope({
//           filter: selector,
//           animationOptions: {
//             duration: 450,
//             easing: "linear",
//             queue: false,
//           },
//         });
//         return false;
//       });
//     }
//   }

//   portfolio_isotope();

//   // $( function() {
//   // 	$( "#slider-range" ).slider({
//   // 		range: true,
//   // 		min: 0,
//   // 		max: 500,
//   // 		values: [ 10, 250 ],
//   // 		slide: function( event, ui ) {
//   // 		$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
//   // 		}
//   // 	});
//   // 	$( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
//   // 	" - $" + $( "#slider-range" ).slider( "values", 1 ) );
//   // });

//   /*----------------------------------------------------*/
//   /*  Search Popup js
//     /*----------------------------------------------------*/
//   // $(document).ready(function() {
//   //     $('.popup-with-zoom-anim').magnificPopup({
//   //         type: 'inline',

//   //         fixedContentPos: false,
//   //         fixedBgPos: true,

//   //         overflowY: 'auto',

//   //         closeBtnInside: true,
//   //         preloader: false,

//   //         midClick: true,
//   //         removalDelay: 300,
//   //         mainClass: 'my-mfp-zoom-in'
//   //     });

//   //     $('.popup-with-move-anim').magnificPopup({
//   //         type: 'inline',

//   //         fixedContentPos: false,
//   //         fixedBgPos: true,

//   //         overflowY: 'auto',

//   //         closeBtnInside: true,
//   //         preloader: false,

//   //         midClick: true,
//   //         removalDelay: 300,
//   //         mainClass: 'my-mfp-slide-bottom'
//   //     });
//   // });

//   /*----------------------------------------------------*/
//   /*  Simple LightBox js
//     /*----------------------------------------------------*/
//   // $('.imageGallery1 .light').simpleLightbox();
// })(jQuery);
