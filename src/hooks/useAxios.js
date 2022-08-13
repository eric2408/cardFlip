import { useState } from "react";
import axios from "axios";

const useAxios = (baseUrl) => {
    const [state, setState] = useState([]);

    const add = async (formatter = data => data, urlName = "") => {
      const res = await axios.get(`${baseUrl}${urlName}`);
      setState(data => [...data, formatter(res.data)]);
    };

    const clear = () => setState([]);

    return [state, add, clear];
}


export default useAxios;