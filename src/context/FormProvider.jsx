import { createContext, useContext, useMemo } from "react";
import { useSteps } from "../hooks/useSteps";

const FormContext = createContext();

export const useFormSteps = () => useContext(FormContext);

const FormProvider = ({ children }) => {
  const { currentStep, gotoStep, nextStep, prevStep } = useSteps(4);
  const value = useMemo(
    () => ({
      currentStep,
      gotoStep,
      nextStep,
      prevStep,
    }),
    [currentStep, gotoStep, nextStep, prevStep]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export default FormProvider;
