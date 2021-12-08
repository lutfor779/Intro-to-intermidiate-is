// collect photos from jsonplaceholder.
const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/photos')
        .then(res => res.json())
        .then(data => displayPhotos(data));
}
getData();

// show results 
const displayPhotos = photos => {
    photos.forEach(photo => {
        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card h-100">
            <a href="#info"><img onclick="getPhoto(${photo.id})" src="${photo.thumbnailUrl}"
                class="card-img-top"
                   alt="..."></a>
                <div class="card-body">
                    <h5 class="card-title">${photo.title}</h5>
                </div>
            </div>`;
        document.getElementById('search-result').appendChild(div);
    })
}

// get photo and show photo
const getPhoto = id => {
    const url = `https://jsonplaceholder.typicode.com/photos/${id}`
    fetch(url)
        .then(res => res.json())
        .then(data => photoInfo(data));
}
const photoInfo = photo => {
    document.getElementById('info').textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card mb-3 w-50 mx-auto">
            <img src="${photo.url}"
                class="card-img-top"
                alt="...">
            <div class="card-body">
                <h5 class="card-title">${photo.title}</h5>
            </div>
        </div>`
    document.getElementById('info').appendChild(div);
}