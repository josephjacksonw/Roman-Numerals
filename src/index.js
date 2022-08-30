import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import numCheck from './numeral';
import roman from './roman';

function handleForm(e) {
  e.preventDefault();
  let input = document.getElementById("numInput").value;
  let output = "";
  if (numCheck(input) != input) {
    output = "Error, input is not a number";
  } else {
    output = roman(input);
  }
  document.getElementById("result").innerText = output;
}

document.querySelector("form#number").addEventListener("submit", handleForm);