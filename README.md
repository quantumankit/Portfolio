# 🚀 Personal Portfolio Website (React + Tailwind CSS)

A modern, responsive personal portfolio website built using **React.js** and **Tailwind CSS**. This project showcases your skills, projects, and contact information with smooth animations and a clean UI.

---

## 📌 Features

* ⚡ Fully Responsive Design (Mobile + Desktop)
* 🎨 Modern UI with Tailwind CSS
* 🔀 Routing using React Router
* ✨ Smooth Animations & Effects
* 🧑‍💻 Project Showcase Section
* 📄 Resume Download Option
* 📬 Contact Form
* 🔔 Toast Notifications
* 🎯 Typing Text Effect
* 🌀 3D Tilt Hover Effects

---

## 🛠️ Tech Stack

* **Frontend:** React.js
* **Styling:** Tailwind CSS
* **Routing:** react-router-dom
* **Icons:** react-icons
* **Animations:** react-typing-effect, react-parallax-tilt
* **Notifications:** react-toastify

---

## 📦 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/portfolio.git
```

### 2️⃣ Navigate to project folder

```bash
cd portfolio
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start development server

```bash
npm run dev
```

or (if using CRA):

```bash
npm start
```

---

## 📁 Folder Structure

```
portfolio/
│── public/
│── src/
│   ├── components/
│   ├── pages/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx / index.js
│── package.json
│── tailwind.config.js
│── README.md
```

---

## ⚙️ Tailwind Setup (if not configured)

```bash
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p
```

Add this to your CSS:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🔔 Toast Setup

```js
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer />
    </>
  );
}
```

---

## ✨ Customization

* Update your **name, skills, and projects** in the `src/data` or components.
* Replace images in `assets/`.
* Add your resume in `public/`.
* Modify colors in `tailwind.config.js`.

---

## 📸 Screenshots

*Add your project screenshots here*

---

## 🌐 Deployment

You can deploy using:

* Vercel
* Netlify
* GitHub Pages

---

## 🤝 Contributing

Contributions are welcome! Feel free to fork this repo and submit a pull request.

---

## 📧 Contact

* Email: [your-email@example.com](mailto:your-email@example.com)
* LinkedIn: https://linkedin.com/in/your-profile
* GitHub: https://github.com/quantumankit

---

## ⭐ Support

If you like this project, give it a ⭐ on GitHub!

---

## 📝 License

This project is licensed under the MIT License.

---

💡 *Built with passion using React & Tailwind CSS*
