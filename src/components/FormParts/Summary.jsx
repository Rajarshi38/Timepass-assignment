import styled from "styled-components";

const Summary = () => {
  return (
    <div>
      <SummaryCard>
        <Plan>
          <div>
            <h4>Arcade (Monthly)</h4>
            <ChangeLink>Change</ChangeLink>
          </div>
          <span>$9/mo</span>
        </Plan>
        <hr />
        <AddOnsWrapper>
          <AddOn>
            <span>Online service</span>
            <AddOnPrice>+$1/mo</AddOnPrice>
          </AddOn>
          <AddOn>
            <span>Larger storage</span>
            <AddOnPrice>+$2/mo</AddOnPrice>
          </AddOn>
        </AddOnsWrapper>
      </SummaryCard>
      <Total>
        <span>Total (per month)</span>
        <span>+$12/mo</span>
      </Total>
    </div>
  );
};

export default Summary;
const SummaryCard = styled.div`
  background-color: var(--neutral-magnolia);
  border-radius: 10px;
  padding: 20px;
  width: 300px;
  color: #1f2937;
`;

const AddOnsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-top: 14px;
`;

const Plan = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
  align-items: center;

  h4 {
    color: var(--primary-marine-blue);
    font-size: 15px;
  }

  span {
    color: var(--primary-marine-blue);
    font-weight: bold;
    font-size: 15px;
  }
`;

const ChangeLink = styled.div`
  color: var(--neutral-cool-gray);
  text-decoration: underline;
  cursor: pointer;
  font-size: 12px;
`;

const AddOn = styled.div`
  display: flex;
  justify-content: space-between;
  color: var(--neutral-cool-gray);
  span {
    font-size: 14px;
  }
`;

const AddOnPrice = styled.span`
  color: var(--primary-marine-blue);
  font-weight: medium;
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 14px;

  span {
    color: var(--neutral-cool-gray);
    &:nth-child(2) {
      color: var(--primary-purplish-blue);
      font-size: 16px;
      font-weight: bold;
    }
  }
`;
