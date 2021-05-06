function capitalizeString() {
   let input = document.getElementById("input");
   let headingElement = document.getElementById("modified-string");
   let string = input.value;
   headingElement.innerHTML = string[0].toUpperCase() +
      string.slice(1);
}