import React, {useState} from "react";

const AddSmurf = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const handleNameChanges = e => {
        setName([e.target.value]);
    }

    const handleAgeChanges = e => {
        setAge([e.target.value]);
    }

    const handleHeightChanges = e => {
        setHeight([e.target.value]);
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChanges} placeholder="Enter Name"></input>
            <input type="text" value={age} onChange={handleAgeChanges} placeholder="Enter Age"></input>
            <input type="text" value={height} onChange={handleHeightChanges} placeholder="Enter Height"></input>
            <button>Add Smurf</button>
        </div>
    )
}

export default AddSmurf;