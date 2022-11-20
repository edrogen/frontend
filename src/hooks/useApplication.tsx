import { useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import httpClient from "../http-common";

const fetchUserApplications = () =>
  httpClient
    .get("/application")
    .then((response: AxiosResponse) => response.data);

export const useApplications = () => {
  return useQuery(["my-applications"], fetchUserApplications);
};
