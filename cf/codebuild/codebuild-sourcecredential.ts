import type { Intrinsic } from '../intrinsic/index.js' /**
 * Information about the credentials for a GitHub, GitHub Enterprise, or Bitbucket repository. We strongly recommend that you use AWS Secrets Manager to store your credentials. If you use Secrets Manager, you must have secrets in your secrets manager. For more information, see [Using Dynamic References to Specify Template Values](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html */

export interface CodeBuildSourceCredential {
  Type: 'AWS::CodeBuild::SourceCredential'
  Properties: {
    /**
     * - The type of authentication used by the credentials. Valid options are OAUTH, BASIC\_AUTH, PERSONAL\_ACCESS\_TOKEN, CODECONNECTIONS, or SECRETS\_MANAGER.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `OAUTH | BASIC_AUTH | PERSONAL_ACCESS_TOKEN | CODECONNECTIONS | SECRETS_MANAGER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-authtype */
    AuthType: string | Intrinsic
    /**
     * - The type of source provider. The valid options are GITHUB, GITHUB\_ENTERPRISE, GITLAB, GITLAB\_SELF\_MANAGED, or BITBUCKET.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GITHUB | BITBUCKET | GITHUB_ENTERPRISE | GITLAB | GITLAB_SELF_MANAGED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-servertype */
    ServerType: string | Intrinsic
    /**
     * - For GitHub or GitHub Enterprise, this is the personal access token. For Bitbucket, this is either the access token or the app password. For the `authType` CODECONNECTIONS, this is the `connectionArn`. For the `authType` SECRETS\_MANAGER, this is the `secretArn`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-token */
    Token: string | Intrinsic
    /**
     * - The Bitbucket username when the `authType` is BASIC\_AUTH. This parameter is not valid for other types of source providers or connections.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-sourcecredential.html#cfn-codebuild-sourcecredential-username */
    Username?: string | Intrinsic
  }
}
