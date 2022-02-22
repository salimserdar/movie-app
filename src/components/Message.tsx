import * as React from 'react'

type MessageProps = {
    message: string;
}; 

const Message = ({message} : MessageProps) => {
    return <div className='Error__message'><h2>{message}</h2></div>;
}

export default Message;