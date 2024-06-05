import Banner from '../../Component/Home/Banner/Banner';
import MostOrdered from '../../Component/Home/MostOrdered/MostOrdered';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="divider divider-start ms-4 text-2xl">Most Ordered</div>
            <MostOrdered/>
            <div className="divider divider-start ms-4 text-2xl">Generic</div>
        </div>
    );
};

export default Home;