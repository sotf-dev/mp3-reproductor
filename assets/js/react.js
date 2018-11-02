class HelloMessage extends React.Component {
  render() {
    return React.createElement("a", {
      className: "nav-link"
    }, React.createElement("div", {
      className: "holder volume-rocka3"
    }, React.createElement("div", {
      className: "demo"
    }, React.createElement("div", {
      className: "rkmd-slider slider-continuous slider-shadow slider-lightBlue slider-ligh",
      id: "volumen-rock"
    }, React.createElement("input", {
      type: "range",
      min: "0",
      max: "100",
      value: "100"
    })))));
  }

}

ReactDOM.render(React.createElement(HelloMessage, {
  name: "Taylor"
}), document.getElementById('react'));