function Header() {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        <h1 className="text-2xl font-bold text-orange-500">
          Foodie
        </h1>

        <nav className="hidden items-center gap-8 md:flex">
          <a href="/" className="text-gray-700 hover:text-orange-500">
            Home
          </a>

          <a href="/restaurants" className="text-gray-700 hover:text-orange-500">
            Restaurants
          </a>

          <a href="/cart" className="text-gray-700 hover:text-orange-500">
            Cart
          </a>
        </nav>

        <button className="rounded-lg bg-orange-500 px-5 py-2 text-white hover:bg-orange-600">
          Login
        </button>

      </div>
    </header>
  );
}

export default Header;