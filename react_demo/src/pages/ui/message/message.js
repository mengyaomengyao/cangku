import React from 'react';
import { message, Button } from 'antd';

class Messages extends React.Component {
    render() {
        const success = () => {
            message.success('This is a prompt message for success, and it will disappear in 10 seconds', 2);

        };
        const info = () => {
            message.info('This is a normal message');
        };
        return (
            <div>
                <Button onClick={success}>Customized display duration</Button><br/><br/><br/>
                <Button type="primary" onClick={info}>
                    Display normal message
  </Button>,
            </div>
        );
    }
}

export default Messages;