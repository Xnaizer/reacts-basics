import { useRouteError } from "react-router-dom";

function ErrorPage() {
    const error = useRouteError();

    return (
        <>
            <div>NYARI APA HAH!?!?!?!</div>
            <div>GA ADA YANG BEGITUAN WOY</div>
        </>
    );
}

export default ErrorPage;