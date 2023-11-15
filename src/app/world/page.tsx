"use client";

import { useGetUsersQuery } from "@/redux/services/userApi";
import Link from "next/link";
import React from "react";

const page = () => {
  const { isLoading, isFetching, data, error } = useGetUsersQuery(null);

  return (
    <div>
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
          <Link href="/">Main </Link>
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
    </div>
  );
};

export default page;
