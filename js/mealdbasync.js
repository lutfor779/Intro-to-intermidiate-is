const searchFood = async () => {
    document.getElementById('search-result').textContent = '';
    document.getElementById('click-result').textContent = '';
    if (document.getElementById('search-field').value == '') {
        const div = document.createElement('div');
        div.classList.remove('row');
        div.classList.add('mx-auto', 'text-center', 'text-white', 'rounded', 'w-50', 'bg-danger')
        div.innerHTML = '<h3>Please write something.</h3>';
        document.getElementById('search-result').appendChild(div);
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.getElementById('search-field').value}`;
        document.getElementById('search-field').value = '';

        const res = await fetch(url);
        const data = await res.json();
        displaySearchResults(data.meals);

        // fetch(url)
        //     .then(res => res.json())
        //     .then(data => displaySearchResults(data.meals));
    }
}
const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    console.log(meals);
    if (meals == null) {
        const div = document.createElement('div');
        div.classList.add('mx-auto')
        div.innerHTML = '<h1>No result found</h1>';
        searchResult.appendChild(div);
    }
    else {
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div onclick = "loadDetail(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}"
                        class="card-img-top"
                        alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 250)}</p>
                    </div>
                </div>`;
            searchResult.appendChild(div);
            // console.log(meal.idMeal);
        })
    }
}

const loadDetail = async mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0]);
    // fetch(url)
    //     .then(res => res.json())
    //     .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    const mealDetail = document.getElementById('click-result');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card', 'w-50', 'mx-auto');

    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 50)}</p>
        <a href="${meal.strSource}" class="btn btn-primary" target="_blank">Go somewhere</a>
    </div>`;
    mealDetail.appendChild(div);
}