import type { Intrinsic } from '../intrinsic/index.js' /**
 * The value used for mapping a specified attribute to an identity source.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html */

export interface AccessControlAttributeValue {
  /**
   * - The identity source to use when mapping a specified attribute to IAM Identity Center.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Maximum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue-source */
  Source: (string | Intrinsic)[]
}

/**
 * These are IAM Identity Center identity store attributes that you can configure for use in attributes-based access control (ABAC). You can create permissions policies that determine who can access your AWS resources based upon the configured attribute values. When you enable ABAC and specify `AccessControlAttributes`, IAM Identity Center passes the attribute values of the authenticated user into IAM for use in policy evaluation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html */

export interface AccessControlAttribute {
  /**
   * - The name of the attribute associated with your identities in your identity source. This is used to map a specified attribute in your identity source with an attribute in IAM Identity Center.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[\p{L}\p{Z}\p{N}_.:\/=+\-@]+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute-key */
  Key: string | Intrinsic
  /**
   * - The value used for mapping a specified attribute to an identity source.
   * - _Required_: Yes
   * - _Type_: [AccessControlAttributeValue](./aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributevalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute-value */
  Value: AccessControlAttributeValue
}

/**
 * Enables the attribute-based access control (ABAC) feature for the specified IAM Identity Center instance. You can also specify new attributes to add to your ABAC configuration during the enabling process. For more information about ABAC, see [Attribute-Based Access Control](https://docs.aws.amazon.com/singlesignon/latest/userguide/abac.html) in the _IAM Identity Center User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html */

export interface SSOInstanceAccessControlAttributeConfiguration {
  Type: 'AWS::SSO::InstanceAccessControlAttributeConfiguration'
  Properties: {
    /**
     * - Lists the attributes that are configured for ABAC in the specified IAM Identity Center instance.
     * - _Required_: No
     * - _Type_: Array of [AccessControlAttribute](./aws-properties-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattribute.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-accesscontrolattributes */
    AccessControlAttributes?: AccessControlAttribute[]
    /**
     * - The ARN of the IAM Identity Center instance under which the operation will be executed.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}`
     * - _Minimum_: `10`
     * - _Maximum_: `1224`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-instanceaccesscontrolattributeconfiguration.html#cfn-sso-instanceaccesscontrolattributeconfiguration-instancearn */
    InstanceArn: string | Intrinsic
  }
}
