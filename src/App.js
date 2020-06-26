import React from 'react';
import './App.css'
import Logo from './bcf.png'
import RadioComponent from './radio/radio'
import DetailsComponent from "./details/details"
const firebase = require('firebase')
class form extends React.Component{
  constructor()
  {
    super()
    this.state = {
      food:null,
      drinks:null,
      service:null,
      name:"",
      number:"",
      comments:""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(label,value)
  {
    this.setState(
      {
        [label]:value
      }
    )
  }

  handleSubmit(event)
  {
    event.preventDefault()
    firebase
     .firestore()
     .collection('feedback')
     .doc(this.state.name)
     .set(
       {
         name:this.state.name,
         number:this.state.number,
         comments:this.state.comments,
         food:this.state.food,
         drinks:this.state.drinks,
         service:this.state.service
       }
     ).then(()=> window.location.reload())
     
     
  }

  render()
  {
    
    return(
      <main className="body">
        <form className="form">
          <div className="section-a">
            <img src={Logo} alt=""/>
          </div>
          <div className="intro-text">
            <h3>How'd We Serve You</h3>
            <p>Rate us from 1(worst) to 5(best)</p>
          </div>
          <div className ="feedback-options">
            <RadioComponent name="food" handleChange={this.handleChange} status={this.state.food} />
            <RadioComponent name="service" handleChange={this.handleChange} status={this.state.service}/>
            <RadioComponent name="drinks" handleChange={this.handleChange} status={this.state.drinks}/>
          </div>

          <div className = "feedback-options-2">
            <DetailsComponent label="name" handleChange={this.handleChange} status={this.state.name}/>
            <DetailsComponent label="number" handleChange={this.handleChange} />

            <textarea name='comments' value={this.state.comments} placeholder="Enter Comments Or Suggestions" onChange={(e)=> this.handleChange(e.target.name,e.target.value)}></textarea>

            <button onClick={this.handleSubmit} type='submit' className="btn">Submit</button>
          </div>

          <footer>
            <h5>Please review and bookmark us on Zomato for updates</h5>
            <p>For further queries please contact</p>
            <p>Abhishek Khanna - 09833952704</p>
            <h4>Thank You</h4>
          </footer>
        
        </form>
      </main>
    )
  }
}

export default form;
