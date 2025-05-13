import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/clerk-react';

const Navbar = () => {
  return (
        

    <header className="flex items-center justify-between px-4 py-2 bg-black">
      <div className="flex items-center space-x-4">
        <img
          alt="Spotify logo black background with green circle and white text"
          className="w-6 h-6"
          height={24}
          src="https://storage.googleapis.com/a1aa/image/45e3c7ab-f5c9-4738-0639-c095b639525d.jpg"
          width={24}
        />
        <button
          aria-label="Inicio"
          className="text-white hover:text-[#1DB954] focus:outline-none focus:ring-2 focus:ring-[#1DB954] rounded"
        >
          <i className="fas fa-home"></i>
        </button>
      </div>
      
      <nav className="flex items-center space-x-4 text-xs font-semibold">
        <div className="d-flex">
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white text-black rounded-full px-4 py-1 text-sm font-semibold hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-[#1DB954]">Iniciar sesión</button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      </nav>
    </header>
  );
};

export default Navbar;

