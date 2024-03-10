import axios from "../axiosWrapper";
import { ENDPOINT } from "..";

type GetTaskResponse = {
  id: string;
  title: string;
  completed: boolean;
};

export async function getTask(): Promise<GetTaskResponse[]> {
  const { data } = await axios<never, GetTaskResponse[]>({
    method: "get",
    url: ENDPOINT.TASK.GET_TASKS,
  });

  return data;
}
