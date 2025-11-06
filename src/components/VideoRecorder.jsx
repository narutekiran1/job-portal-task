import React, { useState, useRef, useEffect } from "react";

const VideoRecorder = ({ formData, setFormData, nextStep }) => {
  const [recording, setRecording] = useState(false);
  const [videoUrl, setVideoUrl] = useState(null);
  const [error, setError] = useState("");
  const [time, setTime] = useState(0);
  const mediaRecorderRef = useRef(null);
  const chunks = useRef([]);
  const videoRef = useRef(null);
  const timerRef = useRef(null);

  // Ask for camera + mic permission
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        videoRef.current.srcObject = stream;
      })
      .catch(() => setError("Camera or microphone access denied."));
  }, []);

  // Start recording
  const startRecording = async () => {
    setError("");
    setTime(0);
    chunks.current = [];

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true, audio: true });
      videoRef.current.srcObject = stream;

      mediaRecorderRef.current = new MediaRecorder(stream);
      mediaRecorderRef.current.ondataavailable = (e) => {
        if (e.data.size > 0) chunks.current.push(e.data);
      };

      mediaRecorderRef.current.onstop = () => {
        const blob = new Blob(chunks.current, { type: "video/mp4" });
        const url = URL.createObjectURL(blob);
        setVideoUrl(url);
        setFormData({ ...formData, video: blob });
      };

      mediaRecorderRef.current.start();
      setRecording(true);

      // Timer and auto-stop at 90 sec
      timerRef.current = setInterval(() => {
        setTime((prev) => {
          if (prev >= 89) {
            stopRecording(true); // auto stop
            return 90;
          }
          return prev + 1;
        });
      }, 1000);
    } catch (err) {
      setError("Error accessing camera or mic.");
    }
  };

  // Stop recording
  const stopRecording = (autoStopped = false) => {
    setRecording(false);
    clearInterval(timerRef.current);

    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== "inactive") {
      mediaRecorderRef.current.stop();
    }

    if (autoStopped) {
      setError("Recording stopped automatically after 90 seconds.");
    }
  };

  // Submit validation
  const handleSubmit = () => {
    if (!formData.video) {
      setError("Please record a video before submitting.");
      return;
    }

    const tempVideo = document.createElement("video");
    tempVideo.src = URL.createObjectURL(formData.video);

    tempVideo.onloadedmetadata = () => {
      if (tempVideo.duration > 90) {
        setError("Video duration exceeds 90 seconds. Please re-record.");
      } else {
        setError("");
        nextStep();
      }
    };
  };

  return (
    <div className="form-box">
      <h2>Record Introduction Video</h2>
      <p className="info">
        Record a short video (maximum 90 seconds) introducing yourself, why you want this role, and your experience.
      </p>

      <video ref={videoRef} autoPlay muted className="preview" />

      <div className="btn-group">
        {!recording ? (
          <button type="button" onClick={startRecording} className="form-btn">
            🎥 Start Recording
          </button>
        ) : (
          <button type="button" onClick={() => stopRecording(false)} className="form-btn stop-btn">
            ⏹ Stop
          </button>
        )}

        <button type="button" onClick={handleSubmit} className="form-btn">
          ✅ Submit
        </button>
      </div>

      <p style={{ marginTop: "10px", color: recording ? "#1a73e8" : "#555" }}>
        {recording ? `Recording: ${time}s` : time > 0 ? `Duration: ${time}s` : "Not started yet"}
      </p>

      {error && <p className="error">{error}</p>}

      {videoUrl && (
        <video controls className="preview" src={videoUrl}></video>
      )}
    </div>
  );
};

export default VideoRecorder;
