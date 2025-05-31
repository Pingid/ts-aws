import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#cfn-ec2-keypair-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#cfn-ec2-keypair-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies a key pair for use with an Amazon Elastic Compute Cloud instance as follows:
 * *   To import an existing key pair, include the `PublicKeyMaterial` property.
 *     
 * *   To create a new key pair, omit the `PublicKeyMaterial` property.
 * When you import an existing key pair, you specify the public key material for the key. We assume that you have the private key material for the key. AWS CloudFormation does not create or return the private key material when you import a key pair.
 * When you create a new key pair, the private key is saved to AWS Systems Manager Parameter Store, using a parameter with the following name: `/ec2/keypair/{key_pair_id}`. For more information about retrieving private key, and the required permissions, see [Create a key pair using AWS CloudFormation](https://docs.aws.amazon.com/AWSEC2/latest/UserGuide/create-key-pairs.html#create-key-pair-cloudformation) in the _Amazon EC2 User Guide_.
 * When AWS CloudFormation deletes a key pair that was created or imported by a stack, it also deletes the parameter that was used to store the private key material in Parameter Store.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html */

export interface EC2KeyPair extends ResourceAttributes {
    "Type": "AWS::EC2::KeyPair";
    "Properties": {
        /**
         * - The format of the key pair.
         * - Default: `pem`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `pem | ppk`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#cfn-ec2-keypair-keyformat */
        "KeyFormat"?: string | Intrinsic;
        /**
         * - A unique name for the key pair.
         * - Constraints: Up to 255 ASCII characters
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#cfn-ec2-keypair-keyname */
        "KeyName": string | Intrinsic;
        /**
         * - The type of key pair. Note that ED25519 keys are not supported for Windows instances.
         * - If the `PublicKeyMaterial` property is specified, the `KeyType` property is ignored, and the key type is inferred from the `PublicKeyMaterial` value.
         * - Default: `rsa`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `rsa | ed25519`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#cfn-ec2-keypair-keytype */
        "KeyType"?: string | Intrinsic;
        /**
         * - The public key material. The `PublicKeyMaterial` property is used to import a key pair. If this property is not specified, then a new key pair will be created.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#cfn-ec2-keypair-publickeymaterial */
        "PublicKeyMaterial"?: string | Intrinsic;
        /**
         * - The tags to apply to the key pair.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-keypair-tag.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-keypair.html#cfn-ec2-keypair-tags */
        "Tags"?: Tag[];
    };
}