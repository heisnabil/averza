"use client";

import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { ThemeProvider, createTheme } from "@mui/material/styles";

// Dark Theme for MUI Stepper to match premium theme
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#2563EB",
    },
    background: {
      default: "#000000",
      paper: "#0F172A",
    },
    text: {
      primary: "#FFFFFF",
      secondary: "#94A3B8",
    },
  },
});

const steps = [
  {
    label: "Discovery & Requirement Analysis",
    description: "Understand business challenges, goals and technical requirements.",
  },
  {
    label: "Architecture & Planning",
    description: "Design scalable software architecture and implementation roadmap.",
  },
  {
    label: "Development & AI Integration",
    description: "Build secure, high-performance software with AI capabilities.",
  },
  {
    label: "Testing & Quality Assurance",
    description: "Comprehensive testing to ensure reliability, security and performance.",
  },
  {
    label: "Deployment & Long-Term Support",
    description: "Deploy to production with continuous monitoring and maintenance.",
  },
];

export default function ProcessStepper() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <section className="bg-[#000000] py-24 border-t border-slate-900">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white mb-4">
              Our Development Process
            </h2>
            <p className="text-[#94A3B8] max-w-lg mx-auto text-base sm:text-lg">
              A structured, high-performance workflow designed to turn ideas into enterprise software.
            </p>
          </div>

          <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 4 ? (
                        <Typography variant="caption">Last step</Typography>
                      ) : null
                    }
                  >
                    <span className="text-white text-base sm:text-lg font-semibold">
                      {step.label}
                    </span>
                  </StepLabel>
                  <StepContent>
                    <Typography className="text-[#94A3B8] text-sm sm:text-base mb-4 leading-relaxed">
                      {step.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 1, mr: 1, textTransform: "none", borderRadius: "8px" }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{ mt: 1, mr: 1, textTransform: "none", borderRadius: "8px", color: "#94A3B8" }}
                      >
                        Back
                      </Button>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Box sx={{ p: 3, textAlign: "center", bgcolor: "#0F172A", borderRadius: "12px", border: "1px solid #1E293B", mt: 2 }}>
                <Typography className="text-white font-medium mb-3">
                  All steps completed - ready to build!
                </Typography>
                <Button onClick={handleReset} sx={{ textTransform: "none" }}>
                  Reset Process View
                </Button>
              </Box>
            )}
          </Box>
        </div>
      </section>
    </ThemeProvider>
  );
}
