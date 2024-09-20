import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model.
 * ###### Note
 *
 * If you have an existing AWS IoT thing, you can use AWS IoT FleetWise to create a vehicle and collect data from your thing.
 * For more information, see [Create a vehicle (console)](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/create-vehicle-console.html) in the _AWS IoT FleetWise Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html */

export interface IoTFleetWiseVehicle extends ResourceAttributes {
  Type: 'AWS::IoTFleetWise::Vehicle'
  Properties: {
    /**
     * - (Optional) An option to create a new AWS IoT thing when creating a vehicle, or to validate an existing thing as a vehicle.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `CreateIotThing | ValidateIotThingExists`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-associationbehavior */
    AssociationBehavior?: string | Intrinsic
    /**
     * - (Optional) Static information about a vehicle in a key-value pair. For example: `"engine Type"` : `"v6"`
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-attributes */
    Attributes?: Record<string, string | Intrinsic>
    /**
     * - The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-decodermanifestarn */
    DecoderManifestArn: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the vehicle model (model manifest) to create the vehicle from.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-modelmanifestarn */
    ModelManifestArn: string | Intrinsic
    /**
     * - The unique ID of the vehicle.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z\d\-_:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-name */
    Name: string | Intrinsic
    /**
     * - (Optional) Metadata which can be used to manage the vehicle.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotfleetwise-vehicle-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-tags */
    Tags?: Tag[]
  }
}
