import type { Intrinsic } from '../intrinsic/index.js' /**
 * Information about AWS CloudFormation stacks. You can use up to 1000 stacks to specify which AWS resources in your account to analyze. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the _AWS CloudFormation User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html */

export interface CloudFormationCollectionFilter {
  /**
   * - An array of CloudFormation stack names.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `128 | 1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html#cfn-devopsguru-resourcecollection-cloudformationcollectionfilter-stacknames */
  StackNames?: (string | Intrinsic)[]
}

/**
 * A collection of AWS tags.
 * Tags help you identify and organize your AWS resources. Many AWS services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an AWS Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
 * Each AWS tag has two parts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html */

export interface TagCollection {
  /**
   * - An AWS tag _key_ that is used to identify the AWS resources that DevOps Guru analyzes. All AWS resources in your account and Region tagged with this _key_ make up your DevOps Guru application and analysis boundary.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html#cfn-devopsguru-resourcecollection-tagcollection-appboundarykey */
  AppBoundaryKey?: string | Intrinsic
  /**
   * - The values in an AWS tag collection.
   * - The tag's _value_ is a field used to associate a string with the tag _key_ (for example, `111122223333`, `Production`, or a team name). The _key_ and _value_ are the tag's _key_ pair. Omitting the tag _value_ is the same as using an empty string. Like tag _keys_, tag _values_ are case-sensitive. You can specify a maximum of 256 characters for a tag value. The tag value is a required property when _AppBoundaryKey_ is specified.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `256 | 1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html#cfn-devopsguru-resourcecollection-tagcollection-tagvalues */
  TagValues?: (string | Intrinsic)[]
}

/**
 * Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html */

export interface ResourceCollectionFilter {
  /**
   * - Information about AWS CloudFormation stacks. You can use up to 1000 stacks to specify which AWS resources in your account to analyze. For more information, see [Stacks](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacks.html) in the _AWS CloudFormation User Guide_.
   * - _Required_: No
   * - _Type_: [CloudFormationCollectionFilter](./aws-properties-devopsguru-resourcecollection-cloudformationcollectionfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html#cfn-devopsguru-resourcecollection-resourcecollectionfilter-cloudformation */
  CloudFormation?: CloudFormationCollectionFilter
  /**
   * - The AWS tags used to filter the resources in the resource collection.
   * - Tags help you identify and organize your AWS resources. Many AWS services support tagging, so you can assign the same tag to resources from different services to indicate that the resources are related. For example, you can assign the same tag to an Amazon DynamoDB table resource that you assign to an AWS Lambda function. For more information about using tags, see the [Tagging best practices](https://docs.aws.amazon.com/whitepapers/latest/tagging-best-practices/tagging-best-practices.html) whitepaper.
   * - Each AWS tag has two parts.
   * - Together these are known as _key_\-_value_ pairs.
   * - _Required_: No
   * - _Type_: Array of [TagCollection](./aws-properties-devopsguru-resourcecollection-tagcollection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html#cfn-devopsguru-resourcecollection-resourcecollectionfilter-tags */
  Tags?: TagCollection[]
}

/**
 * A collection of AWS resources supported by DevOps Guru. The one type of AWS resource collection supported is AWS CloudFormation stacks. DevOps Guru can be configured to analyze only the AWS resources that are defined in the stacks.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html */

export interface DevOpsGuruResourceCollection {
  Type: 'AWS::DevOpsGuru::ResourceCollection'
  Properties: {
    /**
     * - Information about a filter used to specify which AWS resources are analyzed for anomalous behavior by DevOps Guru.
     * - _Required_: Yes
     * - _Type_: [ResourceCollectionFilter](./aws-properties-devopsguru-resourcecollection-resourcecollectionfilter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-devopsguru-resourcecollection.html#cfn-devopsguru-resourcecollection-resourcecollectionfilter */
    ResourceCollectionFilter: ResourceCollectionFilter
  }
}
