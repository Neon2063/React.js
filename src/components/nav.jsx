import logo from '../assets/logo.png';
import user from '../assets/profile_img.png';
import search from '../assets/search_icon.svg';
import bell from '../assets/bell_icon.svg';

const Nav = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-3 bg-black fixed z-10">
     
      <div className="flex items-center">
        <img className="m-1 h-12" src={logo} alt="Banner" />
        <ul className="flex gap-9 pl-10 text-lg">
          <li className="text-white hover:text-white hover:scale-110 transition-transform duration-200">Home</li>
          <li className="text-white hover:text-white hover:scale-110 transition-transform duration-200">TV Shows</li>
          <li className="text-white hover:text-white hover:scale-110 transition-transform duration-200">Movies</li>
          <li className="text-white hover:text-white hover:scale-110 transition-transform duration-200">News and Popular</li>
          <li className="text-white hover:text-white hover:scale-110 transition-transform duration-200">Browse by Language</li>
        </ul>
      </div>

      
      <nav>
        <ul className="flex items-center gap-5">
          <li><img className="w-5" src={search} alt="Search" /></li>
          <li><img className="w-5" src={bell} alt="Notifications" /></li>
          <li><img className="w-8 rounded-full" src={user} alt="User" /></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
