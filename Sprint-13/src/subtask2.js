import React from "react";
import { useSearchParams } from "react-router-dom";

export default function Subtask2() {
  const [searchParams] = useSearchParams();
  const queryString = queryToString(searchParams);
  return <div>Subtask2, query parameters: {queryString}</div>;
}

function queryToString(query) {
  const queryArray = [];
  for (let arrKeyValue of query) {
    queryArray.push(`${arrKeyValue[0]}=${arrKeyValue[1]}`);
  }
  return queryArray.join(", ");
}
