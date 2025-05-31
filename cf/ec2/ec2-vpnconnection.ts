import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The IKE version that is permitted for the VPN tunnel.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface IKEVersionsRequestListValue {
    /**
     * - The IKE version.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ikev1 | ikev2`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-ikeversionsrequestlistvalue-value */
    "Value"?: string | Intrinsic;
}

/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 1 IKE negotiations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface Phase1DHGroupNumbersRequestListValue {
    /**
     * - The Diffie-Hellmann group number.
     * - _Required_: No
     * - _Type_: Integer
     * - _Allowed values_: `2 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-phase1dhgroupnumbersrequestlistvalue-value */
    "Value"?: number | Intrinsic;
}

/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 1 IKE negotiations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface Phase1EncryptionAlgorithmsRequestListValue {
    /**
     * - The value for the encryption algorithm.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-phase1encryptionalgorithmsrequestlistvalue-value */
    "Value"?: string | Intrinsic;
}

/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 1 IKE negotiations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface Phase1IntegrityAlgorithmsRequestListValue {
    /**
     * - The value for the integrity algorithm.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-phase1integrityalgorithmsrequestlistvalue-value */
    "Value"?: string | Intrinsic;
}

/**
 * Specifies a Diffie-Hellman group number for the VPN tunnel for phase 2 IKE negotiations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface Phase2DHGroupNumbersRequestListValue {
    /**
     * - The Diffie-Hellmann group number.
     * - _Required_: No
     * - _Type_: Integer
     * - _Allowed values_: `2 | 5 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-phase2dhgroupnumbersrequestlistvalue-value */
    "Value"?: number | Intrinsic;
}

/**
 * Specifies the encryption algorithm for the VPN tunnel for phase 2 IKE negotiations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface Phase2EncryptionAlgorithmsRequestListValue {
    /**
     * - The encryption algorithm.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AES128 | AES256 | AES128-GCM-16 | AES256-GCM-16`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-phase2encryptionalgorithmsrequestlistvalue-value */
    "Value"?: string | Intrinsic;
}

/**
 * Specifies the integrity algorithm for the VPN tunnel for phase 2 IKE negotiations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface Phase2IntegrityAlgorithmsRequestListValue {
    /**
     * - The integrity algorithm.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SHA1 | SHA2-256 | SHA2-384 | SHA2-512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-phase2integrityalgorithmsrequestlistvalue-value */
    "Value"?: string | Intrinsic;
}

/**
 * Options for sending VPN tunnel logs to CloudWatch.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface CloudwatchLogOptionsSpecification {
    /**
     * - Enable or disable VPN tunnel logging feature. Default value is `False`.
     * - Valid values: `True` | `False`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-cloudwatchlogoptionsspecification-logenabled */
    "LogEnabled"?: boolean | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the CloudWatch log group to send logs to.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-cloudwatchlogoptionsspecification-loggrouparn */
    "LogGroupArn"?: string | Intrinsic;
    /**
     * - Set log format. Default format is `json`.
     * - Valid values: `json` | `text`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `json | text`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-cloudwatchlogoptionsspecification-logoutputformat */
    "LogOutputFormat"?: string | Intrinsic;
}

/**
 * Options for logging VPN tunnel activity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface VpnTunnelLogOptionsSpecification {
    /**
     * - Options for sending VPN tunnel logs to CloudWatch.
     * - _Required_: No
     * - _Type_: [CloudwatchLogOptionsSpecification](./aws-properties-ec2-vpnconnection-cloudwatchlogoptionsspecification.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunnellogoptionsspecification-cloudwatchlogoptions */
    "CloudwatchLogOptions"?: CloudwatchLogOptionsSpecification;
}

/**
 * The tunnel options for a single VPN tunnel.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface VpnTunnelOptionsSpecification {
    /**
     * - The action to take after DPD timeout occurs. Specify `restart` to restart the IKE initiation. Specify `clear` to end the IKE session.
     * - Valid Values: `clear` | `none` | `restart`
     * - Default: `clear`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `clear | none | restart`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-dpdtimeoutaction */
    "DPDTimeoutAction"?: string | Intrinsic;
    /**
     * - The number of seconds after which a DPD timeout occurs.
     * - Constraints: A value greater than or equal to 30.
     * - Default: `30`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `30`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-dpdtimeoutseconds */
    "DPDTimeoutSeconds"?: number | Intrinsic;
    /**
     * - Turn on or off tunnel endpoint lifecycle control feature.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-enabletunnellifecyclecontrol */
    "EnableTunnelLifecycleControl"?: boolean | Intrinsic;
    /**
     * - The IKE versions that are permitted for the VPN tunnel.
     * - Valid values: `ikev1` | `ikev2`
     * - _Required_: No
     * - _Type_: Array of [IKEVersionsRequestListValue](./aws-properties-ec2-vpnconnection-ikeversionsrequestlistvalue.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-ikeversions */
    "IKEVersions"?: IKEVersionsRequestListValue[];
    /**
     * - Options for logging VPN tunnel activity.
     * - _Required_: No
     * - _Type_: [VpnTunnelLogOptionsSpecification](./aws-properties-ec2-vpnconnection-vpntunnellogoptionsspecification.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-logoptions */
    "LogOptions"?: VpnTunnelLogOptionsSpecification;
    /**
     * - One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 1 IKE negotiations.
     * - Valid values: `2` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
     * - _Required_: No
     * - _Type_: Array of [Phase1DHGroupNumbersRequestListValue](./aws-properties-ec2-vpnconnection-phase1dhgroupnumbersrequestlistvalue.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase1dhgroupnumbers */
    "Phase1DHGroupNumbers"?: Phase1DHGroupNumbersRequestListValue[];
    /**
     * - One or more encryption algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
     * - Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
     * - _Required_: No
     * - _Type_: Array of [Phase1EncryptionAlgorithmsRequestListValue](./aws-properties-ec2-vpnconnection-phase1encryptionalgorithmsrequestlistvalue.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase1encryptionalgorithms */
    "Phase1EncryptionAlgorithms"?: Phase1EncryptionAlgorithmsRequestListValue[];
    /**
     * - One or more integrity algorithms that are permitted for the VPN tunnel for phase 1 IKE negotiations.
     * - Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
     * - _Required_: No
     * - _Type_: Array of [Phase1IntegrityAlgorithmsRequestListValue](./aws-properties-ec2-vpnconnection-phase1integrityalgorithmsrequestlistvalue.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase1integrityalgorithms */
    "Phase1IntegrityAlgorithms"?: Phase1IntegrityAlgorithmsRequestListValue[];
    /**
     * - The lifetime for phase 1 of the IKE negotiation, in seconds.
     * - Constraints: A value between 900 and 28,800.
     * - Default: `28800`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `900`
     * - _Maximum_: `28800`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase1lifetimeseconds */
    "Phase1LifetimeSeconds"?: number | Intrinsic;
    /**
     * - One or more Diffie-Hellman group numbers that are permitted for the VPN tunnel for phase 2 IKE negotiations.
     * - Valid values: `2` | `5` | `14` | `15` | `16` | `17` | `18` | `19` | `20` | `21` | `22` | `23` | `24`
     * - _Required_: No
     * - _Type_: Array of [Phase2DHGroupNumbersRequestListValue](./aws-properties-ec2-vpnconnection-phase2dhgroupnumbersrequestlistvalue.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase2dhgroupnumbers */
    "Phase2DHGroupNumbers"?: Phase2DHGroupNumbersRequestListValue[];
    /**
     * - One or more encryption algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
     * - Valid values: `AES128` | `AES256` | `AES128-GCM-16` | `AES256-GCM-16`
     * - _Required_: No
     * - _Type_: Array of [Phase2EncryptionAlgorithmsRequestListValue](./aws-properties-ec2-vpnconnection-phase2encryptionalgorithmsrequestlistvalue.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase2encryptionalgorithms */
    "Phase2EncryptionAlgorithms"?: Phase2EncryptionAlgorithmsRequestListValue[];
    /**
     * - One or more integrity algorithms that are permitted for the VPN tunnel for phase 2 IKE negotiations.
     * - Valid values: `SHA1` | `SHA2-256` | `SHA2-384` | `SHA2-512`
     * - _Required_: No
     * - _Type_: Array of [Phase2IntegrityAlgorithmsRequestListValue](./aws-properties-ec2-vpnconnection-phase2integrityalgorithmsrequestlistvalue.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase2integrityalgorithms */
    "Phase2IntegrityAlgorithms"?: Phase2IntegrityAlgorithmsRequestListValue[];
    /**
     * - The lifetime for phase 2 of the IKE negotiation, in seconds.
     * - Constraints: A value between 900 and 3,600. The value must be less than the value for `Phase1LifetimeSeconds`.
     * - Default: `3600`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `900`
     * - _Maximum_: `3600`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-phase2lifetimeseconds */
    "Phase2LifetimeSeconds"?: number | Intrinsic;
    /**
     * - The pre-shared key (PSK) to establish initial authentication between the virtual private gateway and customer gateway.
     * - Constraints: Allowed characters are alphanumeric characters, periods (.), and underscores (\_). Must be between 8 and 64 characters in length and cannot start with zero (0).
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-presharedkey */
    "PreSharedKey"?: string | Intrinsic;
    /**
     * - The percentage of the rekey window (determined by `RekeyMarginTimeSeconds`) during which the rekey time is randomly selected.
     * - Constraints: A value between 0 and 100.
     * - Default: `100`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-rekeyfuzzpercentage */
    "RekeyFuzzPercentage"?: number | Intrinsic;
    /**
     * - The margin time, in seconds, before the phase 2 lifetime expires, during which the AWS side of the VPN connection performs an IKE rekey. The exact time of the rekey is randomly selected based on the value for `RekeyFuzzPercentage`.
     * - Constraints: A value between 60 and half of `Phase2LifetimeSeconds`.
     * - Default: `270`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `60`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-rekeymargintimeseconds */
    "RekeyMarginTimeSeconds"?: number | Intrinsic;
    /**
     * - The number of packets in an IKE replay window.
     * - Constraints: A value between 64 and 2048.
     * - Default: `1024`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `64`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-replaywindowsize */
    "ReplayWindowSize"?: number | Intrinsic;
    /**
     * - The action to take when the establishing the tunnel for the VPN connection. By default, your customer gateway device must initiate the IKE negotiation and bring up the tunnel. Specify `start` for AWS to initiate the IKE negotiation.
     * - Valid Values: `add` | `start`
     * - Default: `add`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `add | start`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-startupaction */
    "StartupAction"?: string | Intrinsic;
    /**
     * - The range of inside IP addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same virtual private gateway.
     * - Constraints: A size /30 CIDR block from the `169.254.0.0/16` range. The following CIDR blocks are reserved and cannot be used:
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-tunnelinsidecidr */
    "TunnelInsideCidr"?: string | Intrinsic;
    /**
     * - The range of inside IPv6 addresses for the tunnel. Any specified CIDR blocks must be unique across all VPN connections that use the same transit gateway.
     * - Constraints: A size /126 CIDR block from the local `fd00::/8` range.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecification-tunnelinsideipv6cidr */
    "TunnelInsideIpv6Cidr"?: string | Intrinsic;
}

/**
 * Specifies a VPN connection between a virtual private gateway and a VPN customer gateway or a transit gateway and a VPN customer gateway.
 * To specify a VPN connection between a transit gateway and customer gateway, use the `TransitGatewayId` and `CustomerGatewayId` properties.
 * To specify a VPN connection between a virtual private gateway and customer gateway, use the `VpnGatewayId` and `CustomerGatewayId` properties.
 * For more information, see [AWS Site-to-Site VPN](https://docs.aws.amazon.com/vpn/latest/s2svpn/VPC_VPN.html) in the _AWS Site-to-Site VPN User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html */

export interface EC2VPNConnection extends ResourceAttributes {
    "Type": "AWS::EC2::VPNConnection";
    "Properties": {
        /**
         * - The ID of the customer gateway at your end of the VPN connection.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-customergatewayid */
        "CustomerGatewayId": string | Intrinsic;
        /**
         * - Indicate whether to enable acceleration for the VPN connection.
         * - Default: `false`
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-enableacceleration */
        "EnableAcceleration"?: boolean | Intrinsic;
        /**
         * - The IPv4 CIDR on the customer gateway (on-premises) side of the VPN connection.
         * - Default: `0.0.0.0/0`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-localipv4networkcidr */
        "LocalIpv4NetworkCidr"?: string | Intrinsic;
        /**
         * - The IPv6 CIDR on the customer gateway (on-premises) side of the VPN connection.
         * - Default: `::/0`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-localipv6networkcidr */
        "LocalIpv6NetworkCidr"?: string | Intrinsic;
        /**
         * - The type of IPv4 address assigned to the outside interface of the customer gateway device.
         * - Valid values: `PrivateIpv4` | `PublicIpv4`
         * - Default: `PublicIpv4`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-outsideipaddresstype */
        "OutsideIpAddressType"?: string | Intrinsic;
        /**
         * - The IPv4 CIDR on the AWS side of the VPN connection.
         * - Default: `0.0.0.0/0`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-remoteipv4networkcidr */
        "RemoteIpv4NetworkCidr"?: string | Intrinsic;
        /**
         * - The IPv6 CIDR on the AWS side of the VPN connection.
         * - Default: `::/0`
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-remoteipv6networkcidr */
        "RemoteIpv6NetworkCidr"?: string | Intrinsic;
        /**
         * - Indicates whether the VPN connection uses static routes only. Static routes must be used for devices that don't support BGP.
         * - If you are creating a VPN connection for a device that does not support Border Gateway Protocol (BGP), you must specify `true`.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-staticroutesonly */
        "StaticRoutesOnly"?: boolean | Intrinsic;
        /**
         * - Any tags assigned to the VPN connection.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-vpnconnection-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-tags */
        "Tags"?: Tag[];
        /**
         * - The ID of the transit gateway associated with the VPN connection.
         * - You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-transitgatewayid */
        "TransitGatewayId"?: string | Intrinsic;
        /**
         * - The transit gateway attachment ID to use for the VPN tunnel.
         * - Required if `OutsideIpAddressType` is set to `PrivateIpv4`.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-transporttransitgatewayattachmentid */
        "TransportTransitGatewayAttachmentId"?: string | Intrinsic;
        /**
         * - Indicate whether the VPN tunnels process IPv4 or IPv6 traffic.
         * - Default: `ipv4`
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ipv4 | ipv6`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-tunnelinsideipversion */
        "TunnelInsideIpVersion"?: string | Intrinsic;
        /**
         * - The type of VPN connection.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ipsec.1`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-type */
        "Type": string | Intrinsic;
        /**
         * - The ID of the virtual private gateway at the AWS side of the VPN connection.
         * - You must specify either `TransitGatewayId` or `VpnGatewayId`, but not both.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpngatewayid */
        "VpnGatewayId"?: string | Intrinsic;
        /**
         * - The tunnel options for the VPN connection.
         * - _Required_: No
         * - _Type_: Array of [VpnTunnelOptionsSpecification](./aws-properties-ec2-vpnconnection-vpntunneloptionsspecification.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-vpnconnection.html#cfn-ec2-vpnconnection-vpntunneloptionsspecifications */
        "VpnTunnelOptionsSpecifications"?: VpnTunnelOptionsSpecification[];
    };
}