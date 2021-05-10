import HomeView from './home-view';
import React from 'react';
import { useHistory } from "react-router-dom";
import {Company, companyClient} from 'src/app/api/companies';


const HomeContainer: React.FunctionComponent = () => {
    const history = useHistory();

    const promiseOptions = (value: string) => companyClient.get({search: value})
        .then(res => res.results);
    const navigateToPage = (company: Company | null) => {
        if (company) {
            history.push(`/c/${company.name}`)
        }
    }
    return <HomeView values={promiseOptions}
                     onChange={navigateToPage}/>
}

export default HomeContainer;
