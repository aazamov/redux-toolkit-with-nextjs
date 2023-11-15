"use client";

import { useGetUserByIdQuery } from "@/redux/services/userApi";
import Link from "next/link";

const page = ({ params }) => {
  const { data, error, isLoading, isFetching } = useGetUserByIdQuery(params);
  console.log(data);

  return <div></div>;
};

export default page;
