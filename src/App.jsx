import React, { useState } from "react";
import { motion } from "framer-motion";
import CandidateForm from "./components/CandidateForm";
import VideoRecorder from "./components/VideoRecorder";
import ReviewPage from "./components/ReviewPage";
import './App.css'

const App = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    position: "",
    currentPosition: "",
    experience: "",
    resume: null,
    videoBlob: null,
  });

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500">
      <motion.div
        key={step}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="bg-white p-8 rounded-2xl shadow-xl w-[90%] max-w-md"
      >
        {step === 1 && (
          <CandidateForm
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
          />
        )}
        {step === 2 && (
          <VideoRecorder
            formData={formData}
            setFormData={setFormData}
            nextStep={nextStep}
            prevStep={prevStep}
          />
        )}
        {step === 3 && (
          <ReviewPage formData={formData} prevStep={prevStep} />
        )}
      </motion.div>
    </div>
  );
};

export default App;
