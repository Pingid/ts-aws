import type { Intrinsic } from '../intrinsic/index.js' /**
 * The tags for the repository to be associated with the repository link.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-tag-value */
  Value: string | Intrinsic
}

/**
 * Information about the repository link resource, such as the repository link ARN, the associated connection ARN, encryption key ARN, and owner ID.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html */

export interface CodeStarConnectionsRepositoryLink {
  Type: 'AWS::CodeStarConnections::RepositoryLink'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the connection associated with the repository link.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):.+:.+:[0-9]{12}:.+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-connectionarn */
    ConnectionArn: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the encryption key for the repository associated with the repository link.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):.+:.+:[0-9]{12}:.+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-encryptionkeyarn */
    EncryptionKeyArn?: string | Intrinsic
    /**
     * - The owner ID for the repository associated with the repository link, such as the owner ID in GitHub.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-za-z0-9_\.-]+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-ownerid */
    OwnerId: string | Intrinsic
    /**
     * - The name of the repository associated with the repository link.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-za-z0-9_\.-]+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-repositoryname */
    RepositoryName: string | Intrinsic
    /**
     * - The tags for the repository to be associated with the repository link.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-codestarconnections-repositorylink-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-repositorylink.html#cfn-codestarconnections-repositorylink-tags */
    Tags?: Tag[]
  }
}
