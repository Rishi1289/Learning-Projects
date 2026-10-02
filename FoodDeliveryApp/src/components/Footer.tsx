function Footer() {
  return (
    <footer className="mt-16 bg-gray-900 px-6 py-10 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">

          <div>
            <h2 className="text-2xl font-bold text-orange-500">
              Foodie
            </h2>

            <p className="mt-3 text-sm text-gray-400">
              Delicious food delivered to your door.
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Company
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              About Us
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Careers
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Support
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Help Center
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Contact Us
            </p>
          </div>

          <div>
            <h3 className="font-semibold">
              Follow Us
            </h3>

            <p className="mt-3 text-sm text-gray-400">
              Instagram
            </p>

            <p className="mt-2 text-sm text-gray-400">
              Facebook
            </p>
          </div>

        </div>

        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
          © 2026 Foodie. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;