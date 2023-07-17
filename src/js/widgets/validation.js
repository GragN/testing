export default class Validation {
  constructor(element) {
    this.element = element;
    this.validation = this.validation.bind(this);
    this.item = this.element.querySelector(".btn");
    this.input = this.element.querySelector(".form-control");
    this.item.addEventListener("click", this.validation);
  }

  validation() {
    // алгоритм Луна
    let array = Array.from(
      this.input.value.split("").map((item) => Number(item))
    ).reverse();
    let even = 0;
    let not_even = 0;
    if (array.includes(NaN, 0) || array.length == 0) {
      this.input.style.border = "2px solid red";
    } else {
      for (let n = 0; array.length > n; n++) {
        if (n % 2 == 0) {
          even += array[n];
        } else if (n % 2 == 1) {
          if (array[n] * 2 < 10) {
            not_even += array[n] * 2;
          } else if (array[n] * 2 >= 10) {
            let num = array[n] * 2;
            let arr = ("" + num).split("").map(Number);
            const add = (arr) => arr.reduce((a, b) => a + b, 0);
            not_even += add(arr);
          }
        }
      }
    }

    if ((even + not_even) % 10 == 0 && even + not_even != 0) {
      this.input.style.border = "2px solid green";
    } else {
      this.input.style.border = "2px solid red";
    }
  }
}
