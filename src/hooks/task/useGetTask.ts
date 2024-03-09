'use client';

import { useQuery } from '@tanstack/react-query';
import { QUERY_KEY } from '~/constants/queryKey';
import { getTask } from '~/services/tasks/getTasks';

export default function useGetTask() {
  return useQuery({
    queryFn: getTask,
    queryKey: [QUERY_KEY.GET_TASK],
  });
};

