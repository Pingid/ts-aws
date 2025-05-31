import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes a tag that is applied to an AWS App Runner resource. A tag is a metadata item consisting of a key-value pair.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?!aws:).+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * Describes the configuration of the tracing feature within an AWS App Runner observability configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html */

export interface TraceConfiguration {
    /**
     * - The implementation provider chosen for tracing App Runner services.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AWSXRAY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-traceconfiguration-vendor */
    "Vendor": string | Intrinsic;
}

/**
 * The `AWS::AppRunner::ObservabilityConfiguration` resource is an AWS App Runner resource type that specifies an App Runner observability configuration.
 * App Runner requires this resource when you specify App Runner services and you want to enable non-default observability features. You can share an observability configuration across multiple services.
 * Create multiple revisions of a configuration by specifying this resource multiple times using the same `ObservabilityConfigurationName`. App Runner creates multiple resources with incremental `ObservabilityConfigurationRevision` values. When you specify a service and configure an observability configuration resource, the service uses the latest active revision of the observability configuration by default. You can optionally configure the service to use a specific revision.
 * The observability configuration resource is designed to configure multiple features (currently one feature, tracing). This resource takes optional parameters that describe the configuration of these features (currently one parameter, `TraceConfiguration`). If you don't specify a feature parameter, App Runner doesn't enable the feature.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html */

export interface AppRunnerObservabilityConfiguration extends ResourceAttributes {
    "Type": "AWS::AppRunner::ObservabilityConfiguration";
    "Properties": {
        /**
         * - A name for the observability configuration. When you use it for the first time in an AWS Region, App Runner creates revision number `1` of this name. When you use the same name in subsequent calls, App Runner creates incremental revisions of the configuration.
         * - If you don't specify a name, AWS CloudFormation generates a name for your observability configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[A-Za-z0-9][A-Za-z0-9\-_]{3,31}`
         * - _Minimum_: `4`
         * - _Maximum_: `32`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-observabilityconfigurationname */
        "ObservabilityConfigurationName"?: string | Intrinsic;
        /**
         * - A list of metadata items that you can associate with your observability configuration resource. A tag is a key-value pair.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-apprunner-observabilityconfiguration-tag.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-tags */
        "Tags"?: Tag[];
        /**
         * - The configuration of the tracing feature within this observability configuration. If you don't specify it, App Runner doesn't enable tracing.
         * - _Required_: No
         * - _Type_: [TraceConfiguration](./aws-properties-apprunner-observabilityconfiguration-traceconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apprunner-observabilityconfiguration.html#cfn-apprunner-observabilityconfiguration-traceconfiguration */
        "TraceConfiguration"?: TraceConfiguration;
    };
}