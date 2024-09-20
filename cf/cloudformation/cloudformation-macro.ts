import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::CloudFormation::Macro` resource is a CloudFormation resource type that creates a CloudFormation macro to perform custom processing on CloudFormation templates. For more information, see [Using AWS CloudFormation macros to perform custom processing on templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html */

export interface CloudFormationMacro extends ResourceAttributes {
  Type: 'AWS::CloudFormation::Macro'
  Properties: {
    /**
     * - A description of the macro.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-description */
    Description?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the underlying AWS Lambda function that you want AWS CloudFormation to invoke when the macro is run.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-functionname */
    FunctionName: string | Intrinsic
    /**
     * - The CloudWatch Logs group to which AWS CloudFormation sends error logging information when invoking the macro's underlying AWS Lambda function.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-loggroupname */
    LogGroupName?: string | Intrinsic
    /**
     * - The ARN of the role AWS CloudFormation should assume when sending log entries to CloudWatch Logs.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-logrolearn */
    LogRoleARN?: string | Intrinsic
    /**
     * - The name of the macro. The name of the macro must be unique across all macros in the account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-name */
    Name: string | Intrinsic
  }
}
