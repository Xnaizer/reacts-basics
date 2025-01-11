

function NumResult({movies}) {
  return (
    <p className="text-lg text-text-dark">
      Found <strong>{movies?.length}</strong> results
    </p>
  );
}

export default NumResult;