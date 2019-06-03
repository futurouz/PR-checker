import React from "react";
import "./App.css";
import Checkbox from "./Checkbox.react.js";

class App extends React.Component {
  state = {
    localization: false,
    className: false,
    axClassName: false,
    unitTest: false,
    e2eTest: false,
    typo: false,
    grammar: false
  };

  handleCheckbox = e => {
    e.persist();

    this.setState(prevState => ({
      [e.target.name]: !prevState[e.target.name]
    }));
  };

  onCheckAllChecked = () => Object.values(this.state).every(item => item);

  renderCheckboxs = () =>
    lists.map(list => (
      <Checkbox
        key={list.name}
        name={list.name}
        label={list.label}
        checked={this.state[list.name]}
        onHandleCheckbox={this.handleCheckbox}
      />
    ));

  render() {
    return (
      <div className="container">
        <h2>KN: BEFORE PULL REQUEST</h2>
        {this.onCheckAllChecked() ? (
          <img
            src="https://media.giphy.com/media/dr6toZX3D1O8/giphy.gif"
            alt="gooooo"
          />
        ) : (
          this.renderCheckboxs()
        )}
      </div>
    );
  }
}

export default App;

const lists = [
  {
    name: "localization",
    label: "Localization yet?"
  },
  {
    name: "className",
    label: "ClassName same as the component name?"
  },
  {
    name: "axClassName",
    label: "Ax className is that correct?"
  },
  {
    name: "unitTest",
    label: "Unit test all green?"
  },
  {
    name: "e2eTest",
    label: "Check E2E test, all pass?"
  },
  {
    name: "typo",
    label: "Check all of the words, maybe you typo somewhere."
  },
  {
    name: "grammar",
    label: "Grammarly should help grammar, go for it."
  }
];
