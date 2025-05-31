import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tags to attach to the service profile. Tags are metadata that you can use to manage a resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html */

export interface Tag {
    /**
     * - The tag's key value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * LoRaWANServiceProfile object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html */

export interface LoRaWANServiceProfile {
    /**
     * - The AddGWMetaData value.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-addgwmetadata */
    "AddGwMetadata"?: boolean | Intrinsic;
    /**
     * - The ChannelMask value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-channelmask */
    "ChannelMask"?: string | Intrinsic;
    /**
     * - The DevStatusReqFreq value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-devstatusreqfreq */
    "DevStatusReqFreq"?: number | Intrinsic;
    /**
     * - The DLBucketSize value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-dlbucketsize */
    "DlBucketSize"?: number | Intrinsic;
    /**
     * - The DLRate value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-dlrate */
    "DlRate"?: number | Intrinsic;
    /**
     * - The DLRatePolicy value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-dlratepolicy */
    "DlRatePolicy"?: string | Intrinsic;
    /**
     * - The DRMax value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `15`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-drmax */
    "DrMax"?: number | Intrinsic;
    /**
     * - The DRMin value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `15`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-drmin */
    "DrMin"?: number | Intrinsic;
    /**
     * - The HRAllowed value that describes whether handover roaming is allowed.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-hrallowed */
    "HrAllowed"?: boolean | Intrinsic;
    /**
     * - The MinGwDiversity value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-mingwdiversity */
    "MinGwDiversity"?: number | Intrinsic;
    /**
     * - The NwkGeoLoc value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-nwkgeoloc */
    "NwkGeoLoc"?: boolean | Intrinsic;
    /**
     * - The PRAllowed value that describes whether passive roaming is allowed.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-prallowed */
    "PrAllowed"?: boolean | Intrinsic;
    /**
     * - The RAAllowed value that describes whether roaming activation is allowed.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-raallowed */
    "RaAllowed"?: boolean | Intrinsic;
    /**
     * - The ReportDevStatusBattery value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-reportdevstatusbattery */
    "ReportDevStatusBattery"?: boolean | Intrinsic;
    /**
     * - The ReportDevStatusMargin value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-reportdevstatusmargin */
    "ReportDevStatusMargin"?: boolean | Intrinsic;
    /**
     * - The TargetPer value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-targetper */
    "TargetPer"?: number | Intrinsic;
    /**
     * - The UlBucketSize value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-ulbucketsize */
    "UlBucketSize"?: number | Intrinsic;
    /**
     * - The ULRate value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `2147483647`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-ulrate */
    "UlRate"?: number | Intrinsic;
    /**
     * - The ULRatePolicy value.
     * - This property is `ReadOnly` and can't be inputted for create. It's returned with `Fn::GetAtt`
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawanserviceprofile-ulratepolicy */
    "UlRatePolicy"?: string | Intrinsic;
}

/**
 * Creates a new service profile.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html */

export interface IoTWirelessServiceProfile extends ResourceAttributes {
    "Type": "AWS::IoTWireless::ServiceProfile";
    "Properties": {
        /**
         * - LoRaWAN service profile object.
         * - _Required_: No
         * - _Type_: [LoRaWANServiceProfile](./aws-properties-iotwireless-serviceprofile-lorawanserviceprofile.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-lorawan */
        "LoRaWAN"?: LoRaWANServiceProfile;
        /**
         * - The name of the new resource.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-name */
        "Name"?: string | Intrinsic;
        /**
         * - The tags are an array of key-value pairs to attach to the specified resource. Tags can have a minimum of 0 and a maximum of 50 items.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-iotwireless-serviceprofile-tag.html)
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iotwireless-serviceprofile.html#cfn-iotwireless-serviceprofile-tags */
        "Tags"?: Tag[];
    };
}