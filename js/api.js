function loadData() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(json => console.log(json))
}

function loadUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => displayUsers(data))
}

function loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => displayPosts(data))
}

function displayUsers(users) {
    for (const user of users) {
        const li = document.createElement('li');
        li.innerText = `Name: ${user.name};  Email: ${user.email}`;
        document.getElementById('users').appendChild(li);
    }
}
function displayPosts(posts) {
    for (const post of posts) {
        const div = document.createElement('div');
        div.classList.add('post');
        div.innerHTML = `<h1>${post.title}</h1>
        <p>${post.body}</p>`;
        document.getElementById('posts').appendChild(div);
    }
}


