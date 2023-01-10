// import generateImage from "./modules/general.js";
// import {
//   generateTable,
//   generateTableRow,
//   generateTableItem, //generateItem as generateTableItem
// } from "./modules/table.js";

// document.body.append(generateImage("images/photo1.jpg"));

// import { generateList, generateListItem } from "./modules/list.js";

// let ul = generateList(document.body);

// generateListItem(ul, "images/photo1.jpg");
// generateListItem(ul, "images/photo2.jpg");
// generateListItem(ul, "images/photo3.jpg");

// let table = generateTable(document.body);
// let tr = generateTableRow(table);
// generateTableItem(tr, "images/photo1.jpg");
// generateTableItem(tr, "images/photo2.jpg");
// generateTableItem(tr, "images/photo3.jpg");

import * as Lista from "./modules/list.js";
import * as Tabela from "./modules/table.js";

let ul = Lista.generateList(document.body);
// Lista.length = 2; - ne moze, ovo je read-only svojstvo
for (let i = 1; i <= Lista.length; i++) {
  Lista.generateListItem(ul, `images/photo${i}.jpg`);
}

let table = Tabela.generateTable(document.body);
let tr = Tabela.generateTableRow(table);
for (let i = 1; i <= Tabela.length; i++) {
  Tabela.generateTableItem(tr, `images/photo${i}.jpg`);
}
