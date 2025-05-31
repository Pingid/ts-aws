import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
 * ###### Important
 * 
 * If you have specified that EventBridge use a customer managed key for encrypting the source event bus, we strongly recommend you also specify a customer managed key for any archives for the event bus as well.
 * 
 * For more information, see [Encrypting archives](https://docs.aws.amazon.com/eventbridge/latest/userguide/encryption-archives.html) in the _Amazon EventBridge User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html */

export interface EventsArchive extends ResourceAttributes {
    "Type": "AWS::Events::Archive";
    "Properties": {
        /**
         * - The name for the archive to create.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[\.\-_A-Za-z0-9]+`
         * - _Minimum_: `1`
         * - _Maximum_: `48`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-archivename */
        "ArchiveName"?: string | Intrinsic;
        /**
         * - A description for the archive.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `.*`
         * - _Maximum_: `512`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-description */
        "Description"?: string | Intrinsic;
        /**
         * - An event pattern to use to filter events sent to the archive.
         * - _Required_: No
         * - _Type_: Json
         * - _Maximum_: `4096`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-eventpattern */
        "EventPattern"?: any | Intrinsic;
        /**
         * - The identifier of the AWS KMS customer managed key for EventBridge to use, if you choose to use a customer managed key to encrypt this archive. The identifier can be the key Amazon Resource Name (ARN), KeyId, key alias, or key alias ARN.
         * - If you do not specify a customer managed key identifier, EventBridge uses an AWS owned key to encrypt the archive.
         * - For more information, see [Identify and view keys](https://docs.aws.amazon.com/kms/latest/developerguide/viewing-keys.html) in the _AWS Key Management Service Developer Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-kmskeyidentifier */
        "KmsKeyIdentifier"?: string | Intrinsic;
        /**
         * - The number of days to retain events for. Default value is 0. If set to 0, events are retained indefinitely
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-retentiondays */
        "RetentionDays"?: number | Intrinsic;
        /**
         * - The ARN of the event bus that sends events to the archive.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:.+\/.+$`
         * - _Minimum_: `1`
         * - _Maximum_: `1600`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-sourcearn */
        "SourceArn": string | Intrinsic;
    };
}