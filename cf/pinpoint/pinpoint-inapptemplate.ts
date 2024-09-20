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
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-resource-tags-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, `_`, `.`, `/`, `=`, `+`, and `-`.
   * - _Required_: Yes
   * - _Type_: String
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-resource-tags-value */
  Value: string | Intrinsic
}

/**
 * Specifies the configuration of the main body text of the in-app message.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface BodyConfig {
  /**
   * - The text alignment of the main body text of the message. Acceptable values: `LEFT`, `CENTER`, `RIGHT`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LEFT | CENTER | RIGHT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-bodyconfig-alignment */
  Alignment?: string | Intrinsic
  /**
   * - The main body text of the message.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-bodyconfig-body */
  Body?: string | Intrinsic
  /**
   * - The color of the body text, expressed as a hex color code (such as #000000 for black).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-bodyconfig-textcolor */
  TextColor?: string | Intrinsic
}

/**
 * Specifies the configuration and content of the header or title text of the in-app message.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface HeaderConfig {
  /**
   * - The text alignment of the title of the message. Acceptable values: `LEFT`, `CENTER`, `RIGHT`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LEFT | CENTER | RIGHT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-headerconfig-alignment */
  Alignment?: string | Intrinsic
  /**
   * - The title text of the in-app message.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-headerconfig-header */
  Header?: string | Intrinsic
  /**
   * - The color of the title text, expressed as a hex color code (such as #000000 for black).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-headerconfig-textcolor */
  TextColor?: string | Intrinsic
}

/**
 * Specifies the configuration of a button with settings that are specific to a certain device type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface OverrideButtonConfiguration {
  /**
   * - The action that occurs when a recipient chooses a button in an in-app message. You can specify one of the following:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LINK | DEEP_LINK | CLOSE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-overridebuttonconfiguration-buttonaction */
  ButtonAction?: string | Intrinsic
  /**
   * - The destination (such as a URL) for a button.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-overridebuttonconfiguration-link */
  Link?: string | Intrinsic
}

/**
 * Specifies the default behavior of a button that appears in an in-app message. You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface DefaultButtonConfiguration {
  /**
   * - The background color of a button, expressed as a hex color code (such as #000000 for black).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-backgroundcolor */
  BackgroundColor?: string | Intrinsic
  /**
   * - The border radius of a button.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-borderradius */
  BorderRadius?: number | Intrinsic
  /**
   * - The action that occurs when a recipient chooses a button in an in-app message. You can specify one of the following:
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LINK | DEEP_LINK | CLOSE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-buttonaction */
  ButtonAction?: string | Intrinsic
  /**
   * - The destination (such as a URL) for a button.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-link */
  Link?: string | Intrinsic
  /**
   * - The text that appears on a button in an in-app message.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-text */
  Text?: string | Intrinsic
  /**
   * - The color of the body text in a button, expressed as a hex color code (such as #000000 for black).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-defaultbuttonconfiguration-textcolor */
  TextColor?: string | Intrinsic
}

/**
 * Specifies the behavior of buttons that appear in an in-app message template.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface ButtonConfig {
  /**
   * - Optional button configuration to use for in-app messages sent to Android devices. This button configuration overrides the default button configuration.
   * - _Required_: No
   * - _Type_: [OverrideButtonConfiguration](./aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-buttonconfig-android */
  Android?: OverrideButtonConfiguration
  /**
   * - Specifies the default behavior of a button that appears in an in-app message. You can optionally add button configurations that specifically apply to iOS, Android, or web browser users.
   * - _Required_: No
   * - _Type_: [DefaultButtonConfiguration](./aws-properties-pinpoint-inapptemplate-defaultbuttonconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-buttonconfig-defaultconfig */
  DefaultConfig?: DefaultButtonConfiguration
  /**
   * - Optional button configuration to use for in-app messages sent to iOS devices. This button configuration overrides the default button configuration.
   * - _Required_: No
   * - _Type_: [OverrideButtonConfiguration](./aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-buttonconfig-ios */
  IOS?: OverrideButtonConfiguration
  /**
   * - Optional button configuration to use for in-app messages sent to web applications. This button configuration overrides the default button configuration.
   * - _Required_: No
   * - _Type_: [OverrideButtonConfiguration](./aws-properties-pinpoint-inapptemplate-overridebuttonconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-buttonconfig-web */
  Web?: OverrideButtonConfiguration
}

/**
 * Specifies the configuration of an in-app message, including its header, body, buttons, colors, and images.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface InAppMessageContent {
  /**
   * - The background color for an in-app message banner, expressed as a hex color code (such as #000000 for black).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-inappmessagecontent-backgroundcolor */
  BackgroundColor?: string | Intrinsic
  /**
   * - An object that contains configuration information about the header or title text of the in-app message.
   * - _Required_: No
   * - _Type_: [BodyConfig](./aws-properties-pinpoint-inapptemplate-bodyconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-inappmessagecontent-bodyconfig */
  BodyConfig?: BodyConfig
  /**
   * - An object that contains configuration information about the header or title text of the in-app message.
   * - _Required_: No
   * - _Type_: [HeaderConfig](./aws-properties-pinpoint-inapptemplate-headerconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-inappmessagecontent-headerconfig */
  HeaderConfig?: HeaderConfig
  /**
   * - The URL of the image that appears on an in-app message banner.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-inappmessagecontent-imageurl */
  ImageUrl?: string | Intrinsic
  /**
   * - An object that contains configuration information about the primary button in an in-app message.
   * - _Required_: No
   * - _Type_: [ButtonConfig](./aws-properties-pinpoint-inapptemplate-buttonconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-inappmessagecontent-primarybtn */
  PrimaryBtn?: ButtonConfig
  /**
   * - An object that contains configuration information about the secondary button in an in-app message.
   * - _Required_: No
   * - _Type_: [ButtonConfig](./aws-properties-pinpoint-inapptemplate-buttonconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-inappmessagecontent-secondarybtn */
  SecondaryBtn?: ButtonConfig
}

/**
 * Creates a message template that you can use to send in-app messages. A message template is a set of content and settings that you can define, save, and reuse in messages for any of your Amazon Pinpoint applications. The In-App channel is unavailable in AWS GovCloud (US).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html */

export interface PinpointInAppTemplate extends ResourceAttributes {
  Type: 'AWS::Pinpoint::InAppTemplate'
  Properties: {
    /**
     * - An object that contains information about the content of an in-app message, including its title and body text, text colors, background colors, images, buttons, and behaviors.
     * - _Required_: No
     * - _Type_: Array of [InAppMessageContent](./aws-properties-pinpoint-inapptemplate-inappmessagecontent.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-content */
    Content?: InAppMessageContent[]
    /**
     * - Custom data, in the form of key-value pairs, that is included in an in-app messaging payload.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-customconfig */
    CustomConfig?: any | Intrinsic
    /**
     * - A string that determines the appearance of the in-app message. You can specify one of the following:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `BOTTOM_BANNER | TOP_BANNER | OVERLAYS | MOBILE_FEED | MIDDLE_BANNER | CAROUSEL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-layout */
    Layout?: string | Intrinsic
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [`Tag`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-tags */
    Tags?: Tag[]
    /**
     * - An optional description of the in-app template.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-templatedescription */
    TemplateDescription?: string | Intrinsic
    /**
     * - The name of the in-app message template.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pinpoint-inapptemplate.html#cfn-pinpoint-inapptemplate-templatename */
    TemplateName: string | Intrinsic
  }
}
