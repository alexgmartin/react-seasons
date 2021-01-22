import React from 'react';
import ReactDOM from 'react-dom';

// Class-based component
class App extends React.Component {

  // In JS, constructor is very first function to be called anytime when instance of app component is resolved
  constructor(props) {
    // reference to the parent's constructor function. have to do every single time when we define constructor function
    super(props);

    // state object -- THIS IS ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
    this.state = { lat: null };

    window.navigator.geolocation.getCurrentPosition(
      // Callback 1 (Success callback)
        position => {
        // we called setState!!!!
        this.setState({ lat: position.coords.latitude });
      },
      err => console.log(err)
    );

  }

  // React says we have to define render!!!
  render() {
    return <div>Latitude: {this.state.lat} </div>;
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('#root')
);