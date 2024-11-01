import { Form } from "react-router-dom";

const NavOption = ({option,setSelectedOptions,optionName,previousValue}) => {


    //check the option is an array or sting
    const checkOption=()=>{
        if(Array.isArray(option)){
            return option[0];
        }else{
            return option;
        }
    }

    //get the options from form filed and push in an Array
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
                <input type="checkbox" name={optionName} value={checkOption()} className="checkbox checkbox-info checkbox-xs" />
                <span className="label-text">{checkOption()}</span>
            </label>
        </Form>
    );
};

export default NavOption;