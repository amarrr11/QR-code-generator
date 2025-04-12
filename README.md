# QR Code Generator Web App

This is a web-based QR Code Generator built using **HTML, CSS, and JavaScript (Vanilla)**. It allows users to enter any text or URL, choose the size and format of the QR code, and download it in different formats (PNG, JPG, SVG, PDF). It also supports basic animation and input validation. Additionally, the application can detect UPI IDs and generate payment-ready QR codes that open in payment apps like Google Pay or PhonePe when scanned.

---

## Features

- Input any text or URL to generate a QR code.
- Choose from multiple QR code sizes.
- Download the QR code in four formats: **PNG**, **JPG**, **SVG**, and **PDF**.
- Smooth vertical animation when QR code is generated.
- Auto-block download if no QR code is present.
- Automatically detects UPI IDs and generates QR codes that open payment apps when scanned.

---

## UPI Integration

If the user enters a UPI ID (e.g., `amarshyam9199@oksbi`), the code automatically converts it into a valid UPI payment string like:

```
upi://pay?pa=amarshyam9199@oksbi&pn=RecipientName
```

This makes the QR scan-ready for any UPI-compatible app.

---

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- [QRCode.js](https://github.com/davidshimjs/qrcodejs)
- [jsPDF](https://github.com/parallax/jsPDF)

---

## How to Run

1. Clone the repository:

```bash
git clone https://github.com/your-username/qr-code-generator.git
```

2. Open `index.html` in your browser.
3. Enter text or UPI ID, select size and format.
4. Click on **Generate** to view the QR code.
5. Click on **Download** to save it in the selected format.

---

## Future Enhancements

- Add logo/image overlay in QR.
- Add QR history feature.


