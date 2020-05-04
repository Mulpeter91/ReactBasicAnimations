import React, { Component } from "react";
import Transition from 'react-transition-group/Transition';
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {

  state = {
    modalIsOpen: false,
    showBlock: false
  }

  showModel = () => {
    this.setState({modalIsOpen: true});
  }

  closeModel = () => {
    this.setState({modalIsOpen: false});
  }

  render() {

    const animationTiming = {
      enter: 400, 
      exit: 1000
    }

    return (
      <div className="App">
        <h1>React Animations</h1>
        <button className="Button" onClick={() => this.setState(prevState => ({showBlock: !prevState.showBlock}))}>Toggle</button>
        <br />
        
        <Transition in={this.state.showBlock} timeout={1000}>
          {state => <p>{state}</p>}
        </Transition>

        <br />

        <Transition in={this.state.showBlock} 
          mountOnEnter 
          unmountOnExit t
          imeout={animationTiming}
          //these triggers execute in order: 
          onEnter={() => console.log('onEnter')}
          onEntering={() => console.log('onEntering')}
          onEntered={() => console.log('onEntered')}
          onExit={() => console.log('onExit')}
          onExiting={() => console.log('onExiting')}
          onExited={() => console.log('onExited')}
          >
          {state => (
            <div
              style={{
                backgroundColor: "red",
                width: 100, 
                height: 100, 
                margin: "auto", 
                transition: 'opacity 1s ease-out',
                opacity: state === 'exiting' ? 0 : 1
              }}>
            </div>
          )}
        </Transition>

        
        <Transition in={this.state.showBlock} timeout={300}>
          {state => (
            <div
              style={{
                backgroundColor: "blue",
                width: 100, 
                height: 100, 
                margin: "auto", 
                transition: 'opacity 1s ease-out',
                opacity: state === 'exited' ? 0 : 1
              }}>
            </div>
          )}
        </Transition>
        <Transition 
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen} 
          timeout={300}>
          {state => (
            <Modal show={state} closed={this.closeModel}/>
          )}
        </Transition>
        {/* { this.state.modalIsOpen ? <Modal show={this.state.modalIsOpen} closed={this.closeModel}/> : null } */}
        { this.state.modalIsOpen ? <Backdrop show={this.state.modalIsOpen}/> : null }
        <button className="Button" onClick={this.showModel}>Open Modal</button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
