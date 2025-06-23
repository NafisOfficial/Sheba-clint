

const Loading = ({style}) => {

    const size = style.size;
    const margin = style.margin;
    return (
        <div className={`flex justify-center items-center ${margin}`}>
            <span className={`loading loading-infinity text-warning loading-${size}`}></span>
        </div>
    );
};

export default Loading;