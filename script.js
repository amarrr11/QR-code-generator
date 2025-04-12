const { jsPDF } = window.jspdf;
const qrText = document.getElementById('qr-text');
const sizes = document.getElementById('sizes');
const generateBtn = document.getElementById('generateBtn');
const downloadBtn = document.getElementById('downloadBtn');
const formatSelect = document.getElementById("format");
const qrContainer = document.querySelector('.qr-body');

let size = sizes.value;

// Event: Generate QR
generateBtn.addEventListener('click', (e) => {
    e.preventDefault(); //reload hone se rokega
    isEmptyInput();
});

// Event: Size change
sizes.addEventListener('change', (e) => {
    size = e.target.value;
    if (qrText.value.trim().length > 0) {
        generateQRCode();
    }
});

// Event: Download QR
downloadBtn.addEventListener("click", (e) => {
    e.preventDefault();

    const format = formatSelect.value.toLowerCase();  //JPG ko jpg me krne k liye
    const canvas = document.querySelector(".qr-body canvas");

    if (!canvas) {
        alert("Please generate a QR code first.");
        return;
    }

    if (format === "pdf") {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 10, 10, 180, 180);
        pdf.save("qr-code.pdf");
    } else {
        const link = document.createElement("a");
        link.href = canvas.toDataURL(`image/${format}`);
        link.download = `qr-code.${format}`;
        link.click();
    }
});

// CHECK if UPI format then allow payment

function buildUPIIfNeeded(inputText) {
    // If input is like just a VPA (upi address)
    if (/^[\w.-]+@[\w]+$/.test(inputText)) {
        // Build full UPI URI
        const name = "Your Name"; // Optional: You can ask this from user too
        const amount = "";       
        return `upi://pay?pa=${inputText}&pn=${encodeURIComponent(name)}&am=${amount}&cu=INR`;
    }
    return inputText; // If not VPA format, return as it is
}


// Function: Check if input is empty
function isEmptyInput() {
    if (qrText.value.trim().length > 0) {
        generateQRCode();
    } else {
        alert("Enter the text or URL to generate your QR code");
    }
}

// Function: Generate QR Code
function generateQRCode(){
    qrContainer.innerHTML = "";

    qrContainer.classList.remove('show');
    void qrContainer.offsetWidth;
    qrContainer.classList.add('show');

    const finalText = buildUPIIfNeeded(qrText.value); // Added here

    new QRCode(qrContainer, {
        text: finalText,
        width: parseInt(size),
        height: parseInt(size),
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
}
