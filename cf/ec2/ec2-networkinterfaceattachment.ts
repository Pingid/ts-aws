import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * ENA Express is compatible with both TCP and UDP transport protocols. When it's enabled, TCP traffic automatically uses it. However, some UDP-based applications are designed to handle network packets that are out of order, without a need for retransmission, such as live video broadcasting or other near-real-time applications. For UDP traffic, you can specify whether to use ENA Express, based on your application environment needs.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html */

export interface EnaSrdUdpSpecification {
  /**
   * - Indicates whether UDP traffic to and from the instance uses ENA Express. To specify this setting, you must first enable ENA Express.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-enasrdudpspecification-enasrdudpenabled */
  EnaSrdUdpEnabled?: boolean | Intrinsic
}

/**
 * ENA Express uses AWS Scalable Reliable Datagram (SRD) technology to increase the maximum bandwidth used per stream and minimize tail latency of network traffic between EC2 instances. With ENA Express, you can communicate between two EC2 instances in the same subnet within the same account, or in different accounts. Both sending and receiving instances must have ENA Express enabled.
 * To improve the reliability of network packet delivery, ENA Express reorders network packets on the receiving end by default. However, some UDP-based applications are designed to handle network packets that are out of order to reduce the overhead for packet delivery at the network layer. When ENA Express is enabled, you can specify whether UDP network traffic uses it.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html */

export interface EnaSrdSpecification {
  /**
   * - Indicates whether ENA Express is enabled for the network interface.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-enasrdspecification-enasrdenabled */
  EnaSrdEnabled?: boolean | Intrinsic
  /**
   * - Configures ENA Express for UDP network traffic.
   * - _Required_: No
   * - _Type_: [EnaSrdUdpSpecification](./aws-properties-ec2-networkinterfaceattachment-enasrdudpspecification.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-enasrdspecification-enasrdudpspecification */
  EnaSrdUdpSpecification?: EnaSrdUdpSpecification
}

/**
 * Attaches an elastic network interface (ENI) to an Amazon EC2 instance. You can use this resource type to attach additional network interfaces to an instance without interruption.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html */

export interface EC2NetworkInterfaceAttachment extends ResourceAttributes {
  Type: 'AWS::EC2::NetworkInterfaceAttachment'
  Properties: {
    /**
     * - Whether to delete the network interface when the instance terminates. By default, this value is set to `true`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-deleteontermination */
    DeleteOnTermination?: boolean | Intrinsic
    /**
     * - The network interface's position in the attachment order. For example, the first attached network interface has a `DeviceIndex` of 0.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-deviceindex */
    DeviceIndex: string | Intrinsic
    /**
     * - Configures ENA Express for the network interface that this action attaches to the instance.
     * - _Required_: No
     * - _Type_: [EnaSrdSpecification](./aws-properties-ec2-networkinterfaceattachment-enasrdspecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-enasrdspecification */
    EnaSrdSpecification?: EnaSrdSpecification
    /**
     * - The ID of the instance to which you will attach the ENI.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-instanceid */
    InstanceId: string | Intrinsic
    /**
     * - The ID of the ENI that you want to attach.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-networkinterfaceattachment.html#cfn-ec2-networkinterfaceattachment-networkinterfaceid */
    NetworkInterfaceId: string | Intrinsic
  }
}
