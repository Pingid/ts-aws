import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-tag-value */
    "Value": string | Intrinsic;
}

/**
 * An object representing the payment responsibilities accepted by the collaboration member for query and job compute costs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipJobComputePaymentConfig {
    /**
     * - Indicates whether the collaboration member has accepted to pay for job compute costs (`TRUE`) or has not accepted to pay for query and job compute costs (`FALSE`).
     * - There is only one member who pays for queries and jobs.
     * - An error message is returned for the following reasons:
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipjobcomputepaymentconfig-isresponsible */
    "IsResponsible": boolean | Intrinsic;
}

/**
 * An object representing the payment responsibilities accepted by the collaboration member for query compute costs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipQueryComputePaymentConfig {
    /**
     * - Indicates whether the collaboration member has accepted to pay for query compute costs (`TRUE`) or has not accepted to pay for query compute costs (`FALSE`).
     * - If the collaboration creator has not specified anyone to pay for query compute costs, then the member who can query is the default payer.
     * - An error message is returned for the following reasons:
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipquerycomputepaymentconfig-isresponsible */
    "IsResponsible": boolean | Intrinsic;
}

/**
 * Contains input information for protected jobs with an S3 output type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface ProtectedJobS3OutputConfigurationInput {
    /**
     * - The S3 bucket for job output.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-protectedjobs3outputconfigurationinput-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - The S3 prefix to unload the protected job results.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w!.=*-]*`
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-protectedjobs3outputconfigurationinput-keyprefix */
    "KeyPrefix"?: string | Intrinsic;
}

/**
 * Contains configurations for protected job results.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipProtectedJobOutputConfiguration {
    /**
     * - Contains the configuration to write the job results to S3.
     * - _Required_: Yes
     * - _Type_: [ProtectedJobS3OutputConfigurationInput](./aws-properties-cleanrooms-membership-protectedjobs3outputconfigurationinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipprotectedjoboutputconfiguration-s3 */
    "S3": ProtectedJobS3OutputConfigurationInput;
}

/**
 * Contains configurations for protected job results.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipProtectedJobResultConfiguration {
    /**
     * - The output configuration for a protected job result.
     * - _Required_: Yes
     * - _Type_: [MembershipProtectedJobOutputConfiguration](./aws-properties-cleanrooms-membership-membershipprotectedjoboutputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipprotectedjobresultconfiguration-outputconfiguration */
    "OutputConfiguration": MembershipProtectedJobOutputConfiguration;
    /**
     * - The unique ARN for an IAM role that is used by AWS Clean Rooms to write protected job results to the result location, given by the member who can receive results.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `32`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipprotectedjobresultconfiguration-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * Contains the configuration to write the query results to S3.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface ProtectedQueryS3OutputConfiguration {
    /**
     * - The S3 bucket to unload the protected query results.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - The S3 prefix to unload the protected query results.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\w!.=*-]*`
     * - _Minimum_: `0`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-keyprefix */
    "KeyPrefix"?: string | Intrinsic;
    /**
     * - Intended file format of the result.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CSV | PARQUET`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-resultformat */
    "ResultFormat": string | Intrinsic;
    /**
     * - Indicates whether files should be output as a single file (`TRUE`) or output as multiple files (`FALSE`). This parameter is only supported for analyses with the Spark analytics engine.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-singlefileoutput */
    "SingleFileOutput"?: boolean | Intrinsic;
}

/**
 * Contains configurations for protected query results.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipProtectedQueryOutputConfiguration {
    /**
     * - Required configuration for a protected query with an `s3` output type.
     * - _Required_: Yes
     * - _Type_: [ProtectedQueryS3OutputConfiguration](./aws-properties-cleanrooms-membership-protectedquerys3outputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipprotectedqueryoutputconfiguration-s3 */
    "S3": ProtectedQueryS3OutputConfiguration;
}

/**
 * Contains configurations for protected query results.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipProtectedQueryResultConfiguration {
    /**
     * - Configuration for protected query results.
     * - _Required_: Yes
     * - _Type_: [MembershipProtectedQueryOutputConfiguration](./aws-properties-cleanrooms-membership-membershipprotectedqueryoutputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipprotectedqueryresultconfiguration-outputconfiguration */
    "OutputConfiguration": MembershipProtectedQueryOutputConfiguration;
    /**
     * - The unique ARN for an IAM role that is used by AWS Clean Rooms to write protected query results to the result location, given by the member who can receive results.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `32`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipprotectedqueryresultconfiguration-rolearn */
    "RoleArn"?: string | Intrinsic;
}

/**
 * An object representing the collaboration member's model inference payment responsibilities set by the collaboration creator.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipModelInferencePaymentConfig {
    /**
     * - Indicates whether the collaboration member has accepted to pay for model inference costs (`TRUE`) or has not accepted to pay for model inference costs (`FALSE`).
     * - If the collaboration creator has not specified anyone to pay for model inference costs, then the member who can query is the default payer.
     * - An error message is returned for the following reasons:
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipmodelinferencepaymentconfig-isresponsible */
    "IsResponsible": boolean | Intrinsic;
}

/**
 * An object representing the collaboration member's model training payment responsibilities set by the collaboration creator.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipModelTrainingPaymentConfig {
    /**
     * - Indicates whether the collaboration member has accepted to pay for model training costs (`TRUE`) or has not accepted to pay for model training costs (`FALSE`).
     * - If the collaboration creator has not specified anyone to pay for model training costs, then the member who can query is the default payer.
     * - An error message is returned for the following reasons:
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipmodeltrainingpaymentconfig-isresponsible */
    "IsResponsible": boolean | Intrinsic;
}

/**
 * An object representing the collaboration member's machine learning payment responsibilities set by the collaboration creator.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipMLPaymentConfig {
    /**
     * - The payment responsibilities accepted by the member for model inference.
     * - _Required_: No
     * - _Type_: [MembershipModelInferencePaymentConfig](./aws-properties-cleanrooms-membership-membershipmodelinferencepaymentconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipmlpaymentconfig-modelinference */
    "ModelInference"?: MembershipModelInferencePaymentConfig;
    /**
     * - The payment responsibilities accepted by the member for model training.
     * - _Required_: No
     * - _Type_: [MembershipModelTrainingPaymentConfig](./aws-properties-cleanrooms-membership-membershipmodeltrainingpaymentconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipmlpaymentconfig-modeltraining */
    "ModelTraining"?: MembershipModelTrainingPaymentConfig;
}

/**
 * An object representing the payment responsibilities accepted by the collaboration member.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipPaymentConfiguration {
    /**
     * - The payment responsibilities accepted by the collaboration member for job compute costs.
     * - _Required_: No
     * - _Type_: [MembershipJobComputePaymentConfig](./aws-properties-cleanrooms-membership-membershipjobcomputepaymentconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershippaymentconfiguration-jobcompute */
    "JobCompute"?: MembershipJobComputePaymentConfig;
    /**
     * - The payment responsibilities accepted by the collaboration member for machine learning costs.
     * - _Required_: No
     * - _Type_: [MembershipMLPaymentConfig](./aws-properties-cleanrooms-membership-membershipmlpaymentconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershippaymentconfiguration-machinelearning */
    "MachineLearning"?: MembershipMLPaymentConfig;
    /**
     * - The payment responsibilities accepted by the collaboration member for query compute costs.
     * - _Required_: Yes
     * - _Type_: [MembershipQueryComputePaymentConfig](./aws-properties-cleanrooms-membership-membershipquerycomputepaymentconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershippaymentconfiguration-querycompute */
    "QueryCompute": MembershipQueryComputePaymentConfig;
}

/**
 * Creates a membership for a specific collaboration identifier and joins the collaboration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface CleanRoomsMembership extends ResourceAttributes {
    "Type": "AWS::CleanRooms::Membership";
    "Properties": {
        /**
         * - The unique ID for the associated collaboration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
         * - _Minimum_: `36`
         * - _Maximum_: `36`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-collaborationidentifier */
        "CollaborationIdentifier": string | Intrinsic;
        /**
         * - The default job result configuration for the membership.
         * - _Required_: No
         * - _Type_: [MembershipProtectedJobResultConfiguration](./aws-properties-cleanrooms-membership-membershipprotectedjobresultconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-defaultjobresultconfiguration */
        "DefaultJobResultConfiguration"?: MembershipProtectedJobResultConfiguration;
        /**
         * - The default protected query result configuration as specified by the member who can receive results.
         * - _Required_: No
         * - _Type_: [MembershipProtectedQueryResultConfiguration](./aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-defaultresultconfiguration */
        "DefaultResultConfiguration"?: MembershipProtectedQueryResultConfiguration;
        /**
         * - An indicator as to whether job logging has been enabled or disabled for the collaboration.
         * - When `ENABLED`, AWS Clean Rooms logs details about jobs run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-joblogstatus */
        "JobLogStatus"?: string | Intrinsic;
        /**
         * - The payment responsibilities accepted by the collaboration member.
         * - _Required_: No
         * - _Type_: [MembershipPaymentConfiguration](./aws-properties-cleanrooms-membership-membershippaymentconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-paymentconfiguration */
        "PaymentConfiguration"?: MembershipPaymentConfiguration;
        /**
         * - An indicator as to whether query logging has been enabled or disabled for the membership.
         * - When `ENABLED`, AWS Clean Rooms logs details about queries run within this collaboration and those logs can be viewed in Amazon CloudWatch Logs. The default value is `DISABLED`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-querylogstatus */
        "QueryLogStatus": string | Intrinsic;
        /**
         * - An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cleanrooms-membership-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-tags */
        "Tags"?: Tag[];
    };
}