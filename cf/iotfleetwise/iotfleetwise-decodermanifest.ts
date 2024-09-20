import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A set of key/value pairs that are used to manage the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-tag-value */
  Value: string | Intrinsic
}

/**
 * A single controller area network (CAN) device interface.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface CanInterface {
  /**
   * - The unique name of the interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-caninterface-name */
  Name: string | Intrinsic
  /**
   * - (Optional) The name of the communication protocol for the interface.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-caninterface-protocolname */
  ProtocolName?: string | Intrinsic
  /**
   * - (Optional) The version of the communication protocol for the interface.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-caninterface-protocolversion */
  ProtocolVersion?: string | Intrinsic
}

/**
 * A network interface that specifies the On-board diagnostic (OBD) II network protocol.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface ObdInterface {
  /**
   * - (Optional) The maximum number message requests per diagnostic trouble code per second.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdinterface-dtcrequestintervalseconds */
  DtcRequestIntervalSeconds?: string | Intrinsic
  /**
   * - (Optional) Whether the vehicle has a transmission control module (TCM).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdinterface-hastransmissionecu */
  HasTransmissionEcu?: string | Intrinsic
  /**
   * - The name of the interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdinterface-name */
  Name: string | Intrinsic
  /**
   * - (Optional) The standard OBD II PID.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdinterface-obdstandard */
  ObdStandard?: string | Intrinsic
  /**
   * - (Optional) The maximum number message requests per second.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdinterface-pidrequestintervalseconds */
  PidRequestIntervalSeconds?: string | Intrinsic
  /**
   * - The ID of the message requesting vehicle data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdinterface-requestmessageid */
  RequestMessageId: string | Intrinsic
  /**
   * - (Optional) Whether to use extended IDs in the message.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdinterface-useextendedids */
  UseExtendedIds?: string | Intrinsic
}

/**
 * (Optional) Information about a single controller area network (CAN) signal and the messages it receives and transmits.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface CanSignal {
  /**
   * - A multiplier used to decode the CAN message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-factor */
  Factor: string | Intrinsic
  /**
   * - Whether the byte ordering of a CAN message is big-endian.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-isbigendian */
  IsBigEndian: string | Intrinsic
  /**
   * - Whether the message data is specified as a signed value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-issigned */
  IsSigned: string | Intrinsic
  /**
   * - How many bytes of data are in the message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-length */
  Length: string | Intrinsic
  /**
   * - The ID of the message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-messageid */
  MessageId: string | Intrinsic
  /**
   * - (Optional) The name of the signal.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-name */
  Name?: string | Intrinsic
  /**
   * - The offset used to calculate the signal value. Combined with factor, the calculation is `value = raw_value * factor + offset`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-offset */
  Offset: string | Intrinsic
  /**
   * - Indicates the beginning of the CAN message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignal-startbit */
  StartBit: string | Intrinsic
}

/**
 * Information about signal messages using the on-board diagnostics (OBD) II protocol in a vehicle.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface ObdSignal {
  /**
   * - (Optional) The number of bits to mask in a message.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `8`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-bitmasklength */
  BitMaskLength?: string | Intrinsic
  /**
   * - (Optional) The number of positions to shift bits in the message.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-bitrightshift */
  BitRightShift?: string | Intrinsic
  /**
   * - The length of a message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `8`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-bytelength */
  ByteLength: string | Intrinsic
  /**
   * - The offset used to calculate the signal value. Combined with scaling, the calculation is `value = raw_value * scaling + offset`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-offset */
  Offset: string | Intrinsic
  /**
   * - The diagnostic code used to request data from a vehicle for this signal.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-pid */
  Pid: string | Intrinsic
  /**
   * - The length of the requested data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-pidresponselength */
  PidResponseLength: string | Intrinsic
  /**
   * - A multiplier used to decode the message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-scaling */
  Scaling: string | Intrinsic
  /**
   * - The mode of operation (diagnostic service) in a message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-servicemode */
  ServiceMode: string | Intrinsic
  /**
   * - Indicates the beginning of the message.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignal-startbyte */
  StartByte: string | Intrinsic
}

/**
 * Represents a node and its specifications in an in-vehicle communication network. All signal decoders must be associated with a network node.
 * To return this information about all the network interfaces specified in a decoder manifest, use the [ListDecoderManifestNetworkInterfaces](https://docs.aws.amazon.com/iot-fleetwise/latest/APIReference/API_ListDecoderManifestNetworkInterfaces.html) in the _AWS IoT FleetWise API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface CanNetworkInterface {
  /**
   * - Information about a network interface specified by the Controller Area Network (CAN) protocol.
   * - _Required_: Yes
   * - _Type_: [CanInterface](./aws-properties-iotfleetwise-decodermanifest-caninterface.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cannetworkinterface-caninterface */
  CanInterface: CanInterface
  /**
   * - The ID of the network interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cannetworkinterface-interfaceid */
  InterfaceId: string | Intrinsic
  /**
   * - The network protocol for the vehicle. For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CAN_INTERFACE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cannetworkinterface-type */
  Type: string | Intrinsic
}

/**
 * Information about a network interface specified by the On-board diagnostic (OBD) II protocol.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface ObdNetworkInterface {
  /**
   * - The ID of the network interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdnetworkinterface-interfaceid */
  InterfaceId: string | Intrinsic
  /**
   * - (Optional) Information about a network interface specified by the On-board diagnostic (OBD) II protocol.
   * - _Required_: Yes
   * - _Type_: [ObdInterface](./aws-properties-iotfleetwise-decodermanifest-obdinterface.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdnetworkinterface-obdinterface */
  ObdInterface: ObdInterface
  /**
   * - The network protocol for the vehicle. For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OBD_INTERFACE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdnetworkinterface-type */
  Type: string | Intrinsic
}

/**
 * Information about signal decoder using the Controller Area Network (CAN) protocol.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface CanSignalDecoder {
  /**
   * - Information about a single controller area network (CAN) signal and the messages it receives and transmits.
   * - _Required_: Yes
   * - _Type_: [CanSignal](./aws-properties-iotfleetwise-decodermanifest-cansignal.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-cansignal */
  CanSignal: CanSignal
  /**
   * - The fully qualified name of a signal decoder as defined in a vehicle model.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `150`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-fullyqualifiedname */
  FullyQualifiedName: string | Intrinsic
  /**
   * - The ID of a network interface that specifies what network protocol a vehicle follows.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-interfaceid */
  InterfaceId: string | Intrinsic
  /**
   * - The network protocol for the vehicle. For example, `CAN_SIGNAL` specifies a protocol that defines how data is communicated between electronic control units (ECUs). `OBD_SIGNAL` specifies a protocol that defines how self-diagnostic data is communicated between ECUs.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CAN_SIGNAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-cansignaldecoder-type */
  Type: string | Intrinsic
}

/**
 * A list of information about signal decoders.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface ObdSignalDecoder {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `150`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-fullyqualifiedname */
  FullyQualifiedName: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-interfaceid */
  InterfaceId: string | Intrinsic
  /**
   * - Information about signal messages using the on-board diagnostics (OBD) II protocol in a vehicle.
   * - _Required_: Yes
   * - _Type_: [ObdSignal](./aws-properties-iotfleetwise-decodermanifest-obdsignal.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-obdsignal */
  ObdSignal: ObdSignal
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OBD_SIGNAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-obdsignaldecoder-type */
  Type: string | Intrinsic
}

/**
 * (Optional) A list of information about available network interfaces.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface NetworkInterfacesItems {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [CanNetworkInterface](./aws-properties-iotfleetwise-decodermanifest-cannetworkinterface.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-networkinterfacesitems-cannetworkinterface */
  CanNetworkInterface?: CanNetworkInterface
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ObdNetworkInterface](./aws-properties-iotfleetwise-decodermanifest-obdnetworkinterface.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-networkinterfacesitems-obdnetworkinterface */
  ObdNetworkInterface?: ObdNetworkInterface
}

/**
 * Information about a signal decoder.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface SignalDecodersItems {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [CanSignalDecoder](./aws-properties-iotfleetwise-decodermanifest-cansignaldecoder.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-signaldecodersitems-cansignaldecoder */
  CanSignalDecoder?: CanSignalDecoder
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: [ObdSignalDecoder](./aws-properties-iotfleetwise-decodermanifest-obdsignaldecoder.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-signaldecodersitems-obdsignaldecoder */
  ObdSignalDecoder?: ObdSignalDecoder
}

/**
 * Creates the decoder manifest associated with a model manifest. To create a decoder manifest, the following must be true:
 * *   Every signal decoder has a unique name.
 *
 * *   Each signal decoder is associated with a network interface.
 *
 * *   Each network interface has a unique ID.
 *
 * *   The signal decoders are specified in the model manifest.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html */

export interface IoTFleetWiseDecoderManifest extends ResourceAttributes {
  Type: 'AWS::IoTFleetWise::DecoderManifest'
  Properties: {
    /**
     * - (Optional) A brief description of the decoder manifest.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[^\u0000-\u001F\u007F]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-description */
    Description?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of a vehicle model (model manifest) associated with the decoder manifest.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-modelmanifestarn */
    ModelManifestArn: string | Intrinsic
    /**
     * - The name of the decoder manifest.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z\d\-_:]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-name */
    Name: string | Intrinsic
    /**
     * - (Optional) A list of information about available network interfaces.
     * - _Required_: No
     * - _Type_: Array of [NetworkInterfacesItems](./aws-properties-iotfleetwise-decodermanifest-networkinterfacesitems.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-networkinterfaces */
    NetworkInterfaces?: NetworkInterfacesItems[]
    /**
     * - (Optional) A list of information about signal decoders.
     * - _Required_: No
     * - _Type_: Array of [SignalDecodersItems](./aws-properties-iotfleetwise-decodermanifest-signaldecodersitems.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-signaldecoders */
    SignalDecoders?: SignalDecodersItems[]
    /**
     * - (Optional) The state of the decoder manifest. If the status is `ACTIVE`, the decoder manifest can't be edited. If the status is marked `DRAFT`, you can edit the decoder manifest.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ACTIVE | DRAFT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-status */
    Status?: string | Intrinsic
    /**
     * - (Optional) Metadata that can be used to manage the decoder manifest.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-iotfleetwise-decodermanifest-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotfleetwise-decodermanifest.html#cfn-iotfleetwise-decodermanifest-tags */
    Tags?: Tag[]
  }
}
