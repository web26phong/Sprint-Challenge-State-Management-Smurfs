import React, {useState, useContext} from "react";
import Axios from "axios";

import SmurfsContext from "../contexts/SmurfsContext";

const AddSmurf = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const {smurfsList, setSmurfsList} = useContext(SmurfsContext);

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
            age: Math.round(age),
            height: height,
            id: Date.now()
        }

        Axios.post(`http://localhost:3333/smurfs`, newSmurf)
        .then(res => {
            setSmurfsList(res.data)
            setName("")
            setAge("")
            setHeight("")
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <div>
            <input type="text" value={name} onChange={handleNameChanges} placeholder="Enter Name"></input>
            <input type="number" value={age} onChange={handleAgeChanges} placeholder="Enter Age"></input>
            <input type="text" value={height} onChange={handleHeightChanges} placeholder="Enter Height"></input>
            <button onClick={()=> handleAddSmurf(name,age,height)}>Add Smurf</button>
        </div>
    )
}

export default AddSmurf;