

const SearchShowCard = ({ dt }) => {

    const { id, brand, image, dose, form, generic, price_per_unit } = dt
    return (
        <div className="flex justify-between items-center">
            <div>
                <img src={image} alt={form} className="rounded-xl h-8 w-8" />
            </div>
            <div>
                <p><span>{brand}</span><span>{dose}</span><span>{form}</span></p>
                <p>{generic}</p>
            </div>
            <div>
                <p>Price: {price_per_unit} BDT</p>
                <button className="rounded bg-blue-700 text-white px-2">cart</button>
            </div>
        </div>
    );
};

export default SearchShowCard;