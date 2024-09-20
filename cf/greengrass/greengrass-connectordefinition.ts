import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * You can use the Resource Tags property to apply tags to resources, which can help you identify and categorize those resources. You can tag only resources for which AWS CloudFormation supports tagging. For information about which resources you can tag with CloudFormation, see the individual resources in [AWS resource and property types reference](./aws-template-resource-type-ref.html).
 * ###### Note
 *
 * Tagging implementations might vary by resource. For example, `AWS::AutoScaling::AutoScalingGroup` provides an additional, required `PropagateAtLaunch` property as part of its tagging scheme.
 * In addition to any tags you define, CloudFormation automatically creates the following stack-level tags with the prefix `aws:`:
 * *   `` aws:cloudformation:`logical-id` ``
 *
 * *   `` aws:cloudformation:`stack-id` ``
 *
 * *   `` aws:cloudformation:`stack-name` ``
 * The `aws:` prefix is reserved for AWS use. This prefix is case-insensitive. If you use this prefix in the `Key` or `Value` property, you can't update or delete the tag. Tags with this prefix don't count toward the number of tags per resource.
 * Propagation of stack-level tags to resources, including automatically created tags, can vary by resource. For example, tags aren't propagated to Amazon EBS volumes that are created from block device mappings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-resource-tags-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-resource-tags-value */
  Value: string | Intrinsic
}

/**
 * Connectors are modules that provide built-in integration with local infrastructure, device protocols, AWS, and other cloud services. For more information, see [Integrate with Services and Protocols Using Greengrass Connectors](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, the `Connectors` property of the [`ConnectorDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connectordefinitionversion.html) property type contains a list of `Connector` property types.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html */

export interface Connector {
  /**
   * - The Amazon Resource Name (ARN) of the connector.
   * - For more information about connectors provided by AWS, see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors-list.html).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-connector-connectorarn */
  ConnectorArn: string | Intrinsic
  /**
   * - A descriptive or arbitrary ID for the connector. This value must be unique within the connector definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-connector-id */
  Id: string | Intrinsic
  /**
   * - The parameters or configuration used by the connector.
   * - For more information about connectors provided by AWS, see [Greengrass Connectors Provided by AWS](https://docs.aws.amazon.com/greengrass/v1/developerguide/connectors-list.html).
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-connector-parameters */
  Parameters?: any | Intrinsic
}

/**
 * A connector definition version contains a list of connectors.
 * ###### Note
 *
 * After you create a connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * In an AWS CloudFormation template, `ConnectorDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::ConnectorDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html */

export interface ConnectorDefinitionVersion {
  /**
   * - The connectors in this version. Only one instance of a given connector can be added to a connector definition version at a time.
   * - _Required_: Yes
   * - _Type_: Array of [Connector](./aws-properties-greengrass-connectordefinition-connector.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-connectordefinitionversion-connectors */
  Connectors: Connector[]
}

/**
 * The `AWS::Greengrass::ConnectorDefinition` resource represents a connector definition for AWS IoT Greengrass. Connector definitions are used to organize your connector definition versions.
 * Connector definitions can reference multiple connector definition versions. All connector definition versions must be associated with a connector definition. Each connector definition version can contain one or more connectors.
 * ###### Note
 *
 * When you create a connector definition, you can optionally include an initial connector definition version. To associate a connector definition version later, create an [`AWS::Greengrass::ConnectorDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinitionversion.html) resource and specify the ID of this connector definition.
 *
 * After you create the connector definition version that contains the connectors you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html */

export interface GreengrassConnectorDefinition extends ResourceAttributes {
  Type: 'AWS::Greengrass::ConnectorDefinition'
  Properties: {
    /**
     * - The connector definition version to include when the connector definition is created. A connector definition version contains a list of [`connector`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-connectordefinition-connector.html) property types.
     * - _Required_: No
     * - _Type_: [ConnectorDefinitionVersion](./aws-properties-greengrass-connectordefinition-connectordefinitionversion.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-initialversion */
    InitialVersion?: ConnectorDefinitionVersion
    /**
     * - The name of the connector definition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-name */
    Name: string | Intrinsic
    /**
     * - Application-specific metadata to attach to the connector definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
     * - This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     * - _Required_: No
     * - _Type_: Array of [`Tag`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-connectordefinition.html#cfn-greengrass-connectordefinition-tags */
    Tags?: Tag[]
  }
}
