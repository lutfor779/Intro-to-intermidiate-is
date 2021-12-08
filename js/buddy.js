const loadBuddies = () => {
    fetch('https://randomuser.me/api/?results=5')
        .then(res => res.json())
        .then(data => displayUsers(data));
}
const displayUsers = users => {
    const puttingArea = document.getElementById('users');
    for (const user of users.results) {
        const div = document.createElement('div');
        div.style.border = '2px solid cyan';
        div.innerHTML = `
        <h3>Name: ${user.name.title} ${user.name.first} ${user.name.last}</h3>
        <p>Email: ${user.email}</p>`
        puttingArea.appendChild(div);
    }
}

// country
const loadCountries = () => {
    fetch('https://restcountries.eu/rest/v2/all')
        .then(res => res.json())
        .then(data => displayCountries(data));
}
const displayCountries = countries => {
    // for (const country of countries) {
    //     console.log(country.name);
    // }

    // do same with forEach()
    // countries.forEach(country => {          //forEach works in array
    //     console.log(country.name);
    // })

    countries.forEach(country => {
        const div = document.createElement('div');
        div.style.border = '2px solid red';
        div.style.margin = '10px';
        div.innerHTML = `
        <h1>${country.name}</h1>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name}')">Detail</button>`;
        document.getElementById('countries').appendChild(div);
    })
}

const loadCountryByName = name => {
    fetch(`https://restcountries.eu/rest/v2/name/${name}`)
        .then(res => res.json())
        .then(data => displayCountryByName(data[0]));   //for element of array
}
const displayCountryByName = countryByName => {
    document.getElementById('country').innerHTML = `
    <p>${countryByName.population}</p>
    <img width = "200px" src="${countryByName.flag}">`;
}