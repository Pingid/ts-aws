import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::S3ObjectLambda::AccessPointPolicy` resource specifies the Object Lambda Access Point resource policy document.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html */

export interface S3ObjectLambdaAccessPointPolicy {
  Type: 'AWS::S3ObjectLambda::AccessPointPolicy'
  Properties: {
    /**
     * - An access point with an attached AWS Lambda function used to access transformed data from an Amazon S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$`
     * - _Minimum_: `3`
     * - _Maximum_: `45`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html#cfn-s3objectlambda-accesspointpolicy-objectlambdaaccesspoint */
    ObjectLambdaAccessPoint: string | Intrinsic
    /**
     * - Object Lambda Access Point resource policy document.
     * - _Required_: Yes
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3objectlambda-accesspointpolicy.html#cfn-s3objectlambda-accesspointpolicy-policydocument */
    PolicyDocument: any | Intrinsic
  }
}
