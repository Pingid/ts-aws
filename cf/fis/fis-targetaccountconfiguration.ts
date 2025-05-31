import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a target account configuration for the experiment template. A target account configuration is required when `accountTargeting` of `experimentOptions` is set to `multi-account`. For more information, see [experiment options](https://docs.aws.amazon.com/fis/latest/userguide/experiment-options.html) in the _AWS Fault Injection Service User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html */

export interface FISTargetAccountConfiguration extends ResourceAttributes {
    "Type": "AWS::FIS::TargetAccountConfiguration";
    "Properties": {
        /**
         * - The AWS account ID of the target account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `512`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-accountid */
        "AccountId": string | Intrinsic;
        /**
         * - The description of the target account.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-description */
        "Description"?: string | Intrinsic;
        /**
         * - The ID of the experiment template.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\S]+`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-experimenttemplateid */
        "ExperimentTemplateId": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of an IAM role for the target account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `1224`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-fis-targetaccountconfiguration.html#cfn-fis-targetaccountconfiguration-rolearn */
        "RoleArn": string | Intrinsic;
    };
}