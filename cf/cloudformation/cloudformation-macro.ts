import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::CloudFormation::Macro` resource is a CloudFormation resource type that creates a CloudFormation macro to perform custom processing on CloudFormation templates.
 * For more information, see [Perform custom processing on CloudFormation templates with template macros](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-macros.html) in the _AWS CloudFormation User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html */

export interface CloudFormationMacro extends ResourceAttributes {
    "Type": "AWS::CloudFormation::Macro";
    "Properties": {
        /**
         * - A description of the macro.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-description */
        "Description"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the underlying Lambda function that you want CloudFormation to invoke when the macro is run.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-functionname */
        "FunctionName": string | Intrinsic;
        /**
         * - The CloudWatch Logs group to which CloudFormation sends error logging information when invoking the macro's underlying Lambda function.
         * - This will be an existing CloudWatch Logs LogGroup. Neither CloudFormation or Lambda will create the group.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-loggroupname */
        "LogGroupName"?: string | Intrinsic;
        /**
         * - The ARN of the role CloudFormation should assume when sending log entries to CloudWatch Logs.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-logrolearn */
        "LogRoleARN"?: string | Intrinsic;
        /**
         * - The name of the macro. The name of the macro must be unique across all macros in the account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-macro.html#cfn-cloudformation-macro-name */
        "Name": string | Intrinsic;
    };
}