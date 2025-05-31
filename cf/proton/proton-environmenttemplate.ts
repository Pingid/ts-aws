import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A description of a resource tag.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html */

export interface Tag {
    /**
     * - The key of the resource tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the resource tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Create an environment template for AWS Proton. For more information, see [Environment Templates](https://docs.aws.amazon.com/proton/latest/userguide/ag-templates.html) in the _AWS Proton User Guide_.
 * You can create an environment template in one of the two following ways:
 * *   Register and publish a _standard_ environment template that instructs AWS Proton to deploy and manage environment infrastructure.
 *     
 * *   Register and publish a _customer managed_ environment template that connects AWS Proton to your existing provisioned infrastructure that you manage. AWS Proton_doesn't_ manage your existing provisioned infrastructure. To create an environment template for customer provisioned and managed infrastructure, include the `provisioning` parameter and set the value to `CUSTOMER_MANAGED`. For more information, see [Register and publish an environment template](https://docs.aws.amazon.com/proton/latest/userguide/template-create.html) in the _AWS Proton User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html */

export interface ProtonEnvironmentTemplate extends ResourceAttributes {
    "Type": "AWS::Proton::EnvironmentTemplate";
    "Properties": {
        /**
         * - A description of the environment template.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `500`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the environment template as displayed in the developer interface.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-displayname */
        "DisplayName"?: string | Intrinsic;
        /**
         * - The customer provided encryption key for the environment template.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov):[a-zA-Z0-9-]+:[a-zA-Z0-9-]*:\d{12}:([\w+=,.@-]+[/:])*[\w+=,.@-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-encryptionkey */
        "EncryptionKey"?: string | Intrinsic;
        /**
         * - The name of the environment template.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[0-9A-Za-z]+[0-9A-Za-z_\-]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-name */
        "Name"?: string | Intrinsic;
        /**
         * - When included, indicates that the environment template is for customer provisioned and managed infrastructure.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `CUSTOMER_MANAGED`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-provisioning */
        "Provisioning"?: string | Intrinsic;
        /**
         * - An optional list of metadata items that you can associate with the AWS Proton environment template. A tag is a key-value pair.
         * - For more information, see [AWS Proton resources and tagging](https://docs.aws.amazon.com/proton/latest/userguide/resources.html) in the _AWS Proton User Guide_.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-proton-environmenttemplate-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-proton-environmenttemplate.html#cfn-proton-environmenttemplate-tags */
        "Tags"?: Tag[];
    };
}