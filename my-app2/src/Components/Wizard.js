import React, { useReducer } from "react";

const BusinessForm = ({ dispatch, state }) => {
  return (
    <form>
      <>
        <label>Name</label>
        <input
          type="text"
          name="businessName"
          onChange={(ev) => {
            dispatch({
              type: "field_change",
              fieldName: "businessName",
              businessName: ev.target.value,
            });
          }}
          value={state.businessName}
        />
      </>
      <>
        <label>Business Address</label>
        <input
          type="text"
          name="businessAddress"
          onChange={(ev) => {
            dispatch({
              type: "field_change",
              fieldName: "businessAddress",
              businessAddress: ev.target.value,
            });
          }}
        />
      </>
      <>
        <label>Location</label>
        <input
          type="text"
          name="businessLocation"
          onChange={(ev) => {
            dispatch({
              type: "field_change",
              fieldName: "businessLocation",
              businessLocation: ev.target.value,
            });
          }}
        />
      </>
      <>
        <label>contact number</label>
        <input
          type="text"
          name="businessContactNumber"
          onChange={(ev) => {
            dispatch({
              type: "field_change",
              fieldName: "businessContactNumber",
              businessContactNumber: ev.target.value,
            });
          }}
        />
      </>
    </form>
  );
};

const mockApi = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 200);
  });
};

const PersonalForm = ({ dispatch, state }) => {
  return (
    <form>
      <>
        <label>Person Name</label>
        <input
          type="text"
          name="firstName"
          onChange={(ev) => {
            dispatch({
              type: "field_change",
              fieldName: "firstName",
              firstName: ev.target.value,
            });
          }}
        />
      </>
      <>
        <label>Age</label>
        <input
          type="text"
          name="age"
          onChange={(ev) => {
            dispatch({
              type: "field_change",
              fieldName: "age",
              age: ev.target.value,
            });
          }}
        />
      </>
      <>
        <label>gender</label>
        <input
          type="text"
          name="gender"
          onChange={(ev) => {
            dispatch({
              type: "field_change",
              fieldName: "gender",
              gender: ev.target.value,
            });
          }}
        />
      </>
    </form>
  );
};

const panels = [
  {
    id: 1,
    name: "businessForm",
    title: "Business Form",
    component: <BusinessForm />,
  },
  {
    id: 2,
    name: "personalForm",
    title: "Personal Form",
    component: <PersonalForm />,
  },
];

const initState = {
  selectedPanel: 1,
  formState: {
    businessName: "",
    businessAddress: "",
    businessLocation: "",
    businessContactNumber: "",
    firstName: "",
    age: "",
    gender: "",
  },
};

function wizardReducer(state, actions) {
  switch (actions.type) {
    case "panel_switch":
      return {
        ...state,
        selectedPanel: actions.selectedPanel,
      };
    case "field_change":
      return {
        ...state,
        formState: {
          ...state.formState,
          [actions.fieldName]: actions[actions.fieldName],
        },
      };
    default:
      return Error("unknown action");
  }
}
export const Wizard = () => {
  const [state, dispatch] = useReducer(wizardReducer, initState);
  const selectedPanel = panels.find((item) => item.id === state.selectedPanel);
  return (
    <div className="wizardContainer">
      <div className="leftContainer">
        {panels.map((panel) => {
          const selectedPanelCls =
            state.selectedPanel === panel.id ? "highlight" : "";
          return (
            <span
              key={panel.id}
              className={`panelHeader ${selectedPanelCls}`}
              onClick={() => {
                dispatch({
                  type: "panel_switch",
                  selectedPanel: panel.id,
                });
              }}
            >
              {panel.title}
            </span>
          );
        })}
      </div>
      <div className="rightContainer">
        {React.cloneElement(selectedPanel.component, { dispatch, state })}
        <button
          onClick={() => {
            if (state.selectedPanel > 1) {
              dispatch({
                type: "panel_switch",
                selectedPanel: state.selectedPanel - 1,
              });
            }
          }}
        >
          Previous
        </button>
        <button
          onClick={() => {
            dispatch({
              type: "panel_switch",
              selectedPanel: state.selectedPanel + 1,
            });
          }}
        >
          Next
        </button>
        {state.selectedPanel === panels.length ? (
          <button
            onClick={async () => {
              const data = await mockApi(state.formState).catch(ex=> alert(ex));
              console.log(" success", data);
            }}
          >
            Submit
          </button>
        ) : null}
      </div>
    </div>
  );
};
