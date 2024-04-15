
import { useContext } from "react";
import LightDarkMode from "../Light-Dark-Modes";
import RandomColor from "../random colors";
import TicTacToe from "../tic-tact-toe";
import TreeView from "../tree-view";
import { FeatureFlagsContext } from "./Context";
import menus from "../tree-view";
import TabTest from "../Custom-Tabs";
import { Accordian } from "../Accordian/User";

export default function FeatureFlags() {
  const { loading, enabledFlags } = useContext(FeatureFlagsContext);

  const componentsToRender = [
    {
      key: "showLightAndDarkMode",
      component: <LightDarkMode />,
    },
    {
      key: "showTicTacToeBoard",
      component: <TicTacToe />,
    },
    {
      key: "showRandomColorGenerator",
      component: <RandomColor />,
    },
    {
       key:"showAccordian",
       component: <Accordian/>
    },
    {
      key: "showTreeView",
      component: <TreeView  menus={menus} />,
    },
    {
        key : 'showTabs',
        component : <TabTest/>
    }
  ];

  function checkEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }

  if (loading) return <h1>Loading data ! Please wait</h1>;

  return (
    <div>
      <h1>Feature Flags</h1>
      {componentsToRender.map((componentItem) =>
        checkEnabledFlags(componentItem.key) ? componentItem.component : null
      )}
    </div>
  );
}
