import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import hogs from '../porkers_data';
import HogContainer from './HogContainer';
import Filter from './Filter'

class App extends Component {

  state = {
    allHogs: hogs
  }

  filterGreased = (key) => {
    if(key==="All"){
      return this.setState({
            allHogs: hogs
      })
    }else {
      const filteredHogs = hogs.filter(hog => hog.greased.toString() === key)
      return this.setState({
        allHogs: filteredHogs
      })
    }
  }

  hideHog = (name) => {
    // console.log(name)
    const hidden = this.state.allHogs.filter(hog => hog.name !== name)
    return this.setState({
      allHogs: hidden
    })
  }


  render() {
    return (
      <div className="App">
          < Nav />
          < HogContainer dataHogs={this.state.allHogs} hideHog={this.hideHog} />
          < Filter filterGreased={this.filterGreased} />
      </div>
    )
  }
}

export default App;
