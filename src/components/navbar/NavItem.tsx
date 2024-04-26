type NavItemProps = {
  path: string;
  text: string;
};

export default function NavItem({ path, text }: NavItemProps) {
  const currentPath = window.location.pathname;
  return (
    <li>
      <a
        href={path}
        className={`${
          currentPath === path ? "active" : ""
        } hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-nowrap block`}>
        {text}
      </a>
    </li>
  );
}
