import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Defines a failure policy.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html */

export interface FailurePolicy {
    /**
     * - Recovery Point Objective (RPO) in seconds.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-failurepolicy-rpoinsecs */
    "RpoInSecs": number | Intrinsic;
    /**
     * - Recovery Time Objective (RTO) in seconds.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-failurepolicy-rtoinsecs */
    "RtoInSecs": number | Intrinsic;
}

/**
 * The type of resiliency policy to be created, including the recovery time objective (RTO) and recovery point objective (RPO) in seconds.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html */

export interface PolicyMap {
    /**
     * - Defines the RTO and RPO targets for Availability Zone disruption.
     * - _Required_: Yes
     * - _Type_: [FailurePolicy](./aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policymap-az */
    "AZ": FailurePolicy;
    /**
     * - Defines the RTO and RPO targets for hardware disruption.
     * - _Required_: Yes
     * - _Type_: [FailurePolicy](./aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policymap-hardware */
    "Hardware": FailurePolicy;
    /**
     * - Defines the RTO and RPO targets for Regional disruption.
     * - _Required_: No
     * - _Type_: [FailurePolicy](./aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policymap-region */
    "Region"?: FailurePolicy;
    /**
     * - Defines the RTO and RPO targets for software disruption.
     * - _Required_: Yes
     * - _Type_: [FailurePolicy](./aws-properties-resiliencehub-resiliencypolicy-failurepolicy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policymap-software */
    "Software": FailurePolicy;
}

/**
 * Defines a resiliency policy.
 * ###### Note
 * 
 * AWS Resilience Hub allows you to provide a value of zero for `rtoInSecs` and `rpoInSecs` of your resiliency policy. But, while assessing your application, the lowest possible assessment result is near zero. Hence, if you provide value zero for `rtoInSecs` and `rpoInSecs`, the estimated workload RTO and estimated workload RPO result will be near zero and the **Compliance status** for your application will be set to **Policy breached**.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html */

export interface ResilienceHubResiliencyPolicy extends ResourceAttributes {
    "Type": "AWS::ResilienceHub::ResiliencyPolicy";
    "Properties": {
        /**
         * - Specifies a high-level geographical location constraint for where your resilience policy data can be stored.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `AnyLocation | SameContinent | SameCountry`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-datalocationconstraint */
        "DataLocationConstraint"?: string | Intrinsic;
        /**
         * - The resiliency policy.
         * - _Required_: Yes
         * - _Type_: [PolicyMap](./aws-properties-resiliencehub-resiliencypolicy-policymap.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policy */
        "Policy": PolicyMap;
        /**
         * - Description of the resiliency policy.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policydescription */
        "PolicyDescription"?: string | Intrinsic;
        /**
         * - The name of the policy
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9_\-]{1,59}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-policyname */
        "PolicyName": string | Intrinsic;
        /**
         * - Tags assigned to the resource. A tag is a label that you assign to an AWS resource. Each tag consists of a key/value pair.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.{1,128}`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - The tier for this resiliency policy, ranging from the highest severity (`MissionCritical`) to lowest (`NonCritical`).
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `MissionCritical | Critical | Important | CoreServices | NonCritical`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resiliencehub-resiliencypolicy.html#cfn-resiliencehub-resiliencypolicy-tier */
        "Tier": string | Intrinsic;
    };
}