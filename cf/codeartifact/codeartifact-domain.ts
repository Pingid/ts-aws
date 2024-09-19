import type { Intrinsic } from '../intrinsic/index.js' /**
 * A tag is a key-value pair that can be used to manage, search for, or filter resources in AWS CodeArtifact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html */

export interface Tag {
  /**
   * - The tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::CodeArtifact::Domain` resource creates an AWS CodeArtifact domain. CodeArtifact _domains_ make it easier to manage multiple repositories across an organization. You can use a domain to apply permissions across many repositories owned by different AWS accounts. For more information about domains, see the [Domain concepts information](https://docs.aws.amazon.com/codeartifact/latest/ug/codeartifact-concepts.html#welcome-concepts-domain) in the _CodeArtifact User Guide_. For more information about the `CreateDomain` API, see [CreateDomain](https://docs.aws.amazon.com/codeartifact/latest/APIReference/API_CreateDomain.html) in the _CodeArtifact API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html */

export interface CodeArtifactDomain {
  Type: 'AWS::CodeArtifact::Domain'
  Properties: {
    /**
     * - A string that specifies the name of the requested domain.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([a-z][a-z0-9\-]{0,48}[a-z0-9])$`
     * - _Minimum_: `2`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-domainname */
    DomainName: string | Intrinsic
    /**
     * - The key used to encrypt the domain.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `\S+`
     * - _Minimum_: `1`
     * - _Maximum_: `1011`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-encryptionkey */
    EncryptionKey?: string | Intrinsic
    /**
     * - The document that defines the resource policy that is set on a domain.
     * - _Required_: No
     * - _Type_: Json
     * - _Minimum_: `2`
     * - _Maximum_: `5120`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-permissionspolicydocument */
    PermissionsPolicyDocument?: any | Intrinsic
    /**
     * - A list of tags to be applied to the domain.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-codeartifact-domain-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeartifact-domain.html#cfn-codeartifact-domain-tags */
    Tags?: Tag[]
  }
}
