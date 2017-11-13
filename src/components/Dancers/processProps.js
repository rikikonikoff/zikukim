import GoogleSpreadsheet from 'google-spreadsheet';

const spreadsheetKey = process.env.REACT_APP_SPREADSHEET_KEY
export const doc = new GoogleSpreadsheet(spreadsheetKey);
export const dancerSheet = getInfoAndWorksheets();

function setAuth(step) {
  let credentials;
  credentials = {
    client_email: process.env.REACT_APP_CLIENT_EMAIL,
    private_key: process.env.REACT_APP_PRIVATE_KEY
  }

  doc.useServiceAccountAuth(credentials, step);
};

function getInfoAndWorksheets(step) {
  doc.getInfo(function(err, info) {
    let sheet = info.worksheets.find('Dancers');
    step();
  });
}

function workingWithRows(step) {
  dancerSheet.getRows({
    offset: 1,
    limit: 20,
    orderby: 'col2'
  }, function( err, rows ){
    console.log('Read '+rows.length+' rows');
    step();
  });
}
