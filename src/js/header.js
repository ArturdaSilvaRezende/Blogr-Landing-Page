"use strict";

((doc) => {
  const navbarClasses = {
    product: doc.querySelector(".productTarget"),
    company: doc.querySelector(".companyTarget"),
    connect: doc.querySelector(".connectTarget"),
    btnControlMenu: doc.querySelector(".btnControlMenu"),
  };
  const { product, company, connect, btnControlMenu } = navbarClasses;

  // ------------- dropdown content -------------

  //dropdown item 01 ----- product -----
  let a = 1;
  product.addEventListener("click", () => {
    if (a == 1) {
      window.document.querySelector(".product").style.display = "block";
      window.document
        .querySelector(".product")
        .classList.add("dropdownAnimation");

      //caret control
      window.document.querySelectorAll(".caretProduct")[0].style.transform =
        "rotate(180deg)";
      window.document.querySelectorAll(".caretProduct")[1].style.transform =
        "rotate(180deg)";

      return (a = 0);
    } else {
      window.document.querySelector(".product").style.display = "none";

      //caret control
      window.document.querySelectorAll(".caretProduct")[0].style.transform =
        "rotate(360deg)";
      window.document.querySelectorAll(".caretProduct")[1].style.transform =
        "rotate(360deg)";

      return (a = 1);
    }
  });

  //dropdown item 02 ----- company -----
  let b = 1;
  company.addEventListener("click", () => {
    if (b == 1) {
      window.document.querySelector(".company").style.display = "block";
      window.document
        .querySelector(".company")
        .classList.add("dropdownAnimation");

      //caret control
      window.document.querySelectorAll(".caretCompany")[0].style.transform =
        "rotate(180deg)";
      window.document.querySelectorAll(".caretCompany")[1].style.transform =
        "rotate(180deg)";

      return (b = 0);
    } else {
      window.document.querySelector(".company").style.display = "none";

      //caret control
      window.document.querySelectorAll(".caretCompany")[0].style.transform =
        "rotate(360deg)";
      window.document.querySelectorAll(".caretCompany")[1].style.transform =
        "rotate(360deg)";

      return (b = 1);
    }
  });

  //dropdown item 03 ----- connect -----
  let c = 1;
  connect.addEventListener("click", () => {
    if (c == 1) {
      window.document.querySelector(".connect").style.display = "block";
      window.document
        .querySelector(".connect")
        .classList.add("dropdownAnimation");

      //caret control
      window.document.querySelectorAll(".caretConnect")[0].style.transform =
        "rotate(180deg)";
      window.document.querySelectorAll(".caretConnect")[1].style.transform =
        "rotate(180deg)";

      return (c = 0);
    } else {
      window.document.querySelector(".connect").style.display = "none";

      //caret control
      window.document.querySelectorAll(".caretConnect")[0].style.transform =
        "rotate(360deg)";
      window.document.querySelectorAll(".caretConnect")[1].style.transform =
        "rotate(360deg)";

      return (c = 1);
    }
  });

  // ------------- btn control header -------------

  const btnClass = doc.querySelector(".btnControlMenu");

  //icon-close
  const btnClose =
    '<svg width="26" height="26" xmlns="http://www.w3.org/2000/svg"><path d="M23.607.98l1.414 1.413L14.414 13l10.607 10.607-1.414 1.414L13 14.414 2.393 25.021.98 23.607 11.586 13 .98 2.393 2.393.98 13 11.586 23.607.98z" fill="#FFF" fill-rule="evenodd"/></svg>';

  //icon-hamburger
  const btnShow =
    '<svg width="32" height="18" xmlns="http://www.w3.org/2000/svg"><g fill="#FFF" fill-rule="evenodd"><path d="M0 0h32v2H0zM0 8h32v2H0zM0 16h32v2H0z"/></g></svg>';

  let d = 1;
  btnControlMenu.addEventListener("click", () => {
    if (d == 1) {
      window.document.querySelector(".navbarContent").style.display = "block";
      window.document
        .querySelector(".navbarContent")
        .classList.add("controlMenu");

      btnClass.innerHTML = btnClose;

      return (d = 0);
    } else {
      window.document.querySelector(".navbarContent").style.display = "none";
      btnClass.innerHTML = btnShow;
      return (d = 1);
    }
  });

  window.onresize = function () {
    if (window.innerWidth > 980) {
      window.document.querySelector(".navbarContent").style.display = "flex";
    }
  };
})(document);
