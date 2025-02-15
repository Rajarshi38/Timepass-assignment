import styled from "styled-components";

const Step = ({ step, active }) => {
  return <StepButton active={active}>{step}</StepButton>;
};

export default Step;

const StepButton = styled.button`
  width: 50px;
  height: 50px;
  border: 2px solid white;
  border-radius: 50%;
  background-color: ${(props) =>
    props.active ? "var(--primary-light-blue)" : "transparent"};
  color: ${(props) => (props.active ? "var(--primary-marine-blue)" : "#fff")};
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;

  &:hover {
    background-color: #99ccff;
  }
`;
