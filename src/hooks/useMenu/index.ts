import { useQuery } from "react-query";
import axios from "axios";
import {default as store} from "../../store";

const getMenuItems = async () => {
  const cacheRandomiser = store.getState().cacheRandomiser
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/data.json?v=${cacheRandomiser}`);
  return data.menu;
};

export default function useMenu() {
  const query = useQuery(["menu"], () => getMenuItems())  
  return query.data;
}