import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error:any = useRouteError();
//   console.error(error);

  return (
    <div id="error-page">
      <h1>404!</h1>
      <p>很明显你来错了地方，这里是一片未开拓的土地</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}