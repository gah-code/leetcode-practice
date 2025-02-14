
# 🚀 LeetCode JavaScript Practice

A structured JavaScript practice environment for solving **LeetCode problems** efficiently with **ESLint, Jest, and Quokka.js**.

## 📌 Project Overview

This project is designed to **streamline problem-solving in JavaScript** by integrating:

- **ESLint** for code quality and best practices.
- **Jest** for testing solutions automatically.
- **Quokka.js** for real-time execution and debugging.
- **Automated script** for quickly creating new problems.

---

## 🛠️ Project Setup

### 1️⃣ **Clone the Repository**

```sh
git clone https://github.com/gah-code/leetcode-practice.git
cd leetcode-practice
```

### 2️⃣ **Install Dependencies**

```sh
npm install
```

### 3️⃣ **Setup ESLint for Linting**

```sh
npx eslint --init
```

🔹 **Custom ESLint Config** (`eslint.config.mjs`) is already set up to support Jest and Quokka.js.

---

## 🧪 Testing with Jest

Run all tests:

```sh
npm test
```

Run tests for a specific file:

```sh
npm test problems/fetch-with-retry.test.js
```

---

## ⚡ Using Quokka.js for Live Debugging

### **Installation**

1. Open **VS Code**.
2. Press **Cmd + Shift + X** (Mac) or **Ctrl + Shift + X** (Windows/Linux).
3. Search for **"Quokka.js"** and install the extension.

### **Quokka.js Commands**

| Command | Description |
|---------|-------------|
| `Cmd + Shift + P` → "Quokka.js: Start on Current File" | Runs Quokka in the open file |
| `Cmd + Shift + P` → "Quokka.js: Start on Current Project" | Runs Quokka for all configured files |
| `Cmd + K Q` | Stops Quokka |
| `Cmd + Shift + P` → "Quokka.js: Toggle Value Display" | Shows inline execution results |

---

## 📂 Folder Structure

```
leetcode-practice/
│── .quokka/                  # Quokka.js config
│── problems/                 # LeetCode problems
│   ├── fetch-with-retry.js   # Example problem solution
│   ├── fetch-with-retry.test.js  # Jest test for the problem
│── eslint.config.mjs         # ESLint flat config setup
│── package.json              # Project dependencies
│── problem-template.js       # Template for new problems
│── new-problem.sh            # Automation script for creating new problems
│── README.md                 # Project documentation
```

---

## 🚀 Workflow: How to Add a New Problem

1️⃣ **Create a New Problem File**  
Run the following script:

```sh
./new-problem.sh fetch-with-retry
```

This will:

- Create a new problem file inside `problems/`
- Pre-fill the file with the standard **problem template**
- Open it automatically in **VS Code**

2️⃣ **Implement the Solution**

- Write the function inside the newly created `.js` file.
- Use **Quokka.js** for real-time debugging.

3️⃣ **Write Tests**

- Create a test file in `problems/` (if not generated automatically).
- Use **Jest** to write test cases.

4️⃣ **Run Tests**

```sh
npm test
```

- Verify the solution with Jest before submitting.

---

## ✅ To-Do List & Future Enhancements 1.1.0

- [ ] **Auto-generate Jest test files** when creating new problems.
- [ ] **Integrate Prettier** for automatic code formatting.
- [ ] **Improve error handling** for the `new-problem.sh` script.
- [ ] **Add TypeScript support** for stronger typing in solutions.
- [ ] **Implement GitHub Actions** for continuous integration.
- [ ] **Create a VS Code snippet extension** for inserting the problem template easily.

---

## 📝 Recommendations for Best Learning Experience

✅ **Follow a structured approach:** Start with an easy problem, read the description carefully, implement, and test.  
✅ **Use Quokka.js:** Debug functions before running full Jest tests.  
✅ **Write detailed solution approaches:** Add comments to document thought processes.  
✅ **Refactor frequently:** Aim for clean, efficient, and readable code.  
✅ **Keep the repo organized:** Each problem should have a corresponding test file.  

---

## 💡 Have Suggestions?

Feel free to **contribute** or open an **issue** if you’d like to see additional features! 🚀  

---
