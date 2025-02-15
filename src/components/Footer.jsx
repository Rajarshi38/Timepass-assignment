import styled from "styled-components";
import { Button } from "./Button";
import { useFormSteps } from "../context/FormProvider";

export default function Footer({ prevStep, nextStep }) {
  const [{ currentStep }] = useFormSteps();

  return (
    <>
      {currentStep <= 4 && (
        <FooterContainer>
          <Button type="button" variant="neutral" onClick={prevStep}>
            Go Back
          </Button>
          <Button
            type="button"
            variant={currentStep === 4 ? "primary" : "secondary"}
            onClick={nextStep}
          >
            {currentStep === 4 ? "Confirm" : "Next Step"}
          </Button>
        </FooterContainer>
      )}
    </>
  );
}

const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--neutral-white);
  height: 100px;
  padding: 0 10px 0 0;
`;
