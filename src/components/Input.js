import React, {useState} from 'react';

function Input(props) {

    function handleChange(event) {
        console.log(event.target)
        const newValue = event.target.value;
        props.setInput(newValue);
    }
        
    function addItem() {
        props.setListItems((prevItems) => {
            return[...prevItems, props.input];
        })
         // Resetting the input field to empty
        props.setInput("");
    };   

    return(
        <div>
            <div className="form">
                <input 
                    type="text" 
                    name="input"
                    onChange={handleChange}
                    value={props.input}
                    />
                
            </div>
            <div className="button">
                <button 
                    type="button"
                    onClick={addItem}
                ><span>Add</span></button>
            </div>
        </div>
        
    )
    
}

export default Input;