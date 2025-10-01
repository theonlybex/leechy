export default function HomePage() {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="relative text-white -mt-4">
        <div className="relative container mx-auto px-4 py-24 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The rental marketplace for everyone.
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-2xl mx-auto">
            Rent anything, anywhere, anytime.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-4xl mx-auto bg-white rounded-2xl p-2 shadow-2xl">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="What do you want to rent?"
                  className="w-full px-6 py-4 text-gray-900 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="Where?"
                  className="w-full px-6 py-4 text-gray-900 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  placeholder="When?"
                  className="w-full px-6 py-4 text-gray-900 border-0 rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-green"
                />
              </div>
              <button className="bg-brand-green hover:bg-brand-green-dark text-white px-8 py-4 rounded-lg font-semibold transition-colors duration-200">
                Search
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Popular Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: 'Tools', icon: '🔧' },
              { name: 'Electronics', icon: '📱' },
              { name: 'Vehicles', icon: '🚗' },
              { name: 'Sports', icon: '⚽' },
              { name: 'Music', icon: '🎵' },
              { name: 'Photography', icon: '📸' },
            ].map((category) => (
              <div
                key={category.name}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow cursor-pointer text-center"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-semibold text-gray-900">{category.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="py-20 bg-white text-gray-900">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-4xl font-bold text-left mb-12">How it works:</h2>
            <div className="space-y-12">
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">1) Post a new listing</h3>
                <p className="text-gray-600 mb-3">List your product(s). Accept payments from customers and receive money to your bank account.</p>
                <a href="#" className="underline font-semibold">Post a new listing</a>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">2) Find what you need</h3>
                <p className="text-gray-600 mb-3">Search by location or keyword. Filter by price, availability, or custom filters. View photos and listing details.</p>
                <a href="#" className="underline font-semibold">Search listings</a>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">3) Make a secure payment</h3>
                <p className="text-gray-600 mb-3">Pay with a credit card. The marketplace holds your money until you've received what you rented.</p>
                <a href="#" className="underline font-semibold">Rent something</a>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
            </div>
            <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">4) Leechy Renters Insurance</h3>
                <p className="text-gray-600 mb-4">YOU ARE COVERED! Click the "Leechy Renters Insurance" tab down below to see all details about your valuables in case of any lost, stolen or damaged items.</p>
                <a href="#" className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-lg transition-colors">Leechy Renters Insurance</a>
              </div>
              <div className="w-24 h-24 bg-gray-200 rounded-lg flex-shrink-0" />
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Leechy App
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto">
              Renting is easier with Leechy! <br /> Browse, rent, and manage your rentals on the go!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-0">
              <a
                href="https://apps.apple.com/us/app/leechy/id6505043207" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-lg shadow-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5C17.88 20.74 17 21.95 15.66 21.97C14.32 22 13.89 21.18 12.37 21.18C10.84 21.18 10.37 21.95 9.09 22C7.78 22.05 6.8 20.68 5.96 19.47C4.25 17 2.94 12.45 4.7 9.39C5.57 7.87 7.13 6.91 8.82 6.88C10.1 6.86 11.32 7.75 12.11 7.75C12.89 7.75 14.37 6.68 15.92 6.84C16.57 6.87 18.39 7.1 19.56 8.82C19.47 8.88 17.39 10.1 17.41 12.63C17.44 15.65 20.06 16.66 20.09 16.67C20.06 16.74 19.67 18.11 18.71 19.5ZM13 3.5C13.73 2.67 14.94 2.04 15.94 2C16.07 3.17 15.6 4.35 14.9 5.19C14.21 6.04 13.07 6.7 11.95 6.61C11.8 5.46 12.36 4.26 13 3.5Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs"></div>
                  <div className="text-lg font-semibold">App Store</div>
                </div>
              </a>
              <a
                href="https://play.google.com/store/apps/details?id=com.leechy.app" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-brand-green hover:bg-brand-green-dark text-white px-6 py-3 rounded-lg shadow-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6 mr-2" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <div className="text-left">
                  <div className="text-xs"></div>
                  <div className="text-lg font-semibold">Google Play</div>
                </div>
              </a>
            </div>
            <div className="flex justify-center">
              <img
                src="/TransparentAppleStore.PNG"
                alt="Leechy App Store download"
                className="w-[614px] md:w-[800px] h-auto max-w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section className="border-t py-12 bg-white">
        <div className="mx-auto max-w-5xl px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start text-sm">
            
            {/* Branding + Social + Badges */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start mb-3">
                <img src="/LeechyLogo.jpeg" alt="Leechy logo" className="w-9 h-9 object-contain" />
              </div>
              <p className="text-gray-700 mb-3 leading-none text-sm">The rental marketplace for everyone</p>
              <div className="flex items-center justify-center md:justify-start gap-4 mb-3 text-brand-green text-sm">
                <a href="#" aria-label="Facebook" className="hover:opacity-80">f</a>
                <a href="#" aria-label="Instagram" className="hover:opacity-80">ig</a>
                <a href="#" aria-label="LinkedIn" className="hover:opacity-80">in</a>
                <a href="#" aria-label="YouTube" className="hover:opacity-80">yt</a>
              </div>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-3">
                {/* App Store button */}
                <a href="https://apps.apple.com/us/app/leechy/id6505043207"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white rounded-md w-[120px] h-8 text-[11px]">
                  <span className="font-medium">App Store</span>
                </a>
                {/* Google Play button */}
                <a href="https://play.google.com/store/apps/details?id=com.leechy.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-black text-white rounded-md w-[120px] h-8 text-[11px]">
                  <span className="font-medium">Google Play</span>
                </a>
              </div>
              <p className="text-xs text-gray-500">© 2025 Leechy LLC. All rights reserved.</p>
            </div>

            {/* Links */}
            <div className="md:col-span-2 grid grid-cols-[auto_auto] gap-x-6 justify-center md:justify-start text-center md:text-left">
              <ul className="space-y-[2px] text-gray-700 text-xs leading-none">
                <li><a href="#" className="leading-none hover:text-brand-green">About us</a></li>
                <li><a href="#" className="leading-none hover:text-brand-green">Search listings</a></li>
                <li><a href="#" className="leading-none hover:text-brand-green">Post a new listing</a></li>
              </ul>
              <ul className="space-y-[2px] text-gray-700 text-xs leading-none">
                <li><a href="#" className="leading-none hover:text-brand-green">Terms of Service</a></li>
                <li><a href="#" className="leading-none hover:text-brand-green">Privacy Policy</a></li>
                <li><a href="#" className="leading-none hover:text-brand-green">Contact Us</a></li>
              </ul>
            </div>
          </div>
        </div>
      </section>


    </div>
  )
}
