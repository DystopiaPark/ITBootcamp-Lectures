import generateImage from "./general.js";

let generateTable = (parent) => {
  let tabela = document.createElement("table");
  tabela.style.border = "1px solid black";
  parent.appendChild(tabela);
  return tabela;
};

let generateTableRow = (parent) => {
  let redTabele = document.createElement("tr");
  redTabele.style.border = "1px solid black";
  parent.appendChild(redTabele);
  return redTabele;
};

let generateTableItem = (parent, src) => {
  let podatakTabele = document.createElement("td");
  podatakTabele.style.border = "1px solid black";

  let img = generateImage(src);
  podatakTabele.appendChild(img);
  parent.appendChild(podatakTabele);
};

const length = 3;

export { generateTable, generateTableRow, generateTableItem, length };
