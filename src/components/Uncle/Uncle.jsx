import Cousin from '../cousin/Cousin'

const Uncle = () => {
    return (
        <div >
            <h3>Uncle</h3>
            <section className='flex'>
                <Cousin name={'sojib'}></Cousin>
                <Cousin name={'sanjida'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;