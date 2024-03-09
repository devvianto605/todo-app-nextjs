import axios from '../axiosWrapper';
import { ENDPOINT } from '..';

export type DeleteTaskRequest = {
 title: string;
 completed: boolean;
};


export async function deleteTask({taskId}: {taskId:string}): Promise<never> {

  const { data } = await axios<DeleteTaskRequest, never>({
    method: 'DELETE',
    url: ENDPOINT.TASK.MUTATE_TASK.replace(':taskId',taskId),
  });

  return data;
}

