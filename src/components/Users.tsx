"use client";

import { useUsers } from "@/services/user";
import { Button } from "@/components/ui/button";

export default function Users() {
  const { data, error, isPending } = useUsers();

  if (isPending) return <div>Loading...</div>;

  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.map((user) => (
        <div key={user.id} className="border p-4">
          <h2>{user.name}</h2>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <Button>View Profile</Button>
        </div>
      ))}
    </div>
  );
}
