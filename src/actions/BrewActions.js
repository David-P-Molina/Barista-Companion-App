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
    fetch('localhost:3000/brew-method-api', configObj)
    .then((response) => response.json())
    .then((data) => {
        debugger
    })}
}

export function fetchBrewMethods() {
    return (dispatch) => {
        fetch('http://localhost:3000/brew_methods')
        .then((response => {
            if (response.ok) {
                return response.json()
                .then((brewMethods) => dispatch({ type: "FETCH_BREW_METHODS", brewMethods}))
            } else {
                return response.json()
                .catch((errors) => console.log(errors))
            }
        }))
    }
}