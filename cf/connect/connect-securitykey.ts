import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The security key for the instance.
 * ###### Note
 * 
 * Only two security keys are allowed per Amazon Connect instance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html */

export interface ConnectSecurityKey extends ResourceAttributes {
    "Type": "AWS::Connect::SecurityKey";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the instance.
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html#cfn-connect-securitykey-instanceid */
        "InstanceId": string | Intrinsic;
        /**
         * - A valid security key in PEM format. For example:
         * - `"-----BEGIN PUBLIC KEY-----\ [a lot of characters] ----END PUBLIC KEY-----"`
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-securitykey.html#cfn-connect-securitykey-key */
        "Key": string | Intrinsic;
    };
}