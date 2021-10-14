export const sendCoffeeBeanDataAction = (data) => {
    return (passingDispatchFn) => {
        const configObj = {
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }
        fetch("database-url", configObj)
        .then((response) => response.json())
        .then ((data) => {
            
        })
    }
}

export function fetchCoffeeBeans() {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_COFFEE_BEANS'})
        fetch('http://localhost:3000/coffee_beans')
        .then((response) => {
            if (response.ok) {
                return response.json()
                .then((coffeeBeans) => {
                    let beansArray = []
                    coffeeBeans.data.forEach((bean) => beansArray.push(bean.attributes))
                    dispatch({type: 'FETCH_COFFEE_BEANS', coffeeBeans: beansArray})
                })
            } else {
                return response.json()
                .catch((errors) => console.log(errors))
            }
        })
    }
}