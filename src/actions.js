export const updateComponentPower = (componentId, power) => ({
  type: "UPDATE_COMPONENT_POWER",
  payload: { componentId, power }
});

export const calculateTotalPower = () => ({ type: "CALCULATE_TOTAL_POWER" });

// reducers.js
const initialState = {
  components: {
    cpu: 0,
    gpu: 0,
    ram: 0,
    storage: 0
  },
  totalPower: 0
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COMPONENT_POWER":
      return {
        ...state,
        components: {
          ...state.components,
          [action.payload.componentId]: action.payload.power
        }
      };
    case "CALCULATE_TOTAL_POWER":
      const { cpu, gpu, ram, storage } = state.components;
      return {
        ...state,
        totalPower: cpu + gpu + ram + storage
      };
    default:
      return state;
  }
};

export default rootReducer;
