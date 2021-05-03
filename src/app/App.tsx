import React, {useEffect, useState} from 'react';
import {companyClient} from './shared/api/companies/clients';
import {Company} from './shared/api/companies/models';

function App() {
  const initial: Company[] = [];
  const [companies, setCompanies] = useState(initial);

  useEffect(() => {
    companyClient.get({search: 'pal'})
        .then(s => setCompanies(s.results));
  })

  return (
    <div className="App">
      <header className="App-header">
        names <br/>
        {companies.map(name => <p>{name.name}</p>)}
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
