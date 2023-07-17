import Validation from "./widgets/validation";
import Identification from "./widgets/identification";

document.addEventListener("DOMContentLoaded", () => {
  const validation = new Validation(document.querySelector(".table"));
  const identification = new Identification(document.querySelector(".table"));
});
