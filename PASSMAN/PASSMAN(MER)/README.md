# &lt;PassMAN/&gt;

A full-stack password manager built with the MERN stack (MongoDB, Express, React, Node.js) and styled with Tailwind CSS. Save, view, copy, edit, and delete your website credentials — all persisted in MongoDB.


## ✨ Features

- **Add passwords** — store website, username, and password in one place
- **Show/hide password** toggle with custom animated eye icon
- **Copy to clipboard** — one click copy for site, username, or password with toast feedback
- **Edit & delete** entries with a stylish SweetAlert2 confirmation dialog
- **Persistent storage** — data saved in MongoDB, survives page refresh
- **Responsive UI** — works across mobile and desktop
- **Toast notifications** for save/copy/error feedback
- **Custom favicon & branding** — hand-designed lock logo

## 🛠 Tech Stack

**Frontend**
- React (Vite)
- Tailwind CSS
- react-toastify
- sweetalert2

**Backend**
- Node.js
- Express
- MongoDB + Mongoose
- CORS, body-parser, dotenv

## 📁 Project Structure

```
PASSMAN(MER)/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── passwordController.js
│   ├── models/
│   │   └── Password.js
│   ├── routes/
│   │   └── passwordRoutes.js
│   ├── .env
│   └── server.js
└── src/
    ├── api.js
    ├── components/
    │   ├── Navbar.jsx
    │   ├── Manager.jsx
    │   └── Footer.jsx
    ├── App.jsx
    └── main.jsx
```

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally (or a MongoDB Atlas connection string)

### Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in `backend/`:
```env
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/passman
```

Start the server:
```bash
node server.js
```

### Frontend Setup
```bash
npm install
npm run dev
```

Visit `http://localhost:5173` in your browser.

##  API Endpoints

| Method | Endpoint       | Description              |
|--------|----------------|---------------------------|
| GET    | `/`            | Fetch all saved passwords |
| POST   | `/`            | Add a new password entry  |
| DELETE | `/:id`         | Delete a password by ID   |

##  Future Improvements

- User authentication (login/signup) with JWT
- Password encryption before storing in the database
- Search/filter passwords by website
- Password strength indicator

##  Author

**Kartik Gupta**
- GitHub: [@kg877253](https://github.com/kg877253)
- LinkedIn: [kartikgupta8](https://linkedin.com/in/kartikgupta8)

## 📄 License

This project is open source and available for personal/educational use.