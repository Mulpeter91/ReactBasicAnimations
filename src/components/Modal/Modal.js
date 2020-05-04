import React from "react";
import CSSTransition from "react-transition-group/CSSTransition";

import "./Modal.css";

const animationTiming = {
    enter: 400,
    exit: 1000
};

//you could also implement Transition component directly in the component rather than the parent 

const modal = props => {
  const cssClasses = ['Modal', 
    props.show === 'entering' 
    ? 'ModalOpen' 
    : props.show === 'exiting' ? 'ModalClosed': null
  ];

  return (
    //css transition automates the transition of state. Google it
    <CSSTransition 
        mountOnEnter 
        unmountOnExit 
        in={props.show} 
        timeout={animationTiming}
        classNames={{
            enter: '',
            enterActive: 'ModalOpen',
            exit: '',
            exitActive: 'ModalClosed'
        }}>
          <div className={cssClasses.join(' ')}>
            <h1>A Modal</h1>
            <button className="Button" onClick={props.closed}>
              Dismiss
            </button>
          </div>
    </CSSTransition>
  );
};

export default modal;
