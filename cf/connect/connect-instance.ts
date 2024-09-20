import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * _This is a preview release for Amazon Connect. It is subject to change._
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html */

export interface Attributes {
  /**
   * -
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes-autoresolvebestvoices */
  AutoResolveBestVoices?: boolean | Intrinsic
  /**
   * -
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes-contactflowlogs */
  ContactflowLogs?: boolean | Intrinsic
  /**
   * -
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes-contactlens */
  ContactLens?: boolean | Intrinsic
  /**
   * -
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes-earlymedia */
  EarlyMedia?: boolean | Intrinsic
  /**
   * -
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes-inboundcalls */
  InboundCalls: boolean | Intrinsic
  /**
   * -
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes-outboundcalls */
  OutboundCalls: boolean | Intrinsic
  /**
   * -
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes-usecustomttsvoices */
  UseCustomTTSVoices?: boolean | Intrinsic
}

/**
 * A key-value pair to associate with a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-tag-value */
  Value: string | Intrinsic
}

/**
 * _This is a preview release for Amazon Connect. It is subject to change._
 * Initiates an Amazon Connect instance with all the supported channels enabled. It does not attach any storage, such as Amazon Simple Storage Service (Amazon S3) or Amazon Kinesis.
 * Amazon Connect enforces a limit on the total number of instances that you can create or delete in 30 days. If you exceed this limit, you will get an error message indicating there has been an excessive number of attempts at creating or deleting instances. You must wait 30 days before you can restart creating and deleting instances in your account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html */

export interface ConnectInstance extends ResourceAttributes {
  Type: 'AWS::Connect::Instance'
  Properties: {
    /**
     * - A toggle for an individual feature at the instance level.
     * - _Required_: Yes
     * - _Type_: [Attributes](./aws-properties-connect-instance-attributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-attributes */
    Attributes: Attributes
    /**
     * - The identifier for the directory.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^d-[0-9a-f]{10}$`
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-directoryid */
    DirectoryId?: string | Intrinsic
    /**
     * - The identity management type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SAML | CONNECT_MANAGED | EXISTING_DIRECTORY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-identitymanagementtype */
    IdentityManagementType: string | Intrinsic
    /**
     * - The alias of instance. `InstanceAlias` is only required when `IdentityManagementType` is `CONNECT_MANAGED` or `SAML`. `InstanceAlias` is not required when `IdentityManagementType` is `EXISTING_DIRECTORY`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?!d-)([\da-zA-Z]+)([-]*[\da-zA-Z])*$`
     * - _Minimum_: `1`
     * - _Maximum_: `62`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-instancealias */
    InstanceAlias?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-connect-instance-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-instance.html#cfn-connect-instance-tags */
    Tags?: Tag[]
  }
}
