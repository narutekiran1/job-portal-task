import React from "react";
import { Download, ArrowLeft, CheckCircle } from "lucide-react";

const ReviewPage = ({ formData, prevStep }) => {
  return (
    <div className="text-center space-y-4">
      <h2 className="text-2xl font-bold text-gray-800 mb-3">Review Your Submission</h2>

      <div className="text-left space-y-1 bg-gray-50 p-4 rounded-lg">
        <p><strong>First Name:</strong> {formData.firstName}</p>
        <p><strong>Last Name:</strong> {formData.lastName}</p>
        <p><strong>Position Applied:</strong> {formData.position}</p>
        <p><strong>Current Position:</strong> {formData.currentPosition}</p>
        <p><strong>Experience:</strong> {formData.experience} years</p>
      </div>

      <div>
        <h3 className="font-semibold mb-2">Resume</h3>
        {formData.resume && (
          <a
            href={URL.createObjectURL(formData.resume)}
            download="resume.pdf"
            className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition"
          >
            <Download className="w-5 h-5" /> Download Resume
          </a>
        )}
      </div>

      <div>
        <h3 className="font-semibold mb-2">Recorded Video</h3>
        {formData.videoBlob && (
          <video
            controls
            src={URL.createObjectURL(formData.videoBlob)}
            className="w-full rounded-lg border"
          />
        )}
      </div>

      <div className="flex justify-between mt-5">
        <button
          onClick={prevStep}
          className="flex items-center gap-2 text-indigo-600 font-semibold"
        >
          <ArrowLeft className="w-5 h-5" /> Back
        </button>
        <button
          onClick={() => alert("Submitted successfully!")}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition"
        >
          <CheckCircle className="w-5 h-5" /> Confirm & Submit
        </button>
      </div>
    </div>
  );
};

export default ReviewPage;
