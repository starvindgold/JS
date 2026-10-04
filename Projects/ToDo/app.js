document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('todo-input');
    const addTask = document.getElementById('add-task');
    const todoList = document.getElementById('todo-list');

    const todos = JSON.parse(localStorage.getItem('todos')) || [];

    const saveTodos = () => {
        localStorage.setItem('todos', JSON.stringify(todos));
    };

    const renderTodos = () => {
        todoList.innerHTML = '';
        todos.forEach((todo, index) => {
            const li = document.createElement('li');

            // Create checkbox
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.checked = todo.completed;
            checkbox.addEventListener('change', () => {
                todos[index].completed = checkbox.checked;
                saveTodos();
                renderTodos();
            });

            // Create text node
            const text = document.createElement('span');
            text.textContent = todo.text;
            if (todo.completed) {
                text.classList.add('completed');
            }

            // Create delete button
            const deleteTask = document.createElement('button');
            deleteTask.textContent = 'Remove';
            deleteTask.addEventListener('click', (e) => {
                e.stopPropagation();
                todos.splice(index, 1);
                saveTodos();
                renderTodos();
            });

            li.appendChild(checkbox);
            li.appendChild(text);
            li.appendChild(deleteTask);
            todoList.appendChild(li);
        });
    };

    addTask.addEventListener('click', () => {
        const text = input.value.trim();
        if (text !== '') {
            todos.push({ text, completed: false });
            saveTodos();
            renderTodos();
            input.value = '';
        }
    });

    renderTodos();
});
