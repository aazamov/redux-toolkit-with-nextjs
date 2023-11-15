"use client";

import { useGetUserByIdQuery } from "@/redux/services/userApi";
import Link from "next/link";

const page = ({ params }: { params: any }) => {
  const { data } = useGetUserByIdQuery(params);

  console.log(data);

  return (
    <div>
      <div>
        {!data && <p>there is no data</p>}
        {data && (
          <div>
            {data.map((user) => (
              <p>{user.title}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default page;
