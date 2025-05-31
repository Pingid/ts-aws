import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::CloudFormation::Publisher` resource registers your account as a publisher of public extensions in the CloudFormation registry. Public extensions are available for use by all CloudFormation users.
 * For information on requirements for registering as a public extension publisher, see [Publishing extensions to make them available for public use](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.htm) in the _AWS CloudFormation Command Line Interface (CLI) User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html */

export interface CloudFormationPublisher extends ResourceAttributes {
    "Type": "AWS::CloudFormation::Publisher";
    "Properties": {
        /**
         * - Whether you accept the [Terms and Conditions](https://cloudformation-registry-documents.s3.amazonaws.com/Terms_and_Conditions_for_AWS_CloudFormation_Registry_Publishers.pdf) for publishing extensions in the CloudFormation registry. You must accept the terms and conditions in order to register to publish public extensions to the CloudFormation registry.
         * - The default is `false`.
         * - _Required_: Yes
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html#cfn-cloudformation-publisher-accepttermsandconditions */
        "AcceptTermsAndConditions": boolean | Intrinsic;
        /**
         * - If you are using a Bitbucket or GitHub account for identity verification, the Amazon Resource Name (ARN) for your connection to that account.
         * - For more information, see [Prerequisite: Registering your account to publish CloudFormation extensions](https://docs.aws.amazon.com/cloudformation-cli/latest/userguide/publish-extension.html#publish-extension-prereqs) in the _AWS CloudFormation Command Line Interface (CLI) User Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:aws(-[w]+)*:.+:.+:[0-9]{12}:.+`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-publisher.html#cfn-cloudformation-publisher-connectionarn */
        "ConnectionArn"?: string | Intrinsic;
    };
}