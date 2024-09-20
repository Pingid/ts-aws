import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Information about a Sidewalk account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html */

export interface SidewalkAccountInfo {
  /**
   * - The Sidewalk application server private key. The application server private key is a secret key, which you should handle in a similar way as you would an application password. You can protect the application server private key by storing the value in the AWS Secrets Manager and use the [secretsmanager](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager) to reference this value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-fA-F0-9]{64}`
   * - _Minimum_: `1`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkaccountinfo-appserverprivatekey */
  AppServerPrivateKey: string | Intrinsic
}

/**
 * Information about a Sidewalk account.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html */

export interface SidewalkAccountInfoWithFingerprint {
  /**
   * - The Sidewalk Amazon ID.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-amazonid */
  AmazonId?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the resource.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-arn */
  Arn?: string | Intrinsic
  /**
   * - The fingerprint of the Sidewalk application server private key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-fA-F0-9]{64}`
   * - _Minimum_: `64`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint-fingerprint */
  Fingerprint?: string | Intrinsic
}

/**
 * Sidewalk update.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html */

export interface SidewalkUpdateAccount {
  /**
   * - The new Sidewalk application server private key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[a-fA-F0-9]{64}`
   * - _Minimum_: `1`
   * - _Maximum_: `4096`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkupdateaccount-appserverprivatekey */
  AppServerPrivateKey?: string | Intrinsic
}

/**
 * The tags to attach to the Sidewalk account. Tags are metadata that you can use to manage a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html */

export interface Tag {
  /**
   * - The tag's key value.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `127`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-tag-key */
  Key?: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-tag-value */
  Value?: string | Intrinsic
}

/**
 * A partner account. If `PartnerAccountId` and `PartnerType` are `null`, returns all partner accounts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html */

export interface IoTWirelessPartnerAccount extends ResourceAttributes {
  Type: 'AWS::IoTWireless::PartnerAccount'
  Properties: {
    /**
     * - Whether the partner account is linked to the AWS account.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-accountlinked */
    AccountLinked?: boolean | Intrinsic
    /**
     * - The ID of the partner account to update.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-partneraccountid */
    PartnerAccountId?: string | Intrinsic
    /**
     * - The partner type.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Sidewalk`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-partnertype */
    PartnerType?: string | Intrinsic
    /**
     * - The Sidewalk account credentials.
     * - _Required_: No
     * - _Type_: [SidewalkAccountInfo](./aws-properties-iotwireless-partneraccount-sidewalkaccountinfo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalk */
    Sidewalk?: SidewalkAccountInfo
    /**
     * - Information about a Sidewalk account.
     * - _Required_: No
     * - _Type_: [SidewalkAccountInfoWithFingerprint](./aws-properties-iotwireless-partneraccount-sidewalkaccountinfowithfingerprint.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkresponse */
    SidewalkResponse?: SidewalkAccountInfoWithFingerprint
    /**
     * - Sidewalk update.
     * - _Required_: No
     * - _Type_: [SidewalkUpdateAccount](./aws-properties-iotwireless-partneraccount-sidewalkupdateaccount.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-sidewalkupdate */
    SidewalkUpdate?: SidewalkUpdateAccount
    /**
     * - The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotwireless-partneraccount-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-partneraccount.html#cfn-iotwireless-partneraccount-tags */
    Tags?: Tag[]
  }
}
