# 🍽️ Nummy Eats

> *bold, authentic kenyan flavours — from our hearts to your plates* 🫶🏾

A warm, fully responsive restaurant website for **Nummy Eats**, a Kenyan restaurant with three Nairobi branches serving real, homestyle Kenyan food. Built with love as a Web Application Development Project (WADP) at Strathmore University. ✨

🔗 **Live site:** [nummyeats.github.io](https://ethereal-edith.github.io/nummyeats-WADP/)

---

## 🌿 What is Nummy Eats?

Nummy Eats is your go-to spot for ugali, nyama choma, pilau, mahamri, and everything in between 🥘. This website lets customers:

- 📖 Browse the full menu with live search
- 📅 Make a table reservation at any of the three branches
- ⭐ Leave (and read) customer reviews
- 📍 Find branch locations and opening hours
- 💼 Explore career opportunities
- 📬 Get in touch with the team

---

## 🛠️ Built With

| Technology | Why |
|---|---|
| HTML5 | Semantic, accessible page structure |
| CSS3 + Bootstrap 5 | Responsive layout, components, and toasts |
| Vanilla JavaScript | Form logic, localStorage, and live search |
| Georgia serif | Warm, editorial brand feel 🤎 |

---

## ✨ Features

🔍 **Live Menu Search** — filter dishes by name, ingredient, or price as you type, no button needed

📅 **Reservations** — pick your branch, date, time and group size, get a toast confirmation

📬 **Contact Form** — sends a message with a little toast pop-up when submitted 🍞

⭐ **Reviews** — submit a review and it appears instantly on the page, and stays there next time you visit thanks to `localStorage`

❓ **FAQ** — accordion-style answers organised by category

🎨 **Consistent brand identity** — warm brown, forest green and gold throughout every single page

---

## 📁 Project Structure


```bash
nummyeats-WADP/
├── index.html              # Home page
├── html/                   # All other pages
│   ├── about.html
│   ├── branches.html
│   ├── careers.html
│   ├── contact.html
│   ├── faq.html
│   ├── gallery.html
│   ├── menu.html
│   ├── reservations.html
│   └── reviews.html
├── css/
│   └── style.css           # Custom theme, layered on Bootstrap
├── js/
│   └── main.js              # Menu search, form validation, toasts, review storage
├── assets/                  # Images (food, branches, logo)
├── README.md
└── LICENSE
```

---

## 🚀 Running Locally

No installations, since it is a static sie

```bash
git clone https://github.com/ethereal-edith/nummyeats-WADP.git
cd nummyeats-WADP
```

Then just open `index.html` in your browser — or use **Live Server** in VS Code for the best experience.

> 💡 Reviews are saved to `localStorage` so they persist in your browser between visits!

---

## 🌸 Challenges & What I Learned

- Keeping **10+ pages visually consistent** with one shared stylesheet — solved with a clear per-page CSS naming convention
- Understanding when to use **Bootstrap utilities vs custom CSS** — Bootstrap for layout, custom for brand styling
- Writing **vanilla JS** for real interactivity: form validation, DOM manipulation, localStorage, and live filtering
- Debugging the classic `fixed-top` navbar overlap 😅

**Future features I'd love to add 🌱**
- [ ] Real backend for reservations (Django + DRF 👀)
- [ ] Admin dashboard to manage reviews
- [ ] Delivery tracking integration
- [ ] Dark mode 🌙

---

## 👩🏾‍💻 Author

Made with way too much chai ☕ and love by **Edith Agai**

🐙 GitHub: [@ethereal-edith](https://github.com/ethereal-edith)  
🎓 Strathmore University — Web Application Development, 2026

---

## 📜 License

For academic purposes only © Edith Agai 2026 🤎  
Please don't steal my pilau recipe. 🍚