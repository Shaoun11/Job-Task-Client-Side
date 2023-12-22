import { FaAd, FaBook, FaCalendar, FaEnvelope, FaHome, FaList, FaSearch, FaShoppingCart, FaUsers, FaUtensils } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { useContext } from "react";


import { IoIosDoneAll } from "react-icons/io";
import Navber from "../Navber/Navber";
import { Authcontext } from "../AuthContext/AuthProvider";


const Dashboard = () => {
   const{user}=useContext(Authcontext)

    // TODO: get isAdmin value from the database
   

    return (
        <div >
            <Navber></Navber>
            <div className="flex">
            {/* dashboard side bar */}
            <div className="w-64 min-h-screen  bg-indigo-200">
                <ul className="menu p-4">
                            <>
                            <div>
                        <div className=" font-sans pt-20  w-[200px] flex flex-row justify-center items-center">
  <div className="card w-96 mx-auto ">
     <img className="w-32 h-32 mx-auto rounded-full -mt-20 border-8 border-white" src={user.photoURL} alt=""/>
     <div className=" mt-2 ml-4 text-xl font-medium">{user.displayName}(User)</div>

    
     
  </div>
</div>
                        </div>
                                <div className="pt-8">
                                <li>
                                    <NavLink to="/dashboard">
                                        <CgProfile></CgProfile>
                                        My Profile</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addedtask">
                                        <FaAd></FaAd>Add Contest</NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/myaddedtask">
                                     
                                        <IoIosDoneAll className="text-xl"></IoIosDoneAll>My Contest </NavLink>
                                </li>
                                <li>
                                <NavLink to="/dashboard/users">
                                    <FaUsers></FaUsers>
                                    All Users</NavLink>
                            </li>
                                </div>
                                {/* <li>
                                    <NavLink to="/dashboard/review">
                                        <FaAd></FaAd>
                                        Add a Review</NavLink>
                                </li> */}
                                {/* <li>
                                    <NavLink to="/dashboard/bookings">
                                        <FaList></FaList>
                                        My Bookings</NavLink>
                                </li> */}
                            </>
                    
                    {/* shared nav links */}
                    <div className="divider"></div>
                    <li>
                        <NavLink to="/">
                            <FaHome></FaHome>
                            Home</NavLink>
                    </li>
                   
                  
                </ul>
            </div>
            {/* dashboard content */}
            <div className="flex-1 p-8">
                <Outlet></Outlet>
            </div>
        </div>
        </div>
    );
};

export default Dashboard;