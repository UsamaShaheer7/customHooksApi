import axios from "axios";
import { useEffect, useState } from "react";

export default function useHook(URL, payload, method) {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        let response;
        if (method === "get") {
          response = await axios.get(URL);
        } else if (method === "post") {
          response = await axios.post(URL, payload);
        }
        setData(response?.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching data:", err);
        setError(err);
        setLoading(false);
      }
    };

    fetchData();
  }, [URL]);

  return [data, isLoading, error];
}
