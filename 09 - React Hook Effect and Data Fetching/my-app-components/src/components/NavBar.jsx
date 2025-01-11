

function NavBar({children}) {
    return (
        <nav className="flex items-center h-28 px-12 bg-primary  justify-between">
            {children}
        </nav>
    );
}

export default NavBar;