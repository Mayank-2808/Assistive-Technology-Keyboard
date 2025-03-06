import logo from '../assets/logo.svg';
import { getTestEndpoint } from '../services/restApi.js';
import { useState, useEffect } from 'react';

function TestContainer() {
  const [test, setTest] = useState(null);

  useEffect(() => { 
    fetchTestData();
  });

  const fetchTestData = async () => {
    const response = await getTestEndpoint();
    setTest(response.data);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>TEST API VALUE: {test}</p>
      </header>
    </div>
  );
}

export default TestContainer;
