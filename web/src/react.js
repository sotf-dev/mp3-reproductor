class HelloMessage extends React.Component {
  render () {
    return (
      <div className={'data'}>
        Hello {this.props.name}
      </div>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('react')
);

