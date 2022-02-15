import React from 'react';

const NotFound = ({ setHeaderFooter }) => {
    setHeaderFooter(false);
    return (
        <div>
            <h1>Missy Watch</h1>
            <h5>404. That’s an error. </h5>
            <p>The requested URL was not found on this server. That’s all we know.</p>
            <img src="https://www.google.com/images/errors/robot.png" alt="" />
        </div>
    );
};

export default NotFound;