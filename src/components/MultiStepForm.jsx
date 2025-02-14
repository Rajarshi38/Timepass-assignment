// import styled from "styled-components";
import useMediaQuery from "../hooks/useMediaQuery";
import DesktopForm from "./DesktopForm";
import MobileForm from "./MobileForm";
import { createContext, useState } from "react";

const FormContext = createContext();

const FormProvider = () => {};

const MultiStepForm = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <div>
      <FormContext.Provider>
        {isMobile ? (
          <MobileForm currentStep={currentStep} />
        ) : (
          <DesktopForm currentStep={currentStep} />
        )}
      </FormContext.Provider>
    </div>
  );
};
export default MultiStepForm;

// const FormContainer = styled.div``;
