import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The name and data type of an individual field in a user-defined type (UDT). In addition to a Cassandra data type, you can also use another UDT. When you nest another UDT or collection data type, you have to declare them with the `FROZEN` keyword.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html */

export interface Field {
    /**
     * - The name of the field.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-field-fieldname */
    "FieldName": string | Intrinsic;
    /**
     * - The data type of the field. This can be any Cassandra data type or another user-defined type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-field-fieldtype */
    "FieldType": string | Intrinsic;
}

/**
 * The `CreateType` operation creates a new user-defined type in the specified keyspace.
 * To configure the required permissions, see [Permissions to create a UDT](https://docs.aws.amazon.com/keyspaces/latest/devguide/configure-udt-permissions.html#udt-permissions-create) in the _Amazon Keyspaces Developer Guide_.
 * For more information, see [User-defined types (UDTs)](https://docs.aws.amazon.com/keyspaces/latest/devguide/udts.html) in the _Amazon Keyspaces Developer Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html */

export interface CassandraType extends ResourceAttributes {
    "Type": "AWS::Cassandra::Type";
    "Properties": {
        /**
         * - A list of fields that define this type.
         * - _Required_: Yes
         * - _Type_: Array of [Field](./aws-properties-cassandra-type-field.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-fields */
        "Fields": Field[];
        /**
         * - The name of the keyspace to create the type in. The keyspace must already exist.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-keyspacename */
        "KeyspaceName": string | Intrinsic;
        /**
         * - The name of the user-defined type. UDT names must contain 48 characters or less, must begin with an alphabetic character, and can only contain alpha-numeric characters and underscores. Amazon Keyspaces converts upper case characters automatically into lower case characters. For more information, see [Create a user-defined type (UDT) in Amazon Keyspaces](https://docs.aws.amazon.com/keyspaces/latest/devguide/keyspaces-create-udt.html) in the _Amazon Keyspaces Developer Guide_.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cassandra-type.html#cfn-cassandra-type-typename */
        "TypeName": string | Intrinsic;
    };
}