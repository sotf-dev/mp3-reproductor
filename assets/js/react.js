class HelloMessage extends React.Component {
  render() {
    return React.createElement("div", {
      className: 'data'
    }, "Hello ", this.props.name);
  }

}

ReactDOM.render(React.createElement(HelloMessage, {
  name: "Taylor"
}), document.getElementById('react'));