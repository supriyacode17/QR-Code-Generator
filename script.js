const generateBtn = document.getElementById("generateBtn");
const qrContainer = document.getElementById("qrContainer");
const urlInput = document.getElementById("urlInput");

generateBtn.addEventListener("click", () => {
  const url = urlInput.value.trim();

  // Validate URL
  if (!url) {
    alert("Please enter a website URL");
    return;
  }

  // Clear previous QR code
  qrContainer.innerHTML = "";

  // Generate new QR code
  new QRCode(qrContainer, {
    text: url,
    width: 200,
    height: 200,
    colorDark: "#111112ff",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});
