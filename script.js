function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    if (taskText === '') return;

    const li = document.createElement('li');
    li.textContent = taskText;

    li.addEventListener('click', () => {
        li.classList.toggle('completed');
    });

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.style.background = 'red';
    deleteBtn.style.color = 'white';
    deleteBtn.style.border = 'none';
    deleteBtn.style.marginLeft = '10px';
    deleteBtn.style.cursor = 'pointer';
    deleteBtn.onclick = () => li.remove();

    li.appendChild(deleteBtn);
    document.getElementById('taskList').appendChild(li);

    taskInput.value = '';
}
