import React from 'react'
import { Button } from 'react-bootstrap'

class Roaster extends React.Component {
    handleOnClick = () => {
        this.props.deleteRoaster(this.props.roaster.id)
    }
    render() {
        const renderDeleteEditBtn = () => {
            if (this.props.roaster.deletable === true) {
                return ( 
                <>
                    <Button variant='danger' size='sm' onClick={() => this.handleOnClick(this.props.roaster.id)}>Delete</Button> 
                    {/* <button onClick='{this.props.roaster.editRoasterMethod}'>Edit</button> */}
                </>
                )
            }
        }
    return (
        <div className='roaster-card' id={this.props.roaster.id}>
            <a href={this.props.roaster.url}><h1>{this.props.roaster.name}</h1></a>
            {renderDeleteEditBtn()}
            <h3>{this.props.roaster.year_founded}</h3>
            <p>{this.props.roaster.description}</p>
        </div>
    )
    }
}

export default Roaster
