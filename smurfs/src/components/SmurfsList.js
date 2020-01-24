import React, {useContext} from "react";

import SmurfsContext from "../contexts/SmurfsContext";

const SmurfsList = () => {
    const {smurfsList, setSmurfsList} = useContext(SmurfsContext);

    return (
        <div>
            {smurfsList.map((item, index)=>(
                <div key={index}>
                    <p>{item.name}</p>
                    <p>{item.age}</p>
                    <p>{item.height}</p>
                </div>
            ))}
        </div>
    )
}

export default SmurfsList;