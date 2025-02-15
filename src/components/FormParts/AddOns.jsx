import styled from "styled-components";
import { addOns } from "../../constants";
import AddonCard from "../Cards/AddonCard";
import { useState } from "react";

const AddOns = () => {
  const [selectedAddOn, setSelectedAddOn] = useState(new Set());

  const onSelect = (idx) => {
    return function () {
      setSelectedAddOn((prev) => {
        const newSet = new Set(prev);
        if (newSet.has(idx)) {
          newSet.delete(idx);
        } else {
          newSet.add(idx);
        }
        return newSet;
      });
    };
  };

  return (
    <AddOnContainer>
      {addOns.map((addOn, idx) => (
        <AddonCard
          details={addOn}
          key={addOn.id}
          onSelect={onSelect(idx)}
          checked={selectedAddOn.has(idx)}
        />
      ))}
    </AddOnContainer>
  );
};

export default AddOns;

const AddOnContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
