import { useContext } from "react";
import { RingContext } from "../GrantParents/GrantParents";


const Special = ({ring}) => {
    const gift =useContext(RingContext)
    return (
        <div>
            <h4>Mahbuba</h4>
            <p>i get it : {ring}</p>
            <p>i also give you {gift}</p>
        </div>
    );
};

export default Special;