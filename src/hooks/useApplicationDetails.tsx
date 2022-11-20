import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import httpClient from "../http-common";

const fetchApplication = (id: string) =>
  httpClient
    .get(`/application/${id}`)
    .then((response: AxiosResponse) => response.data);

export const useApplicationDetails = (id: string) => {
  return useQuery(["application", id], () => fetchApplication(id));
};
