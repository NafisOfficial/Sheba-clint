import GenericCard from '../GenericCard/GenericCard';

const Generic = () => {
    return (
        <div className='ms-4 grid md:grid-cols-3 grid-cols-1 gap-5'>
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