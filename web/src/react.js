class HelloMessage extends React.Component {
  render () {
    return (
        <a className="nav-link">
          <div className="holder volume-rocka3">
            <div className="demo">
              <div className="rkmd-slider slider-continuous slider-shadow slider-lightBlue slider-ligh" id="volumen-rock">
                <input type="range" min="0" max="100" value="100"/>
              </div>
            </div>
          </div>
        </a>
    );
  }
}

ReactDOM.render(
  <HelloMessage name="Taylor" />,
  document.getElementById('react')
);

