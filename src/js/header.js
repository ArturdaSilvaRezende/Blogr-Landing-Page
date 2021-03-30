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

  let a = 1;
  product.addEventListener("click", () => {
    if (a == 1) {
      window.document.querySelector(".product").style.display = "block";
      window.document
        .querySelector(".product")
        .classList.add("dropdownAnimation");
      return (a = 0);
    } else {
      window.document.querySelector(".product").style.display = "none";
      return (a = 1);
    }
  });

  let b = 1;
  company.addEventListener("click", () => {
    if (b == 1) {
      window.document.querySelector(".company").style.display = "block";
      window.document
        .querySelector(".company")
        .classList.add("dropdownAnimation");
      return (b = 0);
    } else {
      window.document.querySelector(".company").style.display = "none";
      return (b = 1);
    }
  });

  let c = 1;
  connect.addEventListener("click", () => {
    if (c == 1) {
      window.document.querySelector(".connect").style.display = "block";
      window.document
        .querySelector(".connect")
        .classList.add("dropdownAnimation");
      return (c = 0);
    } else {
      window.document.querySelector(".connect").style.display = "none";
      return (c = 1);
    }
  });

  // ------------- btn control header -------------
  let d = 1;
  btnControlMenu.addEventListener("click", () => {
    if (d == 1) {
      window.document.querySelector(".navbarContent").style.display = "block";
      window.document
        .querySelector(".navbarContent")
        .classList.add("controlMenu");
      return (d = 0);
    } else {
      window.document.querySelector(".navbarContent").style.display = "none";
      return (d = 1);
    }
  });

  window.onresize = function () {
    if (window.innerWidth > 980) {
      window.document.querySelector(".navbarContent").style.display = "flex";
    }
  };
})(document);
