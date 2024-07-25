import React, { useState, useEffect } from 'react';
import Plot from 'react-plotly.js';
import Table from './TableComponents/Table';
import { colors } from '../../../../styles/data_vis_colors';

const { background_color } = colors;

function TimeSeriesSingleOffice({ office, data }) {
  const currentYear = new Date().getFullYear();
  const [plotlyGraphAxis, setPlotlyGraphAxis] = useState({
    x: [2015, currentYear],
    y: [],
  });
  const [rowsForTable, setRowsForTable] = useState([]);

  useEffect(() => {
    if (data && data['singleOfficeDataObject'] !== undefined) {
      setPlotlyGraphAxis({
        x: data['singleOfficeDataObject']['xYears'],
        y: data['singleOfficeDataObject']['yTotalPercentGranteds'],
      });
    } else {
      setPlotlyGraphAxis({ x: [2015, currentYear], y: [] });
    }
    if (data && data.rowsForTable === undefined) {
      setRowsForTable([]);
    } else if (data) {
      setRowsForTable(data.rowsForTable);
    }
  }, [data, currentYear]);

  const columnsForTable = [
    'Fiscal Year',
    'Total Cases',
    '% Granted',
    '% Admin Close / Dismissal',
    '% Denied',
  ];

  if (!data) return <div>Loading...</div>;

  return (
    <div
      className="time-series-single-office-container"
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100px',
      }}
    >
      <p>Showing: Time series data for the USCIS Asylum Office - ({office})</p>
      <Plot
        data={[
          {
            x: plotlyGraphAxis['x'],
            y: plotlyGraphAxis['y'],
            type: 'scatter',
            mode: 'lines+markers',
            yMax: 1,
            dy: 1,
            dx: 1, // setting these explicitly so they are easy to change later
          },
        ]}
        layout={{
          title: `Asylum Grant Rate for the ${office} Asylum Office Over Time`,
          height: 500,
          width: 700,
          yaxis: {
            range: [0, 100],
            title: `Asylum Grant Rate %`,
            autotick: false,
            dtick: 10,
          },
          xaxis: {
            range: [
              plotlyGraphAxis['x'][0],
              plotlyGraphAxis['x'][plotlyGraphAxis['x'].length - 1],
            ],
            title: `Fiscal Year`,
          },
          paper_bgcolor: background_color,
          hoverlabel: {
            bordercolor: background_color,
          },
        }}
      />
      <p>Table view</p>
      <Table
        columns={columnsForTable}
        rows={rowsForTable}
        tableWidth={'100%'}
        rowHeight={'50px'}
      />
    </div>
  );
}

export default TimeSeriesSingleOffice;

