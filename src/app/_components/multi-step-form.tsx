"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import UseMultiStepViewModel from "../hooks/Use-multi-step-view-model";
import StepProgress from "./step-progress";

export default function MultiStepForm() {
  const viewModel = UseMultiStepViewModel();
  const { step, form, onSubmit, handleNextStep, handlePrevStep, stepInfo } =
    viewModel;

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-4xl">
        <Form {...form}>
          <CardHeader>
            <CardTitle className="text-2xl font-bold">
              Personal Information
            </CardTitle>
            <CardDescription>
              Fill out the form to create your account.
            </CardDescription>

            <StepProgress step={step} data={stepInfo} />
          </CardHeader>

          <form onSubmit={form.handleSubmit(onSubmit)}>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {step === 1 && (
                  <>
                    {/* Name */}
                    <FormField
                      name="firstName"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="firstName">
                            First Name <FormMessage />
                          </Label>
                          <FormControl>
                            <Input
                              id="firstName"
                              placeholder="Enter your first name"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {/* Last Name */}
                    <FormField
                      name="lastName"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="lastName">
                            Last Name <FormMessage />
                          </Label>
                          <FormControl>
                            <Input
                              id="lastName"
                              placeholder="Enter your last name"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {/* Phone */}
                    <FormField
                      name="phone"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="phone">
                            Phone <FormMessage />
                          </Label>
                          <FormControl>
                            <Input
                              id="phone"
                              placeholder="Enter your phone number"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {/* Gender */}
                    <FormField
                      name="gender"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="gender">
                            Gender <FormMessage />
                          </Label>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select gender" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="prefer-not-to-say">
                                  Prefer not to say
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 3 && (
                  <>
                    {/* Passport */}
                    <FormField
                      name="passport"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="passport">
                            Passport <FormMessage />
                          </Label>
                          <FormControl>
                            <Input
                              id="passport"
                              placeholder="Enter your passport number"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    {/* Health Insurance */}
                    <FormField
                      name="healthInsurance"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="healthInsurance">
                            Health Insurance <FormMessage />
                          </Label>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select health insurance" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="aetna">Aetna</SelectItem>
                                <SelectItem value="blue-cross">
                                  Blue Cross Blue Shield
                                </SelectItem>
                                <SelectItem value="cigna">Cigna</SelectItem>
                                <SelectItem value="humana">Humana</SelectItem>
                                <SelectItem value="kaiser">
                                  Kaiser Permanente
                                </SelectItem>
                                <SelectItem value="united">
                                  UnitedHealth
                                </SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                                <SelectItem value="none">
                                  No Insurance
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </>
                )}

                {step === 2 && (
                  <>
                    {/* Email */}
                    <FormField
                      name="email"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="email">
                            Email <FormMessage />
                          </Label>
                          <FormControl>
                            <Input
                              id="email"
                              type="email"
                              placeholder="Enter your email"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {/* Payment Method */}
                    <FormField
                      name="paymentMethod"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="paymentMethod">
                            Payment Method <FormMessage />
                          </Label>
                          <FormControl>
                            <Select
                              onValueChange={field.onChange}
                              value={field.value || ""}
                            >
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select payment method" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="credit-card">
                                  Credit Card
                                </SelectItem>
                                <SelectItem value="debit-card">
                                  Debit Card
                                </SelectItem>
                                <SelectItem value="paypal">PayPal</SelectItem>
                                <SelectItem value="bank-transfer">
                                  Bank Transfer
                                </SelectItem>
                                <SelectItem value="apple-pay">
                                  Apple Pay
                                </SelectItem>
                                <SelectItem value="google-pay">
                                  Google Pay
                                </SelectItem>
                              </SelectContent>
                            </Select>
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {/* Password */}
                    <FormField
                      name="password"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="password">
                            Password <FormMessage />
                          </Label>
                          <FormControl>
                            <Input
                              id="password"
                              type="password"
                              placeholder="Enter a password"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    {/* Confirm Password */}
                    <FormField
                      name="confirmPassword"
                      control={form.control}
                      render={({ field }) => (
                        <FormItem>
                          <Label htmlFor="confirmPassword">
                            Confirm Password <FormMessage />
                          </Label>
                          <FormControl>
                            <Input
                              id="confirmPassword"
                              type="password"
                              placeholder="Confirm your password"
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </>
                )}
              </div>
            </CardContent>
            <CardFooter className="border-t mt-8">
              <div className="flex justify-between items-center w-full">
                <div>
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevStep}
                      className="px-6"
                    >
                      Back
                    </Button>
                  )}
                </div>

                <div className="flex items-center space-x-2">
                  <span className="text-sm text-gray-500">
                    Step {step} of 3
                  </span>
                  {step < 3 && (
                    <Button
                      onClick={handleNextStep}
                      className="px-6"
                      type="button"
                    >
                      Next
                    </Button>
                  )}
                  {step === 3 && (
                    <Button type="submit" className="px-6">
                      Complete Registration
                    </Button>
                  )}
                </div>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>
    </div>
  );
}
