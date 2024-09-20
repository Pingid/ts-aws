import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains a summary of a gateway capability configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html */

export interface GatewayCapabilitySummary {
  /**
   * - The JSON document that defines the configuration for the gateway capability. For more information, see [Configuring data sources (CLI)](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/configure-sources.html#configure-source-cli) in the _AWS IoT SiteWise User Guide_.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewaycapabilitysummary-capabilityconfiguration */
  CapabilityConfiguration?: string | Intrinsic
  /**
   * - The namespace of the capability configuration. For example, if you configure OPC-UA sources from the AWS IoT SiteWise console, your OPC-UA capability configuration has the namespace `iotsitewise:opcuacollector:version`, where `version` is a number such as `1`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewaycapabilitysummary-capabilitynamespace */
  CapabilityNamespace: string | Intrinsic
}

/**
 * A list of key-value pairs that contain metadata for the gateway. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html */

export interface Tag {
  /**
   * - The key or name that identifies the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-tag-value */
  Value: string | Intrinsic
}

/**
 * Contains details for a gateway that runs on AWS IoT Greengrass. To create a gateway that runs on AWS IoT Greengrass, you must add the IoT SiteWise connector to a Greengrass group and deploy it. Your Greengrass group must also have permissions to upload data to AWS IoT SiteWise. For more information, see [Ingesting data using a gateway](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html */

export interface Greengrass {
  /**
   * - The [ARN](https://docs.aws.amazon.com/general/latest/gr/aws-arns-and-namespaces.html) of the Greengrass group. For more information about how to find a group's ARN, see [ListGroups](https://docs.aws.amazon.com/greengrass/v1/apireference/listgroups-get.html) and [GetGroup](https://docs.aws.amazon.com/greengrass/v1/apireference/getgroup-get.html) in the _AWS IoT Greengrass V1 API Reference_.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-greengrass-grouparn */
  GroupArn: string | Intrinsic
}

/**
 * Contains details for a gateway that runs on AWS IoT Greengrass V2. To create a gateway that runs on AWS IoT Greengrass V2, you must deploy the IoT SiteWise Edge component to your gateway device. Your [Greengrass device role](https://docs.aws.amazon.com/greengrass/v2/developerguide/device-service-role.html) must use the `AWSIoTSiteWiseEdgeAccess` policy. For more information, see [Using AWS IoT SiteWise at the edge](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/sw-gateways.html) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html */

export interface GreengrassV2 {
  /**
   * - The name of the AWS IoT thing for your AWS IoT Greengrass V2 core device.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-greengrassv2-coredevicethingname */
  CoreDeviceThingName: string | Intrinsic
}

/**
 * Contains details for a AWS IoT SiteWise Edge gateway that runs on a Siemens Industrial Edge Device.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html */

export interface SiemensIE {
  /**
   * - The name of the AWS IoT Thing for your AWS IoT SiteWise Edge gateway.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-siemensie-iotcorethingname */
  IotCoreThingName: string | Intrinsic
}

/**
 * Contains a gateway's platform information.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html */

export interface GatewayPlatform {
  /**
   * - A gateway that runs on AWS IoT Greengrass.
   * - _Required_: No
   * - _Type_: [Greengrass](./aws-properties-iotsitewise-gateway-greengrass.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewayplatform-greengrass */
  Greengrass?: Greengrass
  /**
   * - A gateway that runs on AWS IoT Greengrass V2.
   * - _Required_: No
   * - _Type_: [GreengrassV2](./aws-properties-iotsitewise-gateway-greengrassv2.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewayplatform-greengrassv2 */
  GreengrassV2?: GreengrassV2
  /**
   * - A AWS IoT SiteWise Edge gateway that runs on a Siemens Industrial Edge Device.
   * - _Required_: No
   * - _Type_: [SiemensIE](./aws-properties-iotsitewise-gateway-siemensie.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewayplatform-siemensie */
  SiemensIE?: SiemensIE
}

/**
 * Creates a gateway, which is a virtual or edge device that delivers industrial data streams from local servers to AWS IoT SiteWise. For more information, see [Ingesting data using a gateway](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/gateway-connector.html) in the _AWS IoT SiteWise User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html */

export interface IoTSiteWiseGateway extends ResourceAttributes {
  Type: 'AWS::IoTSiteWise::Gateway'
  Properties: {
    /**
     * - A list of gateway capability summaries that each contain a namespace and status. Each gateway capability defines data sources for the gateway. To retrieve a capability configuration's definition, use [DescribeGatewayCapabilityConfiguration](https://docs.aws.amazon.com/iot-sitewise/latest/APIReference/API_DescribeGatewayCapabilityConfiguration.html).
     * - _Required_: No
     * - _Type_: Array of [GatewayCapabilitySummary](./aws-properties-iotsitewise-gateway-gatewaycapabilitysummary.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewaycapabilitysummaries */
    GatewayCapabilitySummaries?: GatewayCapabilitySummary[]
    /**
     * - A unique name for the gateway.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewayname */
    GatewayName: string | Intrinsic
    /**
     * - The gateway's platform. You can only specify one platform in a gateway.
     * - _Required_: Yes
     * - _Type_: [GatewayPlatform](./aws-properties-iotsitewise-gateway-gatewayplatform.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-gatewayplatform */
    GatewayPlatform: GatewayPlatform
    /**
     * - A list of key-value pairs that contain metadata for the gateway. For more information, see [Tagging your AWS IoT SiteWise resources](https://docs.aws.amazon.com/iot-sitewise/latest/userguide/tag-resources.html) in the _AWS IoT SiteWise User Guide_.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotsitewise-gateway-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotsitewise-gateway.html#cfn-iotsitewise-gateway-tags */
    Tags?: Tag[]
  }
}
