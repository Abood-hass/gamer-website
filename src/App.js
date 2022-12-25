import './App.css';

import LoginSection from './Sections/LoginSection'
import RegisterSection from './Sections/RegisterSection'
import { Component } from 'react';

export default class App extends Component {

  state = {
    aciveLoginSection: false,
    aciveRegisterSection: true
  }

  changeActive = () => {
    this.setState({
      aciveLoginSection: !this.state.aciveLoginSection,
      aciveRegisterSection: !this.state.aciveRegisterSection
    })
  }
  render() {
    return (

      <div className="App">
        {this.state.aciveLoginSection && <LoginSection active={this.state.aciveLoginSection} changeActive={this.changeActive} />}
        {this.state.aciveRegisterSection && <RegisterSection active={this.state.aciveRegisterSection} changeActive={this.changeActive} />}
      </div>
    )
  }
}

