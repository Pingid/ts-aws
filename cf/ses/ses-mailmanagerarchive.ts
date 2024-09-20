import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The retention policy for an email archive that specifies how long emails are kept before being automatically deleted.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html */

export interface ArchiveRetention {
  /**
   * - The enum value sets the period for retaining emails in an archive.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `THREE_MONTHS | SIX_MONTHS | NINE_MONTHS | ONE_YEAR | EIGHTEEN_MONTHS | TWO_YEARS | THIRTY_MONTHS | THREE_YEARS | FOUR_YEARS | FIVE_YEARS | SIX_YEARS | SEVEN_YEARS | EIGHT_YEARS | NINE_YEARS | TEN_YEARS | PERMANENT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-archiveretention-retentionperiod */
  RetentionPeriod: string | Intrinsic
}

/**
 * A key-value pair (the value is optional), that you can define and assign to AWS resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html */

export interface Tag {
  /**
   * - The key of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a new email archive resource for storing and retaining emails.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html */

export interface SESMailManagerArchive extends ResourceAttributes {
  Type: 'AWS::SES::MailManagerArchive'
  Properties: {
    /**
     * - A unique name for the new archive.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_-]*[a-zA-Z0-9]$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-archivename */
    ArchiveName?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the KMS key for encrypting emails in the archive.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):kms:[a-z0-9-]{1,20}:[0-9]{12}:(key|alias)/.+$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-kmskeyarn */
    KmsKeyArn?: string | Intrinsic
    /**
     * - The period for retaining emails in the archive before automatic deletion.
     * - _Required_: No
     * - _Type_: [ArchiveRetention](./aws-properties-ses-mailmanagerarchive-archiveretention.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-retention */
    Retention?: ArchiveRetention
    /**
     * - The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ses-mailmanagerarchive-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerarchive.html#cfn-ses-mailmanagerarchive-tags */
    Tags?: Tag[]
  }
}
