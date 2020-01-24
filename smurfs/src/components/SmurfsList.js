import React, {useContext} from "react";

import SmurfsContext from "../contexts/SmurfsContext";

const SmurfsList = () => {
    const {smurfsList} = useContext(SmurfsContext);

    return (
        <div className="smurfsListContainer">
            {smurfsList.map((item, index)=>(
                <div key={index} className="smurfContainer">
                    <p>Name: {item.name}</p>
                    <p>Age: {item.age}</p>
                    <p>Height: {item.height}</p>
                </div>
            ))}
        </div>
    )
}

export default SmurfsList;