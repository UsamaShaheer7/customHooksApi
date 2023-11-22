import React from "react";
import useHook from "./useHook";

const Api = () => {
  const payload = [
    {
      id: 1,
      title: "I am fine",
      body: "not again man",
    },
    { id: 1, title: "I am fine", body: "not again man" },
  ];

  const [data, isLoading, error] = useHook(
    "https://jsonplaceholder.typicode.com/posts",
    payload,
    "get"
  );
  return (
    <div>
      {isLoading ? (
        <div>loading......</div>
      ) : error ? (
        <div>Error: {error.message}</div>
      ) : (
        data?.map((item) => (
          <div key={item.id}>
            <div>{item.id}</div>
            <div>{item.title}</div>
            <div>{item.body}</div>
          </div>
        ))
      )}
    </div>
  );
};

export default Api;
