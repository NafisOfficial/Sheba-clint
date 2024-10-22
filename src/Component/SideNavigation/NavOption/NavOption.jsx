import { Form } from "react-router-dom";

const NavOption = ({option,setSelectedOptions,optionName,previousValue}) => {

    const handleChange=(event)=>{
        let optionSelected = {...previousValue}
        const status = event.target.checked;
        const value = event.target.value;

        if(!optionSelected[optionName]){
            optionSelected[optionName] = [];
        }
        if(status === true){
            optionSelected[optionName].push(value);
        }else if(status === false){
            optionSelected[optionName].splice(optionSelected[optionName].indexOf(value),1);
        }

        setSelectedOptions(optionSelected)
    }

    return (
        <Form onChange={handleChange}  className="form-control">
            <label className="cursor-pointer flex gap-1 items-center">
                <input type="checkbox" name={optionName} value={option} className="checkbox checkbox-info checkbox-xs" />
                <span className="label-text">{option}</span>
            </label>
        </Form>
    );
};

export default NavOption;