import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
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
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The length of time between state template updates.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html */

export interface TimePeriod {
    /**
     * - A unit of time.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `MILLISECOND | SECOND | MINUTE | HOUR`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-timeperiod-unit */
    "Unit": string | Intrinsic;
    /**
     * - A number of time units.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-timeperiod-value */
    "Value": number | Intrinsic;
}

/**
 * Vehicles associated with the state template will stream telemetry data during a specified time period.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html */

export interface PeriodicStateTemplateUpdateStrategy {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [TimePeriod](./aws-properties-iotfleetwise-vehicle-timeperiod.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-periodicstatetemplateupdatestrategy-statetemplateupdaterate */
    "StateTemplateUpdateRate": TimePeriod;
}

/**
 * The update strategy for the state template. Vehicles associated with the state template can stream telemetry data with either an `onChange` or `periodic` update strategy.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html */

export interface StateTemplateUpdateStrategy {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-statetemplateupdatestrategy-onchange */
    "OnChange"?: any | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [PeriodicStateTemplateUpdateStrategy](./aws-properties-iotfleetwise-vehicle-periodicstatetemplateupdatestrategy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-statetemplateupdatestrategy-periodic */
    "Periodic"?: PeriodicStateTemplateUpdateStrategy;
}

/**
 * The state template associated with a vehicle. State templates contain state properties, which are signals that belong to a signal catalog that is synchronized between the AWS IoT FleetWise Edge and the AWS Cloud.
 * ###### Important
 * 
 * Access to certain AWS IoT FleetWise features is currently gated. For more information, see [AWS Region and feature availability](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/fleetwise-regions.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html */

export interface StateTemplateAssociation {
    /**
     * - The unique ID of the state template.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-statetemplateassociation-identifier */
    "Identifier": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [StateTemplateUpdateStrategy](./aws-properties-iotfleetwise-vehicle-statetemplateupdatestrategy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-statetemplateassociation-statetemplateupdatestrategy */
    "StateTemplateUpdateStrategy": StateTemplateUpdateStrategy;
}

/**
 * Creates a vehicle, which is an instance of a vehicle model (model manifest). Vehicles created from the same vehicle model consist of the same signals inherited from the vehicle model.
 * ###### Note
 * 
 * If you have an existing AWS IoT thing, you can use AWS IoT FleetWise to create a vehicle and collect data from your thing.
 * For more information, see [Vehicles](https://docs.aws.amazon.com/iot-fleetwise/latest/developerguide/vehicles.html) in the _AWS IoT FleetWise Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html */

export interface IoTFleetWiseVehicle extends ResourceAttributes {
    "Type": "AWS::IoTFleetWise::Vehicle";
    "Properties": {
        /**
         * - An option to create a new AWS IoT thing when creating a vehicle, or to validate an existing thing as a vehicle.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `CreateIotThing | ValidateIotThingExists`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-associationbehavior */
        "AssociationBehavior"?: string | Intrinsic;
        /**
         * - Static information about a vehicle in a key-value pair. For example: `"engine Type"` : `"v6"`
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-attributes */
        "Attributes"?: Record<string, string | Intrinsic>;
        /**
         * - The Amazon Resource Name (ARN) of a decoder manifest associated with the vehicle to create.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-decodermanifestarn */
        "DecoderManifestArn": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the vehicle model (model manifest) to create the vehicle from.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-modelmanifestarn */
        "ModelManifestArn": string | Intrinsic;
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
        "Name": string | Intrinsic;
        /**
         * - Associate state templates to track the state of the vehicle. State templates determine which signal updates the vehicle sends to the cloud.
         * - _Required_: No
         * - _Type_: Array of [StateTemplateAssociation](./aws-properties-iotfleetwise-vehicle-statetemplateassociation.html)
         * - _Minimum_: `0`
         * - _Maximum_: `20`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-statetemplates */
        "StateTemplates"?: StateTemplateAssociation[];
        /**
         * - Metadata which can be used to manage the vehicle.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iotfleetwise-vehicle-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-vehicle.html#cfn-iotfleetwise-vehicle-tags */
        "Tags"?: Tag[];
    };
}