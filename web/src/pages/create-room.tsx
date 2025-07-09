import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

type Room = {
  id: string;
  description: string;
  created_at: string;
};

type GetRoomsResponse = Room[];

export function CreateRoom() {
  const { data, isLoading } = useQuery({
    queryKey: ["get-rooms"],
    queryFn: async () => {
      const response = await fetch("http://localhost:8080/rooms");
      const jsonResponse: GetRoomsResponse = await response.json();
      return jsonResponse;
    },
  });

  return (
    <div>
      <h1>Create Room</h1>
      <Link to="/room">Go /room</Link>
      {isLoading && "loading..."}
      <div>
        {data?.map((room: Room) => {
          return (
            <p key={room.id}>
              <Link to={`/room/${room.id}`}>{room.id}</Link>
            </p>
          );
        })}
      </div>
    </div>
  );
}
