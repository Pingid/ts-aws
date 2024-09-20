import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The IP rules of the IP access settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html */

export interface IpRule {
  /**
   * - The description of the IP rule.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^.+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-iprule-description */
  Description?: string | Intrinsic
  /**
   * - The IP range of the IP rule. This can either be a single IP address or a range using CIDR notation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(?:/([0-9]|[12][0-9]|3[0-2])|)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-iprule-iprange */
  IpRange: string | Intrinsic
}

/**
 * The tag.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-tag-value */
  Value: string | Intrinsic
}

/**
 * This resource specifies IP access settings that can be associated with a web portal. For more information, see [Set up IP access controls (optional)](https://docs.aws.amazon.com/workspaces-web/latest/adminguide/ip-access-controls.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html */

export interface WorkSpacesWebIpAccessSettings extends ResourceAttributes {
  Type: 'AWS::WorkSpacesWeb::IpAccessSettings'
  Properties: {
    /**
     * - Additional encryption context of the IP access settings.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[\s\S]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `131072`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-additionalencryptioncontext */
    AdditionalEncryptionContext?: Record<string, string | Intrinsic>
    /**
     * - The custom managed key of the IP access settings.
     * - _Pattern_: `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[\w+=\/,.@-]+:kms:[a-zA-Z0-9\-]*:[a-zA-Z0-9]{1,12}:key\/[a-zA-Z0-9-]+$`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-customermanagedkey */
    CustomerManagedKey?: string | Intrinsic
    /**
     * - The description of the IP access settings.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-description */
    Description?: string | Intrinsic
    /**
     * - The display name of the IP access settings.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-displayname */
    DisplayName?: string | Intrinsic
    /**
     * - The IP rules of the IP access settings.
     * - _Required_: Yes
     * - _Type_: Array of [IpRule](./aws-properties-workspacesweb-ipaccesssettings-iprule.html)
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-iprules */
    IpRules: IpRule[]
    /**
     * - The tags to add to the IP access settings resource. A tag is a key-value pair.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-workspacesweb-ipaccesssettings-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-workspacesweb-ipaccesssettings.html#cfn-workspacesweb-ipaccesssettings-tags */
    Tags?: Tag[]
  }
}
