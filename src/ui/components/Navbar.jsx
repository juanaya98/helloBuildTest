import "./Navbar.css";

const Navbar = ({ loggedInUser, handleLogout }) => {
  return (
    <nav className="Navbar">
      <span className="Navbar__user">Welcome {loggedInUser}</span>

      <section className="Navbar__actions">
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </section>
    </nav>
  );
};
export default Navbar;
