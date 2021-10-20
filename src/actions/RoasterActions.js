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

        fetch("database-url", configObj)
        .then((response) => response.json())
        .then((data) => {

        })
    }
}

export function fetchRoasters() {
    return (dispatch) => {
        dispatch({type: 'START_LOADING_ROASTERS'})
        fetch('http://localhost:3000/roasters')
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
                .catch((errors) => console.log(errors))
            }
        })
    }
}