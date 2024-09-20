import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates an archive of events with the specified settings. When you create an archive, incoming events might not immediately start being sent to the archive. Allow a short period of time for changes to take effect. If you do not specify a pattern to filter events sent to the archive, all events are sent to the archive except replayed events. Replayed events are not sent to an archive.
 * ###### Note
 *
 * Archives and schema discovery are not supported for event buses encrypted using a customer managed key. EventBridge returns an error if:
 *
 * *   You call `[CreateArchive](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_CreateArchive.html)` on an event bus set to use a customer managed key for encryption.
 *
 * *   You call `[CreateDiscoverer](https://docs.aws.amazon.com/eventbridge/latest/schema-reference/v1-discoverers.html#CreateDiscoverer)` on an event bus set to use a customer managed key for encryption.
 *
 * *   You call `[UpdatedEventBus](https://docs.aws.amazon.com/eventbridge/latest/APIReference/API_UpdatedEventBus.html)` to set a customer managed key on an event bus with an archives or schema discovery enabled.
 *
 *
 * To enable archives or schema discovery on an event bus, choose to use an AWS owned key. For more information, see [Data encryption in EventBridge](https://docs.aws.amazon.com/eventbridge/latest/userguide/eb-encryption.html) in the _Amazon EventBridge User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html */

export interface EventsArchive extends ResourceAttributes {
  Type: 'AWS::Events::Archive'
  Properties: {
    /**
     * - The name for the archive to create.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `48`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-archivename */
    ArchiveName?: string | Intrinsic
    /**
     * - A description for the archive.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-description */
    Description?: string | Intrinsic
    /**
     * - An event pattern to use to filter events sent to the archive.
     * - _Required_: No
     * - _Type_: Json
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-eventpattern */
    EventPattern?: any | Intrinsic
    /**
     * - The number of days to retain events for. Default value is 0. If set to 0, events are retained indefinitely
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-retentiondays */
    RetentionDays?: number | Intrinsic
    /**
     * - The ARN of the event bus that sends events to the archive.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1600`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-archive.html#cfn-events-archive-sourcearn */
    SourceArn: string | Intrinsic
  }
}
