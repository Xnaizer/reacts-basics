

function Main({children}) {
    return (
        <main className="mt-6 flex gap-10 justify-center   sm:flex-col lg:flex-row xl:flex-row sm:gap-0">
          {children}
        </main>
    );
}

export default Main;
