import GenericCard from '../GenericCard/GenericCard';

const Generic = () => {
    return (
        <div className='ms-4 grid grid-cols-3 gap-5'>
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