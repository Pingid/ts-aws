import type { Intrinsic } from '../intrinsic/index.js' /**
 * The validity period for the signing job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html */

export interface SignatureValidityPeriod {
  /**
   * - The time unit for signature validity: DAYS | MONTHS | YEARS.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DAYS | MONTHS | YEARS`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-signaturevalidityperiod-type */
  Type?: string | Intrinsic
  /**
   * - The numerical value of the time unit for signature validity.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-signaturevalidityperiod-value */
  Value?: number | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Signer::SigningProfile](./aws-resource-signer-signingprofile.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-tag-key */
  Key?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-tag-value */
  Value?: string | Intrinsic
}

/**
 * Creates a signing profile. A signing profile is a code-signing template that can be used to carry out a pre-defined signing job.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html */

export interface SignerSigningProfile {
  Type: 'AWS::Signer::SigningProfile'
  Properties: {
    /**
     * - The ID of a platform that is available for use by a signing profile.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AWSLambda-SHA384-ECDSA | Notation-OCI-SHA384-ECDSA`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-platformid */
    PlatformId: string | Intrinsic
    /**
     * - The name of the signing profile.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z_]{2,64}$`
     * - _Minimum_: `2`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-profilename */
    ProfileName?: string | Intrinsic
    /**
     * - The validity period override for any signature generated using this signing profile. If unspecified, the default is 135 months.
     * - _Required_: No
     * - _Type_: [SignatureValidityPeriod](./aws-properties-signer-signingprofile-signaturevalidityperiod.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-signaturevalidityperiod */
    SignatureValidityPeriod?: SignatureValidityPeriod
    /**
     * - A list of tags associated with the signing profile.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-signer-signingprofile-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-signer-signingprofile.html#cfn-signer-signingprofile-tags */
    Tags?: Tag[]
  }
}
