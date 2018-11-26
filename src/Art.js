import React, { Component } from 'react';



class Art extends Component {
  render() {
    return (
      <div className="Art">
      <table border = "2px">
      <tbody>
        <tr width = "100%">
          <td colSpan = "2" height = "40px"></td>
        </tr>
        <tr>
          <td width = "10px">Code</td><td width = "40px">{this.props.code}</td>
        </tr>
        <tr>
          <td width = "10px">Range</td><td width = "40px"></td>
        </tr>
        <tr>
          <td width = "10px">TO</td><td width = "40px"></td>
        </tr>
        <tr>
          <td width = "10px">QTY</td><td width = "40px"></td>
        </tr>
        <tr>
          <td width = "10px">Margin</td><td width = "40px"></td>
        </tr>
        <tr>
          <td width = "10px">AS</td><td width = "40px"></td>
        </tr>
        </tbody>

      </table>
        
      </div>
    );
  }
}

export default Art;