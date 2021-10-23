import URL from "../URL"

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
        fetch(`${URL}/coffee_beans`, configObj)
        .then((response) => {
            if (response.ok) {
                return response.json()
                .then((data) => {
                passingDispatchFn({type: 'ADD_COFFEE_BEAN', payload: data})})
            } else {
                return response.json()
                .then((errors) => {
                    passingDispatchFn({ type: 'DISPLAY_COFFEE_BEAN_ERROR', errors})
                })
        }}
        )}
    }

export const fetchCoffeeBeans = () => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_COFFEE_BEANS'})
        fetch(`${URL}/coffee_beans`)
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