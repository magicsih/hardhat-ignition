import type { DeployState, ModuleParams } from "@ignored/ignition-core";

import { StartingPanel } from "./StartingPanel";
import { ValidationFailedPanel } from "./ValidationFailedPanel";
import { ExecutionPanel } from "./execution/ExecutionPanel";

export const IgnitionUi = ({
  deployState,
  moduleParams,
}: {
  deployState: DeployState;
  moduleParams?: ModuleParams;
}) => {
  if (
    deployState.phase === "uninitialized" ||
    deployState.phase === "validating"
  ) {
    return <StartingPanel />;
  }

  if (deployState.phase === "validation-failed") {
    return <ValidationFailedPanel deployState={deployState} />;
  }

  return (
    <ExecutionPanel deployState={deployState} moduleParams={moduleParams} />
  );
};
