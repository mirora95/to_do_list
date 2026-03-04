# Classic To-Do List App

A lightweight, retro-style to-do list application built with vanilla HTML, CSS, and JavaScript.  
This project demonstrates **event handling**, **event delegation**, and dynamic DOM manipulation – key concepts from the assignment.

## ✨ Features

- **Add new tasks** – Type into the input field and click "Add Task" (or press Enter).
- **Edit tasks** – Click the "Edit" button on any task; a prompt dialog opens to modify the text (exactly as shown in the assignment figure).
- **Remove tasks** – Click "Remove" to delete a task from the list.
- **Mark tasks as complete/incomplete** – Use the checkbox to toggle a strikethrough style.
- **Event delegation** – All interactions (edit, remove, checkbox change) are handled by a single listener on the parent `<ul>`, ensuring efficient event management for dynamically added tasks.

## 🧱 Technologies Used

- **HTML5** – semantic structure
- **CSS3** – custom styling with a clean, slightly retro aesthetic
- **Vanilla JavaScript (ES6)** – no frameworks or libraries

## 🚀 Getting Started

1. Clone this repository or download the ZIP.
2. Open the folder and launch `index.html` in any modern web browser.
3. Start managing your tasks!

No build steps or dependencies required.

## 📚 Learning Outcomes

This project was developed as part of an assignment to practice:

- Implementing **event listeners** for user interactions.
- Using **event delegation** to handle clicks on dynamic elements (edit/remove buttons, checkboxes).
- Dynamically updating the **DOM** to reflect application state (adding, editing, removing tasks, toggling completion).
- Writing clean, maintainable code with descriptive variable/function names and comments.

## 🖼️ Design Reference

The layout closely follows the provided figures:
- A top row with "Enter new task" label, text input, and green "Add Task" button.
- Each task item contains a checkbox, task text, "Edit" button, and "Remove" button.
- Completed tasks show a strikethrough.
- Editing opens a browser prompt dialog styled like the example.

## 📝 Notes

- The initial list is populated with two example tasks (one completed, one active) to match the screenshot.
- All tasks are stored only in the DOM; no persistent storage (refresh resets the list). This can be extended with `localStorage` if desired.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
