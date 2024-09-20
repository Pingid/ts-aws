import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A tag is a key-value pair that is used to manage the resource.
 * This tag is available for use by AWS services that support tags.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-tag-value */
  Value: string | Intrinsic
}

/**
 * A resource that is used to connect third-party source providers with services like CodePipeline.
 * Note: A connection created through AWS CloudFormation, the CLI, or the SDK is in \`PENDING\` status by default. You can make its status \`AVAILABLE\` by updating the connection in the console.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html */

export interface CodeConnectionsConnection extends ResourceAttributes {
  Type: 'AWS::CodeConnections::Connection'
  Properties: {
    /**
     * - The name of the connection. Connection names must be unique in an AWS account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `32`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-connectionname */
    ConnectionName: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the host associated with the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-hostarn */
    HostArn?: string | Intrinsic
    /**
     * - The name of the external provider where your third-party code repository is configured.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Bitbucket | GitHub | GitHubEnterpriseServer | GitLab | GitLabSelfManaged`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-providertype */
    ProviderType?: string | Intrinsic
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-codeconnections-connection-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codeconnections-connection.html#cfn-codeconnections-connection-tags */
    Tags?: Tag[]
  }
}
