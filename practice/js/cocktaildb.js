// collect cocktails from cocktaildb.
const getData = () => {
    document.getElementById('search-result').textContent = '';
    document.getElementById('info').textContent = '';
    let search = document.getElementById('search-text');
    if (search.value == '') {
        const div = document.createElement('div');
        div.classList.add('text-center', 'fs-1', 'text-primary');
        div.innerText = 'Write what you want to show.';  
        document.getElementById('search-result').appendChild(div);
    }
    else {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search.value}`
        fetch(url)
            .then(res => res.json())
            .then(data => displayResults(data));
    }
    
    search.value = '';
}
const displayResults = results => {
    if (results.drinks == null) {
        const div = document.createElement('div');
        div.classList.add('text-center', 'fs-1', 'fw-bold', 'text-danger');
        div.innerText = 'No results found!';
        document.getElementById('search-result').appendChild(div);
    }
    else {
        results.drinks.forEach(result => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div class="card h-100">
            <a href="#info"><img onclick="getCocktail(${result.idDrink})" 
                src="${result.strDrinkThumb}"
                class="card-img-top"
                   alt="..."></a>
                <div class="card-body">
                    <h5 class="card-title">${result.strDrink}</h5>
                </div>
            </div>`;
            document.getElementById('search-result').appendChild(div);
        })
    }
}
// 
const getCocktail = id => {
    const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => cocktailInfo(data));
}
const cocktailInfo = cocktail => {
    document.getElementById('info').textContent = '';
    const div = document.createElement('div');
    div.innerHTML = `
        <div class="card mb-3 w-25 mx-auto">
            <img src="${cocktail.drinks[0].strDrinkThumb}"
                class="card-img-top"
                alt="...">
            <div class="card-body">
                <h5 class="card-title">${cocktail.drinks[0].strDrink}</h5>
                <p>${cocktail.drinks[0].strInstructions}</p>
            </div>
        </div>`;
    document.getElementById('info').appendChild(div);
}