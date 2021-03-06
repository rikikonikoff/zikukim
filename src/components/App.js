import React, { Component } from 'react';
import gapi from 'gapi-client';
import Spreadsheet from 'components/Spreadsheet';
import { Grid } from 'react-bootstrap';
import 'components/App.css';

const spreadsheetId = process.env.REACT_APP_SPREADSHEET_KEY
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      googleSpreadsheet: null
    };
    this.initializeGoogle = this.initializeGoogle.bind(this);
  };

  initializeGoogle() {
    gapi.client.init({
      'apiKey': apiKey
    }).then(() => {
      return gapi.client.request({
        'path': `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Dancers`
      })
    }).then((response) => {
      this.setState({
        googleSpreadsheet: response.result
      });
    }, (reason) => {
      console.log('Error: ' + reason.result.error.message);
    });
  };

  componentDidMount() {
    gapi.load('client', this.initializeGoogle);
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="Zikukim">Welcome to the Zikukim Homepage</h1>
        </header>
        <Grid fluid>
          <Spreadsheet
            sheet={this.state.googleSpreadsheet}
          />
        </Grid>
      </div>
    );
  }
}

export default App;
