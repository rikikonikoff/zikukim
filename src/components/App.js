import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import gapi from 'gapi-client';
import Dancers from 'components/Dancers';
import './App.css';

const spreadsheetId = process.env.REACT_APP_SPREADSHEET_KEY
const apiKey = process.env.REACT_APP_GOOGLE_API_KEY

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      googleSpreadsheet: null
    }
    this.initializeGoogle = this.initializeGoogle.bind(this);
  };

  initializeGoogle() {
    gapi.client.init({
      'apiKey': apiKey
    }).then(() => {
      return gapi.client.request({
        'path': `https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/Dancers!A1:C14`
      })
    }).then((response) => {
      console.log(response.result);
      this.setState({ googleSpreadsheet: response.result });
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
        <Route
          path='/dancers'
          component={() => <Dancers googleSpreadsheet={this.state.googleSpreadsheet}/>}
        />
      </div>
    );
  }
}

export default App;
