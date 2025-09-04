export function ProgressIndicator({ currentStep, totalSteps }) {
  return (
    <div className="space-y-4">
      <div className="text-sm font-medium text-gray-600">
        STEP {currentStep} OF {totalSteps}
      </div>

      <div className="flex gap-2">
        {Array.from({ length: totalSteps }, (_, index) => (
          <div
            key={index}
            className={`h-2 flex-1 rounded ${
              index < currentStep ? "bg-gray-900" : index === currentStep - 1 ? "bg-gray-900" : "bg-gray-200"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
