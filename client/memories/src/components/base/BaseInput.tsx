import React from 'react';

type Props = {
    type: string,
    placeholder: string,
    value: string,
    handleChange: any
}

const BaseInput: React.FC<Props> = ({type, placeholder, value, handleChange}) => {
    return (
        <div>
            <input type={type} placeholder={placeholder} value={value} onChange={handleChange}/>
        </div>
    )
};

export default BaseInput