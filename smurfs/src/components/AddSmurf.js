import React, {useState} from "react";
import Axios from "axios";

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

    const handleAddSmurf = (name, age, height) => {
        const newSmurf = {
            name: name,
            age: parseInt(age),
            height: height,
            id: Date.now()
        }

        Axios.post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChanges} placeholder="Enter Name"></input>
            <input type="text" value={age} onChange={handleAgeChanges} placeholder="Enter Age"></input>
            <input type="text" value={height} onChange={handleHeightChanges} placeholder="Enter Height"></input>
            <button onClick={()=> handleAddSmurf(name,age,height)}>Add Smurf</button>
        </div>
    )
}

export default AddSmurf;