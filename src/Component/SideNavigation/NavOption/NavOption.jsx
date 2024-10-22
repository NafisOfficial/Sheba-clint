
const NavOption = ({option}) => {



    return (
        <div className="form-control">
            <label className="cursor-pointer flex gap-1 items-center">
                <input type="checkbox" className="checkbox checkbox-info checkbox-xs" />
                <span className="label-text">{option}</span>
            </label>
        </div>
    );
};

export default NavOption;