import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains metadata about a CloudFront function.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html */

export interface FunctionMetadata {
  /**
   * - The Amazon Resource Name (ARN) of the function. The ARN uniquely identifies the function.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functionmetadata-functionarn */
  FunctionARN?: string | Intrinsic
}

/**
 * The key value store association.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html */

export interface KeyValueStoreAssociation {
  /**
   * - The Amazon Resource Name (ARN) of the key value store association.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:aws:cloudfront::[0-9]{12}:key-value-store\/[0-9a-fA-F-]{36}`
   * - _Minimum_: `0`
   * - _Maximum_: `85`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-keyvaluestoreassociation-keyvaluestorearn */
  KeyValueStoreARN: string | Intrinsic
}

/**
 * Contains configuration information about a CloudFront function.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html */

export interface FunctionConfig {
  /**
   * - A comment to describe the function.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functionconfig-comment */
  Comment: string | Intrinsic
  /**
   * - The configuration for the key value store associations.
   * - _Required_: No
   * - _Type_: Array of [KeyValueStoreAssociation](./aws-properties-cloudfront-function-keyvaluestoreassociation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functionconfig-keyvaluestoreassociations */
  KeyValueStoreAssociations?: KeyValueStoreAssociation[]
  /**
   * - The function's runtime environment version.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `cloudfront-js-1.0 | cloudfront-js-2.0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functionconfig-runtime */
  Runtime: string | Intrinsic
}

/**
 * Creates a CloudFront function.
 * To create a function, you provide the function code and some configuration information about the function. The response contains an Amazon Resource Name (ARN) that uniquely identifies the function, and the function’s stage.
 * By default, when you create a function, it’s in the `DEVELOPMENT` stage. In this stage, you can [test the function](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/test-function.html) in the CloudFront console (or with `TestFunction` in the CloudFront API).
 * When you’re ready to use your function with a CloudFront distribution, publish the function to the `LIVE` stage. You can do this in the CloudFront console, with `PublishFunction` in the CloudFront API, or by updating the `AWS::CloudFront::Function` resource with the `AutoPublish` property set to `true`. When the function is published to the `LIVE` stage, you can attach it to a distribution’s cache behavior, using the function’s ARN.
 * To automatically publish the function to the `LIVE` stage when it’s created, set the `AutoPublish` property to `true`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html */

export interface CloudFrontFunction extends ResourceAttributes {
  Type: 'AWS::CloudFront::Function'
  Properties: {
    /**
     * - A flag that determines whether to automatically publish the function to the `LIVE` stage when it’s created. To automatically publish to the `LIVE` stage, set this property to `true`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-autopublish */
    AutoPublish?: boolean | Intrinsic
    /**
     * - The function code. For more information about writing a CloudFront function, see [Writing function code for CloudFront Functions](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/writing-function-code.html) in the _Amazon CloudFront Developer Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functioncode */
    FunctionCode: string | Intrinsic
    /**
     * - Contains configuration information about a CloudFront function.
     * - _Required_: Yes
     * - _Type_: [FunctionConfig](./aws-properties-cloudfront-function-functionconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functionconfig */
    FunctionConfig: FunctionConfig
    /**
     * - Contains metadata about a CloudFront function.
     * - _Required_: No
     * - _Type_: [FunctionMetadata](./aws-properties-cloudfront-function-functionmetadata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-functionmetadata */
    FunctionMetadata?: FunctionMetadata
    /**
     * - A name to identify the function.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9-_]{1,64}`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudfront-function.html#cfn-cloudfront-function-name */
    Name: string | Intrinsic
  }
}
