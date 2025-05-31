import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Metadata to assign to the deployment strategy. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - An optional tag value.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * The `AWS::AppConfig::DeploymentStrategy` resource creates an AWS AppConfig deployment strategy. A deployment strategy defines important criteria for rolling out your configuration to the designated targets. A deployment strategy includes: the overall duration required, a percentage of targets to receive the deployment during each interval, an algorithm that defines how percentage grows, and bake time.
 * AWS AppConfig requires that you create resources and deploy a configuration in the following order:
 * 1.  Create an application
 *     
 * 2.  Create an environment
 *     
 * 3.  Create a configuration profile
 *     
 * 4.  Choose a pre-defined deployment strategy or create your own
 *     
 * 5.  Deploy the configuration
 * For more information, see [AWS AppConfig](https://docs.aws.amazon.com/appconfig/latest/userguide/what-is-appconfig.html) in the _AWS AppConfig User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html */

export interface AppConfigDeploymentStrategy extends ResourceAttributes {
    "Type": "AWS::AppConfig::DeploymentStrategy";
    "Properties": {
        /**
         * - Total amount of time for a deployment to last.
         * - _Required_: Yes
         * - _Type_: Number
         * - _Minimum_: `0`
         * - _Maximum_: `1440`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-deploymentdurationinminutes */
        "DeploymentDurationInMinutes": number | Intrinsic;
        /**
         * - A description of the deployment strategy.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-description */
        "Description"?: string | Intrinsic;
        /**
         * - Specifies the amount of time AWS AppConfig monitors for Amazon CloudWatch alarms after the configuration has been deployed to 100% of its targets, before considering the deployment to be complete. If an alarm is triggered during this time, AWS AppConfig rolls back the deployment. You must configure permissions for AWS AppConfig to roll back based on CloudWatch alarms. For more information, see [Configuring permissions for rollback based on Amazon CloudWatch alarms](https://docs.aws.amazon.com/appconfig/latest/userguide/getting-started-with-appconfig-cloudwatch-alarms-permissions.html) in the _AWS AppConfig User Guide_.
         * - _Required_: No
         * - _Type_: Number
         * - _Minimum_: `0`
         * - _Maximum_: `1440`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-finalbaketimeinminutes */
        "FinalBakeTimeInMinutes"?: number | Intrinsic;
        /**
         * - The percentage of targets to receive a deployed configuration during each interval.
         * - _Required_: Yes
         * - _Type_: Number
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-growthfactor */
        "GrowthFactor": number | Intrinsic;
        /**
         * - The algorithm used to define how percentage grows over time. AWS AppConfig supports the following growth types:
         * - **Linear**: For this type, AWS AppConfig processes the deployment by dividing the total number of targets by the value specified for `Step percentage`. For example, a linear deployment that uses a `Step percentage` of 10 deploys the configuration to 10 percent of the hosts. After those deployments are complete, the system deploys the configuration to the next 10 percent. This continues until 100% of the targets have successfully received the configuration.
         * - **Exponential**: For this type, AWS AppConfig processes the deployment exponentially using the following formula: `G*(2^N)`. In this formula, `G` is the growth factor specified by the user and `N` is the number of steps until the configuration is deployed to all targets. For example, if you specify a growth factor of 2, then the system rolls out the configuration as follows:
         * - `2*(2^0)`
         * - `2*(2^1)`
         * - `2*(2^2)`
         * - Expressed numerically, the deployment rolls out as follows: 2% of the targets, 4% of the targets, 8% of the targets, and continues until the configuration has been deployed to all targets.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `EXPONENTIAL | LINEAR`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-growthtype */
        "GrowthType"?: string | Intrinsic;
        /**
         * - A name for the deployment strategy.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-name */
        "Name": string | Intrinsic;
        /**
         * - Save the deployment strategy to a Systems Manager (SSM) document.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `NONE | SSM_DOCUMENT`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-replicateto */
        "ReplicateTo": string | Intrinsic;
        /**
         * - Assigns metadata to an AWS AppConfig resource. Tags help organize and categorize your AWS AppConfig resources. Each tag consists of a key and an optional value, both of which you define. You can specify a maximum of 50 tags for a resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-appconfig-deploymentstrategy-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appconfig-deploymentstrategy.html#cfn-appconfig-deploymentstrategy-tags */
        "Tags"?: Tag[];
    };
}