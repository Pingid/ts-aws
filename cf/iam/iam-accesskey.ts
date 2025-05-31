import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a new AWS secret access key and corresponding AWS access key ID for the specified user. The default status for new keys is `Active`.
 * For information about quotas on the number of keys you can create, see [IAM and AWS STS quotas](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_iam-quotas.html) in the _IAM User Guide_.
 * ###### Important
 * 
 * To ensure the security of your AWS account, the secret access key is accessible only during key and user creation. You must save the key (for example, in a text file) if you want to be able to access it again. If a secret key is lost, you can rotate access keys by increasing the value of the `serial` property.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-accesskey.html */

export interface IAMAccessKey extends ResourceAttributes {
    "Type": "AWS::IAM::AccessKey";
    "Properties": {
        /**
         * - This value is specific to CloudFormation and can only be _incremented_. Incrementing this value notifies CloudFormation that you want to rotate your access key. When you update your stack, CloudFormation will replace the existing access key with a new key.
         * - _Required_: No
         * - _Type_: Integer
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-accesskey.html#cfn-iam-accesskey-serial */
        "Serial"?: number | Intrinsic;
        /**
         * - The status of the access key. `Active` means that the key is valid for API calls, while `Inactive` means it is not.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `Active | Inactive`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-accesskey.html#cfn-iam-accesskey-status */
        "Status"?: string | Intrinsic;
        /**
         * - The name of the IAM user that the new key will belong to.
         * - This parameter allows (through its [regex pattern](http://wikipedia.org/wiki/regex)) a string of characters consisting of upper and lowercase alphanumeric characters with no spaces. You can also include any of the following characters: \_+=,.@-
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w+=,.@-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iam-accesskey.html#cfn-iam-accesskey-username */
        "UserName": string | Intrinsic;
    };
}