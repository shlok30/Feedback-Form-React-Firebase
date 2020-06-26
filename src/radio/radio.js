import React from "react"
import './styles.css'

class RadioComponent extends React.Component
{
    constructor()
    {
        super()
        this.state = {
            rating:null
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event)
    {
        this.setState(
            {
                rating:event.target.value
            }
        )

        this.props.handleChange(this.props.name,event.target.value)


    }

    render()
    {
        
        return(
            <div className="rating">
                <h3>{this.props.name}:</h3>
                <div className="radio">
                    <div className="radio-wrapper">
                        <input class="rd-btn" type='radio' onChange={this.handleChange} value='1' checked={this.state.rating === '1'}/> 
                        <input class="rd-btn" type='radio' onChange={this.handleChange} value='2' checked={this.state.rating === '2'}/> 
                        <input class="rd-btn" type='radio' onChange={this.handleChange} value='3' checked={this.state.rating === '3'}/> 
                        <input class="rd-btn" type='radio' onChange={this.handleChange} value='4' checked={this.state.rating === '4'}/> 
                        <input class="rd-btn" type='radio' onChange={this.handleChange} value='5' checked={this.state.rating === '5'}/>
                    </div> 
                </div>
            </div>
        )

    
    }
}

export default RadioComponent