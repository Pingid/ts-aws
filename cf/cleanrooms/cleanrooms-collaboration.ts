import type { Intrinsic } from '../intrinsic/index.js' /**
 * The settings for client-side encryption for cryptographic computing.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html */

export interface DataEncryptionMetadata {
  /**
   * - Indicates whether encrypted tables can contain cleartext data (`TRUE`) or are to cryptographically process every column (`FALSE`).
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-allowcleartext */
  AllowCleartext: boolean | Intrinsic
  /**
   * - Indicates whether Fingerprint columns can contain duplicate entries (`TRUE`) or are to contain only non-repeated values (`FALSE`).
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-allowduplicates */
  AllowDuplicates: boolean | Intrinsic
  /**
   * - Indicates whether Fingerprint columns can be joined on any other Fingerprint column with a different name (`TRUE`) or can only be joined on Fingerprint columns of the same name (`FALSE`).
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-allowjoinsoncolumnswithdifferentnames */
  AllowJoinsOnColumnsWithDifferentNames: boolean | Intrinsic
  /**
   * - Indicates whether NULL values are to be copied as NULL to encrypted tables (`TRUE`) or cryptographically processed (`FALSE`).
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-dataencryptionmetadata-preservenulls */
  PreserveNulls: boolean | Intrinsic
}

/**
 * Basic metadata used to construct a new member.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html */

export interface MemberSpecification {
  /**
   * - The identifier used to reference members of the collaboration. Currently only supports AWS account ID.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\d+$`
   * - _Minimum_: `12`
   * - _Maximum_: `12`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-memberspecification-accountid */
  AccountId: string | Intrinsic
  /**
   * - The member's display name.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-memberspecification-displayname */
  DisplayName: string | Intrinsic
  /**
   * - The abilities granted to the collaboration member.
   * - _Allowed Values_: `CAN_QUERY` | `CAN_RECEIVE_RESULTS`
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-memberspecification-memberabilities */
  MemberAbilities: (string | Intrinsic)[]
  /**
   * - The collaboration member's payment responsibilities set by the collaboration creator.
   * - If the collaboration creator hasn't speciﬁed anyone as the member paying for query compute costs, then the member who can query is the default payer.
   * - _Required_: No
   * - _Type_: [PaymentConfiguration](./aws-properties-cleanrooms-collaboration-paymentconfiguration.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-memberspecification-paymentconfiguration */
  PaymentConfiguration?: PaymentConfiguration
}

/**
 * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-tag-value */
  Value: string | Intrinsic
}

/**
 * An object representing the collaboration member's payment responsibilities set by the collaboration creator for query compute costs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html */

export interface QueryComputePaymentConfig {
  /**
   * - Indicates whether the collaboration creator has configured the collaboration member to pay for query compute costs (`TRUE`) or has not configured the collaboration member to pay for query compute costs (`FALSE`).
   * - Exactly one member can be configured to pay for query compute costs. An error is returned if the collaboration creator sets a `TRUE` value for more than one member in the collaboration.
   * - If the collaboration creator hasn't specified anyone as the member paying for query compute costs, then the member who can query is the default payer. An error is returned if the collaboration creator sets a `FALSE` value for the member who can query.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-querycomputepaymentconfig-isresponsible */
  IsResponsible: boolean | Intrinsic
}

/**
 * An object representing the collaboration member's payment responsibilities set by the collaboration creator.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html */

export interface PaymentConfiguration {
  /**
   * - The collaboration member's payment responsibilities set by the collaboration creator for query compute costs.
   * - _Required_: Yes
   * - _Type_: [QueryComputePaymentConfig](./aws-properties-cleanrooms-collaboration-querycomputepaymentconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-paymentconfiguration-querycompute */
  QueryCompute: QueryComputePaymentConfig
}

/**
 * Creates a new collaboration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html */

export interface CleanRoomsCollaboration {
  Type: 'AWS::CleanRooms::Collaboration'
  Properties: {
    /**
     * - A display name of the collaboration creator.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-creatordisplayname */
    CreatorDisplayName: string | Intrinsic
    /**
     * - The abilities granted to the collaboration creator.
     * - _Allowed values_ `CAN_QUERY` | `CAN_RECEIVE_RESULTS`
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-creatormemberabilities */
    CreatorMemberAbilities: (string | Intrinsic)[]
    /**
     * - An object representing the collaboration member's payment responsibilities set by the collaboration creator.
     * - _Required_: No
     * - _Type_: [PaymentConfiguration](./aws-properties-cleanrooms-collaboration-paymentconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-creatorpaymentconfiguration */
    CreatorPaymentConfiguration?: PaymentConfiguration
    /**
     * - The settings for client-side encryption for cryptographic computing.
     * - _Required_: No
     * - _Type_: [DataEncryptionMetadata](./aws-properties-cleanrooms-collaboration-dataencryptionmetadata.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-dataencryptionmetadata */
    DataEncryptionMetadata?: DataEncryptionMetadata
    /**
     * - A description of the collaboration provided by the collaboration owner.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-description */
    Description: string | Intrinsic
    /**
     * - A list of initial members, not including the creator. This list is immutable.
     * - _Required_: Yes
     * - _Type_: Array of [MemberSpecification](./aws-properties-cleanrooms-collaboration-memberspecification.html)
     * - _Minimum_: `0`
     * - _Maximum_: `9`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-members */
    Members: MemberSpecification[]
    /**
     * - A human-readable identifier provided by the collaboration owner. Display names are not unique.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!\s*$)[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-name */
    Name: string | Intrinsic
    /**
     * - An indicator as to whether query logging has been enabled or disabled for the collaboration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-querylogstatus */
    QueryLogStatus: string | Intrinsic
    /**
     * - An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-cleanrooms-collaboration-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-collaboration.html#cfn-cleanrooms-collaboration-tags */
    Tags?: Tag[]
  }
}