"use strict";

((doc) => {
  const headerClasses = {
    //Dropdown content
    dropdown: {
      targets: [
        doc.querySelector(".productTarget"),
        doc.querySelector(".companyTarget"),
        doc.querySelector(".connectTarget"),
      ],
      content: [
        doc.querySelector(".product"),
        doc.querySelector(".company"),
        doc.querySelector(".connect"),
      ],
    },

    //Menu Control
    btnControlMenu: doc.querySelector(".btnControlMenu"),
  };

  const {
    dropdown: { targets, content },
    btnControlMenu,
  } = headerClasses;

  // ------------- dropdown content -------------

  //dropdown item 01 ----- product -----

  let a = 1;

  const caret180_product = function caret180_product() {
    doc.querySelectorAll(".caretProduct")[0].style.transform = "rotate(180deg)";
    doc.querySelectorAll(".caretProduct")[1].style.transform = "rotate(180deg)";
  };

  const caret360_product = function caret360_product() {
    //caret control
    doc.querySelectorAll(".caretProduct")[0].style.transform = "rotate(360deg)";
    doc.querySelectorAll(".caretProduct")[1].style.transform = "rotate(360deg)";
  };

  targets[0].addEventListener("click", function click() {
    if (a == 1) {
      content[0].style.display = "block";
      doc.querySelector(".product").classList.add("dropdownAnimation");

      //caret control
      caret180_product();
      caret360_company(); //company
      caret360_connect(); //connect

      //hide menu
      content[1].style.display = "none";
      content[2].style.display = "none";

      return (a = 0);
    } else {
      content[0].style.display = "none";

      //caret control
      caret360_product();

      //hide menu
      content[1].style.display = "none";
      content[2].style.display = "none";
      return (a = 1);
    }
  });

  //dropdown item 02 ----- company -----

  let b = 1;

  const caret180_company = function caret180_company() {
    doc.querySelectorAll(".caretCompany")[0].style.transform = "rotate(180deg)";
    doc.querySelectorAll(".caretCompany")[1].style.transform = "rotate(180deg)";
  };

  const caret360_company = function caret360_company() {
    doc.querySelectorAll(".caretCompany")[0].style.transform = "rotate(360deg)";
    doc.querySelectorAll(".caretCompany")[1].style.transform = "rotate(360deg)";
  };

  targets[1].addEventListener("click", () => {
    if (b == 1) {
      content[1].style.display = "block";
      doc.querySelector(".company").classList.add("dropdownAnimation");

      //caret control
      caret180_company();

      caret360_product(); //product
      caret360_connect(); //connect

      //hide menu
      content[0].style.display = "none";
      content[2].style.display = "none";

      return (b = 0);
    } else {
      content[1].style.display = "none";

      //caret control
      caret360_company();

      //hide menu
      content[0].style.display = "none";
      content[2].style.display = "none";
      return (b = 1);
    }
  });

  //dropdown item 03 ----- connect -----

  let c = 1;

  const caret180_connect = function caret180_connect() {
    doc.querySelectorAll(".caretConnect")[0].style.transform = "rotate(180deg)";
    doc.querySelectorAll(".caretConnect")[1].style.transform = "rotate(180deg)";
  };

  const caret360_connect = function caret360_connect() {
    doc.querySelectorAll(".caretConnect")[0].style.transform = "rotate(360deg)";
    doc.querySelectorAll(".caretConnect")[1].style.transform = "rotate(360deg)";
  };

  targets[2].addEventListener("click", () => {
    if (c == 1) {
      content[2].style.display = "block";
      doc.querySelector(".connect").classList.add("dropdownAnimation");

      //caret control
      caret180_connect();
      caret360_product(); //product
      caret360_company(); //company

      //hide menu
      content[0].style.display = "none";
      content[1].style.display = "none";

      return (c = 0);
    } else {
      content[2].style.display = "none";

      //caret control
      caret360_connect();

      //hide menu
      content[0].style.display = "none";
      content[1].style.display = "none";

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
      doc.querySelector(".navbarContent").style.display = "block";
      doc.querySelector(".navbarContent").classList.add("controlMenu");

      btnClass.innerHTML = btnClose;

      return (d = 0);
    } else {
      doc.querySelector(".navbarContent").style.display = "none";
      btnClass.innerHTML = btnShow;
      return (d = 1);
    }
  });

  window.onresize = function () {
    if (window.innerWidth > 980) {
      doc.querySelector(".navbarContent").style.display = "flex";
    }
  };
})(document);
