import { useState, useEffect } from "react";

// кастомний НООК - логіка роботи
// приймає ф-ю в якості параметра 
// loadData - те що буде підгружатися до нас з зовні Fetch, (а в нашому компоненті буде саме те що для нього потрібне за занченням Users, телефони, ціни ...)
// створює стан, в useEffect дістає
// обробив данні з Fetch, поклав у State, та повертає у якості об'єкту 


export default function useLoadData(loadData){
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [isPending, setIsPending] = useState(false);
  
   
    useEffect(() => {
      setIsPending(true);
      loadData()
        .then((data) => setData(data))
        .catch((error) => setError(error))
        .finally(() => setIsPending(false));
    }, [loadData]);
  // порертає все що обробив(данні)
return{
    data, 
    error,
    isPending
}
}
// можна і зверху писати export
// export default useLoadData;