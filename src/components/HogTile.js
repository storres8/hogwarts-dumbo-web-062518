import React, { Component } from 'react';

export default class HogTile extends Component {

  // imagePath = () => {
  // const newName = this.props.hog.name.split('').join('_').toLowerCase()
  // const slugPath = require(`../hog-imgs/${newName}.jpg`)
  // return slugPath
  // }

  state ={
    details: false
  }

  handleClick = () =>{
  this.setState({
    details: !this.state.details
  })
  console.log("string")
  }

 showDetails = () => {
   // const longAF = "weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water"

  const list =
    <ul>
      <li> Greased?{this.props.hog.greased.toString()}</li>
      <li>Medal: {this.props.hog['highest medal achieved']}</li>
      <li>Specialty: {this.props.hog.specialty}</li>
      <li>Weight: {this.props.hog['weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water']}</li>
    </ul>

  return list
 }


  render() {
    // console.log(this.props.hog.greased.toString());
    const imgName = this.props.hog.name.split(' ').join('_').toLowerCase() + '.jpg'
    return (
      <div className="HogTile pigTile">
        <h1>{this.props.hog.name}</h1>
        <img src={require(`../hog-imgs/${imgName}`)} onClick ={this.handleClick}/>
        {this.state.details === false ? null : this.showDetails()}
        <button onClick={() => this.props.hideHog(this.props.hog.name)}> Hide Hog</button>
      </div>
    )
  }
}
