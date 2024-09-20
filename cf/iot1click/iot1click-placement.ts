import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::IoT1Click::Placement` resource creates a placement to be associated with an AWS IoT 1-Click project. A placement is an instance of a device in a location. For more information, see [Projects, Templates, and Placements](https://docs.aws.amazon.com/iot-1-click/latest/developerguide/1click-PTP.html) in the _AWS IoT 1-Click Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html */

export interface IoT1ClickPlacement extends ResourceAttributes {
  Type: 'AWS::IoT1Click::Placement'
  Properties: {
    /**
     * - The devices to associate with the placement, as defined by a mapping of zero or more key-value pairs wherein the key is a template name and the value is a device ID.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-associateddevices */
    AssociatedDevices?: any | Intrinsic
    /**
     * - The user-defined attributes associated with the placement.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-attributes */
    Attributes?: any | Intrinsic
    /**
     * - The name of the placement.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-placementname */
    PlacementName?: string | Intrinsic
    /**
     * - The name of the project containing the placement.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot1click-placement.html#cfn-iot1click-placement-projectname */
    ProjectName: string | Intrinsic
  }
}
