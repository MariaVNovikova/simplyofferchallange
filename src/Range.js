import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import InputLabel from '@material-ui/core/InputLabel';
import Art from './Art';
import Input from './Input';



class Range extends Component {

  constructor(props) {
    super(props);
    this.state = {
      artUpload: false,
      inputIsOpen: false,
      inputValue: ""
    };
    this.showInput = this.showInput.bind(this)
    this.collectInput = this.collectInput.bind(this)
    this.consolePrint = this.consolePrint.bind(this)
  }


  showInput() {
    this.setState({ inputIsOpen: !this.state.inputIsOpen });
  }

  collectInput(input) {
    this.showInput();
    var articles = input.split('\n');
    this.setState({ inputValue: articles });
    this.setState({artUpload: true})
  }


  render() {
    return (
      <div className={this.props.RangeName}>
        <header className="RangeHeader">
        </header>
        <InputLabel>{this.props.id} / {this.props.RangeName}</InputLabel><br></br>
        <Button variant="contained" color="primary" onClick={this.showInput}>Insert codes
        </Button>
        {this.state.inputIsOpen ? (
          <div className="Window">
            <Input collectInput={this.collectInput}></Input>
          </div>
        ) : null}
        {this.state.artUpload ? (this.state.inputValue.map((art,i) =>
          <div className="articles">
            < Art code={art} />
          </div>
        )) : null}
      </div>
    );
  }
}

export default Range;