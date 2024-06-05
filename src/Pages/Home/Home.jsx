import Banner from '../../Component/Home/Banner/Banner';
import Generic from '../../Component/Home/Generic/Generic';
import MostOrdered from '../../Component/Home/MostOrdered/MostOrdered';
import Offered from '../../Component/Home/Offered/Offered';

const Home = () => {
    return (
        <div>
            <Banner/>
            <div className="divider ms-4 text-2xl">Search according to generic</div>
            <Generic/>
            <div className="divider divider-start ms-4 text-2xl">Most ordered</div>
            <MostOrdered/>
            <div className="divider divider-start ms-4 text-2xl">Free home delivery</div>
            <Offered/>
        </div>
    );
};

export default Home;