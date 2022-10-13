import data from "../data.json" assert { type: "json" };

let charsecontainer = document.querySelector(".chart__bars-container");


let values =[]

data.forEach((e) => {
  values.push(e.amount)
  charsecontainer.innerHTML += `<div class="chart__bar">
  <div class="chart__bar--label">$${e.amount}</div>
  <div class="chart__bar--day">${e.day}</div>
</div> `;
});





console.log(values)

let maxValue = Math.max( ...values),
maxHeight = 150;

console.log(maxValue)


let bars = document.querySelectorAll(`.chart__bar`);
bars = [...bars];




bars.forEach((bar) => {

  let nuevoValor = parseFloat( bar.childNodes[1].innerText.slice(1));
  let actualHeight = (nuevoValor * maxHeight) / maxValue

  if (nuevoValor== maxValue) {

  bar.style.backgroundColor = ` rgb(118, 181, 188)`

};
  

  bar.style.height = `${actualHeight}px`;

  bar.addEventListener("mouseover", (e) => {
    let label = e.target.childNodes[1];
    label.style.display = "block";
  });
  bar.addEventListener("mouseout", (e) => {
    let label = e.target.childNodes[1];
    label.style.display = "none";
  });
});
