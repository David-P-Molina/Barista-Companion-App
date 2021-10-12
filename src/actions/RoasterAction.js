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