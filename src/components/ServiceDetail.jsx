import { useLocation, useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const ServiceDetail = () => {
  const { state } = useLocation();  // 👈 yahan data aayega
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="p-10 text-center">
        No service data found
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto p-10">

      <button
        onClick={() => navigate(-1)}
        className="flex items-center gap-2 text-cyan-600 mb-6"
      >
        <ArrowLeft size={16} /> Back
      </button>

      <h1 className="text-4xl font-bold">
        {state.title}
      </h1>

      <p className="text-gray-500 mt-2">
        {state.desc}
      </p>

      <div className="mt-6 p-6 bg-cyan-50 rounded-xl">
        {state.full}
      </div>

    </div>
  );
};

export default ServiceDetail;