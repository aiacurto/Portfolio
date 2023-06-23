function contact() {
  let hello = confirm("Do you want to get in touch via email?");
  if (hello === true) {
    alert("My email is adelina1@hotmail.co.uk Thank you! Have a great day.");
  } else {
    alert("Have a great day.");
  }
}
let button = document.querySelector("Hello");
button.addEventListener("click", contact);
