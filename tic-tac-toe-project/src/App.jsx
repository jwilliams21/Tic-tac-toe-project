import React, { useState } from 'react';
import Board from './Board';
import Square from './Square';


const defaultSquares = () => (new Array(9)).fill( value = null );

function App() {
  const [squares, setSquares] = useState(defaultSquares());

  return (
    <main>
      <Board>
        {squares.map(square => <Square />)}
      </Board>
    </main>
  )
}

export default App
