import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::CodeGuruReviewer::RepositoryAssociation](./aws-resource-codegurureviewer-repositoryassociation.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-tag-value */
  Value: string | Intrinsic
}

/**
 * This resource configures how Amazon CodeGuru Reviewer retrieves the source code to be reviewed. You can use an AWS CloudFormation template to create an association with the following repository types:
 * *   AWS CodeCommit - For more information, see [Create an AWS CodeCommit repository association](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/create-codecommit-association.html) in the _Amazon CodeGuru Reviewer User Guide_.
 *
 * *   Bitbucket - For more information, see [Create a Bitbucket repository association](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/create-bitbucket-association.html) in the _Amazon CodeGuru Reviewer User Guide_.
 *
 * *   GitHub Enterprise Server - For more information, see [Create a GitHub Enterprise Server repository association](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/create-github-enterprise-association.html) in the _Amazon CodeGuru Reviewer User Guide_.
 *
 * *   S3Bucket - For more information, see [Create code reviews with GitHub Actions](https://docs.aws.amazon.com/codeguru/latest/reviewer-ug/working-with-cicd.html) in the _Amazon CodeGuru Reviewer User Guide_.
 * ###### Note
 *
 * You cannot use a CloudFormation template to create an association with a GitHub repository.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html */

export interface CodeGuruReviewerRepositoryAssociation extends ResourceAttributes {
  Type: 'AWS::CodeGuruReviewer::RepositoryAssociation'
  Properties: {
    /**
     * - The name of the bucket. This is required for your S3Bucket repository. The name must start with the prefix `codeguru-reviewer-*`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S(.*\S)?$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-bucketname */
    BucketName?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of an AWS CodeStar Connections connection. Its format is `arn:aws:codestar-connections:region-id:aws-account_id:connection/connection-id`. For more information, see [Connection](https://docs.aws.amazon.com/codestar-connections/latest/APIReference/API_Connection.html) in the _AWS CodeStar Connections API Reference_.
     * - `ConnectionArn` must be specified for Bitbucket and GitHub Enterprise Server repositories. It has no effect if it is specified for an AWS CodeCommit repository.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-connectionarn */
    ConnectionArn?: string | Intrinsic
    /**
     * - The name of the repository.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\S[\w.-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-name */
    Name: string | Intrinsic
    /**
     * - The owner of the repository. For a GitHub Enterprise Server or Bitbucket repository, this is the username for the account that owns the repository.
     * - `Owner` must be specified for Bitbucket and GitHub Enterprise Server repositories. It has no effect if it is specified for an AWS CodeCommit repository.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S(.*\S)?$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-owner */
    Owner?: string | Intrinsic
    /**
     * - An array of key-value pairs used to tag an associated repository. A tag is a custom attribute label with two parts:
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-codegurureviewer-repositoryassociation-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-tags */
    Tags?: Tag[]
    /**
     * - The type of repository that contains the source code to be reviewed. The valid values are:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CodeCommit | Bitbucket | GitHubEnterpriseServer | S3Bucket`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codegurureviewer-repositoryassociation.html#cfn-codegurureviewer-repositoryassociation-type */
    Type: string | Intrinsic
  }
}
