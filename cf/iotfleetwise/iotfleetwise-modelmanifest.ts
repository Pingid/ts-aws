import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a vehicle model (model manifest) that specifies signals (attributes, branches, sensors, and actuators).
 * For more information, see [Vehicle models](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicle-models.html) in the _AWS IoT FleetWise Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html */

export interface IoTFleetWiseModelManifest extends ResourceAttributes {
  Type: 'AWS::IoTFleetWise::ModelManifest'
  Properties: {
    /**
     * - (Optional) A brief description of the vehicle model.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[^\u0000-\u001F\u007F]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-description */
    Description?: string | Intrinsic
    /**
     * - The name of the vehicle model.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z\d\-_:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-name */
    Name: string | Intrinsic
    /**
     * - (Optional) A list of nodes, which are a general abstraction of signals.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-nodes */
    Nodes?: (string | Intrinsic)[]
    /**
     * - The Amazon Resource Name (ARN) of the signal catalog associated with the vehicle model.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-signalcatalogarn */
    SignalCatalogArn: string | Intrinsic
    /**
     * - (Optional) The state of the vehicle model. If the status is `ACTIVE`, the vehicle model can't be edited. If the status is `DRAFT`, you can edit the vehicle model.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ACTIVE | DRAFT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-status */
    Status?: string | Intrinsic
    /**
     * - (Optional) Metadata that can be used to manage the vehicle model.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotfleetwise-modelmanifest-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-modelmanifest.html#cfn-iotfleetwise-modelmanifest-tags */
    Tags?: Tag[]
  }
}
