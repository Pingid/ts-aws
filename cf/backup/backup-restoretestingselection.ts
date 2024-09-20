import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Pair of two related strings. Allowed characters are letters, white space, and numbers that can be represented in UTF-8 and the following characters: `+ - = . _ : /`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html */

export interface KeyValue {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-keyvalue-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-keyvalue-value */
  Value: string | Intrinsic
}

/**
 * The conditions that you define for resources in your restore testing plan using tags.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html */

export interface ProtectedResourceConditions {
  /**
   * - Filters the values of your tagged resources for only those resources that you tagged with the same value. Also called "exact matching."
   * - _Required_: No
   * - _Type_: Array of [KeyValue](./aws-properties-backup-restoretestingselection-keyvalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourceconditions-stringequals */
  StringEquals?: KeyValue[]
  /**
   * - Filters the values of your tagged resources for only those resources that you tagged that do not have the same value. Also called "negated matching."
   * - _Required_: No
   * - _Type_: Array of [KeyValue](./aws-properties-backup-restoretestingselection-keyvalue.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourceconditions-stringnotequals */
  StringNotEquals?: KeyValue[]
}

/**
 * This request can be sent after CreateRestoreTestingPlan request returns successfully. This is the second part of creating a resource testing plan, and it must be completed sequentially.
 * This consists of `RestoreTestingSelectionName`, `ProtectedResourceType`, and one of the following:
 * *   `ProtectedResourceArns`
 *
 * *   `ProtectedResourceConditions`
 * Each protected resource type can have one single value.
 * A restore testing selection can include a wildcard value ("\*") for `ProtectedResourceArns` along with `ProtectedResourceConditions`. Alternatively, you can include up to 30 specific protected resource ARNs in `ProtectedResourceArns`.
 * Cannot select by both protected resource types AND specific ARNs. Request will fail if both are included.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html */

export interface BackupRestoreTestingSelection extends ResourceAttributes {
  Type: 'AWS::Backup::RestoreTestingSelection'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the IAM role that AWS Backup uses to create the target resource; for example:`arn:aws:iam::123456789012:role/S3Access`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-iamrolearn */
    IamRoleArn: string | Intrinsic
    /**
     * - You can include specific ARNs, such as `ProtectedResourceArns: ["arn:aws:...", "arn:aws:..."]` or you can include a wildcard: `ProtectedResourceArns: ["*"]`, but not both.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourcearns */
    ProtectedResourceArns?: (string | Intrinsic)[]
    /**
     * - In a resource testing selection, this parameter filters by specific conditions such as `StringEquals` or `StringNotEquals`.
     * - _Required_: No
     * - _Type_: [ProtectedResourceConditions](./aws-properties-backup-restoretestingselection-protectedresourceconditions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourceconditions */
    ProtectedResourceConditions?: ProtectedResourceConditions
    /**
     * - The type of AWS resource included in a resource testing selection; for example, an Amazon EBS volume or an Amazon RDS database.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-protectedresourcetype */
    ProtectedResourceType: string | Intrinsic
    /**
     * - You can override certain restore metadata keys by including the parameter `RestoreMetadataOverrides` in the body of `RestoreTestingSelection`. Key values are not case sensitive.
     * - See the complete list of [restore testing inferred metadata](https://docs.aws.amazon.com/aws-backup/latest/devguide/restore-testing-inferred-metadata.html).
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-restoremetadataoverrides */
    RestoreMetadataOverrides?: Record<string, string | Intrinsic>
    /**
     * - Unique string that is the name of the restore testing plan.
     * - The name cannot be changed after creation. The name must consist of only alphanumeric characters and underscores. Maximum length is 50.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-restoretestingplanname */
    RestoreTestingPlanName: string | Intrinsic
    /**
     * - The unique name of the restore testing selection that belongs to the related restore testing plan.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-restoretestingselectionname */
    RestoreTestingSelectionName: string | Intrinsic
    /**
     * - This is amount of hours (1 to 168) available to run a validation script on the data. The data will be deleted upon the completion of the validation script or the end of the specified retention period, whichever comes first.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-restoretestingselection.html#cfn-backup-restoretestingselection-validationwindowhours */
    ValidationWindowHours?: number | Intrinsic
  }
}
