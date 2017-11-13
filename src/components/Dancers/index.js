import React, { Component } from 'react';
import GoogleSpreadsheet from 'google-spreadsheet';
import { doc, dancerSheet } from './processProps';

const Dancers = ({
  doc,
  dancerSheet
}) => {
  return (
    <div>
      I am the dancers page
    </div>
  )
}

export default Dancers;
