import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates an Amazon Personalize schema from the specified schema string. The schema you create must be in Avro JSON format.
 * Amazon Personalize recognizes three schema variants. Each schema is associated with a dataset type and has a set of required field and keywords. If you are creating a schema for a dataset in a Domain dataset group, you provide the domain of the Domain dataset group. You specify a schema when you call [CreateDataset](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateDataset.html).
 * For more information on schemas, see [Datasets and schemas](https://docs.aws.amazon.com/personalize/latest/dg/how-it-works-dataset-schema.html).
 * ###### Related APIs
 *
 * *   [ListSchemas](https://docs.aws.amazon.com/personalize/latest/dg/API_ListSchemas.html)
 *
 * *   [DescribeSchema](https://docs.aws.amazon.com/personalize/latest/dg/API_DescribeSchema.html)
 *
 * *   [DeleteSchema](https://docs.aws.amazon.com/personalize/latest/dg/API_DeleteSchema.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html */

export interface PersonalizeSchema extends ResourceAttributes {
  Type: 'AWS::Personalize::Schema'
  Properties: {
    /**
     * - The domain of a schema that you created for a dataset in a Domain dataset group.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ECOMMERCE | VIDEO_ON_DEMAND`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html#cfn-personalize-schema-domain */
    Domain?: string | Intrinsic
    /**
     * - The name of the schema.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html#cfn-personalize-schema-name */
    Name: string | Intrinsic
    /**
     * - The schema.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `10000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-schema.html#cfn-personalize-schema-schema */
    Schema: string | Intrinsic
  }
}
