import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * ###### Important
 * 
 * End of support notice: On May 20, 2026, AWS will end support for Amazon Connect Voice ID. After May 20, 2026, you will no longer be able to access Voice ID on the Amazon Connect console, access Voice ID features on the Amazon Connect admin website or Contact Control Panel, or access Voice ID resources. For more information, visit [Amazon Connect Voice ID end of support](https://docs.aws.amazon.com/connect/latest/adminguide/amazonconnect-voiceid-end-of-support.html).
 * The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html */

export interface Tag {
    /**
     * - The first part of a key:value pair that forms a tag associated with a given resource. For example, in the tag 'Department':'Sales', the key is 'Department'.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The second part of a key:value pair that forms a tag associated with a given resource. For example, in the tag 'Department':'Sales', the value is 'Sales'.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-tag-value */
    "Value": string | Intrinsic;
}

/**
 * ###### Important
 * 
 * End of support notice: On May 20, 2026, AWS will end support for Amazon Connect Voice ID. After May 20, 2026, you will no longer be able to access Voice ID on the Amazon Connect console, access Voice ID features on the Amazon Connect admin website or Contact Control Panel, or access Voice ID resources. For more information, visit [Amazon Connect Voice ID end of support](https://docs.aws.amazon.com/connect/latest/adminguide/amazonconnect-voiceid-end-of-support.html).
 * The configuration containing information about the customer managed key used for encrypting customer data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html */

export interface ServerSideEncryptionConfiguration {
    /**
     * - The identifier of the KMS key to use to encrypt data stored by Voice ID. Voice ID doesn't support asymmetric customer managed keys.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-serversideencryptionconfiguration-kmskeyid */
    "KmsKeyId": string | Intrinsic;
}

/**
 * ###### Important
 * 
 * End of support notice: On May 20, 2026, AWS will end support for Amazon Connect Voice ID. After May 20, 2026, you will no longer be able to access Voice ID on the Amazon Connect console, access Voice ID features on the Amazon Connect admin website or Contact Control Panel, or access Voice ID resources. For more information, visit [Amazon Connect Voice ID end of support](https://docs.aws.amazon.com/connect/latest/adminguide/amazonconnect-voiceid-end-of-support.html).
 * Creates a domain that contains all Amazon Connect Voice ID data, such as speakers, fraudsters, customer audio, and voiceprints. Every domain is created with a default watchlist that fraudsters can be a part of.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html */

export interface VoiceIDDomain extends ResourceAttributes {
    "Type": "AWS::VoiceID::Domain";
    "Properties": {
        /**
         * - The description of the domain.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-%@]*)$`
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name for the domain.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-name */
        "Name": string | Intrinsic;
        /**
         * - The server-side encryption configuration containing the KMS key identifier you want Voice ID to use to encrypt your data.
         * - _Required_: Yes
         * - _Type_: [ServerSideEncryptionConfiguration](./aws-properties-voiceid-domain-serversideencryptionconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-serversideencryptionconfiguration */
        "ServerSideEncryptionConfiguration": ServerSideEncryptionConfiguration;
        /**
         * - The tags used to organize, track, or control access for this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-voiceid-domain-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-voiceid-domain.html#cfn-voiceid-domain-tags */
        "Tags"?: Tag[];
    };
}