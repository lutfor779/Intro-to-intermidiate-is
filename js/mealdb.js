const searchFood = () => {
    if (document.getElementById('search-field').value == '') {
        const div = document.createElement('div');
        div.innerHTML = '<h3>Please write something.</h3>';
        document.getElementById('search-result').appendChild(div);
    }
    else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${document.getElementById('search-field').value}`;
        document.getElementById('search-field').value = '';
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResults(data.meals));
    }
}
const displaySearchResults = meals => {
    const searchResult = document.getElementById('search-result');
    // searchResult.innerHTML = '';        
    searchResult.textContent = '';      //do same


    // if (meals.length == 0) {
    // const div = document.createElement('div');
    // div.innerHTML = 'No result found';
    // searchResult.appendChild(div);
    // }
    console.log(meals.length)
    if (meals.length >= 1) {
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

const loadDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
}

const displayMealDetail = meal => {
    const mealDetail = document.getElementById('click-result');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">${meal.strMeal}</h5>
        <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
        <a href="${meal.strSource}" class="btn btn-primary" target="_blank">Go somewhere</a>
    </div>`;
    mealDetail.appendChild(div);
}