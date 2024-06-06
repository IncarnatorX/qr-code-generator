let qrInput = document.querySelector("#qr-input");
let sizes = document.querySelector("#sizes");
let generateBtn = document.querySelector("#generate-btn");
let downloadBtn = document.querySelector("#download-btn");
let qrContainer = document.querySelector(".qr-image");

generateBtn.addEventListener("click", (e) => {
  e.preventDefault();
  isInputEmptyChecker();
});

sizes.addEventListener("change", (e) => {
  let size = e.target.value;
  isInputEmptyChecker();
});

function isInputEmptyChecker() {
  if (qrInput.value !== "" || qrInput.value.length > 0) {
    generateQRCode();
  } else {
    alert("Please input a text or a URL. Field can't be empty..!!");
    sizes.value = "100";
  }
}

function generateQRCode() {
  qrContainer.innerHTML = "";
  new QRCode(qrContainer, {
    text: qrInput.value,
    width: sizes.value,
    height: sizes.value,
    colorDark: "#000000",
    colorLight: "#ffffff",
  });
}

downloadBtn.addEventListener("click", () => {
  let image = document.querySelector(".qr-image img");
  if (image !== null) {
    downloadBtn.setAttribute("href", image.getAttribute("src"));
  } else {
    downloadBtn.setAttribute(
      "href",
      `${document.querySelector("canvas").toDataURL()}`
    );
  }
});
