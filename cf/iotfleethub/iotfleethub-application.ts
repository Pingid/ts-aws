import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::IoTFleetHub::Application](./aws-resource-iotfleethub-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-tag-value */
  Value: string | Intrinsic
}

/**
 * Represents a Fleet Hub for AWS IoT Device Management web application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html */

export interface IoTFleetHubApplication extends ResourceAttributes {
  Type: 'AWS::IoTFleetHub::Application'
  Properties: {
    /**
     * - An optional description of the web application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[ -~]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-applicationdescription */
    ApplicationDescription?: string | Intrinsic
    /**
     * - The name of the web application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ -~]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-applicationname */
    ApplicationName: string | Intrinsic
    /**
     * - The ARN of the role that the web application assumes when it interacts with AWS IoT Core.
     * - Pattern: `^arn:[!-~]+$`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:[!-~]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - A set of key/value pairs that you can use to manage the web application resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotfleethub-application-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleethub-application.html#cfn-iotfleethub-application-tags */
    Tags?: Tag[]
  }
}
