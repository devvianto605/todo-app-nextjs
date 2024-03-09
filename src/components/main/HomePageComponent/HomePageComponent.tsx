"use client";

import React, { useEffect, useState } from "react";
import ProgressCard from "../../common/ProgressCard/ProgressCard";
import { Box, Text } from "~/styles/globals.styled";
import { COLOR } from "~/constants/color";
import AddCard from "../../common/AddCard/AddCard";
import TaskCard from "../../common/TaskCard/TaskCard";
import Dropdown from "../../common/Dropdown/Dropdown";
import { useFilterDropdownContext } from "../../../contexts/filterDropdownContext";
import HookFormWrapper from "../../forms/HookFormWrapper/HookFormWrapper";
import { z } from "zod";


const taskData = [
  {
    id: "5fe3f4ca-193c-4170-83c1-cb5a19908601",
    title: "Buy food for dinner",
    completed: true,
  },
  {
    id: "f619466c-a016-4281-b584-7db2795d103d",
    title: "Call Marie at 10.00 PM",
    completed: false,
  },
  {
    id: "5fe3f4ca-193c-4170-83c1-cb5a19908602",
    title: "Write a react blog post",
    completed: false,
  },
];


export default function HomePageComponent() {
  const { filter } = useFilterDropdownContext();
  const [progressPercent, setProgressPercent] = useState(0);
  const [completedTask, setCompletedTask] = useState(0);

  useEffect(() => {
    const newProgressPercent = (completedTask / taskData.length) * 100;
    setProgressPercent(newProgressPercent);
  }, [completedTask, taskData]); 

  useEffect(() => {
    const newCompletedTask = taskData.filter(task => task.completed === true).length;
    setCompletedTask(newCompletedTask);
  }, [taskData]);

  const addSchema = z.any();
  const editSchema = z.any();

  const filteredTaskData = () => {
    if (filter === "done") {
      return taskData.filter((task) => task.completed === true);
    }
    if (filter === "undone") {
      return taskData.filter((task) => task.completed === false);
    } else {
      return taskData;
    }
  };

  return (
    <Box mt="61px" mb="63px">
      <ProgressCard percent={progressPercent} completed={completedTask} />
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
        {filteredTaskData().map((task, idx) => (
          <HookFormWrapper
            key={`task-card-form-${idx}`}
            schema={editSchema}
            onSubmit={() => console.log(`sent edit ${idx}`)}
          >
            <TaskCard isChecked={task.completed} name="edit" label={task.title} />
          </HookFormWrapper>
        ))}
        <HookFormWrapper
          schema={addSchema}
          onSubmit={() => console.log("sent add")}
        >
          <AddCard name="add" placeholder="Add your todo..." />
        </HookFormWrapper>
      </Box>
    </Box>
  );
}
