export default class Identification {
  constructor(element) {
    this.element = element;
    this.identification = this.identification.bind(this);
    this.item = this.element.querySelector(".btn");
    this.input = this.element.querySelector(".form-control");
    this.item.addEventListener("click", this.identification);
  }

  identification() {
    const array = Array.from(
      this.input.value.split("").map((item) => Number(item))
    );
    const card = this.element.querySelectorAll(".card");
    const ident = Number(array.slice(0, 2).join(""));
    const ident2 = Number(array.slice(0, 4).join(""));

    for (let n = 0; card.length > n; n++) {
      card[n].style.backgroundPosition = "0 0px";
      card[n].style.opacity = "1";
    }

    if (array[0] == 4) {
      const visa = this.element.querySelector(".card.visa");
      for (let n = 0; card.length > n; n++) {
        if (card[n] != visa) {
          card[n].style.backgroundPosition = "0 -25px";
          card[n].style.opacity = "0.3";
        }
      }
    } else if ([51, 52, 53, 55, 27].includes(ident)) {
      const mastercard = this.element.querySelector(".card.mastercard");
      for (let n = 0; card.length > n; n++) {
        if (card[n] != mastercard) {
          card[n].style.backgroundPosition = "0 -25px";
          card[n].style.opacity = "0.3";
        }
      }
    } else if ([60].includes(ident)) {
      const discover = this.element.querySelector(".card.discover");
      for (let n = 0; card.length > n; n++) {
        if (card[n] != discover) {
          card[n].style.backgroundPosition = "0 -25px";
          card[n].style.opacity = "0.3";
        }
      }
    } else if ([31, 35].includes(ident)) {
      const jcb = this.element.querySelector(".card.jcb");
      for (let n = 0; card.length > n; n++) {
        if (card[n] != jcb) {
          card[n].style.backgroundPosition = "0 -25px";
          card[n].style.opacity = "0.3";
        }
      }
    } else if ([30, 36, 38, 54].includes(ident)) {
      const diners = this.element.querySelector(".card.diners");
      for (let n = 0; card.length > n; n++) {
        if (card[n] != diners) {
          card[n].style.backgroundPosition = "0 -25px";
          card[n].style.opacity = "0.3";
        }
      }
    } else if ([37, 34].includes(ident)) {
      const americanexpress = this.element.querySelector(
        ".card.americanexpress"
      );
      for (let n = 0; card.length > n; n++) {
        if (card[n] != americanexpress) {
          card[n].style.backgroundPosition = "0 -25px";
          card[n].style.opacity = "0.3";
        }
      }
    }
  }
}
