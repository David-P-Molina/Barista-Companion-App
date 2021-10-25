import URL from "../URL"
import { displayRoasterError } from "./ErrorAction"

export const sendRoasterDataAction = (data) => {
    return (passingDispatchFn) => {
        const configObj = {
            headers: {
                "content-type": "application/json",
                "accepts": "application/json"
            },
            method: "POST",
            body: JSON.stringify(data)
        }

        fetch(`${URL}/roasters`, configObj)
        .then(async (response) => {
            if (response.ok) {
                const data = await response.json()
                passingDispatchFn({ type: 'ADD_ROASTER', payload: data })
            } else {
                const errors = await response.json()
                passingDispatchFn(displayRoasterError(errors))
        }}
        )}
    }

export const fetchRoasters = () => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_ROASTERS'})
        fetch(`${URL}/roasters`)
        .then(async (response) => {
            if (response.ok) {
                const roasters = await response.json()
                const roasterArray = []
                roasters.data.map((roaster) => roasterArray.push(roaster.attributes))
                dispatch({ type: 'FETCH_ROASTERS', roasters: roasterArray })
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