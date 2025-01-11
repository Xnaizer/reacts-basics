import { useState } from "react";

function BoxMovies({children}) {

    const [isOpen, setIsOpen] = useState(true);
    return (
        <div className="w-[40%] max-w-100 bg-background-500 rounded-lg overflow-hidden relative text-white">
          
          <button
            className="absolute top-2 right-2 h-6 w-6 rounded-full bg-background-900 text-text text-sm font-bold cursor-pointer z-50"
            onClick={() => setIsOpen((open) => !open)}
          >
            {isOpen ? "–" : "+"}
          </button>
          {isOpen && children}
        </div>
    );
}

export default BoxMovies