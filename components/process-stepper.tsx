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

// AVERZA Maroon + Cream theme for MUI Stepper
const averzaTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#F2E8D2",
    },
    background: {
      default: "#240003",
      paper: "#330005",
    },
    text: {
      primary: "#F8F1E3",
      secondary: "#B9A98E",
    },
  },
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          color: "#4D070B",
          "&.Mui-active": {
            color: "#650108",
          },
          "&.Mui-completed": {
            color: "#650108",
          },
        },
        text: {
          fill: "#F2E8D2",
        },
      },
    },
    MuiStepConnector: {
      styleOverrides: {
        line: {
          borderColor: "#4D070B",
        },
      },
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
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <ThemeProvider theme={averzaTheme}>
      <section className="bg-[#240003] py-24 border-t border-[#4D070B]">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#F8F1E3] mb-4">
              How We Work
            </h2>
            <p className="text-[#B9A98E] max-w-lg mx-auto text-base sm:text-lg">
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
                        <Typography variant="caption" sx={{ color: "#B9A98E" }}>Final step</Typography>
                      ) : null
                    }
                  >
                    <span className="text-[#F8F1E3] text-base sm:text-lg font-semibold">
                      {step.label}
                    </span>
                  </StepLabel>
                  <StepContent>
                    <Typography sx={{ color: "#B9A98E", fontSize: "0.9rem", lineHeight: 1.7, mb: 2 }}>
                      {step.description}
                    </Typography>
                    <Box sx={{ mb: 2 }}>
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{
                          mt: 1,
                          mr: 1,
                          textTransform: "none",
                          borderRadius: "8px",
                          bgcolor: "#650108",
                          color: "#F2E8D2",
                          "&:hover": { bgcolor: "#7A0A12" },
                        }}
                      >
                        {index === steps.length - 1 ? "Finish" : "Continue"}
                      </Button>
                      <Button
                        disabled={index === 0}
                        onClick={handleBack}
                        sx={{
                          mt: 1,
                          mr: 1,
                          textTransform: "none",
                          borderRadius: "8px",
                          color: "#B9A98E",
                          "&:hover": { color: "#F2E8D2" },
                        }}
                      >
                        Back
                      </Button>
                    </Box>
                  </StepContent>
                </Step>
              ))}
            </Stepper>
            {activeStep === steps.length && (
              <Box sx={{
                p: 3,
                textAlign: "center",
                bgcolor: "#330005",
                borderRadius: "12px",
                border: "1px solid #4D070B",
                mt: 2,
              }}>
                <Typography sx={{ color: "#F8F1E3", fontWeight: 500, mb: 2 }}>
                  That's how we work — ready to start your project?
                </Typography>
                <Button
                  onClick={handleReset}
                  sx={{
                    textTransform: "none",
                    color: "#F2E8D2",
                    "&:hover": { color: "#F8F1E3" },
                  }}
                >
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
