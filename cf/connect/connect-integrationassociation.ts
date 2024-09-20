import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies the association of an AWS resource such as Lex bot (both v1 and v2) and Lambda function with an Amazon Connect instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html */

export interface ConnectIntegrationAssociation extends ResourceAttributes {
  Type: 'AWS::Connect::IntegrationAssociation'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the instance.
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html#cfn-connect-integrationassociation-instanceid */
    InstanceId: string | Intrinsic
    /**
     * - ARN of the integration being associated with the instance.
     * - _Minimum_: `1`
     * - _Maximum_: `140`
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `140`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html#cfn-connect-integrationassociation-integrationarn */
    IntegrationArn: string | Intrinsic
    /**
     * - Specifies the integration type to be associated with the instance.
     * - _Allowed Values_: `LEX_BOT` | `LAMBDA_FUNCTION`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LEX_BOT | LAMBDA_FUNCTION | APPLICATION`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-integrationassociation.html#cfn-connect-integrationassociation-integrationtype */
    IntegrationType: string | Intrinsic
  }
}
