import { Link } from 'react-router-dom';
import Signout from "../../pages/Signout";
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';


function Navbar() {
    const { loggedInUserState } = useContext(AuthContext)

    return (
        <div>
            {loggedInUserState === true && (
                <>
                    <div className="flex flex-row justify-between bg-blue-400 text-white text-xl text-bold text-center p-4">
                        <div className="flex flex-row gap-8">
                            <Link to="/dashboard">Home</Link>
                            <Link to="/dashboard/user-list">User list</Link>
                            <Link to="/dashboard/application-route-list">Routes </Link>
                        </div>
                        <Signout />
                    </div>
                </>
            )}
        </div >
    )
}

export default Navbar