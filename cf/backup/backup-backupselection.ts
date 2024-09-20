import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Specifies an object that contains an array of triplets made up of a condition type (such as `STRINGEQUALS`), a key, and a value. Conditions are used to filter resources in a selection that is assigned to a backup plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html */

export interface ConditionResourceType {
  /**
   * - The key in a key-value pair. For example, in `"Department": "accounting"`, `"Department"` is the key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditionresourcetype-conditionkey */
  ConditionKey: string | Intrinsic
  /**
   * - An operation, such as `STRINGEQUALS`, that is applied to a key-value pair used to filter resources in a selection.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditionresourcetype-conditiontype */
  ConditionType: string | Intrinsic
  /**
   * - The value in a key-value pair. For example, in `"Department": "accounting"`, `"accounting"` is the value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditionresourcetype-conditionvalue */
  ConditionValue: string | Intrinsic
}

/**
 * Includes information about tags you define to assign tagged resources to a backup plan.
 * Include the prefix `aws:ResourceTag` in your tags. For example, `"aws:ResourceTag/TagKey1": "Value1"`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html */

export interface ConditionParameter {
  /**
   * - The key in a key-value pair. For example, in the tag `Department: Accounting`, `Department` is the key.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditionparameter-conditionkey */
  ConditionKey?: string | Intrinsic
  /**
   * - The value in a key-value pair. For example, in the tag `Department: Accounting`, `Accounting` is the value.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditionparameter-conditionvalue */
  ConditionValue?: string | Intrinsic
}

/**
 * Contains information about which resources to include or exclude from a backup plan using their tags. Conditions are case sensitive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html */

export interface Conditions {
  /**
   * - Filters the values of your tagged resources for only those resources that you tagged with the same value. Also called "exact matching."
   * - _Required_: No
   * - _Type_: Array of [ConditionParameter](./aws-properties-backup-backupselection-conditionparameter.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditions-stringequals */
  StringEquals?: ConditionParameter[]
  /**
   * - Filters the values of your tagged resources for matching tag values with the use of a wildcard character (\*) anywhere in the string. For example, "prod\*" or "\*rod\*" matches the tag value "production".
   * - _Required_: No
   * - _Type_: Array of [ConditionParameter](./aws-properties-backup-backupselection-conditionparameter.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditions-stringlike */
  StringLike?: ConditionParameter[]
  /**
   * - Filters the values of your tagged resources for only those resources that you tagged that do not have the same value. Also called "negated matching."
   * - _Required_: No
   * - _Type_: Array of [ConditionParameter](./aws-properties-backup-backupselection-conditionparameter.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditions-stringnotequals */
  StringNotEquals?: ConditionParameter[]
  /**
   * - Filters the values of your tagged resources for non-matching tag values with the use of a wildcard character (\*) anywhere in the string.
   * - _Required_: No
   * - _Type_: Array of [ConditionParameter](./aws-properties-backup-backupselection-conditionparameter.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-conditions-stringnotlike */
  StringNotLike?: ConditionParameter[]
}

/**
 * Specifies an object containing properties used to assign a set of resources to a backup plan.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html */

export interface BackupSelectionResourceType {
  /**
   * - A list of conditions that you define to assign resources to your backup plans using tags. For example, `"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },`. Condition operators are case sensitive.
   * - `Conditions` differs from `ListOfTags` as follows:
   * - _Required_: No
   * - _Type_: [Conditions](./aws-properties-backup-backupselection-conditions.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselectionresourcetype-conditions */
  Conditions?: Conditions
  /**
   * - The ARN of the IAM role that AWS Backup uses to authenticate when backing up the target resource; for example, `arn:aws:iam::123456789012:role/S3Access`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselectionresourcetype-iamrolearn */
  IamRoleArn: string | Intrinsic
  /**
   * - A list of conditions that you define to assign resources to your backup plans using tags. For example, `"StringEquals": { "ConditionKey": "aws:ResourceTag/CreatedByCryo", "ConditionValue": "true" },`. Condition operators are case sensitive.
   * - `ListOfTags` differs from `Conditions` as follows:
   * - _Required_: No
   * - _Type_: Array of [ConditionResourceType](./aws-properties-backup-backupselection-conditionresourcetype.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselectionresourcetype-listoftags */
  ListOfTags?: ConditionResourceType[]
  /**
   * - A list of Amazon Resource Names (ARNs) to exclude from a backup plan. The maximum number of ARNs is 500 without wildcards, or 30 ARNs with wildcards.
   * - If you need to exclude many resources from a backup plan, consider a different resource selection strategy, such as assigning only one or a few resource types or refining your resource selection using tags.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselectionresourcetype-notresources */
  NotResources?: (string | Intrinsic)[]
  /**
   * - An array of strings that contain Amazon Resource Names (ARNs) of resources to assign to a backup plan.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselectionresourcetype-resources */
  Resources?: (string | Intrinsic)[]
  /**
   * - The display name of a resource selection document.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselectionresourcetype-selectionname */
  SelectionName: string | Intrinsic
}

/**
 * Specifies a set of resources to assign to a backup plan.
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/assigning-resources.html#assigning-resources-cfn).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html */

export interface BackupBackupSelection extends ResourceAttributes {
  Type: 'AWS::Backup::BackupSelection'
  Properties: {
    /**
     * - Uniquely identifies a backup plan.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupplanid */
    BackupPlanId: string | Intrinsic
    /**
     * - Specifies the body of a request to assign a set of resources to a backup plan.
     * - It includes an array of resources, an optional array of patterns to exclude resources, an optional role to provide access to the AWS service the resource belongs to, and an optional array of tags used to identify a set of resources.
     * - _Required_: Yes
     * - _Type_: [BackupSelectionResourceType](./aws-properties-backup-backupselection-backupselectionresourcetype.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-backupselection.html#cfn-backup-backupselection-backupselection */
    BackupSelection: BackupSelectionResourceType
  }
}
