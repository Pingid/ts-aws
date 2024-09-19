import type { Intrinsic } from '../intrinsic/index.js' /**
 * Allow or deny permissions for an Active Directory group to enroll or autoenroll certificates for a template.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html */

export interface AccessRights {
  /**
   * - Allow or deny an Active Directory group from autoenrolling certificates issued against a template. The Active Directory group must be allowed to enroll to allow autoenrollment
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ALLOW | DENY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-accessrights-autoenroll */
  AutoEnroll?: string | Intrinsic
  /**
   * - Allow or deny an Active Directory group from enrolling certificates issued against a template.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ALLOW | DENY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-accessrights-enroll */
  Enroll?: string | Intrinsic
}

/**
 * Create a group access control entry. Allow or deny Active Directory groups from enrolling and/or autoenrolling with the template based on the group security identifiers (SIDs).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html */

export interface PCAConnectorADTemplateGroupAccessControlEntry {
  Type: 'AWS::PCAConnectorAD::TemplateGroupAccessControlEntry'
  Properties: {
    /**
     * - Permissions to allow or deny an Active Directory group to enroll or autoenroll certificates issued against a template.
     * - _Required_: Yes
     * - _Type_: [AccessRights](./aws-properties-pcaconnectorad-templategroupaccesscontrolentry-accessrights.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-accessrights */
    AccessRights: AccessRights
    /**
     * - Name of the Active Directory group. This name does not need to match the group name in Active Directory.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\x20-\x7E]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-groupdisplayname */
    GroupDisplayName: string | Intrinsic
    /**
     * - Security identifier (SID) of the group object from Active Directory. The SID starts with "S-".
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^S-[0-9]-([0-9]+-){1,14}[0-9]+$`
     * - _Minimum_: `7`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-groupsecurityidentifier */
    GroupSecurityIdentifier?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) that was returned when you called [CreateTemplate](https://docs.aws.amazon.com/pca-connector-ad/latest/APIReference/API_CreateTemplate.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:[\w-]+:pca-connector-ad:[\w-]+:[0-9]+:connector(\/[\w-]+)\/template(\/[\w-]+)$`
     * - _Minimum_: `5`
     * - _Maximum_: `200`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-templategroupaccesscontrolentry.html#cfn-pcaconnectorad-templategroupaccesscontrolentry-templatearn */
    TemplateArn?: string | Intrinsic
  }
}
