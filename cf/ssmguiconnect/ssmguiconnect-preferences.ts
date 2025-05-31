import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The S3 bucket where RDP connection recordings are stored.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html */

export interface S3Bucket {
    /**
     * - The name of the S3 bucket where RDP connection recordings are stored.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?=^.{3,63}$)(?!^(\d+\.)+\d+$)(^(([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])\.)*([a-z0-9]|[a-z0-9][a-z0-9\-]*[a-z0-9])$)`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#cfn-ssmguiconnect-preferences-s3bucket-bucketname */
    "BucketName": string | Intrinsic;
    /**
     * - The AWS account number that owns the S3 bucket.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#cfn-ssmguiconnect-preferences-s3bucket-bucketowner */
    "BucketOwner": string | Intrinsic;
}

/**
 * Determines where recordings of RDP connections are stored.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html */

export interface RecordingDestinations {
    /**
     * - The S3 bucket where RDP connection recordings are stored.
     * - _Required_: Yes
     * - _Type_: Array of [S3Bucket](./aws-properties-ssmguiconnect-preferences-s3bucket.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#cfn-ssmguiconnect-preferences-recordingdestinations-s3buckets */
    "S3Buckets": S3Bucket[];
}

/**
 * The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. This includes details such as which S3 bucket recordings are stored in.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html */

export interface ConnectionRecordingPreferences {
    /**
     * - The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. This key must exist in the same AWS Region as the node you start an RDP connection to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#cfn-ssmguiconnect-preferences-connectionrecordingpreferences-kmskeyarn */
    "KMSKeyArn": string | Intrinsic;
    /**
     * - Determines where recordings of RDP connections are stored.
     * - _Required_: Yes
     * - _Type_: [RecordingDestinations](./aws-properties-ssmguiconnect-preferences-recordingdestinations.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#cfn-ssmguiconnect-preferences-connectionrecordingpreferences-recordingdestinations */
    "RecordingDestinations": RecordingDestinations;
}

/**
 * Specify new or changed connection recording preferences for your AWS Systems Manager GUI Connect connections.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html */

export interface SSMGuiConnectPreferences extends ResourceAttributes {
    "Type": "AWS::SSMGuiConnect::Preferences";
    "Properties": {
        /**
         * - The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. This includes details such as which S3 bucket recordings are stored in.
         * - _Required_: No
         * - _Type_: [ConnectionRecordingPreferences](./aws-properties-ssmguiconnect-preferences-connectionrecordingpreferences.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmguiconnect-preferences.html#cfn-ssmguiconnect-preferences-connectionrecordingpreferences */
        "ConnectionRecordingPreferences"?: ConnectionRecordingPreferences;
    };
}