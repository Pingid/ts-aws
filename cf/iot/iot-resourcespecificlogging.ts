import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Configure resource-specific logging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html */

export interface IoTResourceSpecificLogging extends ResourceAttributes {
  Type: 'AWS::IoT::ResourceSpecificLogging'
  Properties: {
    /**
     * - The default log level.Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ERROR | WARN | INFO | DEBUG | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-loglevel */
    LogLevel: string | Intrinsic
    /**
     * - The target name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9.:\s_\-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-targetname */
    TargetName: string | Intrinsic
    /**
     * - The target type. Valid Values: `DEFAULT | THING_GROUP`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `THING_GROUP | CLIENT_ID | SOURCE_IP | PRINCIPAL_ID | EVENT_TYPE`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-resourcespecificlogging.html#cfn-iot-resourcespecificlogging-targettype */
    TargetType: string | Intrinsic
  }
}
