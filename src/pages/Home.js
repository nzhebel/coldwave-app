import React, { useEffect } from "react";
import * as moment from 'moment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import firebase from '../Config';
import appwrite from '../Appwrite';

const Home = () => {

  const [temperatures, setTemperatures] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const ref = firebase.firestore().collection('FridgeMeasurements');

  function getTemperatures2() {
    setLoading(true);
    ref.get().then((item) => {
      console.log(item);
      const items = item.docs.map((doc) => doc.data());
      setTemperatures(items);
      setLoading(false);
    })
  }

  useEffect(() => {
    getTemperatures2();
  }, []);

  if (loading) {
    return <h2>Loading...</h2>
  }
  console.log(temperatures)

  return (
    <div >
      <h2>Overview</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Warehouse</TableCell>
              <TableCell align="left">Fridge</TableCell>
              <TableCell align="right">Temperature (C)</TableCell>
              <TableCell align="right">Humidity (%)</TableCell>
              <TableCell align="left">Time</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {temperatures.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  Warehouse {row.warehouseId}
                </TableCell>
                <TableCell align="left">Fridge {row.fridgeId}</TableCell>
                <TableCell align="right">{row.temperature} °C</TableCell>
                <TableCell align="right">{row.humidity} %</TableCell>
                <TableCell align="left">{row.timestamp ? row.timestamp : moment().format('YYYY-MM-DD HH:m:s')}</TableCell>
                <TableCell align="right">{row.temperature > 3 ? "Critical" : "Ok" }</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
);
            };
export default Home;