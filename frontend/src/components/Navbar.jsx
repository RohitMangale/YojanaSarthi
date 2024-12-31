import { Link } from "react-router-dom";
import logoutIcon from "../assets/logout.png";


const Navbar = () => {

 

  return (
    <header className=" border-b border-solid border-b-background px-10 pb-3 pt-5">
      <div className=" container flex items-center justify-between whitespace-nowrap">

      <div className="flex items-center gap-8 ">
        <Link to="/" className="flex items-center gap-4 text-blackText">
          {/* <div className="size-4">
            logo
          </div> */}
          <h2 className="text-blackText text-xl font-bold  ">
            Yojana Sarthi
          </h2>
        </Link>

      </div>
      <div className="flex flex-1 justify-end gap-8">
        {/* <div className="flex items-center gap-9">
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Home
          </a>
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Search
          </a>
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Grocery
          </a>
          <a
            className="text-blackText text-sm font-medium leading-normal"
            href="#"
          >
            Deals
          </a>
        </div> */}
        
          <div className="flex gap-2">



            <Link

              className="iconSoft"
            >
              <div
                className="text-blackText"
                data-icon="User"
                data-size="20px"
                data-weight="regular"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
                </svg>
              </div>
            </Link>

            <button  >
            <div  className=" iconSoft ">


            <img src={logoutIcon} className=" w-[20px] h-[20px] " alt="" />
            </div>

            </button>
          </div>

          <Link to="/login" className="btnColored">
            <span className="truncate">Login</span>
          </Link>

      </div>
      </div>
    </header>
  );
};

export default Navbar;
