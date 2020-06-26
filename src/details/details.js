import React from "react"
import "./styles.css"
class DetailsComponent extends React.Component{
    constructor()
    {
        super()
        this.state = {
            details:""
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        this.setState(
            {
                details:event.target.value
            }
        )

        this.props.handleChange(this.props.label,event.target.value)
    }

    render()
    {
        return(
            <div className='details-container'>
                <h3>{this.props.label}:</h3>
                <div className="input">
                    <input type="text" onChange={this.handleChange} value={this.state.details} size={this.props.label === 'number'?'10':'20'} />
                </div>
            </div>
        )
    }
}

export default DetailsComponent