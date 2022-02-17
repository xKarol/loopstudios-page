function NavbarItem(props) {
  return (
    <li>
      <a {...props}>{props.children}</a>
    </li>
  );
}

export default NavbarItem;
