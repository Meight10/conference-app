import React from 'react';

import './styles/PageErrror.css'

const PageError = (props) => {
    return (
        <div className={"PageError"}>
            {props.error.message}
        </div>
    );
};

export default PageError;