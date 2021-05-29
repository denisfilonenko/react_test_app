import React from 'react';

const Form = props => (
    <form onSubmit={props.weatherMethod}>
        <input type="text" name="city" placeholder="Your city" />
        <button>To get the weather</button>
    </form>
);

export default Form;