import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tags to attach to the wireless gateway task definition. Tags are metadata that you can use to manage a resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html */

export interface Tag {
    /**
     * - The tag's key value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * LoRaWANGatewayVersion object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html */

export interface LoRaWANGatewayVersion {
    /**
     * - The model number of the wireless gateway.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawangatewayversion-model */
    "Model"?: string | Intrinsic;
    /**
     * - The version of the wireless gateway firmware.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawangatewayversion-packageversion */
    "PackageVersion"?: string | Intrinsic;
    /**
     * - The basic station version of the wireless gateway.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawangatewayversion-station */
    "Station"?: string | Intrinsic;
}

/**
 * LoRaWANUpdateGatewayTaskEntry object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html */

export interface LoRaWANUpdateGatewayTaskEntry {
    /**
     * - The version of the gateways that should receive the update.
     * - _Required_: No
     * - _Type_: [LoRaWANGatewayVersion](./aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskentry-currentversion */
    "CurrentVersion"?: LoRaWANGatewayVersion;
    /**
     * - The firmware version to update the gateway to.
     * - _Required_: No
     * - _Type_: [LoRaWANGatewayVersion](./aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskentry-updateversion */
    "UpdateVersion"?: LoRaWANGatewayVersion;
}

/**
 * The signature used to verify the update firmware.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html */

export interface LoRaWANUpdateGatewayTaskCreate {
    /**
     * - The version of the gateways that should receive the update.
     * - _Required_: No
     * - _Type_: [LoRaWANGatewayVersion](./aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-currentversion */
    "CurrentVersion"?: LoRaWANGatewayVersion;
    /**
     * - The CRC of the signature private key to check.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-sigkeycrc */
    "SigKeyCrc"?: number | Intrinsic;
    /**
     * - The signature used to verify the update firmware.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updatesignature */
    "UpdateSignature"?: string | Intrinsic;
    /**
     * - The firmware version to update the gateway to.
     * - _Required_: No
     * - _Type_: [LoRaWANGatewayVersion](./aws-properties-iotwireless-taskdefinition-lorawangatewayversion.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate-updateversion */
    "UpdateVersion"?: LoRaWANGatewayVersion;
}

/**
 * UpdateWirelessGatewayTaskCreate object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html */

export interface UpdateWirelessGatewayTaskCreate {
    /**
     * - The properties that relate to the LoRaWAN wireless gateway.
     * - _Required_: No
     * - _Type_: [LoRaWANUpdateGatewayTaskCreate](./aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskcreate.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate-lorawan */
    "LoRaWAN"?: LoRaWANUpdateGatewayTaskCreate;
    /**
     * - The IAM role used to read data from the S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate-updatedatarole */
    "UpdateDataRole"?: string | Intrinsic;
    /**
     * - The link to the S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate-updatedatasource */
    "UpdateDataSource"?: string | Intrinsic;
}

/**
 * Creates a gateway task definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html */

export interface IoTWirelessTaskDefinition extends ResourceAttributes {
    "Type": "AWS::IoTWireless::TaskDefinition";
    "Properties": {
        /**
         * - Whether to automatically create tasks using this task definition for all gateways with the specified current version. If `false`, the task must be created by calling `CreateWirelessGatewayTask`.
         * - _Required_: Yes
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-autocreatetasks */
        "AutoCreateTasks": boolean | Intrinsic;
        /**
         * - LoRaWANUpdateGatewayTaskEntry object.
         * - _Required_: No
         * - _Type_: [LoRaWANUpdateGatewayTaskEntry](./aws-properties-iotwireless-taskdefinition-lorawanupdategatewaytaskentry.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-lorawanupdategatewaytaskentry */
        "LoRaWANUpdateGatewayTaskEntry"?: LoRaWANUpdateGatewayTaskEntry;
        /**
         * - The name of the new resource.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-name */
        "Name"?: string | Intrinsic;
        /**
         * - The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iotwireless-taskdefinition-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-tags */
        "Tags"?: Tag[];
        /**
         * - A filter to list only the wireless gateway task definitions that use this task definition type.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `UPDATE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-taskdefinitiontype */
        "TaskDefinitionType"?: string | Intrinsic;
        /**
         * - Information about the gateways to update.
         * - _Required_: No
         * - _Type_: [UpdateWirelessGatewayTaskCreate](./aws-properties-iotwireless-taskdefinition-updatewirelessgatewaytaskcreate.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-taskdefinition.html#cfn-iotwireless-taskdefinition-update */
        "Update"?: UpdateWirelessGatewayTaskCreate;
    };
}