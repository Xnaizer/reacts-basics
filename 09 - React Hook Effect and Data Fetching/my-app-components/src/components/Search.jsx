

export default function Search({ query, setQuery }) {
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  return (
    <input
      className="self-center border-none p-4 text-lg rounded-md w-[50%] transition-all duration-300 bg-primary-light text-text placeholder:text-text-dark focus:outline-none focus:shadow-lg focus:-translate-y-0.5 " 
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={handleChange}
    />
  );
}