import URL from "../URL"
import { displayRecipeError } from "./ErrorAction"

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
        .then(async (response) => {
            if (response.ok) {
                const data = await response.json()
                dispatch({ type: 'ADD_RECIPE', payload: data })
            } else {
                const errors = await response.json()
                dispatch(displayRecipeError(errors))
        }}
        )}
    }
export const fetchRecipes = () => {
    return (dispatch) => {
        dispatch({ type: 'START_LOADING RECIPES'})
        fetch(`${URL}/recipes`)
        .then(async (response) => {
            if (response.ok) {
                const recipes = await response.json()
                let recipesArray = []
                recipes.data.forEach((recipe) => recipesArray.push(recipe.attributes))
                dispatch({ type: 'FETCH_RECIPES', recipes: recipesArray })
            } else {
                try {
                    return response.json()
                } catch (errors) {
                    return console.log(errors)
                }
            }
        }).catch((errors) => {
            console.log(errors)
        })
    }
}