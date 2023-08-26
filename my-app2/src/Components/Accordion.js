import React, { useReducer } from "react";
const panels = [
  {
    id: 1,
    desc: "Panel 1",
    content: "panel1 content",
  },
  {
    id: 2,
    desc: "Panel 2",
    content: "panel2 content",
  },
];

const initState = {
  selectedPanel: 1,
  showContents: {
    1: false,
    2: false,
  },
};

const Panel = ({ panel, dispatch, state }) => {
    console.log(state.selectedPanel, state, "state")
    const panelContentCls = (state.showContents[panel.id])? 'show': 'hide'
    const btnText =  (!state.showContents[panel.id])? 'show': 'hide'
    const type = (!state.showContents[panel.id])? 'show_panel_content': 'hide_panel_content'
  return (
    <div id={panel.id} className={"selectedPanel"} style={{ width: "200px" }}>
      {panel.desc}
      <button
        onClick={() => {
          dispatch({
            type,
            selectedPanel: panel.id
          });
        }}
      >
       {btnText}
      </button>
      <div className={panelContentCls}>{panel.content}</div>
    </div>
  );
};

function stateReducer(state, actions) {
  switch (actions.type) {
    case "change_panel_selection":
      return {
        ...state,
        selectedPanel: state.selectedPanel,
      };
    case "show_panel_content":
      return {
        ...state,
        selectedPanel: actions.selectedPanel,
        showContents: {
          ...state.showContents,
          [actions.selectedPanel]: true,
        },
      };
    case "hide_panel_content":
      return {
        ...state,
        showContents: {
          ...state.showContents,
          [actions.selectedPanel]: false,
        },
      };
    default:
      throw Error("Unknow action");
  }
}
export const Accordion = () => {
  const [state, dispatch] = useReducer(stateReducer, initState);
  return (
    <div>
      {panels.map((panel) => {
        // const selectedCls = panel.id === state.selectedPanel ? "show" : "hide";
        return <Panel panel={panel} dispatch={dispatch} state={state} />;
      })}
    </div>
  );
};
