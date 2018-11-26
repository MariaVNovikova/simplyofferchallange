import React, { Component } from 'react';
import Button from '@material-ui/core/Button';


class Input extends Component {


  constructor(props) {
    super(props);
    this.app = props.app
    this.state = {value: '',
                  textarea: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChangeTextArea = this.handleChangeTextArea.bind(this);
  }



  handleChange(event) {
    this.setState({value: event.target.value});

  }

  handleChangeTextArea(event) {
    this.setState({textarea: event.target.value});
  }

  render() {
    return (
      <div className="Input"> Insert codes<br/><br/><br/>
          <textarea rows = "15" className="textarea" value={this.state.textarea} onChange={this.handleChangeTextArea}></textarea><br/>
          <Button variant="outlined" onClick={ () => this.props.collectInput(this.state.textarea)}>OK</Button>
          </div>
    );
  }
}

export default Input;