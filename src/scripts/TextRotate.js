export default class TxtRotate {
  constructor(el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = period ? period : 2000;
    this.txt = "";
    this.tick();
    this.isDeleting = false;
  }
  tick() {
    const i = this.loopNum % this.toRotate.length;
    const fullTxt = this.toRotate[i];
    if (!this.isDeleting) {
      if (
        this.txt[this.txt.length - 2] === "D" &&
        this.txt[this.txt.length - 3] === "E"
      ) {
        this.txt = fullTxt.substring(0, this.txt.length + 21);
      } else if (
        this.txt[this.txt.length - 1] === "y" &&
        this.txt[this.txt.length - 2] === "h"
      ) {
        this.txt = fullTxt.substring(0, this.txt.length + 7);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
      }
    } else {
      if (
        this.txt[this.txt.length - 1] === ">" &&
        this.txt[this.txt.length - 2] === "'"
      ) {
        this.txt = fullTxt.substring(0, this.txt.length - 20);
      } else if (
        this.txt[this.txt.length - 1] === ">" &&
        this.txt[this.txt.length - 2] === "n"
      ) {
        this.txt = fullTxt.substring(0, this.txt.length - 7);
      } else {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
      }
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

    const that = this;
    let delta = 300 - Math.random() * 100;

    if (this.isDeleting) {
      delta /= 2;
    }

    if (!this.isDeleting && this.txt === fullTxt) {
      delta = this.period;
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      this.isDeleting = false;
      this.loopNum++;
      delta = 500;
    }

    setTimeout(() => {
      that.tick();
    }, delta);
  }
}
