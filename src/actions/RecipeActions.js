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
        .then((response) => {
            if (response.ok) {
                return response.json()
                .then((data) => {
                dispatch({type: 'ADD_RECIPE', payload: data})})
            } else {
                return response.json()
                .then((errors) => {
                    dispatch(displayRecipeError(errors))
                })
        }}
        )}
    }
export const fetchRecipes = () => {
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
        }).catch((errors) => {
            console.log(errors)
        })
    }
}

export const deleteRecipeAction = (id) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_RECIPE', id })
        const configDeleteObj = {
            method: 'DELETE',
            headers: {
                "content-type": 'application/json',
                "accepts": "application/json"
            }
        }
        fetch(`${URL}/recipes/${id}`, configDeleteObj)
        .then(() => alert('Successfully Deleted Recipe'))
        .catch(() => alert('Unable to Delete Recipe'))
    }
}
