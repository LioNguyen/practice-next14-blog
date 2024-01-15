import axios from "axios";
import { useState } from "react";

export const useApi = (url: string, method: string, body: any) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<any>("");

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const res = await axios(url, { method: method || "GET", data: body });

      if (res) {
        setData(res.data);
      }
    } catch (err) {
      console.log("🚀 @log ~ useApi ~ err:", err);

      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  return { fetchData, isLoading, data, error };
};
