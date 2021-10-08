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