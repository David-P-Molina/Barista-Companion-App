import URL from "../URL"
import { displayBrewMethodError } from "./ErrorAction"

export const sendBrewMethodDataAction = (formData) => {
     return (passingDispatch) => {
         const configObj = {
        headers: {
            "content-type": 'application/json',
            "accepts": "application/json"
        }, 
        method: 'POST',
        body: JSON.stringify(formData)
    }
    fetch(`${URL}/brew_methods`, configObj)
    .then((response) => {
        if (response.ok) {
            return response.json()
            .then((data) => {
            passingDispatch({type: 'ADD_BREW_METHOD', payload: data})})
        } else {
            return response.json()
            .then((errors) => {
                passingDispatch(displayBrewMethodError(errors))
                console.log(errors)
            })
    }}
    )}
}

export const fetchBrewMethods= () => {
    return (dispatch) => {
        dispatch({ type: "START_LOADING_BREW_METHODS"})
        fetch(`${URL}/brew_methods`)
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((brewMethods) => {
                    let brewArray = [] 
                    brewMethods.data.forEach((brew) => brewArray.push(brew.attributes))
                dispatch({ type: "FETCH_BREW_METHODS", brewMethods: brewArray})})
            } else {
                return response.json()
                .catch((errors) => console.log(errors))
            }
        })).catch(() => {
            alert('API Server Not Running!')
        })
    }
}

export function addBrewMethodAction(formData) {
    return {
        type: "ADD_BREW_METHOD", 
        formData 
    }
}

export const deleteBrewMethodAction = (id) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_BREW_METHOD', id })
        const configDeleteObj = {
            method: 'DELETE',
            headers: {
                "content-type": 'application/json',
                "accepts": "application/json"
            }
        }
        fetch(`${URL}/brew_methods/${id}`, configDeleteObj)
        .then(() => alert('Successfully Deleted Brew Method'))
        .catch(() => alert('Unable to Delete Brew Method'))
    }
}