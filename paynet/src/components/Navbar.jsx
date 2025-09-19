import { FaUserCircle } from "react-icons/fa";
import { IoIosNotificationsOutline } from "react-icons/io";
function Navbar() {
  return (
    <nav className="flex items-center justify-between p-4 bg-gray-200 text-white">
      <img src="/logo.png" alt="Paynet Logo" height={100} width={200} />
      <div className="flex items-center space-x-3 text-black">
        <IoIosNotificationsOutline size={30} />
        <span className="ml-4">Username</span>
        <button onClick={() => alert("Profile clicked")}>
          <FaUserCircle size={30}/>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
