
import Logo from './Logo';

const Navbar = () => {
  return (
    <div className="w-full flex justify-center pt-4 px-2 absolute top-0 z-50">
      <nav className="bg-white rounded-lg px-3 py-[0.3rem] flex items-center justify-between w-3xl max-w-4xl shadow-sm border border-gray-100">

        <div className="flex items-center">
          <div className="p-2 bg-gray-50 rounded-xl border border-gray-100">
            <Logo size={24} animated={true} />
          </div>
        </div>


        <div className="hidden md:flex space-x-8 text-md font-medium text-gray-700 ">
          <a href="/home" className="flex items-center hover:text-green-700 transition-colors">
            Home
          </a>
          <a href="/features" className="hover:text-green-700 transition-colors">
            Features
          </a>
          <a href="/how-it-works" className="hover:text-green-700 transition-colors">
            How It Works
          </a>
          <a href="/about" className="hover:text-green-700 transition-colors">
            About
          </a>
        </div>


        <div>
          <button className="bg-[#357B62] hover:bg-[#2b6450] text-white px-6 py-2.5 rounded-md text-sm font-medium transition-colors shadow-sm">
            Get a demo
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
