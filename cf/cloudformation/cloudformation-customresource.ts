import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::CloudFormation::CustomResource` resource creates a custom resource. Custom resources provide a way for you to write custom provisioning logic into your CloudFormation templates and have CloudFormation run it anytime you create, update (if you changed the custom resource), or delete a stack.
 * For more information, see [Create custom provisioning logic with custom resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html) in the _AWS CloudFormation User Guide_.
 * ###### Note
 * 
 * If you use AWS PrivateLink, custom resources in the VPC must have access to CloudFormation-specific Amazon S3 buckets. Custom resources must send responses to a presigned Amazon S3 URL. If they can't send responses to Amazon S3, CloudFormation won't receive a response and the stack operation fails. For more information, see [Access CloudFormation using an interface endpoint (AWS PrivateLink)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/vpc-interface-endpoints.html) in the _AWS CloudFormation User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html */

export interface CloudFormationCustomResource extends ResourceAttributes {
    "Type": "AWS::CloudFormation::CustomResource";
    "Properties": {
        /**
         * - The maximum time, in seconds, that can elapse before a custom resource operation times out.
         * - The value must be an integer from 1 to 3600. The default value is 3600 seconds (1 hour).
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html#cfn-cloudformation-customresource-servicetimeout */
        "ServiceTimeout"?: string | Intrinsic;
        /**
         * - The service token, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same Region as the stack.
         * - Updates aren't supported.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html#cfn-cloudformation-customresource-servicetoken */
        "ServiceToken": string | Intrinsic;
    };
}