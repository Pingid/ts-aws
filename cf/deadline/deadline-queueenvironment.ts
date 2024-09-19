import type { Intrinsic } from '../intrinsic/index.js' /**
 * Creates an environment for a queue that defines how jobs in the queue run.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html */

export interface DeadlineQueueEnvironment {
  Type: 'AWS::Deadline::QueueEnvironment'
  Properties: {
    /**
     * - The identifier assigned to the farm that contains the queue.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^farm-[0-9a-f]{32}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html#cfn-deadline-queueenvironment-farmid */
    FarmId: string | Intrinsic
    /**
     * - The queue environment's priority.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `10000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html#cfn-deadline-queueenvironment-priority */
    Priority: number | Intrinsic
    /**
     * - The unique identifier of the queue that contains the environment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^queue-[0-9a-f]{32}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html#cfn-deadline-queueenvironment-queueid */
    QueueId: string | Intrinsic
    /**
     * - A JSON or YAML template that describes the processing environment for the queue.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `15000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html#cfn-deadline-queueenvironment-template */
    Template: string | Intrinsic
    /**
     * - Specifies whether the template for the queue environment is JSON or YAML.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `JSON | YAML`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-deadline-queueenvironment.html#cfn-deadline-queueenvironment-templatetype */
    TemplateType: string | Intrinsic
  }
}
