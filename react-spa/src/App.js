import React from "react";
import logo from "./logo.svg";
import "./App.css";

// function biasa (component)
// eslint-disable-next-line
const Describe = ({ name }) => (
  <>
    <p>Hallo {name}</p>
    <b>Nama saya {name}</b>
  </>
);
// eslint-disable-next-line
function App() {
  return <AppClass />;
}

// arrow function (component)
// eslint-disable-next-line
const Desc = ({ name }) => (
  <>
    <p>Hallo {name}</p>
    <b>Nama saya {name}</b>
  </>
);
// eslint-disable-next-line
const AppArrow = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Desc name="Joni" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

// class component
// eslint-disable-next-line
const Description = ({ nama, alamat }) => (
  <p>
    Hallo, {nama} <br /> Dari : {alamat}
  </p>
);
// eslint-disable-next-line
class AppClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Joko",
      address: "Surabaya",
    };
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Description nama={this.state.name} alamat={this.state.address} />
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
// export default AppArrow;
// export default AppClass;
