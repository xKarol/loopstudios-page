function NavbarItem({ href, children }) {
  return (
    <li>
      <a href={href}>{children}</a>
    </li>
  );
}

export default NavbarItem;
