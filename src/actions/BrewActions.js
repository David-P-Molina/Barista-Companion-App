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
    .then(async (response) => {
        if (response.ok) {
            const data = await response.json()
            passingDispatch({ type: 'ADD_BREW_METHOD', payload: data })
        } else {
            const errors = await response.json()
            passingDispatch(displayBrewMethodError(errors))
            console.log(errors)
    }}
    )}
}

export const fetchBrewMethods= () => {
    return (dispatch) => {
        dispatch({ type: "START_LOADING_BREW_METHODS"})
        fetch(`${URL}/brew_methods`)
        .then((async response => {
            if (response.ok) {
                const brewMethods = await response.json()
                let brewArray = []
                brewMethods.data.forEach((brew) => brewArray.push(brew.attributes))
                dispatch({ type: "FETCH_BREW_METHODS", brewMethods: brewArray })
            } else {
                try {
                    return response.json()
                } catch (errors) {
                    return console.log(errors)
                }
            }
        })).catch(() => {
            alert('API Server Not Running!')
        })
    }
}