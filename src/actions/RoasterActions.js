import URL from "../URL"
import { displayRoasterError } from "./ErrorAction"

function addRoasterAction(formData) {
    return {
        type: "ADD_ROASTER", 
        formData 
    }
}
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
        .then((response) => {
            if (response.ok) {
                return response.json()
                .then((data) => {
                passingDispatchFn(addRoasterAction(data))})
            } else {
                return response.json()
                .then((errors) => {
                    passingDispatchFn(displayRoasterError(errors))
                })
        }}
        )}
    }

export const fetchRoasters = () => {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_ROASTERS'})
        fetch(`${URL}/roasters`)
        .then((response) => {
            if (response.ok) {
                return response.json()
                .then((roasters) => {
                    const roasterArray = []
                    roasters.data.map((roaster) => roasterArray.push(roaster.attributes))
                    dispatch({ type:'FETCH_ROASTERS', roasters: roasterArray})
                })
            } else {
                return response.json()
                .catch((errors) => alert(errors))
            }
        }).catch((errors) => {
            console.log(errors)
        })
    }
}

export const deleteRoasterAction = (id) => {
    return (dispatch) => {
        dispatch({ type: 'DELETE_ROASTER', id })
        const configDeleteObj = {
            method: 'DELETE',
            headers: {
                "content-type": 'application/json',
                "accepts": "application/json"
            }
        }
        fetch(`${URL}/roasters/${id}`, configDeleteObj)
        .then(() => alert('Successfully Deleted Roaster Information'))
        .catch(() => alert('Unable to Delete Roaster'))
    }
}