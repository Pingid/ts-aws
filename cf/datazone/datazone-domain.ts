import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The single sign-on details in Amazon DataZone.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html */

export interface SingleSignOn {
  /**
   * - The type of single sign-on in Amazon DataZone.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `IAM_IDC | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-singlesignon-type */
  Type?: string | Intrinsic
  /**
   * - The single sign-on user assignment in Amazon DataZone.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTOMATIC | MANUAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-singlesignon-userassignment */
  UserAssignment?: string | Intrinsic
}

/**
 * The tags specified for the Amazon DataZone domain.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::DataZone::Domain`resource specifies an Amazon DataZone domain. You can use domains to organize your assets, users, and their projects.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html */

export interface DataZoneDomain extends ResourceAttributes {
  Type: 'AWS::DataZone::Domain'
  Properties: {
    /**
     * - The description of the Amazon DataZone domain.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-description */
    Description?: string | Intrinsic
    /**
     * - The domain execution role that is created when an Amazon DataZone domain is created. The domain execution role is created in the AWS account that houses the Amazon DataZone domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-domainexecutionrole */
    DomainExecutionRole: string | Intrinsic
    /**
     * - The identifier of the AWS Key Management Service (KMS) key that is used to encrypt the Amazon DataZone domain, metadata, and reporting data.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):kms:[a-zA-Z0-9-]*:[0-9]{12}:key/[a-zA-Z0-9-]{36}$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-kmskeyidentifier */
    KmsKeyIdentifier?: string | Intrinsic
    /**
     * - The name of the Amazon DataZone domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-name */
    Name: string | Intrinsic
    /**
     * - The single sign-on details in Amazon DataZone.
     * - _Required_: No
     * - _Type_: [SingleSignOn](./aws-properties-datazone-domain-singlesignon.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-singlesignon */
    SingleSignOn?: SingleSignOn
    /**
     * - The tags specified for the Amazon DataZone domain.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-datazone-domain-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domain.html#cfn-datazone-domain-tags */
    Tags?: Tag[]
  }
}
