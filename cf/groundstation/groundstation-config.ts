import type { Intrinsic } from '../intrinsic/index.js' /**
 * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
 * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface Tag {
  /**
   * - Name of the object key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[ a-zA-Z0-9\+\-=._:/@]{1,128}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-tag-key */
  Key?: string | Intrinsic
  /**
   * - Value of the tag.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[ a-zA-Z0-9\+\-=._:/@]{1,256}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-tag-value */
  Value?: string | Intrinsic
}

/**
 * Provides information to AWS Ground Station about which IP endpoints to use during a contact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface DataflowEndpointConfig {
  /**
   * - The name of the dataflow endpoint to use during contacts.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-dataflowendpointconfig-dataflowendpointname */
  DataflowEndpointName?: string | Intrinsic
  /**
   * - The region of the dataflow endpoint to use during contacts. When omitted, Ground Station will use the region of the contact.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-dataflowendpointconfig-dataflowendpointregion */
  DataflowEndpointRegion?: string | Intrinsic
}

/**
 * Provides information about how AWS Ground Station should save downlink data to S3.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface S3RecordingConfig {
  /**
   * - S3 Bucket where the data is written. The name of the S3 Bucket provided must begin with `aws-groundstation`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:aws[A-Za-z0-9-]{0,64}:s3:::[A-Za-z0-9-]{1,64}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-s3recordingconfig-bucketarn */
  BucketArn?: string | Intrinsic
  /**
   * - The prefix of the S3 data object. If you choose to use any optional keys for substitution, these values will be replaced with the corresponding information from your contact details. For example, a prefix of `{satellite_id}/{year}/{month}/{day}/` will replaced with `fake_satellite_id/2021/01/10/`
   * - _Optional keys for substitution_: `{satellite_id}` | `{config-name}` | `{config-id}` | `{year}` | `{month}` | `{day}`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([a-zA-Z0-9_\-=/]|\{satellite_id\}|\{config\-name}|\{s3\-config-id}|\{year\}|\{month\}|\{day\}){1,900}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-s3recordingconfig-prefix */
  Prefix?: string | Intrinsic
  /**
   * - Defines the ARN of the role assumed for putting archives to S3.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:[^:\n]+:iam::[^:\n]+:role\/.+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-s3recordingconfig-rolearn */
  RoleArn?: string | Intrinsic
}

/**
 * Provides information about how AWS Ground Station should track the satellite through the sky during a contact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface TrackingConfig {
  /**
   * - Specifies whether or not to use autotrack. `REMOVED` specifies that program track should only be used during the contact. `PREFERRED` specifies that autotracking is preferred during the contact but fallback to program track if the signal is lost. `REQUIRED` specifies that autotracking is required during the contact and not to use program track if the signal is lost.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `REQUIRED | PREFERRED | REMOVED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-trackingconfig-autotrack */
  Autotrack?: string | Intrinsic
}

/**
 * Provides information about how AWS Ground Station should echo back uplink transmissions to a dataflow endpoint.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface UplinkEchoConfig {
  /**
   * - Defines the ARN of the uplink config to echo back to a dataflow endpoint.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-uplinkechoconfig-antennauplinkconfigarn */
  AntennaUplinkConfigArn?: string | Intrinsic
  /**
   * - Whether or not uplink echo is enabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-uplinkechoconfig-enabled */
  Enabled?: boolean | Intrinsic
}

/**
 * Defines decoding settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface DecodeConfig {
  /**
   * - The decoding settings are in JSON format and define a set of steps to perform to decode the data.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[{}\[\]:.,"0-9A-z\-_\s]{1,8192}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-decodeconfig-unvalidatedjson */
  UnvalidatedJSON?: string | Intrinsic
}

/**
 * Defines demodulation settings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface DemodulationConfig {
  /**
   * - The demodulation settings are in JSON format and define parameters for demodulation, for example which modulation scheme (e.g. PSK, QPSK, etc.) and matched filter to use.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[{}\[\]:.,"0-9A-z\-_\s]{1,8192}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-demodulationconfig-unvalidatedjson */
  UnvalidatedJSON?: string | Intrinsic
}

/**
 * Defines a uplink spectrum.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface UplinkSpectrumConfig {
  /**
   * - The center frequency of the spectrum. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   * - _Required_: No
   * - _Type_: [Frequency](./aws-properties-groundstation-config-frequency.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-uplinkspectrumconfig-centerfrequency */
  CenterFrequency?: Frequency
  /**
   * - The polarization of the spectrum. Valid values are `"RIGHT_HAND"` and `"LEFT_HAND"`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LEFT_HAND | RIGHT_HAND | NONE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-uplinkspectrumconfig-polarization */
  Polarization?: string | Intrinsic
}

/**
 * Defines an equivalent isotropically radiated power (EIRP).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface Eirp {
  /**
   * - The units of the EIRP.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `dBW`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-eirp-units */
  Units?: string | Intrinsic
  /**
   * - The value of the EIRP. Valid values are between 20.0 to 50.0 dBW.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-eirp-value */
  Value?: number | Intrinsic
}

/**
 * Defines a bandwidth.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface FrequencyBandwidth {
  /**
   * - The units of the bandwidth.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GHz | MHz | kHz`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-frequencybandwidth-units */
  Units?: string | Intrinsic
  /**
   * - The value of the bandwidth. AWS Ground Station currently has the following bandwidth limitations:
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-frequencybandwidth-value */
  Value?: number | Intrinsic
}

/**
 * Defines a frequency.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface Frequency {
  /**
   * - The units of the frequency.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GHz | MHz | kHz`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-frequency-units */
  Units?: string | Intrinsic
  /**
   * - The value of the frequency. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-frequency-value */
  Value?: number | Intrinsic
}

/**
 * Provides information about how AWS Ground Station should configure an antenna for downlink during a contact. Use an antenna downlink demod decode config in a mission profile to receive the downlink data that has been demodulated and decoded.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface AntennaDownlinkDemodDecodeConfig {
  /**
   * - Defines how the RF signal will be decoded.
   * - _Required_: No
   * - _Type_: [DecodeConfig](./aws-properties-groundstation-config-decodeconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-antennadownlinkdemoddecodeconfig-decodeconfig */
  DecodeConfig?: DecodeConfig
  /**
   * - Defines how the RF signal will be demodulated.
   * - _Required_: No
   * - _Type_: [DemodulationConfig](./aws-properties-groundstation-config-demodulationconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-antennadownlinkdemoddecodeconfig-demodulationconfig */
  DemodulationConfig?: DemodulationConfig
  /**
   * - Defines the spectrum configuration.
   * - _Required_: No
   * - _Type_: [SpectrumConfig](./aws-properties-groundstation-config-spectrumconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-antennadownlinkdemoddecodeconfig-spectrumconfig */
  SpectrumConfig?: SpectrumConfig
}

/**
 * Provides information about how AWS Ground Station should configure an antenna for uplink during a contact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface AntennaUplinkConfig {
  /**
   * - Defines the spectrum configuration.
   * - _Required_: No
   * - _Type_: [UplinkSpectrumConfig](./aws-properties-groundstation-config-uplinkspectrumconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-antennauplinkconfig-spectrumconfig */
  SpectrumConfig?: UplinkSpectrumConfig
  /**
   * - The equivalent isotropically radiated power (EIRP) to use for uplink transmissions. Valid values are between 20.0 to 50.0 dBW.
   * - _Required_: No
   * - _Type_: [Eirp](./aws-properties-groundstation-config-eirp.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-antennauplinkconfig-targeteirp */
  TargetEirp?: Eirp
  /**
   * - Whether or not uplink transmit is disabled.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-antennauplinkconfig-transmitdisabled */
  TransmitDisabled?: boolean | Intrinsic
}

/**
 * Defines a spectrum.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface SpectrumConfig {
  /**
   * - The bandwidth of the spectrum. AWS Ground Station currently has the following bandwidth limitations:
   * - _Required_: No
   * - _Type_: [FrequencyBandwidth](./aws-properties-groundstation-config-frequencybandwidth.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-spectrumconfig-bandwidth */
  Bandwidth?: FrequencyBandwidth
  /**
   * - The center frequency of the spectrum. Valid values are between 2200 to 2300 MHz and 7750 to 8400 MHz for downlink and 2025 to 2120 MHz for uplink.
   * - _Required_: No
   * - _Type_: [Frequency](./aws-properties-groundstation-config-frequency.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-spectrumconfig-centerfrequency */
  CenterFrequency?: Frequency
  /**
   * - The polarization of the spectrum. Valid values are `"RIGHT_HAND"` and `"LEFT_HAND"`. Capturing both `"RIGHT_HAND"` and `"LEFT_HAND"` polarization requires two separate configs.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `LEFT_HAND | RIGHT_HAND | NONE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-spectrumconfig-polarization */
  Polarization?: string | Intrinsic
}

/**
 * Provides information about how AWS Ground Station should configure an antenna for downlink during a contact. Use an antenna downlink config in a mission profile to receive the downlink data in raw DigIF format.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface AntennaDownlinkConfig {
  /**
   * - Defines the spectrum configuration.
   * - _Required_: No
   * - _Type_: [SpectrumConfig](./aws-properties-groundstation-config-spectrumconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-antennadownlinkconfig-spectrumconfig */
  SpectrumConfig?: SpectrumConfig
}

/**
 * Config objects provide information to Ground Station about how to configure the antenna and how data flows during a contact.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface ConfigData {
  /**
   * - Provides information for an antenna downlink config object. Antenna downlink config objects are used to provide parameters for downlinks where no demodulation or decoding is performed by Ground Station (RF over IP downlinks).
   * - _Required_: No
   * - _Type_: [AntennaDownlinkConfig](./aws-properties-groundstation-config-antennadownlinkconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata-antennadownlinkconfig */
  AntennaDownlinkConfig?: AntennaDownlinkConfig
  /**
   * - Provides information for a downlink demod decode config object. Downlink demod decode config objects are used to provide parameters for downlinks where the Ground Station service will demodulate and decode the downlinked data.
   * - _Required_: No
   * - _Type_: [AntennaDownlinkDemodDecodeConfig](./aws-properties-groundstation-config-antennadownlinkdemoddecodeconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata-antennadownlinkdemoddecodeconfig */
  AntennaDownlinkDemodDecodeConfig?: AntennaDownlinkDemodDecodeConfig
  /**
   * - Provides information for an uplink config object. Uplink config objects are used to provide parameters for uplink contacts.
   * - _Required_: No
   * - _Type_: [AntennaUplinkConfig](./aws-properties-groundstation-config-antennauplinkconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata-antennauplinkconfig */
  AntennaUplinkConfig?: AntennaUplinkConfig
  /**
   * - Provides information for a dataflow endpoint config object. Dataflow endpoint config objects are used to provide parameters about which IP endpoint(s) to use during a contact. Dataflow endpoints are where Ground Station sends data during a downlink contact and where Ground Station receives data to send to the satellite during an uplink contact.
   * - _Required_: No
   * - _Type_: [DataflowEndpointConfig](./aws-properties-groundstation-config-dataflowendpointconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata-dataflowendpointconfig */
  DataflowEndpointConfig?: DataflowEndpointConfig
  /**
   * - Provides information for an S3 recording config object. S3 recording config objects are used to provide parameters for S3 recording during downlink contacts.
   * - _Required_: No
   * - _Type_: [S3RecordingConfig](./aws-properties-groundstation-config-s3recordingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata-s3recordingconfig */
  S3RecordingConfig?: S3RecordingConfig
  /**
   * - Provides information for a tracking config object. Tracking config objects are used to provide parameters about how to track the satellite through the sky during a contact.
   * - _Required_: No
   * - _Type_: [TrackingConfig](./aws-properties-groundstation-config-trackingconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata-trackingconfig */
  TrackingConfig?: TrackingConfig
  /**
   * - Provides information for an uplink echo config object. Uplink echo config objects are used to provide parameters for uplink echo during uplink contacts.
   * - _Required_: No
   * - _Type_: [UplinkEchoConfig](./aws-properties-groundstation-config-uplinkechoconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata-uplinkechoconfig */
  UplinkEchoConfig?: UplinkEchoConfig
}

/**
 * Creates a `Config` with the specified parameters.
 * Config objects provide Ground Station with the details necessary in order to schedule and execute satellite contacts.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html */

export interface GroundStationConfig {
  Type: 'AWS::GroundStation::Config'
  Properties: {
    /**
     * - Object containing the parameters of a config. Only one subtype may be specified per config. See the subtype definitions for a description of each config subtype.
     * - _Required_: Yes
     * - _Type_: [ConfigData](./aws-properties-groundstation-config-configdata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-configdata */
    ConfigData: ConfigData
    /**
     * - The name of the config object.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ a-zA-Z0-9_:-]{1,256}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-name */
    Name: string | Intrinsic
    /**
     * - Tags assigned to a resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-groundstation-config-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-config.html#cfn-groundstation-config-tags */
    Tags?: Tag[]
  }
}
