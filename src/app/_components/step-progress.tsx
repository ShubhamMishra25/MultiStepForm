"use client";

export type StepObjectType = {
  id: number,
  title: string;
  description: string;
  fields: string[];
};

interface Props {
  step: number;
  data: StepObjectType[];
}

export default function StepProgress({ step, data }: Props) {
  const currentStepInfo = data[step - 1];
  return (
    <div className="mb-6">
      {/* Progress Bar */}
      <div className="flex space-x-2 mb-4">
        {data.map(({ id }, index) => {
          const stepNumber = index + 1;
          return (
            <div
              key={id}
              className={`h-2 flex-1 rounded-full ${
                stepNumber <= step ? "bg-black" : "bg-gray-200"
              }`}
            />
          );
        })}
      </div>

      {/* Current Step Header */}
      {currentStepInfo && (
        <div className="md:col-span-2">
          <h3 className="text-lg font-semibold text-gray-800">
            {currentStepInfo.title}
          </h3>
          <p className="text-sm text-gray-600">{currentStepInfo.description}</p>
        </div>
      )}
    </div>
  );
}
