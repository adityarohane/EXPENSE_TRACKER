# 💰 Expense Tracker Web App

A full-featured **React Expense Tracker** that lets you log, view, and manage personal income and expenses. Built with React, React Router, Hooks, and Toastify for notifications.

---

## 📦 Features

- ✅ **Add transactions** with description and positive (income) or negative (expense) amounts  
- 📊 **View history** of expenses and income  
- ❌ **Delete transactions** with immediate UI update  
- 🔢 **Summary display**: Current Balance, Total Income, Total Expense  
- 🛎️ **Notifications**: Success and error messages via Toastify  
- 🔐 **Simulated authentication flow**: Logout button & token-check redirect  
- ⚙️ **Routing** with React Router (Home and Login pages)

---

## 🛠️ Tech Stack

- **Frontend**: React (Hooks), React Router, React Toastify  
- **Styling**: CSS modules or plain CSS (flexbox layout)  
- **API interactions**: Fetch with authorization headers  
- **State Management**: `useState`, `useEffect` for everything  
- **Notifications**: `react-toastify`

---

## 🚀 Getting Started

### Prerequisites

- Node.js v16+ and npm

### Installation & Running Locally

```bash
git clone https://github.com/adityarohane/EXPENSE_TRACKER.git
cd EXPENSE_TRACKER
npm install

# Configure API URL if needed (edit `src/utils.js`)
npm start
