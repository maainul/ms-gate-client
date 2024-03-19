import BarChart from '../components/charts/BarChart';
import PieChart from '../components/charts/PieChart';
import RadialBar from '../components/charts/RadialBar';
import LineChart from '../components/charts/LineChart';
import Sidebar from '../components/layout/Sidebar';
import SearchBar from '../components/layout/SearchBar';

const VisitorAnalytics = () => {
    return (
        <div className="flex min-h-screen bg-gray-100 text-gray-500">
            <Sidebar />
            <div className="flex-grow w-full">
                {/* Searchbar */}
                <SearchBar />
                <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4 '>
                    <BarChart />
                    <LineChart />
                </div>
                <div className='ml-10 mr-10 mt-10 h-[350px] grid grid-cols-2 gap-4 '>
                    <PieChart />
                    <RadialBar />
                </div>
            </div>
        </div>
    );
};

export default VisitorAnalytics;
