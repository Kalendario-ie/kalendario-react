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
    </div>
  );
}

export default App;
