import React, { useState } from "react";
import { Upload, ArrowRight } from "lucide-react";

const CandidateForm = ({ formData, setFormData, nextStep }) => {
  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.position.trim()) newErrors.position = "Position is required";
    if (!formData.currentPosition.trim()) newErrors.currentPosition = "Current position is required";
    if (!formData.experience || formData.experience <= 0)
      newErrors.experience = "Valid experience required";
    if (!formData.resume)
      newErrors.resume = "Resume (PDF ≤ 5MB) is required";
    else if (formData.resume.type !== "application/pdf")
      newErrors.resume = "Only PDF allowed";
    else if (formData.resume.size > 5 * 1024 * 1024)
      newErrors.resume = "File must be ≤ 5MB";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = (e) => {
    e.preventDefault();
    if (validate()) nextStep();
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleNext} className="form-box">
      <h2>Candidate Application</h2>

      <label>First Name</label>
      <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        placeholder="Enter your first name"
      />
      {errors.firstName && <p className="error">{errors.firstName}</p>}

      <label>Last Name</label>
      <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        placeholder="Enter your last name"
      />
      {errors.lastName && <p className="error">{errors.lastName}</p>}

      <label>Position Applied For</label>
      <select
        name="position"
        value={formData.position}
        onChange={handleChange}
        required
      >
        <option value="">Select Position</option>
        <option value="Frontend Developer">Frontend Developer</option>
        <option value="Backend Developer">Backend Developer</option>
        <option value="Full Stack Developer">Full Stack Developer</option>
        <option value="Software Tester">Software Tester</option>
        <option value="UI/UX Designer">UI/UX Designer</option>
        <option value="DevOps Engineer">DevOps Engineer</option>
        <option value="Data Analyst">Data Analyst</option>
        <option value="Project Manager">Project Manager</option>
      </select>
      {errors.position && <p className="error">{errors.position}</p>}

      <label>Current Position</label>
      <input
        type="text"
        name="currentPosition"
        value={formData.currentPosition}
        onChange={handleChange}
        placeholder="Your current role"
      />
      {errors.currentPosition && <p className="error">{errors.currentPosition}</p>}

      <label>Experience in Years</label>
      <input
        type="number"
        name="experience"
        value={formData.experience}
        onChange={handleChange}
        placeholder="Years of experience"
      />
      {errors.experience && <p className="error">{errors.experience}</p>}

      <label>Upload Resume</label>
      <div className="file-upload">
        <Upload className="upload-icon" />
        <span>{formData.resume ? formData.resume.name : "Choose PDF file"}</span>
        <input
          type="file"
          accept="application/pdf"
          onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
        />
      </div>
      {errors.resume && <p className="error">{errors.resume}</p>}

      <button type="submit" className="next-btn">
        Next <ArrowRight size={18} />
      </button>
    </form>
  );
};

export default CandidateForm;
