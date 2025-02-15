import styled from "styled-components";
import { planDetails } from "../../constants";
import PlanCard from "../Cards/PlanCard";
import { useState } from "react";
// import Switch from "react-switch";i
import Switch from "../Switch";

const SelectPlan = () => {
  const [currentPlan, setCurrentPlan] = useState(-1);
  const [isYearly, setIsYearly] = useState(false);

  const onSwitch = () => setIsYearly((prev) => !prev);

  return (
    <div>
      <PlanContainer>
        {planDetails.map((plan, idx) => (
          <PlanCard
            details={plan}
            key={plan.id}
            active={currentPlan === idx}
            onSelect={() => setCurrentPlan(idx)}
            isYearly={isYearly}
          />
        ))}
      </PlanContainer>
      <SwitchWrapper>
        <p>Monthly</p>
        <Switch isOn={isYearly} onClick={onSwitch} />
        <p>Yearly</p>
      </SwitchWrapper>
    </div>
  );
};

export default SelectPlan;

const PlanContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const SwitchWrapper = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 6px;
  background-color: var(--neutral-magnolia);
  border-radius: 8px;
  padding: 16px 0;
`;
