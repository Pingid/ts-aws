import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::Location::TrackerConsumer` resource specifies an association between a geofence collection and a tracker resource. The geofence collection is referred to as the _consumer_ of the tracker. This allows the tracker resource to communicate location data to the linked geofence collection.
 * ###### Note
 *
 * Currently not supported — Cross-account configurations, such as creating associations between a tracker resource in one account and a geofence collection in another account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html */

export interface LocationTrackerConsumer extends ResourceAttributes {
  Type: 'AWS::Location::TrackerConsumer'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) for the geofence collection to be associated to tracker resource. Used when you need to specify a resource across all AWS.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn(:[a-z0-9]+([.-][a-z0-9]+)*){2}(:([a-z0-9]+([.-][a-z0-9]+)*)?){2}:([^/].*)?$`
     * - _Maximum_: `1600`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html#cfn-location-trackerconsumer-consumerarn */
    ConsumerArn: string | Intrinsic
    /**
     * - The name for the tracker resource.
     * - Requirements:
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[-._\w]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-location-trackerconsumer.html#cfn-location-trackerconsumer-trackername */
    TrackerName: string | Intrinsic
  }
}
