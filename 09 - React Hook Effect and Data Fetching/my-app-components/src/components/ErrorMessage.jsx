
function ErrorMessage({ error }) {
    return (
        <div className="text-red-500 text-center mt-10">
            <span>🚫</span>
            <h1>Something went wrong</h1>{error}
        </div>
    );
}

export default ErrorMessage;