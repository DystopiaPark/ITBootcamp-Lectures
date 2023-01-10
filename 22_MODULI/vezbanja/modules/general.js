let generateImage = (src) => {
  let picture = document.createElement("img");
  picture.src = src;
  picture.style.width = "400px";
  return picture;
};
export default generateImage;
