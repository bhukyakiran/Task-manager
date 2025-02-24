import { fetchTasks, addTask, fetchTaskById, deleteTask } from './api.js';

document.addEventListener('DOMContentLoaded', async () => {
    if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
        const tasks = await fetchTasks();
        const taskList = document.getElementById('task-list');
        tasks.forEach(task => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="task-details.html?id=${task._id}">${task.title}</a> - Priority: ${task.priority}`;
            taskList.appendChild(li);
        });
    }

    if (window.location.pathname === '/add-task.html') {
        const form = document.getElementById('task-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const task = {
                title: document.getElementById('title').value,
                description: document.getElementById('description').value,
                dueDate: document.getElementById('dueDate').value,
            };
            await addTask(task);
            window.location.href = 'index.html';
        });
    }

    if (window.location.pathname === '/task-details.html') {
        const urlParams = new URLSearchParams(window.location.search);
        const taskId = urlParams.get('id');
        const task = await fetchTaskById(taskId);
        const taskDetails = document.getElementById('task-details');
        taskDetails.innerHTML = `
            <h2>${task.title}</h2>
            <p>${task.description}</p>
            <p>Due Date: ${new Date(task.dueDate).toLocaleDateString()}</p>
            <p>Priority: ${task.priority}</p>
        `;
    }
});