import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Structure that contains payloadVersion and targetArn. Provisioning hooks can be used when fleet provisioning to validate device parameters before allowing the device to be provisioned.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html */

export interface ProvisioningHook {
  /**
   * - The payload that was sent to the target function. The valid payload is `"2020-04-01"`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-provisioninghook-payloadversion */
  PayloadVersion?: string | Intrinsic
  /**
   * - The ARN of the target function.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-provisioninghook-targetarn */
  TargetArn?: string | Intrinsic
}

/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^([\p{L}\p{Z}\p{N}_.:/=+\-@]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-tag-value */
  Value: string | Intrinsic
}

/**
 * Creates a fleet provisioning template.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html */

export interface IoTProvisioningTemplate extends ResourceAttributes {
  Type: 'AWS::IoT::ProvisioningTemplate'
  Properties: {
    /**
     * - The description of the fleet provisioning template.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-description */
    Description?: string | Intrinsic
    /**
     * - True to enable the fleet provisioning template, otherwise false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-enabled */
    Enabled?: boolean | Intrinsic
    /**
     * - Creates a pre-provisioning hook template.
     * - _Required_: No
     * - _Type_: [ProvisioningHook](./aws-properties-iot-provisioningtemplate-provisioninghook.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-preprovisioninghook */
    PreProvisioningHook?: ProvisioningHook
    /**
     * - The role ARN for the role associated with the fleet provisioning template. This IoT role grants permission to provision a device.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-provisioningrolearn */
    ProvisioningRoleArn: string | Intrinsic
    /**
     * - Metadata that can be used to manage the fleet provisioning template.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iot-provisioningtemplate-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-tags */
    Tags?: Tag[]
    /**
     * - The JSON formatted contents of the fleet provisioning template version.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-templatebody */
    TemplateBody: string | Intrinsic
    /**
     * - The name of the fleet provisioning template.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9A-Za-z_-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `36`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-templatename */
    TemplateName?: string | Intrinsic
    /**
     * - The type of the provisioning template.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FLEET_PROVISIONING | JITP`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-provisioningtemplate.html#cfn-iot-provisioningtemplate-templatetype */
    TemplateType?: string | Intrinsic
  }
}
