import React from 'react';

const Quotes = (props) => (
        <div>
            <p>"{props.quote}"</p>
            <p>-{props.author}</p>
            <button type='submit' onClick={props.newQuote}>New Quote</button><br/>
        </div>
);

export default Quotes
