import Brother from "../Brother/Brother";
import MySelf from "../MySelf/MySelf";
import Sister from "../Sister/Sister";


const Parents = ({ring}) => {
    return (
        <div >
            <h3>parents</h3>
           <section className="flex">
             <MySelf ring={ring}></MySelf>
             <Brother></Brother>
             <Sister></Sister>
            </section>
            

        </div>
    );
};

export default Parents;