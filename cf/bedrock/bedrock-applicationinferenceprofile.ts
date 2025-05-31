import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag associated with a resource. A tag consists of a key and value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html */

export interface Tag {
    /**
     * - The key associated with a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value associated with a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Contains information about the model or system-defined inference profile that is the source for an inference profile..
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html */

export interface InferenceProfileModelSource {
    /**
     * - The ARN of the model or system-defined inference profile that is the source for the inference profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-us-gov|-cn|-iso|-iso-b):bedrock:(|[0-9a-z-]{0,20}):(|[0-9]{12}):(inference-profile|foundation-model)/[a-zA-Z0-9-:.]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-inferenceprofilemodelsource-copyfrom */
    "CopyFrom": string | Intrinsic;
}

/**
 * Specifies an inference profile as a resource in a top-level template. Use the `ModelSource` field to specify the inference profile to copy into the resource. For more information about using inference profiles in Amazon Bedrock, see [Improve resilience with cross-region inference](https://docs.aws.amazon.com/bedrock/latest/userguide/cross-region-inference.html) .
 * See the **Properties** section below for descriptions of both the required and optional properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html */

export interface BedrockApplicationInferenceProfile extends ResourceAttributes {
    "Type": "AWS::Bedrock::ApplicationInferenceProfile";
    "Properties": {
        /**
         * - The description of the inference profile.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z:.][ _-]?)+$`
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the inference profile.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^([0-9a-zA-Z][ _-]?)+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-inferenceprofilename */
        "InferenceProfileName": string | Intrinsic;
        /**
         * - Contains configurations for the inference profile to copy as the resource.
         * - _Required_: No
         * - _Type_: [InferenceProfileModelSource](./aws-properties-bedrock-applicationinferenceprofile-inferenceprofilemodelsource.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-modelsource */
        "ModelSource"?: InferenceProfileModelSource;
        /**
         * - A list of tags associated with the inference profile.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-bedrock-applicationinferenceprofile-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-applicationinferenceprofile.html#cfn-bedrock-applicationinferenceprofile-tags */
        "Tags"?: Tag[];
    };
}