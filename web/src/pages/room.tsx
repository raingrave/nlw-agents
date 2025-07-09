import { Navigate, useParams } from "react-router-dom";

type RoomId = {
  id: string;
};

export function Room() {
  const params = useParams<RoomId>();

  if (!params.id) {
    <Navigate replace to="/" />;
  }

  return <h1>Room: {params.id}</h1>;
}
