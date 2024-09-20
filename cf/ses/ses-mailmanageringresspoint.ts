import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The configuration of the ingress endpoint resource.
 * ###### Important
 *
 * This data type is a UNION, so only one of the following members can be specified when used or returned.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html */

export interface IngressPointConfiguration {
  /**
   * - The SecretsManager::Secret ARN of the ingress endpoint resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov):secretsmanager:[a-z0-9-]+:\d{12}:secret:[a-zA-Z0-9/_+=,.@-]+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-ingresspointconfiguration-secretarn */
  SecretArn?: string | Intrinsic
  /**
   * - The password of the ingress endpoint resource.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9!@#$%^&*()_+\-=\[\]{}|.,?]+$`
   * - _Minimum_: `8`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-ingresspointconfiguration-smtppassword */
  SmtpPassword?: string | Intrinsic
}

/**
 * A key-value pair (the value is optional), that you can define and assign to AWS resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html */

export interface Tag {
  /**
   * - The key of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-tag-value */
  Value: string | Intrinsic
}

/**
 * Resource to provision an ingress endpoint for receiving email. An ingress endpoint serves as the entry point for incoming emails, allowing you to define how emails are received and processed within your AWS environment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html */

export interface SESMailManagerIngressPoint extends ResourceAttributes {
  Type: 'AWS::SES::MailManagerIngressPoint'
  Properties: {
    /**
     * - The configuration of the ingress endpoint resource.
     * - _Required_: No
     * - _Type_: [IngressPointConfiguration](./aws-properties-ses-mailmanageringresspoint-ingresspointconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-ingresspointconfiguration */
    IngressPointConfiguration?: IngressPointConfiguration
    /**
     * - A user friendly name for an ingress endpoint resource.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[A-Za-z0-9_\-]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-ingresspointname */
    IngressPointName?: string | Intrinsic
    /**
     * - The identifier of an existing rule set that you attach to an ingress endpoint resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-rulesetid */
    RuleSetId: string | Intrinsic
    /**
     * - The update status of an ingress endpoint.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ACTIVE | CLOSED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-statustoupdate */
    StatusToUpdate?: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ses-mailmanageringresspoint-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-tags */
    Tags?: Tag[]
    /**
     * - The identifier of an existing traffic policy that you attach to an ingress endpoint resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-trafficpolicyid */
    TrafficPolicyId: string | Intrinsic
    /**
     * - The type of the ingress endpoint to create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `OPEN | AUTH`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanageringresspoint.html#cfn-ses-mailmanageringresspoint-type */
    Type: string | Intrinsic
  }
}
