import React from 'react'

const CoffeeBean =  ({props}) => {
        return (
            <div className='coffee-bean'>
                <h1>{props.name} by <i>{props.roaster_name}</i></h1>
                <p>{props.blend_type}</p>
                {console.log(props)}
                <span>{props.notes}</span>
                <p>{props.description}</p>
                {props.drying_method} {props.processing_method} {props.region} {props.roast} {props.whole_bean}
            </div>
        )
}
export default CoffeeBean
// blend_type: "Blend"
// description: "Otoño marks the change of seasons with a blend of fresh-crop coffees from Ethiopia, Honduras, and Kenya, that together deliver the flavors of fall: plum, pear, and orange."
// drying_method: ""
//{props.drying_method} {props.processing_method} {props.region} {props.roast} {props.whole_bean}
// id: 1
// name: "Otoño"
// notes: "Plum, Pear, and Orange"
// processing_method: ""
// region: "Ethiopia, Honduras and Kenya"
// roast: ""
// roast_date: ""
// roaster_id: 1
// roaster_name: "Intelligentsia"
// whole_bean: true