import Validation from "../widgets/validation";

test("validation", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".table");
    const validation = new Validation(container);
    validation.validation();
    const inner = document.querySelector(".form-group");
    expect(inner.innerHTML).toBe(validation.input.parentElement.innerHTML);
  });
});
