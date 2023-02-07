import { useEffect, useState } from "react";

const useLoading = (fetchMethod,params) => {
    const [entities, setEntities] = useState(null);

    useEffect(() => {
        fetchMethod(params)
        .then((res) => {
          setEntities(res);
          console.log("Users: ", res);
        });
    }, [fetchMethod,params]);

    return entities
  };

export {useLoading}