// get static data
import stationData from '../server/stationData';
import trainData from '../server/trainData';
import { useState } from 'react';
import NavBar from '../components/NavBar';
import TrainList from '../pages/TrainList';

export default function LinesPage() {
  // initialize some currColor state

  const [currColor, setCurrColor] = useState('gold');

  return (
    <div>
      // YOUR JSX CODE
      <p>flaksjfdskfj</p>
      <NavBar color={currColor} data={stationData} />
      <TrainList color={currColor} data={trainData} />

      // YOUR JSX CODE
    </div>
  );
}