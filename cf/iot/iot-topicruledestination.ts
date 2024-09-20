import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * HTTP URL destination properties.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html */

export interface HttpUrlDestinationSummary {
  /**
   * - The URL used to confirm the HTTP topic rule destination URL.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-httpurldestinationsummary-confirmationurl */
  ConfirmationUrl?: string | Intrinsic
}

/**
 * The properties of a virtual private cloud (VPC) destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html */

export interface VpcDestinationProperties {
  /**
   * - The ARN of a role that has permission to create and attach to elastic network interfaces (ENIs).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcdestinationproperties-rolearn */
  RoleArn?: string | Intrinsic
  /**
   * - The security groups of the VPC destination.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcdestinationproperties-securitygroups */
  SecurityGroups?: (string | Intrinsic)[]
  /**
   * - The subnet IDs of the VPC destination.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcdestinationproperties-subnetids */
  SubnetIds?: (string | Intrinsic)[]
  /**
   * - The ID of the VPC.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcdestinationproperties-vpcid */
  VpcId?: string | Intrinsic
}

/**
 * A topic rule destination.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html */

export interface IoTTopicRuleDestination extends ResourceAttributes {
  Type: 'AWS::IoT::TopicRuleDestination'
  Properties: {
    /**
     * - Properties of the HTTP URL.
     * - _Required_: No
     * - _Type_: [HttpUrlDestinationSummary](./aws-properties-iot-topicruledestination-httpurldestinationsummary.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-httpurlproperties */
    HttpUrlProperties?: HttpUrlDestinationSummary
    /**
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | IN_PROGRESS | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-status */
    Status?: string | Intrinsic
    /**
     * - Properties of the virtual private cloud (VPC) connection.
     * - _Required_: No
     * - _Type_: [VpcDestinationProperties](./aws-properties-iot-topicruledestination-vpcdestinationproperties.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-topicruledestination.html#cfn-iot-topicruledestination-vpcproperties */
    VpcProperties?: VpcDestinationProperties
  }
}
