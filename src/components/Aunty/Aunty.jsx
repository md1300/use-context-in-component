import Cousin from "../cousin/Cousin";


const Aunty = () => {
    return (
        <div >
            <h3>Aunty</h3>
            <section className="flex">
                <Cousin name={'majeda'}></Cousin>
                <Cousin name={'mahbub'}></Cousin>
            </section>
        </div>
    );
};

export default Aunty;