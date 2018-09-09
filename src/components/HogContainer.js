import React, { Component } from 'react';
import HogTile from './HogTile'


export default class HogContainer extends Component {

  createHog = () => {
    return this.props.dataHogs.map(hog =>{
      return <HogTile key={hog.name} hog={hog} hideHog={this.props.hideHog}/>
    })
  }

  render() {
    return (
      <div >
        {this.createHog()}
      </div>
    )
  }
}
