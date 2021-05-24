import React from 'react';

export interface KBaseInputProps extends React.InputHTMLAttributes<any> {

}


export interface SelectOption {
    id: number,
    name: string
}

export interface MultiSelectOption extends SelectOption {
    children?: SelectOption[];
}
