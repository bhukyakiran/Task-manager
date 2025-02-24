const API_URL = 'http://localhost:5000/api/tasks';

export const fetchTasks = async () => {
    const response = await fetch(API_URL);
    return response.json();
};

export const addTask = async (task) => {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(task),
    });
    return response.json();
};

export const fetchTaskById = async (id) => {
    const response = await fetch(`${API_URL}/${id}`);
    return response.json();
};

export const deleteTask = async (id) => {
    const response = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    return response.json();
};