import React from 'react'
import { Button } from 'react-bootstrap'

class Roaster extends React.Component {
    handleOnClick = () => {
        this.props.deleteRoaster(this.props.roaster.id)
    }
    render() {
        const {
            roaster: {id, name, description, year_founded, deletable, website}
        } = this.props
        const renderDeleteEditBtn = () => {
            if (deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(id)}>Delete</Button> 
                    {/* <button onClick='{editRoasterMethod}'>Edit</button> */}
                </>
                )
            }
        }
    return (
        <div className='roaster-card' id={id}>
            <a href={website} target='_blank' rel='noopener noreferrer'><h1>{name}</h1></a>
            {renderDeleteEditBtn()}
            <h3>{year_founded}</h3>
            <p>{description}</p>
        </div>
    )
    }
}

export default Roaster
