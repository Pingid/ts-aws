import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::AppSync::DomainNameApiAssociation` resource represents the mapping of your custom domain name to the assigned API URL.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html */

export interface AppSyncDomainNameApiAssociation extends ResourceAttributes {
  Type: 'AWS::AppSync::DomainNameApiAssociation'
  Properties: {
    /**
     * - The API ID.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html#cfn-appsync-domainnameapiassociation-apiid */
    ApiId: string | Intrinsic
    /**
     * - The domain name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(\*[a-z\d-]*\.)?([a-z\d-]+\.)+[a-z\d-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `253`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appsync-domainnameapiassociation.html#cfn-appsync-domainnameapiassociation-domainname */
    DomainName: string | Intrinsic
  }
}
