import { MenuToggler } from "../../functions";

type DropdownItem = {
  text: string;
  url: string;
};

type DropdownProps = {
  label: string;
  items: DropdownItem[];
};

const currentPath = window.location.pathname;

export default function NavDropdown({ label, items }: DropdownProps) {
  return (
    <li className="group">
      <a
        onClick={(e) => {
          e.preventDefault();
          MenuToggler(`${label}`);
        }}
        href="#"
        className={`${
          items.some((item) => item.url === currentPath) ? "active" : ""
        } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium relative block text-nowrap`}>
        {label}
      </a>
      <ul
        id={`${label}`}
        className="lg:absolute z-50 rounded shadow-inner border-black border-2 border-opacity-10 bg-gray-800 lg:border-none hidden lg:group-hover:block"
        aria-hidden="true">
        {items.map((item, index) => (
          <li key={index}>
            <a
              href={item.url}
              className={`${
                currentPath === item.url ? "active" : ""
              } block py-2 text-sm px-4 hover:bg-gray-700 hover:text-white`}
              role="menuitem"
              tabIndex={-1}>
              {item.text}
            </a>
          </li>
        ))}
      </ul>
    </li>
  );
}
