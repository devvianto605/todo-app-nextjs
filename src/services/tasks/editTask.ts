import axios from '../axiosWrapper';
import { ENDPOINT } from '..';

export type EditTaskRequest = {
 title?: string;
 completed?: boolean;
};

export async function editTask({body, taskId}:{body: EditTaskRequest; taskId: string}): Promise<never> {

  const { data } = await axios<EditTaskRequest, never>({
    body,
    method: 'PATCH',
    url: ENDPOINT.TASK.MUTATE_TASK.replace(':taskId',taskId),
  });

  return data;
}

