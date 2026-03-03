// ---------- DOM elements ----------
const taskInput = document.getElementById('newTaskInput');
const addButton = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// ---------- helper: create a new <li> task item ----------
function createTaskItem(taskText, isCompleted = false) {
    // trim to avoid accidental empty spaces
    const safeText = taskText.trim() === '' ? 'untitled task' : taskText.trim();

    // build elements
    const li = document.createElement('li');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.className = 'task-checkbox';
    checkbox.checked = isCompleted;

    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = safeText;

    const editBtn = document.createElement('button');
    editBtn.className = 'edit';
    editBtn.textContent = 'Edit';

    const removeBtn = document.createElement('button');
    removeBtn.className = 'remove';
    removeBtn.textContent = 'Remove';

    // assemble
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(editBtn);
    li.appendChild(removeBtn);

    // if task is initially completed, reflect it with a class (for strike-through)
    if (isCompleted) {
        li.classList.add('completed');
    }

    return li;
}

// ---------- add new task from input field ----------
function addTaskFromInput() {
    const rawText = taskInput.value;
    if (rawText.trim() === '') {
        alert('Please enter a task.');
        return;
    }
    const newLi = createTaskItem(rawText, false);
    taskList.appendChild(newLi);
    taskInput.value = '';
    taskInput.focus();
}

// ---------- initial sample tasks (as shown in assignment figure) ----------
function loadInitialTasks() {
    // 1) "Finish CS2205 programming assignment" -> checked (completed)
    const task1 = createTaskItem('Finish CS2205 programming assignment', true);
    // 2) "Buy vegetables" -> unchecked
    const task2 = createTaskItem('Buy vegetables', false);

    taskList.appendChild(task1);
    taskList.appendChild(task2);
}

// ---------- EVENT DELEGATION (core requirement) ----------

// 1) CLICK delegation for Edit / Remove buttons
taskList.addEventListener('click', function(ev) {
    const editBtn = ev.target.closest('.edit');
    if (editBtn) {
        const li = editBtn.closest('li');
        if (!li) return;

        const taskSpan = li.querySelector('.task-text');
        if (!taskSpan) return;

        const currentText = taskSpan.textContent;
        // open prompt dialog (exactly like figure)
        const newText = prompt('Edit task:', currentText);

        if (newText !== null) {
            const trimmed = newText.trim();
            if (trimmed === '') {
                alert('Task cannot be empty. Keeping original.');
            } else {
                taskSpan.textContent = trimmed;
            }
        }
        return;
    }

    const removeBtn = ev.target.closest('.remove');
    if (removeBtn) {
        const li = removeBtn.closest('li');
        if (li) {
            li.remove();
        }
        return;
    }
});

// 2) CHANGE delegation for checkbox (mark complete/incomplete)
taskList.addEventListener('change', function(ev) {
    const checkbox = ev.target.closest('.task-checkbox');
    if (!checkbox) return;

    const li = checkbox.closest('li');
    if (!li) return;

    // update 'completed' class based on checkbox.checked
    if (checkbox.checked) {
        li.classList.add('completed');
    } else {
        li.classList.remove('completed');
    }
});

// ---------- add button listener ----------
addButton.addEventListener('click', addTaskFromInput);

// optional: press Enter in input field to add task
taskInput.addEventListener('keypress', function(ev) {
    if (ev.key === 'Enter') {
        ev.preventDefault();
        addTaskFromInput();
    }
});

// ---------- initialise with the two example tasks ----------
loadInitialTasks();

// -------------------------------------------------------------
// CODE INTENT COMMENTS (embedded)
// -------------------------------------------------------------
// - createTaskItem() builds a consistent <li> with checkbox, span, edit/remove.
// - event delegation (listening on parent <ul>) for both click and change:
//   * click: detects .edit (via closest) → prompt edit; .remove → delete parent li.
//   * change: detects checkbox → toggles .completed class for visual line‑through.
// - this approach handles all current & future tasks without extra listeners.
// - the prompt dialog replicates the exact "This page says" style from the figure.
// - initial tasks match the screenshot: one checked, one unchecked.
// - CSS uses .completed .task-text to apply strike‑through.
// - all variable/function names are descriptive (addTaskFromInput, createTaskItem, etc.)
// -------------------------------------------------------------