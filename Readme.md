# Password Generator 🔐

Welcome to the **Password Generator** project! This is a simple and user-friendly web app that generates secure passwords based on user preferences. It allows users to select the length of the password and the types of characters (uppercase, lowercase, numbers, symbols) they want in their password. 🛡️

## Table of Contents 📖

- [Project Description](#project-description)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup Instructions](#setup-instructions)
- [Usage](#usage)
- [File Structure](#file-structure)
- [Contributing](#contributing)
- [License](#license)

## Project Description ✨

This project helps users generate a **secure password** with the following options:

- Select password length (1 to 20 characters)
- Include/exclude:
  - Uppercase letters
  - Lowercase letters
  - Numbers
  - Symbols

Users can also copy the generated password to the clipboard with a single click. The app dynamically calculates the password's strength based on the selected options and displays it visually.

## Features 💡

- Generate a random password with customizable length and character sets.
- Visual indication of password strength (Weak, Medium, Strong).
- Copy-to-clipboard functionality with a tooltip message.
- Responsive design for different screen sizes.

## Technologies Used 🛠️

- **HTML5**: For creating the structure of the web page.
- **CSS3**: For styling and making the UI visually appealing.
- **JavaScript**: For handling the logic behind password generation and user interactions.
- **Google Fonts**: Integrated custom fonts for a modern look.

## Setup Instructions 🚀

To run this project locally, follow these steps:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/mayanksaini/password-generator.git
   ```
2. **Navigate to the project directory**:
   ```bash
   cd password-generator
   ```
3. **Open `index.html`**:
   You can directly open the `index.html` file in your browser to use the app.

4. Alternatively, you can use **Live Server** in Visual Studio Code for a better experience.

## Usage 📚

1. **Set Password Length**:
   Use the slider to select the desired password length (1 to 20 characters).

2. **Choose Character Types**:
   Check the boxes to include/exclude uppercase letters, lowercase letters, numbers, and symbols in your password.

3. **Generate Password**:
   Click the "Generate Password" button to create a secure password based on your selections.

4. **Copy Password**:
   Click the copy button 📋 next to the generated password to copy it to the clipboard. A tooltip message will appear saying "Copied!".

## File Structure 📂

```
password-generator/
│
├── assets/               # Contains images and icons
│   ├── generator.png
│   └── copy.svg
│
├── index.html            # Main HTML file
├── style.css             # Styling file
└── script.js             # JavaScript logic for the password generator
```

## Contributing 🤝

We welcome contributions! If you would like to improve this project or fix a bug, feel free to submit a pull request.

1. **Fork the repository**.
2. **Create a new branch** for your changes:
   ```bash
   git checkout -b feature-branch
   ```
3. **Commit your changes**:
   ```bash
   git commit -m "Add new feature"
   ```
4. **Push to your branch**:
   ```bash
   git push origin feature-branch
   ```
5. **Open a Pull Request**.

## License 📜

This project is licensed under the **MIT License**. Feel free to use and modify it as per your needs!

---

Enjoy creating strong and secure passwords! 😊
