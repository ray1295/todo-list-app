# 📝 **ToDo List Application (Angular 19)**

A simple, elegant, and reactive Single Page Application built using **Angular 19**, leveraging modern features such as **Signals**, **Computed**, and the latest structural directives (`@for()`, `@if()`).

---

## 🚀 **Project Overview**

This project provides a minimalistic ToDo List interface to easily manage tasks, prioritize them, and track deadlines.

### **Core Functionalities:**

- ✅ **Dashboard:**

  - Lists all unfinished tasks sorted by descending priority.
  - Highlights high-priority tasks with deadlines within 1 day.
  - Allows tasks to be marked completed or reverted if done mistakenly.
  - Shows completed tasks clearly separated.

- ➕ **Create Tasks:**

  - Fast creation with clear inputs (summary, description, priority, due date).
  - Defaults due date to 3 days from creation if unspecified.

- ✏️ **Edit Tasks:**

  - Easy modification of task details and priorities.

- 🗑 **Delete Tasks:**
  - Supports deletion of unfinished tasks with user confirmation.

---

## 🛠 **Tech Stack**

- **Angular 19** (Standalone Components)
- **RxJS Observables** for async handling
- **Signals & Computed properties** for reactive state management
- **Angular Router** for navigation
- **Reactive Forms Module** for form management
- **SCSS** for styling

---

## 📂 **Project Structure**

```
src
├── app
│   ├── components
│   │   ├── dashboard
│   │   └── todo-form
│   ├── models
│   │   └── todo-item.ts
│   ├── services
│   │   └── todo.service.ts
│   └── app.routes.ts
├── assets
└── styles.scss
```

---

## 🚩 **Installation & Running Locally**

**1. Clone the repository:**

```bash
git clone <your-repo-url>
cd todo-list-app
```

**2. Install dependencies:**

```bash
npm install
```

**3. Run the development server:**

```bash
npm run start
```

Navigate to [http://localhost:4200](http://localhost:4200).

---

## 🧪 **Testing & Mock API**

- All API calls are mocked with a **2-second artificial delay** to simulate real-world latency.
- Task IDs are generated using `uuid` on the client side.
- Data persists only during the current session (no backend/database integration).

---

## 🗒 **Assumptions**

- Tasks don't persist across page refreshes (mock implementation).
- Default due dates are set to 3 days from task creation when left empty.
- Form validations ensure a maximum of 30 characters for task summaries.

---

## 🎨 **Future Improvements**

Possible enhancements include:

- Integrating persistent backend storage (Firebase, Supabase).
- Enhanced styling & UI/UX improvements.
- Authentication for user-specific task management.

---

## 📄 **License**

MIT License © [Your Name]

---
