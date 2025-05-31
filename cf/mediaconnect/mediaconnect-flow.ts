import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The maintenance setting of a flow.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface Maintenance {
    /**
     * - A day of a week when the maintenance will happen. Use Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Monday | Tuesday | Wednesday | Thursday | Friday | Saturday | Sunday`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-maintenance-maintenanceday */
    "MaintenanceDay": string | Intrinsic;
    /**
     * - UTC time when the maintenance will happen. Use 24-hour HH:MM format. Minutes must be 00. Example: 13:00. The default value is 02:00.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-maintenance-maintenancestarthour */
    "MaintenanceStartHour": string | Intrinsic;
}

/**
 * The details of a VPC interface.
 * ###### Note
 * 
 * When configuring VPC interfaces for NDI outputs, keep in mind the following:
 * 
 * *   VPC interfaces must be defined as nested attributes within the `AWS::MediaConnect::Flow` resource, and not within the top-level `AWS::MediaConnect::FlowVpcInterface` resource.
 *     
 * *   There's a maximum limit of three VPC interfaces for each flow. If you've already reached this limit, you can't update the flow to use a different VPC interface without first removing an existing one.
 *     
 *     To update your VPC interfaces in this scenario, you must first remove the VPC interface that’s not being used. Next, add the new VPC interfaces. Lastly, update the `VpcInterfaceAdapter` in the `NDIConfig` property. These changes must be performed as separate manual operations and cannot be done through a single template update.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface VpcInterface {
    /**
     * - Immutable and has to be a unique against other VpcInterfaces in this Flow.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterface-name */
    "Name": string | Intrinsic;
    /**
     * - IDs of the network interfaces created in customer's account by MediaConnect.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterface-networkinterfaceids */
    "NetworkInterfaceIds"?: (string | Intrinsic)[];
    /**
     * - The type of network interface.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ena | efa`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterface-networkinterfacetype */
    "NetworkInterfaceType"?: string | Intrinsic;
    /**
     * - A role Arn MediaConnect can assume to create ENIs in your account.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterface-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - Security Group IDs to be used on ENI.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterface-securitygroupids */
    "SecurityGroupIds": (string | Intrinsic)[];
    /**
     * - Subnet must be in the AZ of the Flow.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterface-subnetid */
    "SubnetId": string | Intrinsic;
}

/**
 * Specifies the configuration settings for individual NDI discovery servers. A maximum of 3 servers is allowed.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface NdiDiscoveryServerConfig {
    /**
     * - The unique network address of the NDI discovery server.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-ndidiscoveryserverconfig-discoveryserveraddress */
    "DiscoveryServerAddress": string | Intrinsic;
    /**
     * - The port for the NDI discovery server. Defaults to 5959 if a custom port isn't specified.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-ndidiscoveryserverconfig-discoveryserverport */
    "DiscoveryServerPort"?: number | Intrinsic;
    /**
     * - The identifier for the Virtual Private Cloud (VPC) network interface used by the flow.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-ndidiscoveryserverconfig-vpcinterfaceadapter */
    "VpcInterfaceAdapter": string | Intrinsic;
}

/**
 * Specifies the configuration settings for NDI outputs. Required when the flow includes NDI outputs.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface NdiConfig {
    /**
     * - A prefix for the names of the NDI sources that the flow creates. If a custom name isn't specified, MediaConnect generates a unique 12-character ID as the prefix.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-ndiconfig-machinename */
    "MachineName"?: string | Intrinsic;
    /**
     * - A list of up to three NDI discovery server configurations. While not required by the API, this configuration is necessary for NDI functionality to work properly.
     * - _Required_: No
     * - _Type_: Array of [NdiDiscoveryServerConfig](./aws-properties-mediaconnect-flow-ndidiscoveryserverconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-ndiconfig-ndidiscoveryservers */
    "NdiDiscoveryServers"?: NdiDiscoveryServerConfig[];
    /**
     * - A setting that controls whether NDI outputs can be used in the flow. Must be ENABLED to add NDI outputs. Default is DISABLED.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-ndiconfig-ndistate */
    "NdiState"?: string | Intrinsic;
}

/**
 * Information about the encryption of the flow.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface Encryption {
    /**
     * - The type of algorithm that is used for static key encryption (such as aes128, aes192, or aes256). If you are using SPEKE or SRT-password encryption, this property must be left blank.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `aes128 | aes192 | aes256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-algorithm */
    "Algorithm"?: string | Intrinsic;
    /**
     * - A 128-bit, 16-byte hex value represented by a 32-character string, to be used with the key for encrypting content. This parameter is not valid for static key encryption.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-constantinitializationvector */
    "ConstantInitializationVector"?: string | Intrinsic;
    /**
     * - The value of one of the devices that you configured with your digital rights management (DRM) platform key provider. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-deviceid */
    "DeviceId"?: string | Intrinsic;
    /**
     * - The type of key that is used for the encryption. If you don't specify a `keyType` value, the service uses the default setting (`static-key`). Valid key types are: `static-key`, `speke`, and `srt-password`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `speke | static-key | srt-password`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-keytype */
    "KeyType"?: string | Intrinsic;
    /**
     * - The AWS Region that the API Gateway proxy endpoint was created in. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-region */
    "Region"?: string | Intrinsic;
    /**
     * - An identifier for the content. The service sends this value to the key server to identify the current endpoint. The resource ID is also known as the content ID. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-resourceid */
    "ResourceId"?: string | Intrinsic;
    /**
     * - The ARN of the role that you created during setup (when you set up MediaConnect as a trusted entity).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-rolearn */
    "RoleArn": string | Intrinsic;
    /**
     * - The ARN of the secret that you created in AWS Secrets Manager to store the encryption key. This parameter is required for static key encryption and is not valid for SPEKE encryption.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-secretarn */
    "SecretArn"?: string | Intrinsic;
    /**
     * - The URL from the API Gateway proxy that you set up to talk to your key server. This parameter is required for SPEKE encryption and is not valid for static key encryption.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-encryption-url */
    "Url"?: string | Intrinsic;
}

/**
 * The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface SourcePriority {
    /**
     * - The name of the source you choose as the primary source for this flow.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcepriority-primarysource */
    "PrimarySource": string | Intrinsic;
}

/**
 * The settings for source failover.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface FailoverConfig {
    /**
     * - The type of failover you choose for this flow. MERGE combines the source streams into a single stream, allowing graceful recovery from any single-source loss. FAILOVER allows switching between different streams. The string for this property must be entered as MERGE or FAILOVER. No other string entry is valid.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `MERGE | FAILOVER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-failoverconfig-failovermode */
    "FailoverMode"?: string | Intrinsic;
    /**
     * - Search window time to look for dash-7 packets.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-failoverconfig-recoverywindow */
    "RecoveryWindow"?: number | Intrinsic;
    /**
     * - The priority you want to assign to a source. You can have a primary stream and a backup stream or two equally prioritized streams.
     * - _Required_: No
     * - _Type_: [SourcePriority](./aws-properties-mediaconnect-flow-sourcepriority.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-failoverconfig-sourcepriority */
    "SourcePriority"?: SourcePriority;
    /**
     * - The state of source failover on the flow. If the state is inactive, the flow can have only one source. If the state is active, the flow can have one or two sources.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-failoverconfig-state */
    "State"?: string | Intrinsic;
}

/**
 * A set of parameters that define the media stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface Fmtp {
    /**
     * - The format of the audio channel.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-fmtp-channelorder */
    "ChannelOrder"?: string | Intrinsic;
    /**
     * - The format used for the representation of color.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `BT601 | BT709 | BT2020 | BT2100 | ST2065-1 | ST2065-3 | XYZ`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-fmtp-colorimetry */
    "Colorimetry"?: string | Intrinsic;
    /**
     * - The frame rate for the video stream, in frames/second. For example: 60000/1001.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-fmtp-exactframerate */
    "ExactFramerate"?: string | Intrinsic;
    /**
     * - The pixel aspect ratio (PAR) of the video.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-fmtp-par */
    "Par"?: string | Intrinsic;
    /**
     * - The encoding range of the video.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NARROW | FULL | FULLPROTECT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-fmtp-range */
    "Range"?: string | Intrinsic;
    /**
     * - The type of compression that was used to smooth the video’s appearance.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `progressive | interlace | progressive-segmented-frame`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-fmtp-scanmode */
    "ScanMode"?: string | Intrinsic;
    /**
     * - The transfer characteristic system (TCS) that is used in the video.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SDR | PQ | HLG | LINEAR | BT2100LINPQ | BT2100LINHLG | ST2065-1 | ST428-1 | DENSITY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-fmtp-tcs */
    "Tcs"?: string | Intrinsic;
}

/**
 * Attributes that are related to the media stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface MediaStreamAttributes {
    /**
     * - The settings that you want to use to define the media stream.
     * - _Required_: No
     * - _Type_: [Fmtp](./aws-properties-mediaconnect-flow-fmtp.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastreamattributes-fmtp */
    "Fmtp"?: Fmtp;
    /**
     * - The audio language, in a format that is recognized by the receiver.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastreamattributes-lang */
    "Lang"?: string | Intrinsic;
}

/**
 * A media stream represents one component of your content, such as video, audio, or ancillary data. After you add a media stream to your flow, you can associate it with sources and outputs that use the ST 2110 JPEG XS or CDI protocol.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface MediaStream {
    /**
     * - Attributes that are related to the media stream.
     * - _Required_: No
     * - _Type_: [MediaStreamAttributes](./aws-properties-mediaconnect-flow-mediastreamattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-attributes */
    "Attributes"?: MediaStreamAttributes;
    /**
     * - The sample rate for the stream. This value is measured in Hz.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-clockrate */
    "ClockRate"?: number | Intrinsic;
    /**
     * - A description that can help you quickly identify what your media stream is used for.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-description */
    "Description"?: string | Intrinsic;
    /**
     * - The format type number (sometimes referred to as RTP payload type) of the media stream. MediaConnect assigns this value to the media stream. For ST 2110 JPEG XS outputs, you need to provide this value to the receiver.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-fmt */
    "Fmt"?: number | Intrinsic;
    /**
     * - A unique identifier for the media stream.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-mediastreamid */
    "MediaStreamId": number | Intrinsic;
    /**
     * - A name that helps you distinguish one media stream from another.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-mediastreamname */
    "MediaStreamName": string | Intrinsic;
    /**
     * - The type of media stream.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `video | audio | ancillary-data`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-mediastreamtype */
    "MediaStreamType": string | Intrinsic;
    /**
     * - The resolution of the video.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `2160p | 1080p | 1080i | 720p | 480p`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastream-videoformat */
    "VideoFormat"?: string | Intrinsic;
}

/**
 * The settings for attaching a VPC interface to an resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface VpcInterfaceAttachment {
    /**
     * - The name of the VPC interface to use for this resource.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterfaceattachment-vpcinterfacename */
    "VpcInterfaceName"?: string | Intrinsic;
}

/**
 * The source configuration for cloud flows receiving a stream from a bridge.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface GatewayBridgeSource {
    /**
     * - The ARN of the bridge feeding this flow.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-gatewaybridgesource-bridgearn */
    "BridgeArn": string | Intrinsic;
    /**
     * - The name of the VPC interface attachment to use for this bridge source.
     * - _Required_: No
     * - _Type_: [VpcInterfaceAttachment](./aws-properties-mediaconnect-flow-vpcinterfaceattachment.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-gatewaybridgesource-vpcinterfaceattachment */
    "VpcInterfaceAttachment"?: VpcInterfaceAttachment;
}

/**
 * Configures settings for the `BlackFrames` metric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface BlackFrames {
    /**
     * - Indicates whether the `BlackFrames` metric is enabled or disabled..
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-blackframes-state */
    "State"?: string | Intrinsic;
    /**
     * - Specifies the number of consecutive seconds of black frames that triggers an event or alert.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-blackframes-thresholdseconds */
    "ThresholdSeconds"?: number | Intrinsic;
}

/**
 * Configures settings for the `FrozenFrames` metric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface FrozenFrames {
    /**
     * - Indicates whether the `FrozenFrames` metric is enabled or disabled.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-frozenframes-state */
    "State"?: string | Intrinsic;
    /**
     * - Specifies the number of consecutive seconds of a static image that triggers an event or alert.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-frozenframes-thresholdseconds */
    "ThresholdSeconds"?: number | Intrinsic;
}

/**
 * Specifies the configuration for video stream metrics monitoring.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface VideoMonitoringSetting {
    /**
     * - Detects video frames that are black.
     * - _Required_: No
     * - _Type_: [BlackFrames](./aws-properties-mediaconnect-flow-blackframes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-videomonitoringsetting-blackframes */
    "BlackFrames"?: BlackFrames;
    /**
     * - Detects video frames that have not changed.
     * - _Required_: No
     * - _Type_: [FrozenFrames](./aws-properties-mediaconnect-flow-frozenframes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-videomonitoringsetting-frozenframes */
    "FrozenFrames"?: FrozenFrames;
}

/**
 * Configures settings for the `SilentAudio` metric.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface SilentAudio {
    /**
     * - Indicates whether the `SilentAudio` metric is enabled or disabled.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-silentaudio-state */
    "State"?: string | Intrinsic;
    /**
     * - Specifies the number of consecutive seconds of silence that triggers an event or alert.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-silentaudio-thresholdseconds */
    "ThresholdSeconds"?: number | Intrinsic;
}

/**
 * Specifies the configuration for audio stream metrics monitoring.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface AudioMonitoringSetting {
    /**
     * - Detects periods of silence.
     * - _Required_: No
     * - _Type_: [SilentAudio](./aws-properties-mediaconnect-flow-silentaudio.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-audiomonitoringsetting-silentaudio */
    "SilentAudio"?: SilentAudio;
}

/**
 * The `SourceMonitoringConfig` property type specifies the source monitoring settings for an `AWS::MediaConnect::Flow`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface SourceMonitoringConfig {
    /**
     * - Contains the settings for audio stream metrics monitoring.
     * - _Required_: No
     * - _Type_: Array of [AudioMonitoringSetting](./aws-properties-mediaconnect-flow-audiomonitoringsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcemonitoringconfig-audiomonitoringsettings */
    "AudioMonitoringSettings"?: AudioMonitoringSetting[];
    /**
     * - Indicates whether content quality analysis is enabled or disabled.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcemonitoringconfig-contentqualityanalysisstate */
    "ContentQualityAnalysisState"?: string | Intrinsic;
    /**
     * - The current state of the thumbnail monitoring.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcemonitoringconfig-thumbnailstate */
    "ThumbnailState"?: string | Intrinsic;
    /**
     * - Contains the settings for video stream metrics monitoring.
     * - _Required_: No
     * - _Type_: Array of [VideoMonitoringSetting](./aws-properties-mediaconnect-flow-videomonitoringsetting.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcemonitoringconfig-videomonitoringsettings */
    "VideoMonitoringSettings"?: VideoMonitoringSetting[];
}

/**
 * The VPC interface that is used for the media stream associated with the source or output.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface Interface {
    /**
     * - The name of the VPC interface.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-interface-name */
    "Name": string | Intrinsic;
}

/**
 * The transport parameters that are associated with an incoming media stream.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface InputConfiguration {
    /**
     * - The port that the flow listens on for an incoming media stream.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-inputconfiguration-inputport */
    "InputPort": number | Intrinsic;
    /**
     * - The VPC interface where the media stream comes in from.
     * - _Required_: Yes
     * - _Type_: [Interface](./aws-properties-mediaconnect-flow-interface.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-inputconfiguration-interface */
    "Interface": Interface;
}

/**
 * The media stream that is associated with the source, and the parameters for that association.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface MediaStreamSourceConfiguration {
    /**
     * - The format that was used to encode the data. For ancillary data streams, set the encoding name to smpte291. For audio streams, set the encoding name to pcm. For video, 2110 streams, set the encoding name to raw. For video, JPEG XS streams, set the encoding name to jxsv.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `jxsv | raw | smpte291 | pcm`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastreamsourceconfiguration-encodingname */
    "EncodingName": string | Intrinsic;
    /**
     * - The media streams that you want to associate with the source.
     * - _Required_: No
     * - _Type_: Array of [InputConfiguration](./aws-properties-mediaconnect-flow-inputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastreamsourceconfiguration-inputconfigurations */
    "InputConfigurations"?: InputConfiguration[];
    /**
     * - A name that helps you distinguish one media stream from another.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastreamsourceconfiguration-mediastreamname */
    "MediaStreamName": string | Intrinsic;
}

/**
 * The details of the sources of the flow.
 * If you are creating a flow with a VPC source, you must first create the flow with a temporary standard source by doing the following:
 * 1.  Use CloudFormation to create a flow with a standard source that uses the flow’s public IP address.
 *     
 * 2.  Use CloudFormation to create the VPC interface to add to this flow. This can also be done as part of the previous step.
 *     
 * 3.  After CloudFormation has created the flow and the VPC interface, update the source to point to the VPC interface that you created.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface Source {
    /**
     * - The type of encryption that is used on the content ingested from this source.
     * - _Required_: No
     * - _Type_: [Encryption](./aws-properties-mediaconnect-flow-encryption.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-decryption */
    "Decryption"?: Encryption;
    /**
     * - A description for the source. This value is not used or seen outside of the current MediaConnect account.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-description */
    "Description"?: string | Intrinsic;
    /**
     * - The ARN of the entitlement that allows you to subscribe to content that comes from another AWS account. The entitlement is set by the content originator and the ARN is generated as part of the originator's flow.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-entitlementarn */
    "EntitlementArn"?: string | Intrinsic;
    /**
     * - The source configuration for cloud flows receiving a stream from a bridge.
     * - _Required_: No
     * - _Type_: [GatewayBridgeSource](./aws-properties-mediaconnect-flow-gatewaybridgesource.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-gatewaybridgesource */
    "GatewayBridgeSource"?: GatewayBridgeSource;
    /**
     * - The IP address that the flow will be listening on for incoming content.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-ingestip */
    "IngestIp"?: string | Intrinsic;
    /**
     * - The port that the flow will be listening on for incoming content.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-ingestport */
    "IngestPort"?: number | Intrinsic;
    /**
     * - The maximum bitrate for RIST, RTP, and RTP-FEC streams.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-maxbitrate */
    "MaxBitrate"?: number | Intrinsic;
    /**
     * - The maximum latency in milliseconds for a RIST or Zixi-based source.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-maxlatency */
    "MaxLatency"?: number | Intrinsic;
    /**
     * - The size of the buffer (in milliseconds) to use to sync incoming source data.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-maxsyncbuffer */
    "MaxSyncBuffer"?: number | Intrinsic;
    /**
     * - The media streams that are associated with the source, and the parameters for those associations.
     * - _Required_: No
     * - _Type_: Array of [MediaStreamSourceConfiguration](./aws-properties-mediaconnect-flow-mediastreamsourceconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-mediastreamsourceconfigurations */
    "MediaStreamSourceConfigurations"?: MediaStreamSourceConfiguration[];
    /**
     * - The minimum latency in milliseconds for SRT-based streams. In streams that use the SRT protocol, this value that you set on your MediaConnect source or output represents the minimal potential latency of that connection. The latency of the stream is set to the highest number between the sender’s minimum latency and the receiver’s minimum latency.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-minlatency */
    "MinLatency"?: number | Intrinsic;
    /**
     * - The name of the source.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-name */
    "Name"?: string | Intrinsic;
    /**
     * - The protocol that is used by the source. AWS CloudFormation does not currently support CDI or ST 2110 JPEG XS source protocols.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `zixi-push | rtp-fec | rtp | rist | fujitsu-qos | srt-listener | srt-caller | st2110-jpegxs | cdi`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-protocol */
    "Protocol"?: string | Intrinsic;
    /**
     * - The port that the flow uses to send outbound requests to initiate connection with the sender.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-sendercontrolport */
    "SenderControlPort"?: number | Intrinsic;
    /**
     * - The IP address that the flow communicates with to initiate connection with the sender.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-senderipaddress */
    "SenderIpAddress"?: string | Intrinsic;
    /**
     * - The ARN of the source.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-sourcearn */
    "SourceArn"?: string | Intrinsic;
    /**
     * - The port that the flow listens on for incoming content. If the protocol of the source is Zixi, the port must be set to 2088.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-sourceingestport */
    "SourceIngestPort"?: string | Intrinsic;
    /**
     * - Source IP or domain name for SRT-caller protocol.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-sourcelisteneraddress */
    "SourceListenerAddress"?: string | Intrinsic;
    /**
     * - Source port for SRT-caller protocol.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-sourcelistenerport */
    "SourceListenerPort"?: number | Intrinsic;
    /**
     * - The stream ID that you want to use for the transport. This parameter applies only to Zixi-based streams.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-streamid */
    "StreamId"?: string | Intrinsic;
    /**
     * - The name of the VPC interface that is used for this source.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-vpcinterfacename */
    "VpcInterfaceName"?: string | Intrinsic;
    /**
     * - The range of IP addresses that should be allowed to contribute content to your source. These IP addresses should be in the form of a Classless Inter-Domain Routing (CIDR) block; for example, 10.0.0.0/16.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source-whitelistcidr */
    "WhitelistCidr"?: string | Intrinsic;
}

/**
 * The `AWS::MediaConnect::Flow` resource defines a connection between one or more video sources and one or more outputs. For each flow, you specify the transport protocol to use, encryption information, and details for any outputs or entitlements that you want. AWS Elemental MediaConnect returns an ingest endpoint where you can send your live video as a single unicast stream. The service replicates and distributes the video to every output that you specify, whether inside or outside the AWS Cloud. You can also set up entitlements on a flow to allow other AWS accounts to access your content.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html */

export interface MediaConnectFlow extends ResourceAttributes {
    "Type": "AWS::MediaConnect::Flow";
    "Properties": {
        /**
         * - The Availability Zone that you want to create the flow in. These options are limited to the Availability Zones within the current AWS Region.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-availabilityzone */
        "AvailabilityZone"?: string | Intrinsic;
        /**
         * - Determines the processing capacity and feature set of the flow. Set this optional parameter to LARGE if you want to enable NDI outputs on the flow.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `MEDIUM | LARGE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-flowsize */
        "FlowSize"?: string | Intrinsic;
        /**
         * - The maintenance settings you want to use for the flow.
         * - _Required_: No
         * - _Type_: [Maintenance](./aws-properties-mediaconnect-flow-maintenance.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-maintenance */
        "Maintenance"?: Maintenance;
        /**
         * - The media streams that are associated with the flow. After you associate a media stream with a source, you can also associate it with outputs on the flow.
         * - _Required_: No
         * - _Type_: Array of [MediaStream](./aws-properties-mediaconnect-flow-mediastream.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-mediastreams */
        "MediaStreams"?: MediaStream[];
        /**
         * - The name of the flow.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-name */
        "Name": string | Intrinsic;
        /**
         * - Specifies the configuration settings for NDI outputs. Required when the flow includes NDI outputs.
         * - _Required_: No
         * - _Type_: [NdiConfig](./aws-properties-mediaconnect-flow-ndiconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-ndiconfig */
        "NdiConfig"?: NdiConfig;
        /**
         * - The settings for the source that you want to use for the new flow.
         * - _Required_: Yes
         * - _Type_: [Source](./aws-properties-mediaconnect-flow-source.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-source */
        "Source": Source;
        /**
         * - The settings for source failover.
         * - _Required_: No
         * - _Type_: [FailoverConfig](./aws-properties-mediaconnect-flow-failoverconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcefailoverconfig */
        "SourceFailoverConfig"?: FailoverConfig;
        /**
         * - The settings for source monitoring.
         * - _Required_: No
         * - _Type_: [SourceMonitoringConfig](./aws-properties-mediaconnect-flow-sourcemonitoringconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-sourcemonitoringconfig */
        "SourceMonitoringConfig"?: SourceMonitoringConfig;
        /**
         * - The VPC Interfaces for this flow.
         * - _Required_: No
         * - _Type_: Array of [VpcInterface](./aws-properties-mediaconnect-flow-vpcinterface.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-mediaconnect-flow.html#cfn-mediaconnect-flow-vpcinterfaces */
        "VpcInterfaces"?: VpcInterface[];
    };
}