import { StoredDeployment } from "@ignored/ignition-core/ui-helpers";
import React, { useMemo } from "react";
import styled from "styled-components";
import { SummaryHeader } from "../../../components/summary-header";
import {
  getAllCallFuturesFor,
  getAllDeployFuturesFor,
} from "../../../queries/futures";

export const PlanSummary: React.FC<{ deployment: StoredDeployment }> = ({
  deployment,
}) => {
  const { details } = deployment;
  const deployFutures = useMemo(
    () => getAllDeployFuturesFor(deployment),
    [deployment]
  );
  const callFutures = useMemo(
    () => getAllCallFuturesFor(deployment),
    [deployment]
  );

  return (
    <div>
      <SummaryHeader
        networkName={details.networkName}
        chainId={details.chainId}
      />

      <p>
        The successful completion of the plan will send{" "}
        {deployFutures.length + callFutures.length}
        transactions:
      </p>

      <SummaryColumns>
        {deployFutures.length === 0 ? null : (
          <SummaryColumn>
            <h4>{deployFutures.length} deploys</h4>
            <ul>
              {deployFutures.map((deploy) => (
                <li key={deploy.id}>
                  {deploy.contractName} ({deploy.module.id})
                </li>
              ))}
            </ul>
          </SummaryColumn>
        )}

        {callFutures.length === 0 ? null : (
          <SummaryColumn>
            <h4>{callFutures.length} calls</h4>
            <ul>
              {callFutures.map((call) => (
                <li key={call.id}>{call.id}</li>
              ))}
            </ul>
          </SummaryColumn>
        )}
      </SummaryColumns>
    </div>
  );
};

const SummaryColumns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

const SummaryColumn = styled.div`
  h4 {
    text-decoration: underline;
  }

  ul {
    list-style-type: none;
  }
`;