import React from 'react';
import {Button} from 'reactstrap';

export interface SubmitButtonProps {

}

const SubmitButton: React.FunctionComponent<SubmitButtonProps> = (props) => {
    return (
        <Button className="btn btn-success" type="submit">Submit</Button>
    )
}

export default SubmitButton;
