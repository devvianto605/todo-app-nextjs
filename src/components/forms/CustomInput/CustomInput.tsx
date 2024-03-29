/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useFormContext } from "react-hook-form";
import { type HTMLAttributes } from "react";

type CustomInputProps<Model> = {
  name: keyof Model | string;
  placeholder?: string;
} & HTMLAttributes<HTMLInputElement>;

const CustomInput = <Model extends Record<string, any>>({
  name,
  placeholder,
  ...other
}: CustomInputProps<Model>): JSX.Element => {
  const {
    register,
    formState: { isSubmitting },
  } = useFormContext();

  return (
    <input
      disabled={isSubmitting}
      placeholder={placeholder}
      {...register(name as string)}
      {...other}
      type="text"
    />
  );
};

export default CustomInput;
