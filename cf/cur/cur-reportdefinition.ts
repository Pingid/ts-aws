import type { Intrinsic } from '../intrinsic/index.js' /**
 * The definition of AWS Cost and Usage Report. You can specify the report name, time unit, report format, compression format, S3 bucket, additional artifacts, and schema elements in the definition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html */

export interface CURReportDefinition {
  Type: 'AWS::CUR::ReportDefinition'
  Properties: {
    /**
     * - A list of manifests that you want AWS to create for this report.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `REDSHIFT | QUICKSIGHT | ATHENA`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-additionalartifacts */
    AdditionalArtifacts?: (string | Intrinsic)[]
    /**
     * - A list of strings that indicate additional content that AWS includes in the report, such as individual resource IDs.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `RESOURCES | SPLIT_COST_ALLOCATION_DATA | MANUAL_DISCOUNT_COMPATIBILITY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-additionalschemaelements */
    AdditionalSchemaElements?: (string | Intrinsic)[]
    /**
     * - The Amazon Resource Name (ARN) of the billing view. You can get this value by using the billing view service public APIs.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(arn:aws(-cn)?:billing::[0-9]{12}:billingview/)?[a-zA-Z0-9_\+=\.\-@].{1,30}`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-billingviewarn */
    BillingViewArn?: string | Intrinsic
    /**
     * - The compression format that Amazon Web Services uses for the report.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ZIP | GZIP | Parquet`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-compression */
    Compression: string | Intrinsic
    /**
     * - The format that Amazon Web Services saves the report in.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `textORcsv | Parquet`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-format */
    Format: string | Intrinsic
    /**
     * - Whether you want AWS to update your reports after they have been finalized if AWS detects charges related to previous months. These charges can include refunds, credits, or support fees.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-refreshclosedreports */
    RefreshClosedReports: boolean | Intrinsic
    /**
     * - The name of the report that you want to create. The name must be unique, is case sensitive, and can't include spaces.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[0-9A-Za-z!\-_.*\'()]+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-reportname */
    ReportName: string | Intrinsic
    /**
     * - Whether you want AWS to overwrite the previous version of each report or to deliver the report in addition to the previous versions.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CREATE_NEW_REPORT | OVERWRITE_REPORT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-reportversioning */
    ReportVersioning: string | Intrinsic
    /**
     * - The S3 bucket where Amazon Web Services delivers the report.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9_\.\-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3bucket */
    S3Bucket: string | Intrinsic
    /**
     * - The prefix that Amazon Web Services adds to the report name when Amazon Web Services delivers the report. Your prefix can't include spaces.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[0-9A-Za-z!\-_.*\'()/]*`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3prefix */
    S3Prefix: string | Intrinsic
    /**
     * - The Region of the S3 bucket that Amazon Web Services delivers the report into.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-s3region */
    S3Region: string | Intrinsic
    /**
     * - The granularity of the line items in the report.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HOURLY | DAILY | MONTHLY`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cur-reportdefinition.html#cfn-cur-reportdefinition-timeunit */
    TimeUnit: string | Intrinsic
  }
}
