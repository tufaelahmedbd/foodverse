import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const inputFieldRef = useRef(null);
  const navActive = ({ isActive }) => {
    return {
      color: isActive ? "#f43f5e" : null,
    };
  };
  const searchHandler = (e) => {
    e.preventDefault();
    console.log(searchQuery);
    setSearchQuery("");
    inputFieldRef.current.blur();
  };
  return (
    <div className="navbar flex justify-between items-center container mx-auto  py-8 flex-col lg:flex-row gap-5 lg:gap-0">
      <h2 className="logo text-2xl font-bold lowercase italic">
        Food<span className=" text-rose-500">verse</span>
      </h2>
      <form className="search-bar" onSubmit={searchHandler}>
        <input
          ref={inputFieldRef}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          type="search"
          placeholder="Search recipe..."
          required
          className=" bg-white/75 p-3 px-8 lg:w-95 rounded-full outline-none shadow-lg shadow-rose-100 focus:shadow-rose-200 duration-200"
        />
      </form>
      <ul className="menu gap-5 flex">
        <li>
          <NavLink
            style={navActive}
            end
            to="/"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            style={navActive}
            to="/favourites"
            className="text-gray-400 hover:text-gray-600 duration-300"
          >
            Favourites{" "}
            <span className="favourites-count font-bold text-sky-400">
              (10)
            </span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
