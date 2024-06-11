import { createContext } from "react";
import Aunty from "../Aunty/Aunty";
import Parents from "../Parents/Parents";
import Uncle from "../Uncle/Uncle";
import './grantParents.css'

export const RingContext =createContext()


const GrantParents = () => {
    const ring="diamond ring"
    return (
        <div className="grant-parents">
            <h3>grantparents</h3>
            <RingContext.Provider value="gold chain">
               <section className="flex">
              <Parents ring={ring}></Parents>
              <Uncle></Uncle>
              <Aunty></Aunty>
                </section>
            </RingContext.Provider>
            
        </div>
    );
};

export default GrantParents;
