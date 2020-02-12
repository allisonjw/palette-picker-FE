import React, { useState } from 'react';

const usePaletteForm = () => { //callback gets called everytime the user submits the form
    const [input, setInput] = useState('');
    // console.log('input', input)


    //making a function to submit the input
    const handleSubmit = (event) => {
        console.log('handle', event)
        if (event) {
            event.preventDefault();
        }
    }
    //make a function to keep track of the input 
    const handleChange = (event) => {
        console.log('event', event)
        event.persist();
        setInput(input => ({...input, [event.target.name]: event.target.value})); //update the input state with the user's input
    }
    //giving back the value of both these functions
    return handleSubmit,
            handleChange,
            input;
}

export default usePaletteForm;