import { type EditTaskRequest, editTask } from "~/services/tasks/editTask";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { QUERY_KEY } from "~/constants/queryKey";
import { addTask } from "~/services/tasks/addTask";
import { deleteTask } from "~/services/tasks/deleteTask";

export default function useMutateTask() {
  const queryClient = useQueryClient();

  const handleAddTask = useMutation({
    mutationFn: addTask,
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_TASK] }),
  });

  const handleEditTask = useMutation({
    mutationFn: ({ body, taskId }: { body: EditTaskRequest; taskId: string }) =>
      editTask({ body, taskId }),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_TASK] }),
  });

  const handleDeleteTask = useMutation({
    mutationFn: ({ taskId }: { taskId: string }) => deleteTask({ taskId }),
    onSuccess: async () =>
      await queryClient.invalidateQueries({ queryKey: [QUERY_KEY.GET_TASK] }),
  });

  const isLoading =
    handleAddTask.isPending ||
    handleDeleteTask.isPending ||
    handleEditTask.isPending;

  return { handleAddTask, handleEditTask, handleDeleteTask, isLoading };
}
