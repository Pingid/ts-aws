import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Describes a tag that is applied to an AWS App Runner resource. A tag is a metadata item consisting of a key-value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html */

export interface Tag {
  /**
   * - The key of the tag assigned to the `AutoScalingConfiguration` resource of the App Runner service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!aws:).+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-tag-key */
  Key?: string | Intrinsic
  /**
   * - The value of the tag assigned to the `AutoScalingConfiguration` resource of the App Runner service.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-tag-value */
  Value?: string | Intrinsic
}

/**
 * The `AWS::AppRunner::AutoScalingConfiguration` resource is an AWS App Runner resource type that specifies an App Runner automatic scaling configuration.
 * App Runner requires this resource to set non-default auto scaling settings for instances used to process the web requests. You can share an auto scaling configuration across multiple services.
 * Create multiple revisions of a configuration by calling this action multiple times using the same `AutoScalingConfigurationName`. The call returns incremental `AutoScalingConfigurationRevision` values. When you create a service and configure an auto scaling configuration resource, the service uses the latest active revision of the auto scaling configuration by default. You can optionally configure the service to use a specific revision.
 * Configure a higher `MinSize` to increase the spread of your App Runner service over more Availability Zones in the AWS Region. The tradeoff is a higher minimal cost.
 * Configure a lower `MaxSize` to control your cost. The tradeoff is lower responsiveness during peak demand.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html */

export interface AppRunnerAutoScalingConfiguration extends ResourceAttributes {
  Type: 'AWS::AppRunner::AutoScalingConfiguration'
  Properties: {
    /**
     * - The customer-provided auto scaling configuration name. It can be used in multiple revisions of a configuration.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9][A-Za-z0-9\-_]{3,31}`
     * - _Minimum_: `4`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-autoscalingconfigurationname */
    AutoScalingConfigurationName?: string | Intrinsic
    /**
     * - The maximum number of concurrent requests that an instance processes. If the number of concurrent requests exceeds this limit, App Runner scales the service up.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-maxconcurrency */
    MaxConcurrency?: number | Intrinsic
    /**
     * - The maximum number of instances that a service scales up to. At most `MaxSize` instances actively serve traffic for your service.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-maxsize */
    MaxSize?: number | Intrinsic
    /**
     * - The minimum number of instances that App Runner provisions for a service. The service always has at least `MinSize` provisioned instances. Some of them actively serve traffic. The rest of them (provisioned and inactive instances) are a cost-effective compute capacity reserve and are ready to be quickly activated. You pay for memory usage of all the provisioned instances. You pay for CPU usage of only the active subset.
     * - App Runner temporarily doubles the number of provisioned instances during deployments, to maintain the same capacity for both old and new code.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-minsize */
    MinSize?: number | Intrinsic
    /**
     * - A list of metadata items that you can associate with your auto scaling configuration resource. A tag is a key-value pair.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-apprunner-autoscalingconfiguration-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-autoscalingconfiguration.html#cfn-apprunner-autoscalingconfiguration-tags */
    Tags?: Tag[]
  }
}
