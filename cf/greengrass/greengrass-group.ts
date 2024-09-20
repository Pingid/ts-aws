import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A group version in AWS IoT Greengrass, which references of a core definition version, device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device. The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
 * In an AWS CloudFormation template, `GroupVersion` is the property type of the `InitialVersion` property in the [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html) resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html */

export interface GroupVersion {
  /**
   * - The Amazon Resource Name (ARN) of the connector definition version that contains the connectors you want to deploy with the group version.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-groupversion-connectordefinitionversionarn */
  ConnectorDefinitionVersionArn?: string | Intrinsic
  /**
   * - The ARN of the core definition version that contains the core you want to deploy with the group version. Currently, the core definition version can contain only one core.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-groupversion-coredefinitionversionarn */
  CoreDefinitionVersionArn?: string | Intrinsic
  /**
   * - The ARN of the device definition version that contains the devices you want to deploy with the group version.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-groupversion-devicedefinitionversionarn */
  DeviceDefinitionVersionArn?: string | Intrinsic
  /**
   * - The ARN of the function definition version that contains the functions you want to deploy with the group version.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-groupversion-functiondefinitionversionarn */
  FunctionDefinitionVersionArn?: string | Intrinsic
  /**
   * - The ARN of the logger definition version that contains the loggers you want to deploy with the group version.
   * -
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-groupversion-loggerdefinitionversionarn */
  LoggerDefinitionVersionArn?: string | Intrinsic
  /**
   * - The ARN of the resource definition version that contains the resources you want to deploy with the group version.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-groupversion-resourcedefinitionversionarn */
  ResourceDefinitionVersionArn?: string | Intrinsic
  /**
   * - The ARN of the subscription definition version that contains the subscriptions you want to deploy with the group version.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-groupversion-subscriptiondefinitionversionarn */
  SubscriptionDefinitionVersionArn?: string | Intrinsic
}

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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-resource-tags-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-resource-tags-value */
  Value: string | Intrinsic
}

/**
 * AWS IoT Greengrass seamlessly extends AWS to edge devices so they can act locally on the data they generate, while still using the cloud for management, analytics, and durable storage. With AWS IoT Greengrass, connected devices can run AWS Lambda functions, execute predictions based on machine learning models, keep device data in sync, and communicate with other devices securely – even when not connected to the internet. For more information, see the [AWS IoT Greengrass Version 1 Developer Guide](https://docs.aws.amazon.com/greengrass/v1/developerguide/what-is-gg.html) .
 * ###### Note
 *
 * For AWS Region support, see [AWS CloudFormation Support for AWS IoT Greengrass](https://docs.aws.amazon.com/greengrass/v1/developerguide/cloudformation-support.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * The `AWS::Greengrass::Group` resource represents a group in AWS IoT Greengrass. In the AWS IoT Greengrass API, groups are used to organize your group versions.
 * Groups can reference multiple group versions. All group versions must be associated with a group. A group version references a device definition version, subscription definition version, and other version types that contain the components you want to deploy to a Greengrass core device.
 * To deploy a group version, the group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
 * ###### Note
 *
 * When you create a group, you can optionally include an initial group version. To associate a group version later, create a [`AWS::Greengrass::GroupVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-groupversion.html) resource and specify the ID of this group.
 *
 * To change group components (such as devices, subscriptions, or functions), you must create new versions. This is because versions are immutable. For example, to add a function, you create a function definition version that contains the new function (and all other functions that you want to deploy). Then you create a group version that references the new function definition version (and all other version types that you want to deploy).
 * **Deploying a Group Version**
 * After you create the group version in your AWS CloudFormation template, you can deploy it using the [**aws greengrass create-deployment**](https://docs.aws.amazon.com/greengrass/v1/apireference/createdeployment-post.html) command in the AWS CLI or from the **Greengrass** node in the AWS IoT console. To deploy a group version, you must have a Greengrass service role associated with your AWS account. For more information, see [AWS CloudFormation Support for AWS IoT Greengrass](https://docs.aws.amazon.com/greengrass/v1/developerguide/cloudformation-support.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html */

export interface GreengrassGroup extends ResourceAttributes {
  Type: 'AWS::Greengrass::Group'
  Properties: {
    /**
     * - The group version to include when the group is created. A group version references the Amazon Resource Name (ARN) of a core definition version, device definition version, subscription definition version, and other version types. The group version must reference a core definition version that contains one core. Other version types are optionally included, depending on your business need.
     * - _Required_: No
     * - _Type_: [GroupVersion](./aws-properties-greengrass-group-groupversion.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-initialversion */
    InitialVersion?: GroupVersion
    /**
     * - The name of the group.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-name */
    Name: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the IAM role attached to the group. This role contains the permissions that Lambda functions and connectors use to interact with other AWS services.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - Application-specific metadata to attach to the group. You can use tags in IAM policies to control access to AWS IoT Greengrass resources. You can also use tags to categorize your resources. For more information, see [Tagging Your AWS IoT Greengrass Resources](https://docs.aws.amazon.com/greengrass/v1/developerguide/tagging.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
     * - This `Json` property type is processed as a map of key-value pairs. It uses the following format, which is different from most `Tags` implementations in AWS CloudFormation templates.
     * - _Required_: No
     * - _Type_: Array of [`Tag`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html#cfn-greengrass-group-tags */
    Tags?: Tag[]
  }
}
