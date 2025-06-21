const buttons = document.querySelectorAll(".btn-dropdown");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const menu = button.nextElementSibling;
    const icon = button.querySelector(".dropdown-arrow");

    if (menu.style.display === "none" || menu.style.display === "") {
      menu.style.display = "block";
      icon.src = "./images/icon-arrow-up.svg";
    } else {
      menu.style.display = "none";
      icon.src = "./images/icon-arrow-down.svg";
    }
  });
});
