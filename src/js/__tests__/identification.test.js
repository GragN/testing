import Identification from "../widgets/identification";

test("identification", () => {
  document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector(".table");
    const identification = new Identification(container);
    identification.Identification();
    const inner = document.querySelector(".form-group");
    expect(inner.innerHTML).toBe(identification.input.parentElement.innerHTML);
  });
});
