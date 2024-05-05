import { useRouteError } from "react-router-dom";
export default function VansErrour() {
  const err = useRouteError();
  return <h1 className="grow layout-margin">Errour {err.status} : {err.message}</h1>;
}
