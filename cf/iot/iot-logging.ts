import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configure logging.
 * ###### Note
 * 
 * If you already set the log function of AWS IoT Core, you can't deploy the AWS Cloud Development Kit (AWS CDK) to change the logging settings. You can change the logging settings by either:
 * 
 * *   Importing the existing logging resource into your AWS CloudFormation stack, such as with the [infrastructure as code generator (IaC generator)](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/generate-IaC.html).
 *     
 * *   Calling `aws iot set-v2-logging-options --disable-all-logs` before creating a new CloudFormation stack. This command disables all AWS IoT logging. As a result, no AWS IoT logs will be delivered to Amazon CloudWatch until you re-enable logging.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html */

export interface IoTLogging extends ResourceAttributes {
    "Type": "AWS::IoT::Logging";
    "Properties": {
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
        "AccountId": string | Intrinsic;
        /**
         * - The default log level. Valid Values: `DEBUG | INFO | ERROR | WARN | DISABLED`
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ERROR | WARN | INFO | DEBUG | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-defaultloglevel */
        "DefaultLogLevel": string | Intrinsic;
        /**
         * - The role ARN used for the log.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-logging.html#cfn-iot-logging-rolearn */
        "RoleArn": string | Intrinsic;
    };
}