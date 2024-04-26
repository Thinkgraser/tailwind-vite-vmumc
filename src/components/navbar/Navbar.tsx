import { WhiteUMC } from "../../assets";
import { Search, NavItem, NavDropdown } from "..";
import { MenuToggler } from "../../functions";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-gray-800">
        <div className="mx-auto px-2 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:justify-start lg:items-center min-h-16 lg:space-x-4">
            <div className="flex justify-between h-16">
              <div className="flex items-center space-x-3 flex-shrink-0">
                <div className="flex">
                  <img className="h-8 w-8 " src={WhiteUMC} alt="Your Company" />
                </div>
                <div className="flex text-white text-lg ">
                  <p>VMUMC</p>
                </div>
              </div>
              <div className="flex lg:hidden items-center">
                <button
                  onClick={() => MenuToggler("menu")}
                  type="button"
                  className="items-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white size-10"
                  aria-controls="mobile-menu"
                  aria-expanded="false">
                  <span className="sr-only">Open main menu</span>
                  <Menu />
                </button>
              </div>
            </div>
            <ul
              id="menu"
              className="space-y-1 lg:space-y-0 lg:space-x-1 text-gray-300 pb-3 lg:pb-0 hidden lg:flex">
              <NavItem path="/" text="Home" />
              <NavItem path="/kidscare" text="Kids Care" />
              <NavDropdown
                label="Our Church"
                items={[
                  { text: "Church Directions", url: "/directions" },
                  { text: "Church Community", url: "/community" },
                  { text: "Church Services", url: "/services" },
                  { text: "Christian Education", url: "/education" },
                  { text: "Church Staff", url: "/staff" },
                  { text: "Church Beliefs", url: "/beliefs" },
                ]}
              />
              <NavItem path="/worship" text="Worship" />
              <NavItem path="/ministries" text="Ministries" />
              <NavItem path="/photos" text="Photos" />
              <NavItem path="/calendar" text="Calendar" />
              <NavItem path="/publications" text="Publications" />
              <NavDropdown
                label="Contact Us"
                items={[
                  { text: "Contact Info", url: "/contact" },
                  { text: "Prayer Request", url: "/prayer-request" },
                  { text: " Building Use Request", url: "/building-request" },
                  { text: "Information Request", url: "/information-request" },
                ]}
              />
            </ul>
          </div>
        </div>
        <div className="p-4">
          <Search />
        </div>
      </nav>
    </>
  );
}
