const apiURL = 'https://jsonplaceholder.typicode.com/users';
const userList = document.getElementById('userList');
const searchInput = document.getElementById('searchInput');
let users = [];

async function fetchUsers() {
    try {
        const response = await fetch(apiURL);
        users = await response.json();
        renderUsers(users);
    } catch (error) {
        console.error('Error al obtener datos', error);
    }
}

function renderUsers(data) {
    userList.innerHTML = '';
    data.forEach(user => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<strong>${user.name}</strong><p>${user.email}</p>`;
        userList.appendChild(card);
    });
}

searchInput.addEventListener('input', (e) => {
    const text = e.target.value.toLowerCase();
    const filtered = users.filter(user => user.name.toLowerCase().includes(text));
    renderUsers(filtered);
});

fetchUsers();