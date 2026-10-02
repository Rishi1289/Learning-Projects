function Header() {
  return (
    <header className="header">
      <nav className="navbar">

        {/* Logo + Search */}
        <div className="left-section">
          <h1>Food App</h1>

          <input
            type="text"
            placeholder="Search your delight"
          />
        </div>

        {/* Navigation */}
        <div className="nav-links">
          <a href="/">Home</a>
          <a href="/restaurants">Restaurants</a>
          <a href="/Cart">Cart</a>
        </div>

        <button >Login</button>

      </nav>
    </header>
  );
}

export default Header;