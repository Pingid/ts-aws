import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `S3` property type specifies information about the Amazon S3 bucket that contains the code to be committed to the new repository.
 * `S3` is a property of the `AWS::CodeStar::GitHubRepository` resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html */

export interface S3 {
    /**
     * - The name of the Amazon S3 bucket that contains the ZIP file with the content to be committed to the new repository.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-s3-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - The S3 object key or file name for the ZIP file.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-s3-key */
    "Key": string | Intrinsic;
    /**
     * - The object version of the ZIP file, if versioning is enabled for the Amazon S3 bucket.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-s3-objectversion */
    "ObjectVersion"?: string | Intrinsic;
}

/**
 * The `Code` property type specifies information about code to be committed.
 * `Code` is a property of the `AWS::CodeStar::GitHubRepository` resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html */

export interface Code {
    /**
     * - Information about the Amazon S3 bucket that contains a ZIP file of code to be committed to the repository.
     * - _Required_: Yes
     * - _Type_: [S3](./aws-properties-codestar-githubrepository-s3.html)
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-code-s3 */
    "S3": S3;
}

/**
 * The `AWS::CodeStar::GitHubRepository` resource creates a GitHub repository where users can store source code for use with AWS workflows. You must provide a location for the source code ZIP file in the AWS CloudFormation template, so the code can be uploaded to the created repository. You must have created a personal access token in GitHub to provide in the AWS CloudFormation template. AWS uses this token to connect to GitHub on your behalf.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html */

export interface CodeStarGitHubRepository extends ResourceAttributes {
    "Type": "AWS::CodeStar::GitHubRepository";
    "Properties": {
        /**
         * - Information about code to be committed to a repository after it is created in an AWS CloudFormation stack.
         * - _Required_: No
         * - _Type_: [Code](./aws-properties-codestar-githubrepository-code.html)
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-code */
        "Code"?: Code;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-connectionarn */
        "ConnectionArn"?: string | Intrinsic;
        /**
         * - Indicates whether to enable issues for the GitHub repository. You can use GitHub issues to track information and bugs for your repository.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-enableissues */
        "EnableIssues"?: boolean | Intrinsic;
        /**
         * - Indicates whether the GitHub repository is a private repository. If so, you choose who can see and commit to this repository.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-isprivate */
        "IsPrivate"?: boolean | Intrinsic;
        /**
         * - The GitHub user's personal access token for the GitHub repository.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositoryaccesstoken */
        "RepositoryAccessToken"?: string | Intrinsic;
        /**
         * - A comment or description about the new repository. This description is displayed in GitHub after the repository is created.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositorydescription */
        "RepositoryDescription"?: string | Intrinsic;
        /**
         * - The name of the repository you want to create in GitHub with AWS CloudFormation stack creation.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositoryname */
        "RepositoryName": string | Intrinsic;
        /**
         * - The GitHub user name for the owner of the GitHub repository to be created. If this repository should be owned by a GitHub organization, provide its name.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: Updates are not supported.
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestar-githubrepository.html#cfn-codestar-githubrepository-repositoryowner */
        "RepositoryOwner": string | Intrinsic;
    };
}