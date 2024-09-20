import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Represents a state machine [version](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html). A published version uses the latest state machine [_revision_](https://docs.aws.amazon.com/step-functions/latest/dg/concepts-state-machine-version.html). A revision is an immutable, read-only snapshot of a state machine’s definition and configuration.
 * You can publish up to 1000 versions for each state machine.
 * ###### Important
 *
 * Before you delete a version, make sure that version's ARN isn't being referenced in any long-running workflows or application code outside of the stack.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html */

export interface StepFunctionsStateMachineVersion extends ResourceAttributes {
  Type: 'AWS::StepFunctions::StateMachineVersion'
  Properties: {
    /**
     * - An optional description of the state machine version.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html#cfn-stepfunctions-statemachineversion-description */
    Description?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the state machine.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html#cfn-stepfunctions-statemachineversion-statemachinearn */
    StateMachineArn: string | Intrinsic
    /**
     * - Identifier for a state machine revision, which is an immutable, read-only snapshot of a state machine’s definition and configuration.
     * - Only publish the state machine version if the current state machine's revision ID matches the specified ID. Use this option to avoid publishing a version if the state machine has changed since you last updated it.
     * - To specify the initial state machine revision, set the value as `INITIAL`.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-statemachineversion.html#cfn-stepfunctions-statemachineversion-statemachinerevisionid */
    StateMachineRevisionId?: string | Intrinsic
  }
}
