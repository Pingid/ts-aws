import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Information of a particular device.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html */

export interface Device {
  /**
   * - Description of the device.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[\S\s]+`
   * - _Minimum_: `1`
   * - _Maximum_: `40`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-device-description */
  Description?: string | Intrinsic
  /**
   * - The name of the device.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
   * - _Minimum_: `1`
   * - _Maximum_: `63`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-device-devicename */
  DeviceName: string | Intrinsic
  /**
   * - AWS Internet of Things (IoT) object name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z0-9:_-]+`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-device-iotthingname */
  IotThingName?: string | Intrinsic
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html */

export interface Tag {
  /**
   * - The tag key. Tag keys must be unique per resource.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^((?!aws:)[\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::SageMaker::Device` resource is an Amazon SageMaker resource type that allows you to register your Devices against an existing SageMaker Edge Manager DeviceFleet. Each device must be listed individually in the CFN specification.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html */

export interface SageMakerDevice extends ResourceAttributes {
  Type: 'AWS::SageMaker::Device'
  Properties: {
    /**
     * - Edge device you want to create.
     * - _Required_: No
     * - _Type_: [Device](./aws-properties-sagemaker-device-device.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-device */
    Device?: Device
    /**
     * - The name of the fleet the device belongs to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*_*[a-zA-Z0-9])*$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-devicefleetname */
    DeviceFleetName: string | Intrinsic
    /**
     * - An array of key-value pairs that contain metadata to help you categorize and organize your devices. Each tag consists of a key and a value, both of which you define.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-sagemaker-device-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-device.html#cfn-sagemaker-device-tags */
    Tags?: Tag[]
  }
}
