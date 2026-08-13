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
    label: "Tell Us What You Need",
    description: "We start by understanding your business, your customers and the problems you want to solve. No technical jargon — just a clear conversation about what you need.",
  },
  {
    label: "We Design the Solution",
    description: "Based on your requirements, we plan the right approach — whether that's a website, custom software, mobile app, SEO strategy or a combination of services.",
  },
  {
    label: "Development Begins",
    description: "Our team builds your solution using modern, reliable technology. You'll see progress at every stage with regular updates and previews.",
  },
  {
    label: "Review & Refine",
    description: "We test everything thoroughly and walk you through the result. Your feedback shapes the final product before it goes live.",
  },
  {
    label: "Launch & Ongoing Support",
    description: "We deploy your solution to production and provide ongoing support. Your digital systems keep running smoothly as your business grows.",
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
              How We Work
            </h2>
            <p className="text-[#94A3B8] max-w-lg mx-auto text-base sm:text-lg">
              A clear, structured process designed to take your project from idea to a working digital product.
            </p>
          </div>

          <Box sx={{ width: "100%", maxWidth: 600, mx: "auto" }}>
            <Stepper activeStep={activeStep} orientation="vertical">
              {steps.map((step, index) => (
                <Step key={step.label}>
                  <StepLabel
                    optional={
                      index === 4 ? (
                        <Typography variant="caption">Final step</Typography>
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
                  That's how we work — ready to start your project?
                </Typography>
                <Button onClick={handleReset} sx={{ textTransform: "none" }}>
                  View Process Again
                </Button>
              </Box>
            )}
          </Box>
        </div>
      </section>
    </ThemeProvider>
  );
}
