import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information about the retention rule unlock delay. The unlock delay is the period after which a retention rule can be modified or edited after it has been unlocked by a user with the required permissions. The retention rule can't be modified or deleted during the unlock delay.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html */

export interface UnlockDelay {
    /**
     * - The unit of time in which to measure the unlock delay. Currently, the unlock delay can be measure only in days.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DAYS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-unlockdelay-unlockdelayunit */
    "UnlockDelayUnit"?: string | Intrinsic;
    /**
     * - The unlock delay period, measured in the unit specified for **UnlockDelayUnit**.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `7`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-unlockdelay-unlockdelayvalue */
    "UnlockDelayValue"?: number | Intrinsic;
}

/**
 * Information about the retention period for which the retention rule is to retain resources.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html */

export interface RetentionPeriod {
    /**
     * - The unit of time in which the retention period is measured. Currently, only `DAYS` is supported.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DAYS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-retentionperiod-retentionperiodunit */
    "RetentionPeriodUnit": string | Intrinsic;
    /**
     * - The period value for which the retention rule is to retain resources. The period is measured using the unit specified for **RetentionPeriodUnit**.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `3650`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-retentionperiod-retentionperiodvalue */
    "RetentionPeriodValue": number | Intrinsic;
}

/**
 * \[Tag-level retention rules only\] Information about the resource tags used to identify resources that are retained by the retention rule.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html */

export interface ResourceTag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-resourcetag-resourcetagkey */
    "ResourceTagKey": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-resourcetag-resourcetagvalue */
    "ResourceTagValue": string | Intrinsic;
}

/**
 * Information about the tags to assign to the retention rule.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a Recycle Bin retention rule. You can create two types of retention rules:
 * *   **Tag-level retention rules** - These retention rules use resource tags to identify the resources to protect. For each retention rule, you specify one or more tag key and value pairs. Resources (of the specified type) that have at least one of these tag key and value pairs are automatically retained in the Recycle Bin upon deletion. Use this type of retention rule to protect specific resources in your account based on their tags.
 *     
 * *   **Region-level retention rules** - These retention rules, by default, apply to all of the resources (of the specified type) in the Region, even if the resources are not tagged. However, you can specify exclusion tags to exclude resources that have specific tags. Use this type of retention rule to protect all resources of a specific type in a Region.
 * For more information, see [Create Recycle Bin retention rules](https://docs.aws.amazon.com/ebs/latest/userguide/recycle-bin.html) in the _Amazon EBS User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html */

export interface RbinRule extends ResourceAttributes {
    "Type": "AWS::Rbin::Rule";
    "Properties": {
        /**
         * - The retention rule description.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-description */
        "Description"?: string | Intrinsic;
        /**
         * - \[Region-level retention rules only\] Specifies the exclusion tags to use to identify resources that are to be excluded, or ignored, by a Region-level retention rule. Resources that have any of these tags are not retained by the retention rule upon deletion.
         * - You can't specify exclusion tags for tag-level retention rules.
         * - _Required_: No
         * - _Type_: Array of [ResourceTag](./aws-properties-rbin-rule-resourcetag.html)
         * - _Maximum_: `5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-excluderesourcetags */
        "ExcludeResourceTags"?: ResourceTag[];
        /**
         * - Information about the retention rule lock configuration.
         * - _Required_: No
         * - _Type_: [UnlockDelay](./aws-properties-rbin-rule-unlockdelay.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-lockconfiguration */
        "LockConfiguration"?: UnlockDelay;
        /**
         * - \[Tag-level retention rules only\] Specifies the resource tags to use to identify resources that are to be retained by a tag-level retention rule. For tag-level retention rules, only deleted resources, of the specified resource type, that have one or more of the specified tag key and value pairs are retained. If a resource is deleted, but it does not have any of the specified tag key and value pairs, it is immediately deleted without being retained by the retention rule.
         * - You can add the same tag key and value pair to a maximum or five retention rules.
         * - To create a Region-level retention rule, omit this parameter. A Region-level retention rule does not have any resource tags specified. It retains all deleted resources of the specified resource type in the Region in which the rule is created, even if the resources are not tagged.
         * - _Required_: No
         * - _Type_: Array of [ResourceTag](./aws-properties-rbin-rule-resourcetag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-resourcetags */
        "ResourceTags"?: ResourceTag[];
        /**
         * - The resource type to be retained by the retention rule. Currently, only Amazon EBS snapshots and EBS-backed AMIs are supported. To retain snapshots, specify `EBS_SNAPSHOT`. To retain EBS-backed AMIs, specify `EC2_IMAGE`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `EBS_SNAPSHOT | EC2_IMAGE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-resourcetype */
        "ResourceType": string | Intrinsic;
        /**
         * - Information about the retention period for which the retention rule is to retain resources.
         * - _Required_: Yes
         * - _Type_: [RetentionPeriod](./aws-properties-rbin-rule-retentionperiod.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-retentionperiod */
        "RetentionPeriod": RetentionPeriod;
        /**
         * - The state of the retention rule. Only retention rules that are in the `available` state retain resources.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `pending|available`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-status */
        "Status"?: string | Intrinsic;
        /**
         * - Information about the tags to assign to the retention rule.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-rbin-rule-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-rbin-rule.html#cfn-rbin-rule-tags */
        "Tags"?: Tag[];
    };
}