import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AwsLambda` property type specifies Property description not available. for an [AWS::S3ObjectLambda::AccessPoint](./aws-resource-s3objectlambda-accesspoint.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html */

export interface AwsLambda {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-awslambda-functionarn */
  FunctionArn: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-awslambda-functionpayload */
  FunctionPayload?: string | Intrinsic
}

/**
 * The `ContentTransformation` property type specifies Property description not available. for an [AWS::S3ObjectLambda::AccessPoint](./aws-resource-s3objectlambda-accesspoint.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html */

export interface ContentTransformation {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: [AwsLambda](./aws-properties-s3objectlambda-accesspoint-awslambda.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-contenttransformation-awslambda */
  AwsLambda: AwsLambda
}

/**
 * A configuration used when creating an Object Lambda Access Point transformation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html */

export interface TransformationConfiguration {
  /**
   * - A container for the action of an Object Lambda Access Point configuration. Valid inputs are `GetObject`, `HeadObject`, `ListObjects`, and `ListObjectsV2`.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-transformationconfiguration-actions */
  Actions: (string | Intrinsic)[]
  /**
   * - A container for the content transformation of an Object Lambda Access Point configuration. Can include the FunctionArn and FunctionPayload. For more information, see [AwsLambdaTransformation](https://docs.aws.amazon.com/AmazonS3/latest/API/API_control_AwsLambdaTransformation.html) in the _Amazon S3 API Reference_.
   * - _Required_: Yes
   * - _Type_: [ContentTransformation](./aws-properties-s3objectlambda-accesspoint-contenttransformation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-transformationconfiguration-contenttransformation */
  ContentTransformation: ContentTransformation
}

/**
 * A configuration used when creating an Object Lambda Access Point.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html */

export interface ObjectLambdaConfiguration {
  /**
   * - A container for allowed features. Valid inputs are `GetObject-Range`, `GetObject-PartNumber`, `HeadObject-Range`, and `HeadObject-PartNumber`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-allowedfeatures */
  AllowedFeatures?: (string | Intrinsic)[]
  /**
   * - A container for whether the CloudWatch metrics configuration is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-cloudwatchmetricsenabled */
  CloudWatchMetricsEnabled?: boolean | Intrinsic
  /**
   * - Standard access point associated with the Object Lambda Access Point.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-supportingaccesspoint */
  SupportingAccessPoint: string | Intrinsic
  /**
   * - A container for transformation configurations for an Object Lambda Access Point.
   * - _Required_: Yes
   * - _Type_: Array of [TransformationConfiguration](./aws-properties-s3objectlambda-accesspoint-transformationconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration-transformationconfigurations */
  TransformationConfigurations: TransformationConfiguration[]
}

/**
 * The `AWS::S3ObjectLambda::AccessPoint` resource specifies an Object Lambda Access Point used to access a bucket.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html */

export interface S3ObjectLambdaAccessPoint {
  Type: 'AWS::S3ObjectLambda::AccessPoint'
  Properties: {
    /**
     * - The name of this access point.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$`
     * - _Minimum_: `3`
     * - _Maximum_: `45`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-name */
    Name?: string | Intrinsic
    /**
     * - A configuration used when creating an Object Lambda Access Point.
     * - _Required_: Yes
     * - _Type_: [ObjectLambdaConfiguration](./aws-properties-s3objectlambda-accesspoint-objectlambdaconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspoint.html#cfn-s3objectlambda-accesspoint-objectlambdaconfiguration */
    ObjectLambdaConfiguration: ObjectLambdaConfiguration
  }
}
