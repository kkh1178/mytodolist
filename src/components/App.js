import React, {useState} from 'react';
import Input from "./Input";
import ToDoItem from "./ToDoItem";

function App() {
    const [inputText, setInput] = useState("");
    const [listItems, setListItems] = useState([]);



    function deleteItem(id) {
        console.log("delete this");
        setListItems((prevItems) => {
            return prevItems.filter((item, index) => {
                return index !== id;
            });
        })
    };

    

    return (
        <div className="container">
            <div className="heading">
                <h1>To Do List</h1>
            </div>
            <div className='form'>
                <Input 
                    setListItems={setListItems} 
                    setInput={setInput}
                    input={inputText}
                    />
            </div>
            <div>
                <ul>
                    {listItems.map((item, index) => (
                        <ToDoItem
                            key={index}
                            id={index}
                            text={item}
                            onChecked={deleteItem}
                        />
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App;


// Take what I'm typing in the input component and add to the screen
// Add additional items
// delete an item