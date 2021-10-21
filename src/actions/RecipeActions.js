import URL from "../URL"

export const sendRecipeFormDataAction = (data) => {
    return (dispatch) => {
        const configObj = {
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }

        fetch(`${URL}/recipes`, configObj)
        .then((response) => response.json())
        .then((data)=> {
            dispatch({type: 'ADD_RECIPE', payload: data})
        })
    }
}

export function fetchRecipes () {
    return (dispatch) => {
        dispatch({ type: 'START_LOADING RECIPES'})
        fetch(`${URL}/recipes`)
        .then((response) => {
            if (response.ok) {
                return response.json()
                .then((recipes) => {
                    let recipesArray = []
                    recipes.data.forEach((recipe) => recipesArray.push(recipe.attributes))
                dispatch({ type: 'FETCH_RECIPES', recipes: recipesArray})})
            } else {
                return response.json()
                .catch((errors) => console.log(errors))
            }
        })
    }
}