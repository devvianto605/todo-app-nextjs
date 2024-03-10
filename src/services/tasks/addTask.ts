import axios from "../axiosWrapper";
import { ENDPOINT } from "..";

export type AddTaskRequest = {
  title: string | null;
  completed: boolean;
};

export async function addTask(body: AddTaskRequest): Promise<never> {
  const { data } = await axios<AddTaskRequest, never>({
    body,
    method: "POST",
    url: ENDPOINT.TASK.GET_TASKS,
  });

  return data;
}
