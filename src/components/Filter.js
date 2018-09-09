import React, { Component } from 'react';

export default class Filter extends Component {

  //
  // greaseChange = (event) =>{
  //   this.props.filterHogs(event.target.value)
  // }
  //
  // nameSort = (event) =>{
  //   this.props.sortHogs(event.target.value)
  // }


handleGreased = (e) => {
  this.props.filterGreased(e.target.value)
}


  render() {
    // const longAF = 'weight as a ratio of hog to LG - 24.7 Cu. Ft. French Door Refrigerator with Thru-the-Door Ice and Water'
    return (
      <div>
        <select onChange= {(event) => this.handleGreased(event)}>
        <option value="All"> All </option>
        <option value= 'true' > Greased </option>
        <option value= 'false' > Not Greased</option>
        </select>


      </div>
    )
  }
}
