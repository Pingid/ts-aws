import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface DeliveryOptions {
    /**
     * - The maximum amount of time, in seconds, that Amazon SES API v2 will attempt delivery of email. If specified, the value must greater than or equal to 300 seconds (5 minutes) and less than or equal to 50400 seconds (840 minutes).
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `300`
     * - _Maximum_: `50400`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-deliveryoptions-maxdeliveryseconds */
    "MaxDeliverySeconds"?: number | Intrinsic;
    /**
     * - The name of the dedicated IP pool to associate with the configuration set.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-deliveryoptions-sendingpoolname */
    "SendingPoolName"?: string | Intrinsic;
    /**
     * - Specifies whether messages that use the configuration set are required to use Transport Layer Security (TLS). If the value is `REQUIRE`, messages are only delivered if a TLS connection can be established. If the value is `OPTIONAL`, messages can be delivered in plain text if a TLS connection can't be established.
     * - Valid Values: `REQUIRE | OPTIONAL`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `REQUIRE|OPTIONAL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-deliveryoptions-tlspolicy */
    "TlsPolicy"?: string | Intrinsic;
}

/**
 * Enable or disable collection of reputation metrics for emails that you send using this configuration set in the current AWS Region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface ReputationOptions {
    /**
     * - If `true`, tracking of reputation metrics is enabled for the configuration set. If `false`, tracking of reputation metrics is disabled for the configuration set.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Pattern_: `true|false`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-reputationoptions-reputationmetricsenabled */
    "ReputationMetricsEnabled"?: boolean | Intrinsic;
}

/**
 * Used to enable or disable email sending for messages that use this configuration set in the current AWS Region.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface SendingOptions {
    /**
     * - If `true`, email sending is enabled for the configuration set. If `false`, email sending is disabled for the configuration set.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Pattern_: `true|false`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-sendingoptions-sendingenabled */
    "SendingEnabled"?: boolean | Intrinsic;
}

/**
 * An object that contains information about the suppression list preferences for your account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface SuppressionOptions {
    /**
     * - A list that contains the reasons that email addresses are automatically added to the suppression list for your account. This list can contain any or all of the following:
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-suppressionoptions-suppressedreasons */
    "SuppressedReasons"?: (string | Intrinsic)[];
}

/**
 * An object that defines the tracking options for a configuration set. When you use the Amazon SES API v2 to send an email, it contains an invisible image that's used to track when recipients open your email. If your email contains links, those links are changed slightly in order to track when recipients click them.
 * You can optionally configure a custom subdomain that is used to redirect email recipients to an Amazon SES-operated domain. This domain captures open and click events generated by Amazon SES emails.
 * For more information, see [Configuring Custom Domains to Handle Open and Click Tracking](https://docs.aws.amazon.com/ses/latest/dg/configure-custom-open-click-domains.html) in the _Amazon SES Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface TrackingOptions {
    /**
     * - The custom subdomain that is used to redirect email recipients to the Amazon SES event tracking domain.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-trackingoptions-customredirectdomain */
    "CustomRedirectDomain"?: string | Intrinsic;
    /**
     * - The https policy to use for tracking open and click events.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `REQUIRE|REQUIRE_OPEN_ONLY|OPTIONAL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-trackingoptions-httpspolicy */
    "HttpsPolicy"?: string | Intrinsic;
}

/**
 * An object containing additional settings for your VDM configuration as applicable to the Guardian.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface GuardianOptions {
    /**
     * - Specifies the status of your VDM optimized shared delivery. Can be one of the following:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `ENABLED|DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-guardianoptions-optimizedshareddelivery */
    "OptimizedSharedDelivery": string | Intrinsic;
}

/**
 * An object containing additional settings for your VDM configuration as applicable to the Dashboard.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface DashboardOptions {
    /**
     * - Specifies the status of your VDM engagement metrics collection. Can be one of the following:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `ENABLED|DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-dashboardoptions-engagementmetrics */
    "EngagementMetrics": string | Intrinsic;
}

/**
 * The Virtual Deliverability Manager (VDM) options that apply to a configuration set.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface VdmOptions {
    /**
     * - Specifies additional settings for your VDM configuration as applicable to the Dashboard.
     * - _Required_: No
     * - _Type_: [DashboardOptions](./aws-properties-ses-configurationset-dashboardoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-vdmoptions-dashboardoptions */
    "DashboardOptions"?: DashboardOptions;
    /**
     * - Specifies additional settings for your VDM configuration as applicable to the Guardian.
     * - _Required_: No
     * - _Type_: [GuardianOptions](./aws-properties-ses-configurationset-guardianoptions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-vdmoptions-guardianoptions */
    "GuardianOptions"?: GuardianOptions;
}

/**
 * Configuration sets let you create groups of rules that you can apply to the emails you send using Amazon SES. For more information about using configuration sets, see [Using Amazon SES Configuration Sets](https://docs.aws.amazon.com/ses/latest/dg/using-configuration-sets.html) in the [Amazon SES Developer Guide](https://docs.aws.amazon.com/ses/latest/dg/).
 * ###### Note
 * 
 * **Required permissions:**
 * 
 * To apply any of the resource options, you will need to have the corresponding AWS Identity and Access Management (IAM) SES API v2 permissions:
 * 
 * *   `ses:GetConfigurationSet`
 *     
 *     *   (This permission is replacing the v1 _ses:DescribeConfigurationSet_ permission which will not work with these v2 resource options.)
 *         
 *     
 * *   `ses:PutConfigurationSetDeliveryOptions`
 *     
 * *   `ses:PutConfigurationSetReputationOptions`
 *     
 * *   `ses:PutConfigurationSetSendingOptions`
 *     
 * *   `ses:PutConfigurationSetSuppressionOptions`
 *     
 * *   `ses:PutConfigurationSetTrackingOptions`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html */

export interface SESConfigurationSet extends ResourceAttributes {
    "Type": "AWS::SES::ConfigurationSet";
    "Properties": {
        /**
         * - Specifies the name of the dedicated IP pool to associate with the configuration set and whether messages that use the configuration set are required to use Transport Layer Security (TLS).
         * - _Required_: No
         * - _Type_: [DeliveryOptions](./aws-properties-ses-configurationset-deliveryoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-deliveryoptions */
        "DeliveryOptions"?: DeliveryOptions;
        /**
         * - The name of the configuration set. The name must meet the following requirements:
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]{1,64}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-name */
        "Name"?: string | Intrinsic;
        /**
         * - An object that defines whether or not Amazon SES collects reputation metrics for the emails that you send that use the configuration set.
         * - _Required_: No
         * - _Type_: [ReputationOptions](./aws-properties-ses-configurationset-reputationoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-reputationoptions */
        "ReputationOptions"?: ReputationOptions;
        /**
         * - An object that defines whether or not Amazon SES can send email that you send using the configuration set.
         * - _Required_: No
         * - _Type_: [SendingOptions](./aws-properties-ses-configurationset-sendingoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-sendingoptions */
        "SendingOptions"?: SendingOptions;
        /**
         * - An object that contains information about the suppression list preferences for your account.
         * - _Required_: No
         * - _Type_: [SuppressionOptions](./aws-properties-ses-configurationset-suppressionoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-suppressionoptions */
        "SuppressionOptions"?: SuppressionOptions;
        /**
         * - An object that defines the open and click tracking options for emails that you send using the configuration set.
         * - _Required_: No
         * - _Type_: [TrackingOptions](./aws-properties-ses-configurationset-trackingoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-trackingoptions */
        "TrackingOptions"?: TrackingOptions;
        /**
         * - The Virtual Deliverability Manager (VDM) options that apply to the configuration set.
         * - _Required_: No
         * - _Type_: [VdmOptions](./aws-properties-ses-configurationset-vdmoptions.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-configurationset.html#cfn-ses-configurationset-vdmoptions */
        "VdmOptions"?: VdmOptions;
    };
}