import styled from "styled-components";
import backgroundImage from "../assets/Timepass/bg-sidebar-mobile.svg";
import Step from "./Step";
import { Button } from "./Button";
import { stepData } from "../constants";
import PersonalInfo from "./FormParts/PersonalInfo";
import SelectPlan from "./FormParts/SelectPlan";
import AddOns from "./FormParts/AddOns";
import Finishing from "./FormParts/Finishing";
import ThankYou from "./FormParts/ThankYou";

const MobileForm = ({ currentStep }) => {
  const renderCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <PersonalInfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Finishing />;
      case 5:
        return <ThankYou />;
      default:
        return <PersonalInfo />;
    }
  };

  return (
    <Container>
      <Header>
        <StepsContainer>
          {[1, 2, 3, 4].map((step) => (
            <Step key={step} step={step} active={step === currentStep} />
          ))}
        </StepsContainer>
        <FormWrapper>
          <FormInfo>
            <h4>{stepData[currentStep - 1].title}</h4>
            <p>{stepData[currentStep - 1].subtitle}</p>
          </FormInfo>
          {renderCurrentStep()}
        </FormWrapper>
      </Header>
      <Footer>
        <Button variant="neutral">Go Back</Button>
        <Button variant="secondary">Next Step</Button>
      </Footer>
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

const FormWrapper = styled.div`
  /* position: absolute; */
  background-color: white;
  width: 90%;
  margin: 0 auto;
  margin-top: 20px;
  height: 500px;
  border-radius: 8px;
  padding: 24px 18px;
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

const FormInfo = styled.div`
  h4 {
    font-size: 26px;
    margin-bottom: 10px;
    color: var(--primary-marine-blue);
  }
  p {
    font-size: 18px;
    color: var(--neutral-cool-gray);
    line-height: 30px;
  }
  margin-bottom: 20px;
`;
