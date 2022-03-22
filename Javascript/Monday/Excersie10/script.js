document.querySelector(".text").textContent = "Carl Ulvesten";

const button = document.querySelector(".Button");

button.addEventListener("click", () => {
  console.log(document.querySelector("input").value);

  if (button.style.background === "red") button.style.background = "blue";
  else button.style.background = "red";
});
