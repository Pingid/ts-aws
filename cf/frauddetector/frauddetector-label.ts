import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key and value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html */

export interface Tag {
  /**
   * - A tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html#cfn-frauddetector-label-tag-key */
  Key: string | Intrinsic
  /**
   * - A value assigned to a tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html#cfn-frauddetector-label-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates or updates label. A label classifies an event as fraudulent or legitimate. Labels are associated with event types and used to train supervised machine learning models in Amazon Fraud Detector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html */

export interface FraudDetectorLabel extends ResourceAttributes {
  Type: 'AWS::FraudDetector::Label'
  Properties: {
    /**
     * - The label description.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html#cfn-frauddetector-label-description */
    Description?: string | Intrinsic
    /**
     * - The label name.
     * - Pattern: `^[0-9a-z_-]+$`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-z_-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html#cfn-frauddetector-label-name */
    Name: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-frauddetector-label-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-label.html#cfn-frauddetector-label-tags */
    Tags?: Tag[]
  }
}
