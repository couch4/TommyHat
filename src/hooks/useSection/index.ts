import { useQuery } from "react-query";
import axios from "axios";
import {default as store} from "../../store";

const getSectionById = async (sectionId: string) => {
  const cacheRandomiser = store.getState().cacheRandomiser
  const { data } = await axios.get(`${process.env.PUBLIC_URL}/data.json?v=${cacheRandomiser}`);

  return data.sections.find((sect: any) => sect.id === sectionId);
};

export default function useSection(sectionId: string) {
  const query = useQuery(["section", sectionId], () => getSectionById(sectionId))
  
  return query.data;
}