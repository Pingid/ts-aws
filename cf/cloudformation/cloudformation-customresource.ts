import type { Intrinsic } from '../intrinsic/index.js' /**
 * In a CloudFormation template, you use the `AWS::CloudFormation::CustomResource` or `Custom::_String_` resource type to specify custom resources.
 * Custom resources provide a way for you to write custom provisioning logic in CloudFormation template and have CloudFormation run it during a stack operation, such as when you create, update or delete a stack. For more information, see [Custom resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/template-custom-resources.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html */

export interface CloudFormationCustomResource {
  Type: 'AWS::CloudFormation::CustomResource'
  Properties: {
    /**
     * - The maximum time, in seconds, that can elapse before a custom resource operation times out.
     * - The value must be an integer from 1 to 3600. The default value is 3600 seconds (1 hour).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html#cfn-cloudformation-customresource-servicetimeout */
    ServiceTimeout?: string | Intrinsic
    /**
     * - The service token, such as an Amazon SNS topic ARN or Lambda function ARN. The service token must be from the same Region as the stack.
     * - Updates aren't supported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-customresource.html#cfn-cloudformation-customresource-servicetoken */
    ServiceToken: string | Intrinsic
  }
}
