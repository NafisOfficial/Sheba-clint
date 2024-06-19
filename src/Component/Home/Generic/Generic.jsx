import GenericCard from '../GenericCard/GenericCard';

const Generic = () => {
    return (
        <div className='ms-4 grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-5'>
           <GenericCard name={"Paracetamol"}/>
           <GenericCard name={"Amoxicillin"}/>
           <GenericCard name={"Metronidazole"}/>
           <GenericCard name={"Omeprazole"}/>
           <GenericCard name={"Cefixime"}/>
           <GenericCard name={"Amoxicillin"}/>
        </div>
    );
};

export default Generic;