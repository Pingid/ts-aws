import type { Intrinsic } from '../intrinsic/index.js' /**
 * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
 * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface Tag {
  /**
   * - Name of the object key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ a-zA-Z0-9\+\-=._:/@]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-tag-key */
  Key: string | Intrinsic
  /**
   * - Value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[ a-zA-Z0-9\+\-=._:/@]{1,256}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-tag-value */
  Value: string | Intrinsic
}

/**
 * Information about IAM roles, subnets, and security groups needed for this DataflowEndpointGroup.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface SecurityDetails {
  /**
   * - The ARN of a role which Ground Station has permission to assume, such as `arn:aws:iam::1234567890:role/DataDeliveryServiceRole`.
   * - Ground Station will assume this role and create an ENI in your VPC on the specified subnet upon creation of a dataflow endpoint group. This ENI is used as the ingress/egress point for data streamed during a satellite contact.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-securitydetails-rolearn */
  RoleArn?: string | Intrinsic
  /**
   * - The security group Ids of the security role, such as `sg-1234567890abcdef0`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-securitydetails-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - The subnet Ids of the security details, such as `subnet-12345678`.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-securitydetails-subnetids */
  SubnetIds?: (string | Intrinsic)[]
}

/**
 * Egress address of AgentEndpoint with an optional mtu.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface ConnectionDetails {
  /**
   * - Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-connectiondetails-mtu */
  Mtu?: number | Intrinsic
  /**
   * - A socket address.
   * - _Required_: No
   * - _Type_: [SocketAddress](./aws-properties-groundstation-dataflowendpointgroup-socketaddress.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-connectiondetails-socketaddress */
  SocketAddress?: SocketAddress
}

/**
 * The address of the endpoint, such as `192.168.1.1`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface SocketAddress {
  /**
   * - The name of the endpoint, such as `Endpoint 1`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-socketaddress-name */
  Name?: string | Intrinsic
  /**
   * - The port of the endpoint, such as `55888`.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-socketaddress-port */
  Port?: number | Intrinsic
}

/**
 * An integer range that has a minimum and maximum value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface IntegerRange {
  /**
   * - A maximum value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-integerrange-maximum */
  Maximum?: number | Intrinsic
  /**
   * - A minimum value.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-integerrange-minimum */
  Minimum?: number | Intrinsic
}

/**
 * Contains information such as socket address and name that defines an endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface DataflowEndpoint {
  /**
   * - The address and port of an endpoint.
   * - _Required_: No
   * - _Type_: [SocketAddress](./aws-properties-groundstation-dataflowendpointgroup-socketaddress.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-dataflowendpoint-address */
  Address?: SocketAddress
  /**
   * - Maximum transmission unit (MTU) size in bytes of a dataflow endpoint. Valid values are between 1400 and 1500. A default value of 1500 is used if not set.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1400`
   * - _Maximum_: `1500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-dataflowendpoint-mtu */
  Mtu?: number | Intrinsic
  /**
   * - The endpoint name.
   * - When listing available contacts for a satellite, Ground Station searches for a dataflow endpoint whose name matches the value specified by the dataflow endpoint config of the selected mission profile. If no matching dataflow endpoints are found then Ground Station will not display any available contacts for the satellite.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[ a-zA-Z0-9_:-]{1,256}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-dataflowendpoint-name */
  Name?: string | Intrinsic
}

/**
 * A socket address with a port range.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface RangedSocketAddress {
  /**
   * - IPv4 socket address.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$`
   * - _Minimum_: `7`
   * - _Maximum_: `16`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-rangedsocketaddress-name */
  Name?: string | Intrinsic
  /**
   * - Port range of a socket address.
   * - _Required_: No
   * - _Type_: [IntegerRange](./aws-properties-groundstation-dataflowendpointgroup-integerrange.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-rangedsocketaddress-portrange */
  PortRange?: IntegerRange
}

/**
 * Ingress address of AgentEndpoint with a port range and an optional mtu.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface RangedConnectionDetails {
  /**
   * - Maximum transmission unit (MTU) size in bytes of a dataflow endpoint.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1400`
   * - _Maximum_: `1500`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-rangedconnectiondetails-mtu */
  Mtu?: number | Intrinsic
  /**
   * - A ranged socket address.
   * - _Required_: No
   * - _Type_: [RangedSocketAddress](./aws-properties-groundstation-dataflowendpointgroup-rangedsocketaddress.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-rangedconnectiondetails-socketaddress */
  SocketAddress?: RangedSocketAddress
}

/**
 * Information about AwsGroundStationAgentEndpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface AwsGroundStationAgentEndpoint {
  /**
   * - The status of AgentEndpoint.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SUCCESS | FAILED | ACTIVE | INACTIVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-agentstatus */
  AgentStatus?: string | Intrinsic
  /**
   * - The results of the audit.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `HEALTHY | UNHEALTHY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-auditresults */
  AuditResults?: string | Intrinsic
  /**
   * - The egress address of AgentEndpoint.
   * - _Required_: No
   * - _Type_: [ConnectionDetails](./aws-properties-groundstation-dataflowendpointgroup-connectiondetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-egressaddress */
  EgressAddress?: ConnectionDetails
  /**
   * - The ingress address of AgentEndpoint.
   * - _Required_: No
   * - _Type_: [RangedConnectionDetails](./aws-properties-groundstation-dataflowendpointgroup-rangedconnectiondetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-ingressaddress */
  IngressAddress?: RangedConnectionDetails
  /**
   * - Name string associated with AgentEndpoint. Used as a human-readable identifier for AgentEndpoint.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[ a-zA-Z0-9_:-]{1,256}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint-name */
  Name?: string | Intrinsic
}

/**
 * The security details and endpoint information.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface EndpointDetails {
  /**
   * - An agent endpoint.
   * - _Required_: No
   * - _Type_: [AwsGroundStationAgentEndpoint](./aws-properties-groundstation-dataflowendpointgroup-awsgroundstationagentendpoint.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-endpointdetails-awsgroundstationagentendpoint */
  AwsGroundStationAgentEndpoint?: AwsGroundStationAgentEndpoint
  /**
   * - Information about the endpoint such as name and the endpoint address.
   * - _Required_: No
   * - _Type_: [DataflowEndpoint](./aws-properties-groundstation-dataflowendpointgroup-dataflowendpoint.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-endpointdetails-endpoint */
  Endpoint?: DataflowEndpoint
  /**
   * - The role ARN, and IDs for security groups and subnets.
   * - _Required_: No
   * - _Type_: [SecurityDetails](./aws-properties-groundstation-dataflowendpointgroup-securitydetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-endpointdetails-securitydetails */
  SecurityDetails?: SecurityDetails
}

/**
 * Creates a Dataflow Endpoint Group request.
 * Dataflow endpoint groups contain a list of endpoints. When the name of a dataflow endpoint group is specified in a mission profile, the Ground Station service will connect to the endpoints and flow data during a contact.
 * For more information about dataflow endpoint groups, see [Dataflow Endpoint Groups](https://docs.aws.amazon.com/ground-station/latest/ug/dataflowendpointgroups.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html */

export interface GroundStationDataflowEndpointGroup {
  Type: 'AWS::GroundStation::DataflowEndpointGroup'
  Properties: {
    /**
     * - Amount of time, in seconds, after a contact ends that the Ground Station Dataflow Endpoint Group will be in a `POSTPASS` state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the `POSTPASS` state.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `120`
     * - _Maximum_: `480`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-contactpostpassdurationseconds */
    ContactPostPassDurationSeconds?: number | Intrinsic
    /**
     * - Amount of time, in seconds, before a contact starts that the Ground Station Dataflow Endpoint Group will be in a `PREPASS` state. A Ground Station Dataflow Endpoint Group State Change event will be emitted when the Dataflow Endpoint Group enters and exits the `PREPASS` state.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `120`
     * - _Maximum_: `480`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-contactprepassdurationseconds */
    ContactPrePassDurationSeconds?: number | Intrinsic
    /**
     * - List of Endpoint Details, containing address and port for each endpoint.
     * - _Required_: Yes
     * - _Type_: [Array](./aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html) of [EndpointDetails](./aws-properties-groundstation-dataflowendpointgroup-endpointdetails.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-endpointdetails */
    EndpointDetails: EndpointDetails[]
    /**
     * - Tags assigned to a resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-groundstation-dataflowendpointgroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-dataflowendpointgroup.html#cfn-groundstation-dataflowendpointgroup-tags */
    Tags?: Tag[]
  }
}
