import { useRouteError } from "react-router-dom";

function ErrorPage() {
  const error = useRouteError();
  return (
    <div
      id="error-page"
      className="flex flex-col items-center justify-center h-screen gap-4"
    >
      <h1 className="text-4xl">Oops!</h1>
      <p className="text-xl">Sorry, an unexpected error has occurred.</p>
      <p className="flex flex-col">
        <i>{error.statusText}</i>
        <i>{error.error.message || "Erreur"}</i>
        <i>Status: {error.status && error.status}</i>
      </p>
    </div>
  );
}

export default ErrorPage;
