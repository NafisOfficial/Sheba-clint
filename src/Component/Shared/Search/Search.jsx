import Loading from "../Loading/Loading";
import SearchShowCard from "../SearchShowCard/SearchShowCard";


const Search = ({ loading, data }) => {

    return (
        <div className='w-96 max-h-80 overflow-y-auto text-center'>
            {loading ? <div className="text-warning"><Loading style={{ size: "lg", margin: "mt-4" }} />Loading......</div> : <>{data?.length === 0 ? <div>No data available</div> : <div className="flex flex-col gap-2">{data?.map((dt) => <SearchShowCard key={dt?._id} dt={dt} />)}</div>}</>}
        </div>

    );
};

export default Search;