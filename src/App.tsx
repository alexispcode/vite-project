import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.scss';
import EnvironmentVariables from '@app/components/EnvironmentVariables';
// @ts-ignore
import TestJSX from '@app/components/TestJSX';

const VALUES = [
  { id: 1, text: 'hello' },
  { id: 2, text: 'electric' },
];
function App() {
  const [count, setCount] = useState(0);
  const [value] = useState(VALUES);

  useEffect(() => {}, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          {value.map(({ text }) => (
            <span key={text}>{text}</span>
          ))}
        </p>
        <EnvironmentVariables />
        <TestJSX />
      </header>
    </div>
  );
}

export default App;
