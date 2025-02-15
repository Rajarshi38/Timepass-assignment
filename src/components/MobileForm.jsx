import styled from "styled-components";
import backgroundImage from "../assets/Timepass/bg-sidebar-mobile.svg";
import Step from "./Step";
import { Button } from "./Button";
import { ACTIONS, useFormSteps } from "../context/FormProvider";
import MainForm from "./FormParts/MainForm";

const MobileForm = () => {
  const [{ currentStep }, dispatch] = useFormSteps();

  const prevStep = () => {
    dispatch({ type: ACTIONS.PREV_STEP });
  };

  const nextStep = () => {
    dispatch({ type: ACTIONS.NEXT_STEP });
  };

  return (
    <Container>
      <Header>
        <StepsContainer>
          {[1, 2, 3, 4].map((step) => (
            <Step
              key={step}
              step={step}
              active={step === currentStep || (currentStep > 4 && step === 4)}
            />
          ))}
        </StepsContainer>
      </Header>
      <AbsoluteWrapper>
        <MainForm />
      </AbsoluteWrapper>
      {currentStep <= 4 && (
        <Footer>
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
        </Footer>
      )}
    </Container>
  );
};

export default MobileForm;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

const AbsoluteWrapper = styled.div`
  margin-top: -120px;
  margin-bottom: 20px;
`;

const Header = styled.div`
  background-image: url(${backgroundImage});
  background-size: cover;
  background-position: center;
  width: 100%;
  height: 220px;
`;

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--neutral-white);
  height: 100px;
  padding: 0 10px 0 0;
`;

const StepsContainer = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  padding: 50px 0 0px 0;
`;
