document.addEventListener("click", (event) => {
  const space_lamp = document.getElementById("lamp");
  const id = event.target.id;

  if (id == space_lamp.id) {
    space_lamp.classList.toggle("on");
  }
});
