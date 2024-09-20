import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Configure logging.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html */

export interface IoTLogging extends ResourceAttributes {
  Type: 'AWS::IoT::Logging'
  Properties: {
    /**
     * - The account ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-accountid */
    AccountId: string | Intrinsic
    /**
     * - The default log level. Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ERROR | WARN | INFO | DEBUG | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-defaultloglevel */
    DefaultLogLevel: string | Intrinsic
    /**
     * - The role ARN used for the log.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-rolearn */
    RoleArn: string | Intrinsic
  }
}
