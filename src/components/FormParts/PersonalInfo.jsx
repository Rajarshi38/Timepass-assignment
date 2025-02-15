import styled from "styled-components";

const PersonalInfo = () => {
  return (
    <div>
      <FormGroup>
        <Label>Name</Label>
        <Input placeholder="e.g. Stephen King" />
      </FormGroup>
      <FormGroup>
        <Label>Email Address</Label>
        <Input placeholder="e.g. stephenking@lorem.com" />
      </FormGroup>

      <FormGroup>
        <Label>Phone Number</Label>
        <Input placeholder="e.g. +1 234 567 890" />
      </FormGroup>
    </div>
  );
};

export default PersonalInfo;

const FormGroup = styled.div`
  max-width: 100%;
  margin-bottom: 20px;
`;
const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  font-size: 14px;
  color: var(--primary-marine-blue);
`;

const Input = styled.input`
  display: block;
  width: 100%;
  padding: 0.625rem 0.75rem;
  font-size: 1rem;
  line-height: 1.4;
  color: var(--primary-marine-blue);
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid var(--neutral-light-gray);
  border-radius: 4px;
  transition: border-color 0.15s ease-in-out;
  box-sizing: border-box;
  font-weight: 500;

  &::placeholder {
    color: var(--neutral-cool-gray);
    font-weight: 500;
  }

  &:focus {
    border-color: var(--primary-purplish-blue);
    outline: 0;
  }

  &:hover {
    border-color: var(--primary-purplish-blue);
  }
`;
