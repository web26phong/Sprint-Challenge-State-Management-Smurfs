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
        if (e.target.value.length === 0){
            setNameInputClassName("emptyField")
        }else {
        setNameInputClassName("");
        }
    }

    const handleAgeChanges = e => {
        setAge([e.target.value]);
        if (e.target.value.length === 0){
            setAgeInputClassName("emptyField")
        } else {
        setAgeInputClassName("");
        }
    }

    const handleHeightChanges = e => {
        setHeight([e.target.value]);
        if (e.target.value.length === 0){
            setHeightInputClassName("emptyField")
        }else {
        setHeightInputClassName("")
        }
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
        if (name === "" || name === null){
            setNameInputClassName("emptyField");
        }
        if (age === "" || age === null){
            setAgeInputClassName("emptyField")
        }
        if (height === "" || height === null){
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
            <input className={nameInputClassName} required type="text" value={name} onChange={handleNameChanges} placeholder="Enter Name"></input>
            <input className={ageInputClassName} required type="number" value={age} onChange={handleAgeChanges} placeholder="Enter Age"></input>
            <input className={heightInputClassName} required type="text" value={height} onChange={handleHeightChanges} placeholder="Enter Height"></input>
            <button className="addButton" onClick={() => handleSubmit()}>Add Smurf</button>
        </div>
    )
}

export default AddSmurf;