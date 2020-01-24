import React, {useState, useContext} from "react";
import Axios from "axios";

import SmurfsContext from "../contexts/SmurfsContext";

const AddSmurf = () => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [height, setHeight] = useState("");

    const {setSmurfsList, nameInputClassName, setNameInputClassName, ageInputClassName, setAgeInputClassName, heightInputClassName, setHeightInputClassName} = useContext(SmurfsContext);

    const handleNameChanges = e => {
        setName([e.target.value]);
        setNameInputClassName("");
    }

    const handleAgeChanges = e => {
        setAge([e.target.value]);
        setAgeInputClassName("");
    }

    const handleHeightChanges = e => {
        setHeight([e.target.value]);
        setHeightInputClassName("")
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

    const handleSubmit = () => {
        if (name === ""){
            setNameInputClassName("emptyField");
        }
        if (age === ""){
            setAgeInputClassName("emptyField")
        }
        if (height === ""){
            setHeightInputClassName("emptyField")
        }
        else {
            handleAddSmurf(name,age,height);
            setNameInputClassName("");
            setAgeInputClassName("");
            setHeightInputClassName("");
        }
    }

    return (
        <div>
            <input className={nameInputClassName} type="text" value={name} onChange={handleNameChanges} placeholder="Enter Name"></input>
            <input className={ageInputClassName} type="number" value={age} onChange={handleAgeChanges} placeholder="Enter Age"></input>
            <input className={heightInputClassName} type="text" value={height} onChange={handleHeightChanges} placeholder="Enter Height"></input>
            <button className="addButton" onClick={() => handleSubmit()}>Add Smurf</button>
        </div>
    )
}

export default AddSmurf;