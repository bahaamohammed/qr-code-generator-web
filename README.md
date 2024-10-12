# QR Code Generator

This is a simple **QR Code Generator** built using **HTML5**, **CSS3**, and **JavaScript**. The app allows users to input a text or URL and generate a QR code that can be easily scanned.

## Features

- **Real-time QR Code Generation**: Generate a QR code instantly by entering any text or URL.
- **Responsive UI**: Simple and clean user interface.
- **Error Handling**: Shows a message when the input is empty.

## How to Use

1. Enter a text or URL in the input box.
2. Click the **Generate QR Code** button.
3. If the input is valid, a QR code will appear below the button.

## Project Structure

- `index.html`: The HTML structure of the project.
- `style.css`: The styling for the project.
- `script.js`: The JavaScript logic for generating the QR code.
  
## Technologies Used

- **HTML5**
- **CSS3**
- **JavaScript**

## Screenshot

![QR Code Generator](screenshot.png)

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/bahaamohammed/qr-code-generator-web.git
2. Navigate to the project directory:
    ```bash
    cd qr-code-generator-web
    ```
3. Open the `index.html` file in your browser to run the app locally.

## API

This project uses the [QR Code API](https://api.qrserver.com/v1/create-qr-code/) to retrieve QR Code using text input.

## Project Structure

```bash
├── index.html    # The main HTML file
├── style.css     # CSS styles for the app
└── script.js     # JavaScript file for fetching and displaying quotes