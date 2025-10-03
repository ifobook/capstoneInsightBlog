# 📝 InsightBlog — A Node.js & Express Blog Project

InsightBlog is a simple blog application built with **Node.js**, **Express.js**, and **EJS templates**.  
The project helped me practice core backend web development concepts like routing, middleware, template rendering, and form handling.

---

## 🚀 Features
- Create new blog posts via a form (`/createPost`)
- View posts in a clean, responsive design (`/readPost`)
- Dynamic rendering with **EJS**
- Responsive UI using **Bootstrap**
- Organized `views` folder with multiple page templates

---

## 📚 What I Learned

While building this project, I practiced several **fundamental Node.js and Express.js concepts**:

### 1. Express App Setup
- How to initialize an Express server
- Setting up routes using `app.get()` and `app.post()`
- Understanding the difference between `app` (global app object) and `res` (response object)

```js
import express from "express";
const app = express();
const PORT = 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
