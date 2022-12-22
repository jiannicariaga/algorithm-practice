import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './button';

class Random extends React.Component {
  constructor(props) {
    super(props);
    this.state = { color: [69, 69, 69] };
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.applyColor();
  }

  componentDidUpdate(prevProps, prevState) {
    this.applyColor();
  }

  formatColor(arr) {
    return 'rgb(' + arr.join(', ') + ')';
  }

  isLight() {
    const { color } = this.state;
    return color.reduce((a, b) => a + b) < 127 * 3;
  }

  applyColor() {
    const color = this.formatColor(this.state.color);
    document.body.style.background = color;
  }

  chooseColor() {
    const random = [];
    for (let i = 0; i < 3; i++) random.push(Math.floor(Math.random() * 256));
    return random;
  }

  handleClick() {
    this.setState({ color: this.chooseColor() });
  }

  render() {
    const { color } = this.state;
    return (
      <div>
        <h1 className={this.isLight() ? 'white' : 'black'}>
          Your color is {this.formatColor(color)}.
        </h1>
        <Button
          light={this.isLight()}
          onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<Random />, document.getElementById('app'));
