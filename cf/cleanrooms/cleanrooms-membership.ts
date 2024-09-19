import type { Intrinsic } from '../intrinsic/index.js' /**
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
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-tag-value */
  Value: string | Intrinsic
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
  IsResponsible: boolean | Intrinsic
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
  Bucket: string | Intrinsic
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
  KeyPrefix?: string | Intrinsic
  /**
   * - Intended file format of the result.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CSV | PARQUET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-protectedquerys3outputconfiguration-resultformat */
  ResultFormat: string | Intrinsic
}

/**
 * An object representing the payment responsibilities accepted by the collaboration member.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface MembershipPaymentConfiguration {
  /**
   * - The payment responsibilities accepted by the collaboration member for query compute costs.
   * - _Required_: Yes
   * - _Type_: [MembershipQueryComputePaymentConfig](./aws-properties-cleanrooms-membership-membershipquerycomputepaymentconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershippaymentconfiguration-querycompute */
  QueryCompute: MembershipQueryComputePaymentConfig
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
  S3: ProtectedQueryS3OutputConfiguration
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
  OutputConfiguration: MembershipProtectedQueryOutputConfiguration
  /**
   * - The unique ARN for an IAM role that is used by AWS Clean Rooms to write protected query results to the result location, given by the member who can receive results.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `32`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-membershipprotectedqueryresultconfiguration-rolearn */
  RoleArn?: string | Intrinsic
}

/**
 * Creates a membership for a specific collaboration identifier and joins the collaboration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html */

export interface CleanRoomsMembership {
  Type: 'AWS::CleanRooms::Membership'
  Properties: {
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
    CollaborationIdentifier: string | Intrinsic
    /**
     * - The default protected query result configuration as specified by the member who can receive results.
     * - _Required_: No
     * - _Type_: [MembershipProtectedQueryResultConfiguration](./aws-properties-cleanrooms-membership-membershipprotectedqueryresultconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-defaultresultconfiguration */
    DefaultResultConfiguration?: MembershipProtectedQueryResultConfiguration
    /**
     * - The payment responsibilities accepted by the collaboration member.
     * - _Required_: No
     * - _Type_: [MembershipPaymentConfiguration](./aws-properties-cleanrooms-membership-membershippaymentconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-paymentconfiguration */
    PaymentConfiguration?: MembershipPaymentConfiguration
    /**
     * - An indicator as to whether query logging has been enabled or disabled for the membership.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-querylogstatus */
    QueryLogStatus: string | Intrinsic
    /**
     * - An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-cleanrooms-membership-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-membership.html#cfn-cleanrooms-membership-tags */
    Tags?: Tag[]
  }
}
