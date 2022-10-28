import { DeployState } from "@ignored/ignition-core";
import { Box, Text } from "ink";

export const ValidationFailedPanel = ({
  deployState,
}: {
  deployState: DeployState;
}) => {
  return (
    <Box flexDirection="column">
      <Text>
        Ignition validation <Text color="red">failed</Text> for module{" "}
        {deployState.details.moduleName}
      </Text>

      <Box flexDirection="column" marginTop={1}>
        {deployState.validation.errors.map((err, i) => (
          <ErrorBox key={`err-${i}`} error={err} />
        ))}
      </Box>
    </Box>
  );
};

export const ErrorBox = ({ error }: { error: Error }) => {
  return <Text>{error.message}</Text>;
};