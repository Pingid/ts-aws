import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag is a key-value pair that is used to manage the resource.
 * This tag is available for use by AWS services that support tags.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The AWS::CodeStarConnections::Connection resource can be used to connect external source providers with services like AWS CodePipeline.
 * **Note:** A connection created through AWS CloudFormation is in `PENDING` status by default. You can make its status `AVAILABLE` by updating the connection in the console.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html */

export interface CodeStarConnectionsConnection extends ResourceAttributes {
    "Type": "AWS::CodeStarConnections::Connection";
    "Properties": {
        /**
         * - The name of the connection. Connection names must be unique in an AWS account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `32`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-connectionname */
        "ConnectionName": string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the host associated with the connection.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `arn:aws(-[\w]+)*:.+:.+:[0-9]{12}:.+`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-hostarn */
        "HostArn"?: string | Intrinsic;
        /**
         * - The name of the external provider where your third-party code repository is configured.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `Bitbucket | GitHub | GitHubEnterpriseServer | GitLab | GitLabSelfManaged`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-providertype */
        "ProviderType"?: string | Intrinsic;
        /**
         * - Specifies the tags applied to the resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-codestarconnections-connection-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codestarconnections-connection.html#cfn-codestarconnections-connection-tags */
        "Tags"?: Tag[];
    };
}