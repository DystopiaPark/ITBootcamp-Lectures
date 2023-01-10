import generateImage from "./general.js";
let generateList = (parent) => {
  let list = document.createElement("ul");
  list.style.overflow = "hidden";
  list.style.listStyle = "none";
  parent.appendChild(list);
  return list;
};

let generateListItem = (parent, src) => {
  let listItem = document.createElement("li");
  listItem.style.float = "left";
  let img = generateImage(src);
  listItem.appendChild(img);
  parent.appendChild(listItem);
  return listItem;
};

let length = 3;

export { generateList, generateListItem, length };
