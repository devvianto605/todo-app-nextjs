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

export default function HomePageComponent() {
  const { data: taskData } = useGetTask();
  const { handleAddTask, handleEditTask, handleDeleteTask } = useMutateTask();
  const { filter } = useFilterDropdownContext();
  const [progressPercent, setProgressPercent] = useState<number | undefined>(0);
  const [completedTask, setCompletedTask] = useState<number | undefined>(0);

  const addFormRef = useRef<UseFormReturn>(null);

  useEffect(() => {
    const newCompletedTask = taskData?.filter(
      (task) => task.completed === true
    ).length;
    setCompletedTask(newCompletedTask);
  }, [taskData]);

  useEffect(() => {
    const newProgressPercent =
      ((completedTask ?? 0) / (taskData?.length ?? 1)) * 100;
    setProgressPercent(newProgressPercent);
  }, [completedTask, taskData]);

  const filteredTaskData = () => {
    if (filter === "done") {
      return taskData?.filter((task) => task.completed === true);
    }
    if (filter === "undone") {
      return taskData?.filter((task) => task.completed === false);
    } else {
      return taskData;
    }
  };

  const addFormDefaultValue = {
    title: null,
    completed: false,
  };

  return (
    <Box mt="61px" mb="63px">
      <ProgressCard
        percent={progressPercent ?? 0}
        completed={completedTask ?? 0}
      />
      <Box mt="32px" display="flex" flexDir="column" gap="16px">
        <Box
          display="flex"
          w="100%"
          h="100%"
          justifyContent="space-between"
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          initial={{ opacity: 0, y: 20 }}
        >
          <Text fontSize="24px" fontWeight={500} color={COLOR.SOLID_BLACK}>
            Task
          </Text>
          <Dropdown />
        </Box>
        {filteredTaskData()?.map((task, idx) => (
          <HookFormWrapper
            key={`task-card-form-${idx}`}
            schema={editSchema}
            defaultValues={task}
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
              name="title"
              label={task.title}
              onClickDelete={() => handleDeleteTask.mutate({ taskId: task.id })}
              onChecked={() =>
                handleEditTask.mutate({
                  body: { completed: !task.completed },
                  taskId: task.id,
                })
              }
            />
          </HookFormWrapper>
        ))}
        <HookFormWrapper
          schema={addSchema}
          defaultValues={addFormDefaultValue}
          ref={addFormRef}
          onSubmit={(formVal) => {
            handleAddTask.mutate(formVal);
            addFormRef?.current?.reset();
          }}
        >
          <AddCard name="title" placeholder="Add your todo..." />
        </HookFormWrapper>
      </Box>
    </Box>
  );
}
