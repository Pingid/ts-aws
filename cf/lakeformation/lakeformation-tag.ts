import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::LakeFormation::Tag` resource represents an LF-tag, which consists of a key and one or more possible values for the key. During a stack operation, AWS CloudFormation calls the AWS Lake Formation `CreateLFTag` API to create a tag, and `UpdateLFTag` API to update a tag resource, and a `DeleteLFTag` to delete it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html */

export interface LakeFormationTag extends ResourceAttributes {
  Type: 'AWS::LakeFormation::Tag'
  Properties: {
    /**
     * - Catalog id string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html).
     * - The identifier for the Data Catalog. By default, the account ID. The Data Catalog is the persistent metadata store. It contains database definitions, table definitions, and other control information to manage your AWS Lake Formation environment.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html#cfn-lakeformation-tag-catalogid */
    CatalogId?: string | Intrinsic
    /**
     * - UTF-8 string, not less than 1 or more than 255 bytes long, matching the [single-line string pattern](https://docs.aws.amazon.com/lake-formation/latest/dg/aws-lake-formation-api-aws-lake-formation-api-common.html).
     * - The key-name for the LF-tag.
     * - For more information about using the `Ref` function, see [`Ref`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/intrinsic-function-reference-ref.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([{a-zA-Z}{\s}{0-9}_.:\/=+\-@%]*)$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html#cfn-lakeformation-tag-tagkey */
    TagKey: string | Intrinsic
    /**
     * - An array of UTF-8 strings, not less than 1 or more than 50 strings.
     * - A list of possible values of the corresponding `TagKey` of an LF-tag key-value pair.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lakeformation-tag.html#cfn-lakeformation-tag-tagvalues */
    TagValues: (string | Intrinsic)[]
  }
}
