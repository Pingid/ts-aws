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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-resource-tags-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-resource-tags-value */
  Value: string | Intrinsic
}

/**
 * A core is an AWS IoT device that runs the AWS IoT Greengrass core software and manages local processes for a Greengrass group. For more information, see [What Is AWS IoT Greengrass?](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, the `Cores` property of the [`CoreDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-coredefinitionversion.html) property type contains a list of `Core` property types. Currently, the list can contain only one core.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html */

export interface Core {
  /**
   * - The Amazon Resource Name (ARN) of the device certificate for the core. This X.509 certificate is used to authenticate the core with AWS IoT and AWS IoT Greengrass services.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-core-certificatearn */
  CertificateArn: string | Intrinsic
  /**
   * - A descriptive or arbitrary ID for the core. This value must be unique within the core definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-core-id */
  Id: string | Intrinsic
  /**
   * - Indicates whether the core's local shadow is synced with the cloud automatically. The default is false.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-core-syncshadow */
  SyncShadow?: boolean | Intrinsic
  /**
   * - The ARN of the core, which is an AWS IoT device (thing).
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-core-thingarn */
  ThingArn: string | Intrinsic
}

/**
 * A core definition version contains a Greengrass [core](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html).
 * ###### Note
 *
 * After you create a core definition version that contains the core you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * In an AWS CloudFormation template, `CoreDefinitionVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::CoreDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html */

export interface CoreDefinitionVersion {
  /**
   * - The Greengrass core in this version. Currently, the `Cores` property for a core definition version can contain only one core.
   * - _Required_: Yes
   * - _Type_: Array of [Core](./aws-properties-greengrass-coredefinition-core.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-coredefinitionversion-cores */
  Cores: Core[]
}

/**
 * The `AWS::Greengrass::CoreDefinition` resource represents a core definition for AWS IoT Greengrass. Core definitions are used to organize your core definition versions.
 * Core definitions can reference multiple core definition versions. All core definition versions must be associated with a core definition. Each core definition version can contain one Greengrass core.
 * ###### Note
 *
 * When you create a core definition, you can optionally include an initial core definition version. To associate a core definition version later, create an [`AWS::Greengrass::CoreDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinitionversion.html) resource and specify the ID of this core definition.
 *
 * After you create the core definition version that contains the core you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html */

export interface GreengrassCoreDefinition extends ResourceAttributes {
  Type: 'AWS::Greengrass::CoreDefinition'
  Properties: {
    /**
     * - The core definition version to include when the core definition is created. Currently, a core definition version can contain only one [`core`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-coredefinition-core.html).
     * - _Required_: No
     * - _Type_: [CoreDefinitionVersion](./aws-properties-greengrass-coredefinition-coredefinitionversion.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-initialversion */
    InitialVersion?: CoreDefinitionVersion
    /**
     * - The name of the core definition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-name */
    Name: string | Intrinsic
    /**
     * - Application-specific metadata to attach to the core definition. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
     * - This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     * - _Required_: No
     * - _Type_: Array of [`Tag`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-coredefinition.html#cfn-greengrass-coredefinition-tags */
    Tags?: Tag[]
  }
}
