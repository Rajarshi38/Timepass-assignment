import { createContext, useContext, useReducer } from "react";

const FormContext = createContext();

export const useFormSteps = () => useContext(FormContext);

const initialState = {
  currentStep: 1,
  totalStep: 5,
  profile: {
    name: "",
    email: "",
    phone: "",
  },
  plan: null,
  addOns: [],
  isYearly: false,
};

export const ACTIONS = {
  PROFILE: "PROFILE",
  PLAN: "PLAN",
  ADD_ON: "ADD_ON",
  NEXT_STEP: "NEXT_STEP",
  PREV_STEP: "PREV_STEP",
  GOTO_STEP: "GOTO_STEP",
  YEARLY: "YEARLY",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.PROFILE: {
      return {
        ...state,
        profile: action.payload,
      };
    }
    case ACTIONS.PLAN: {
      return {
        ...state,
        plan: action.payload,
      };
    }
    case ACTIONS.ADD_ON: {
      return {
        ...state,
        addOns: action.payload,
      };
    }
    case ACTIONS.NEXT_STEP: {
      return {
        ...state,
        currentStep:
          state.currentStep === state.totalStep
            ? state.currentStep
            : state.currentStep + 1,
      };
    }
    case ACTIONS.PREV_STEP: {
      return {
        ...state,
        currentStep: state.currentStep === 1 ? 1 : state.currentStep - 1,
      };
    }

    case ACTIONS.GOTO_STEP: {
      return {
        ...state,
        currentStep:
          action.payload >= 1 && action.payload <= state.totalStep
            ? action.payload
            : state.currentStep,
      };
    }

    case "YEARLY": {
      return {
        ...state,
        isYearly: !state.isYearly,
      };
    }
    default:
      return state;
  }
};

const FormProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <FormContext.Provider value={[state, dispatch]}>
      {children}
    </FormContext.Provider>
  );
};

export default FormProvider;
