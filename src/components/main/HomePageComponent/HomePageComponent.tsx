"use client";

import React, { useEffect, useRef, useState } from "react";
import ProgressCard from "../../common/ProgressCard/ProgressCard";
import { Box, Text } from "~/styles/globals.styled";
import { COLOR } from "~/constants/color";
import AddCard from "../../common/AddCard/AddCard";
import TaskCard from "../../common/TaskCard/TaskCard";
import Dropdown from "../../common/Dropdown/Dropdown";
import { useFilterDropdownContext } from "../../../contexts/filterDropdownContext";
import HookFormWrapper from "../../forms/HookFormWrapper/HookFormWrapper";
import useGetTask from "~/hooks/task/useGetTask";
import useMutateTask from "~/hooks/task/useMutateTask";
import { addSchema, editSchema } from "~/schemas/task";
import type { UseFormReturn } from "react-hook-form";
import LoadingSpinner from "~/components/forms/LoadingSpinner/LoadingSpinner";

export default function HomePageComponent() {
  const { data: taskData, isLoading } = useGetTask();
  const { handleAddTask, handleEditTask, handleDeleteTask } = useMutateTask();
  const { filter } = useFilterDropdownContext();
  const [progressPercent, setProgressPercent] = useState<number | undefined>(0);
  const [completedTask, setCompletedTask] = useState<number | undefined>(0);

  const addFormRef = useRef<UseFormReturn>(null);

  useEffect(() => {
    const newCompletedTask = taskData?.filter((task) => task.completed).length;
    setCompletedTask(newCompletedTask);
  }, [taskData]);

  useEffect(() => {
    const newProgressPercent =
      ((completedTask ?? 0) / (taskData?.length ?? 1)) * 100;
    setProgressPercent(newProgressPercent);
  }, [completedTask, taskData]);

  const filteredTaskData = () => {
    if (filter === "done") {
      return taskData?.filter((task) => task.completed);
    }

    if (filter === "undone") {
      return taskData?.filter((task) => !task.completed);
    }

    return taskData;
  };

  const addFormDefaultValue = {
    title: null,
    completed: false,
  };

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <Box mb="63px" mt="61px">
      <ProgressCard
        completed={completedTask ?? 0}
        percent={progressPercent ?? 0}
      />
      <Box display="flex" flexDir="column" gap="16px" mt="32px">
        <Box
          animate={{ opacity: 1, y: 0 }}
          display="flex"
          exit={{ opacity: 0, y: 20 }}
          h="100%"
          initial={{ opacity: 0, y: 20 }}
          justifyContent="space-between"
          w="100%"
        >
          <Text color={COLOR.SOLID_BLACK} fontSize="24px" fontWeight={500}>
            Task
          </Text>
          <Dropdown />
        </Box>
        {filteredTaskData()?.map((task, idx) => (
          <HookFormWrapper
            key={`task-card-form-${idx}`}
            defaultValues={task}
            schema={editSchema}
            onSubmit={(formVal) =>
              handleEditTask.mutate({
                body: {
                  title: formVal.title === "" ? task.title : formVal.title,
                },
                taskId: task.id,
              })
            }
          >
            <TaskCard
              isChecked={task.completed}
              label={task.title}
              name="title"
              onChecked={() =>
                handleEditTask.mutate({
                  body: { completed: !task.completed },
                  taskId: task.id,
                })
              }
              onClickDelete={() => handleDeleteTask.mutate({ taskId: task.id })}
            />
          </HookFormWrapper>
        ))}
        <HookFormWrapper
          ref={addFormRef}
          defaultValues={addFormDefaultValue}
          schema={addSchema}
          onSubmit={(formVal) => {
            handleAddTask.mutate(formVal);
            addFormRef?.current?.reset();
          }}
        >
          <AddCard
            name="title"
            placeholder="Add your todo..."
            onClickCard={() => addFormRef.current?.setFocus("title")}
          />
        </HookFormWrapper>
      </Box>
    </Box>
  );
}
