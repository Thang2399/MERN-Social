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
            <input type={type} placeholder={placeholder}
                   value={value} onChange={handleChange}
                   className={'w-full py-2 px-3 rounded border border-gray-300 outline-none focus:border-gray-700'}/>
        </div>
    )
};

export default BaseInput