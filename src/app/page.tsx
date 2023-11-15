"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

export default function Home() {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <main style={{ maxWidth: 1200, marginInline: "auto", padding: 20 }}>
      {error ? (
        <p>Oh no, there was an error</p>
      ) : isLoading || isFetching ? (
        <p>Loading...</p>
      ) : data ? (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          {data.map((user) => (
            <div
              key={user.id}
              style={{ border: "1px solid #ccc", textAlign: "center" }}
            >
              <h3>{user.title}</h3>
              <p>{user.body}</p>
            </div>
          ))}
        </div>
      ) : null}
    </main>
  );
}
