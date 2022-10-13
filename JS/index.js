import data from "../data.json" assert { type: "json" };

// En esta zona se llama el contenedor de las barras y se optienen los datos de el JSON
// Se utilizan los datos de el JSON para crear las barras y se les da un tamaño y color y se crea un array al cual se le agrgan los datos de el JSON

let charsecontainer = document.querySelector(".chart__bars-container");
let values = [];

data.forEach((e) => {
  values.push(e.amount);
  charsecontainer.innerHTML += `<div class="chart__bar">
  <div class="chart__bar--label">$${e.amount}</div>
  <div class="chart__bar--day">${e.day}</div>
</div> `;
});

// Aqui se busca el valor maximos que nosa da el JSON y se le da un tamaño a las barras

let maxValue = Math.max(...values),
  maxHeight = 150;

let bars = document.querySelectorAll(`.chart__bar`);
bars = [...bars];

// En es forEach se itera por el arreglo creado a partir de todas la barras llamdas desde el doom y se le da un tamaño y color

bars.forEach((bar) => {
  let nuevoValor = parseFloat(bar.childNodes[1].innerText.slice(1));
  let actualHeight = (nuevoValor * maxHeight) / maxValue;

  if (nuevoValor == maxValue) {
    bar.style.backgroundColor = ` rgb(118, 181, 188)`;
  }

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
