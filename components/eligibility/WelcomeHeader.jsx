export default function WelcomeHeader() {
  return (
    <div className="container mx-auto mt-14 border-gray-200 mt-40 border p-6 bg-gray-50">
      <h4 className="text-lg font-medium mb-2">Hi,</h4>
      <h1 className="text-2xl md:text-3xl font-bold mb-1">
        Welcome to Your Free and Quick Wizard
      </h1>
      <p className="text-gray-600 text-sm md:text-base">
        Check your Eligibility
      </p>

      {/* Red underline accent */}
      <div className="mt-4 w-20 h-2 bg-red-600"></div>
    </div>
  );
}
