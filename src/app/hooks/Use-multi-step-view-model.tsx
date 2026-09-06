import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm, FieldName } from "react-hook-form";
import { StepObjectType } from "../_components/step-progress";
import {
  createUserSchema,
  type CreateUserInput,
} from "@/lib/user-schema";

const STEP_INFO: StepObjectType[] = [
  {
    id: 1,
    title: "Basic Information",
    description: "Please provide your basic personal details",
    fields: ["firstName", "lastName", "phone", "gender"],
  },
  {
    id: 2,
    title: "Account & Security",
    description: "Set up your email and password",
    fields: ["email", "paymentMethod", "password", "confirmPassword"],
  },
  {
    id: 3,
    title: "Additional Details",
    description: "Complete your profile information",
    fields: ["passport", "healthInsurance"],
  },
];

export default function UseMultiStepViewModel() {
  const [step, setStep] = useState(1);

  const form = useForm<CreateUserInput>({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      gender: undefined,
      passport: "",
      healthInsurance: "",
      paymentMethod: undefined,
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = React.useCallback(
    (data: CreateUserInput) => {
      console.log("Form Data:", data);
      // Handle form submission logic here
    },
    []
  );

  const handleNextStep = React.useCallback(async () => {
    const fields = STEP_INFO[step - 1].fields;
    console.log("fields", fields);
    const validatedFields = await form.trigger(
      fields as FieldName<CreateUserInput>[]
    );
    console.log("handlenextstep called");
    console.log("ValidatedFields", validatedFields);

    if (step < 3 && validatedFields) {
      setStep((prev) => prev + 1);
    }
  }, [step, form]);

  const handlePrevStep = React.useCallback(() => {
    setStep((prev) => prev - 1);
  }, []);

  return React.useMemo(
    () => ({
      form,
      step,
      setStep,
      onSubmit,
      handleNextStep,
      handlePrevStep,
      stepInfo: STEP_INFO,
    }),
    [form, step, onSubmit, handleNextStep, handlePrevStep]
  );
}
