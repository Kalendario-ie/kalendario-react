import * as React from 'react';


export interface KInputProps {
    id?: string;
    name?: string;
    type?: string;
    value?: string | ReadonlyArray<string> | number;
    onChange: {
        (e: React.ChangeEvent<any>): void;
    };
}

const KInput: React.FunctionComponent<KInputProps> = (props) => {

    return (
        <input className="form-control" type={props.type} id={props.id} value={props.value} name={props.name} onChange={props.onChange}/>
    )
}

export default KInput;
