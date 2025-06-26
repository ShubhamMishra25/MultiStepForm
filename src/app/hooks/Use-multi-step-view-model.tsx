import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import React, { useState } from "react";
import { useForm, FieldName } from "react-hook-form";
import { StepObjectType } from "../_components/step-progress";

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

const createUserSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    phone: z.string().min(1, "Phone number is required"),
    email: z.string().email("Invalid email address"),
    gender: z.enum(["male", "female", "other", "prefer-not-to-say"]).optional(),
    passport: z.string().min(1, "Passport number is required"),
    healthInsurance: z.string().optional(),
    paymentMethod: z.string().optional(),
    password: z.string().min(6, "Password must be at least 6 characters long"),
    confirmPassword: z
      .string()
      .min(6, "Confirm password must be at least 6 characters long"),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export default function UseMultiStepViewModel() {
  const [step, setStep] = useState(1);

  const form = useForm<z.infer<typeof createUserSchema>>({
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
    (data: z.infer<typeof createUserSchema>) => {
      console.log("Form Data:", data);
      // Handle form submission logic here
    },
    []
  );

  const handleNextStep = React.useCallback(async () => {
    const fields = STEP_INFO[step - 1].fields;
    console.log("fields", fields);
    const validatedFields = await form.trigger(
      fields as FieldName<z.infer<typeof createUserSchema>>[]
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
