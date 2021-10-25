import URL from "../URL"
import { displayCoffeeBeanError } from "./ErrorAction"

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
        .then(async (response) => {
            if (response.ok) {
                const data = await response.json()
                passingDispatchFn({ type: 'ADD_COFFEE_BEAN', payload: data })
            } else {
                try {
                    const errors = await response.json()
                    passingDispatchFn(displayCoffeeBeanError(errors))
                } catch (error) {
                    return alert(error)
                }
        }}
        )}
    }

export const fetchCoffeeBeans = () => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_COFFEE_BEANS'})
        fetch(`${URL}/coffee_beans`)
        .then(async (response) => {
            if (response.ok) {
                const coffeeBeans = await response.json()
                let beansArray = []
                coffeeBeans.data.forEach((bean) => beansArray.push(bean.attributes))
                dispatch({ type: 'FETCH_COFFEE_BEANS', coffeeBeans: beansArray })
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