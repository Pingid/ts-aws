import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Contains the Amazon Resource Name (ARN) of the resource that receives the published findings, such as an S3 bucket, and the ARN of the KMS key that is used to encrypt these published findings.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html */

export interface CFNDestinationProperties {
    /**
     * - The ARN of the resource where the findings are published.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-cfndestinationproperties-destinationarn */
    "DestinationArn"?: string | Intrinsic;
    /**
     * - The ARN of the KMS key to use for encryption.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-cfndestinationproperties-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
}

/**
 * Describes a tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html */

export interface TagItem {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-tagitem-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-tagitem-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a publishing destination where you can export your GuardDuty findings. Before you start exporting the findings, the destination resource must exist.
 * For more information about considerations and permissions, see [Exporting GuardDuty findings to Amazon S3 buckets](https://docs.aws.amazon.com/guardduty/latest/ug/guardduty_exportfindings.html) in the _Amazon GuardDuty User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html */

export interface GuardDutyPublishingDestination extends ResourceAttributes {
    "Type": "AWS::GuardDuty::PublishingDestination";
    "Properties": {
        /**
         * - Contains the Amazon Resource Name (ARN) of the resource to publish to, such as an S3 bucket, and the ARN of the KMS key to use to encrypt published findings.
         * - _Required_: Yes
         * - _Type_: [CFNDestinationProperties](./aws-properties-guardduty-publishingdestination-cfndestinationproperties.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-destinationproperties */
        "DestinationProperties": CFNDestinationProperties;
        /**
         * - The type of publishing destination. GuardDuty supports Amazon S3 buckets as a publishing destination.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-destinationtype */
        "DestinationType": string | Intrinsic;
        /**
         * - The ID of the GuardDuty detector where the publishing destination exists.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `300`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-detectorid */
        "DetectorId": string | Intrinsic;
        /**
         * - Describes a tag.
         * - _Required_: No
         * - _Type_: Array of [TagItem](./aws-properties-guardduty-publishingdestination-tagitem.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-guardduty-publishingdestination.html#cfn-guardduty-publishingdestination-tags */
        "Tags"?: TagItem[];
    };
}