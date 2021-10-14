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
        dispatch({ type: "START_LOADING_BREW_METHODS"})
        fetch('http://localhost:3000/brew_methods')
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
        }))
    }
}