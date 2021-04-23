const mySVG =
  '<svg xmlns="http://www.w3.org/2000/svg" width="3175" height="3174"><defs><linearGradient id="a" x1=".639%" x2="99.361%" y1="0%" y2="100%"><stop offset="0%" stop-color="#FF8F71"/><stop offset="100%" stop-color="#FF3E55"/></linearGradient></defs><path fill="url(#a)" fill-rule="evenodd" d="M1973.15 1193.185v788.41h-786.766v-688.41c0-55.228 44.772-100 100-100h686.767zm-1310.445-1.171c217.26 0 393.383 176.124 393.383 393.383v1.645c0 217.26-176.123 393.383-393.383 393.383S269.322 1804.3 269.322 1587.042v-1.645c0-217.26 176.124-393.383 393.383-393.383zm392.212-926.418v688.41c0 55.23-44.771 100-100 100H268.151v-788.41h786.766zm918.234 0v788.41h-686.767c-55.228 0-100-44.771-100-100v-688.41h786.767z" transform="rotate(22 162.072 2556.164)"/></svg>';

const mySVG64 = window.btoa(mySVG);
class BgHeader {
  insertBgHeader() {
    const bgHeader = document.createElement("div");
    bgHeader.className = "bgHeader";
    document.querySelector(".header").prepend(bgHeader);
    bgHeader.style.backgroundImage =
      "url('data:image/svg+xml;base64," + mySVG64 + "')";
  }
}

export default BgHeader;
