import { useLoaderData } from "react-router-dom";

const DrugDetails = () => {
    const drug = useLoaderData();
    console.log(drug);
    return (
        <div>
            <p>Name: </p>
            <p>Company: </p>
        </div>
    );
};

export default DrugDetails;