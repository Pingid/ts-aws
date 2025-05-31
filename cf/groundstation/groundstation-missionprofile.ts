import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A dataflow edge defines from where and to where data will flow during a contact.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html */

export interface DataflowEdge {
    /**
     * - The ARN of the destination for this dataflow edge. For example, specify the ARN of a dataflow endpoint config for a downlink edge or an antenna uplink config for an uplink edge.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-dataflowedge-destination */
    "Destination"?: string | Intrinsic;
    /**
     * - The ARN of the source for this dataflow edge. For example, specify the ARN of an antenna downlink config for a downlink edge or a dataflow endpoint config for an uplink edge.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-dataflowedge-source */
    "Source"?: string | Intrinsic;
}

/**
 * KMS key info.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html */

export interface StreamsKmsKey {
    /**
     * - KMS Alias Arn.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-streamskmskey-kmsaliasarn */
    "KmsAliasArn"?: string | Intrinsic;
    /**
     * - KMS Alias Name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^alias/[a-zA-Z0-9:/_-]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-streamskmskey-kmsaliasname */
    "KmsAliasName"?: string | Intrinsic;
    /**
     * - KMS Key Arn.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-streamskmskey-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
}

/**
 * The key name of the tag. You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with `aws:`. digits, whitespace, `_`, `.`, `:`, `/`, `=`, `+`, `@`, `-`, and `"`.
 * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html */

export interface Tag {
    /**
     * - Name of the object key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ a-zA-Z0-9\+\-=._:/@]{1,128}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[ a-zA-Z0-9\+\-=._:/@]{1,256}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Mission profiles specify parameters and provide references to config objects to define how Ground Station lists and executes contacts.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html */

export interface GroundStationMissionProfile extends ResourceAttributes {
    "Type": "AWS::GroundStation::MissionProfile";
    "Properties": {
        /**
         * - Amount of time in seconds after a contact ends that you’d like to receive a Ground Station Contact State Change indicating the pass has finished.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Maximum_: `21600`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-contactpostpassdurationseconds */
        "ContactPostPassDurationSeconds"?: number | Intrinsic;
        /**
         * - Amount of time in seconds prior to contact start that you'd like to receive a Ground Station Contact State Change Event indicating an upcoming pass.
         * - _Required_: No
         * - _Type_: Integer
         * - _Minimum_: `0`
         * - _Maximum_: `21600`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-contactprepassdurationseconds */
        "ContactPrePassDurationSeconds"?: number | Intrinsic;
        /**
         * - A list containing lists of config ARNs. Each list of config ARNs is an edge, with a "from" config and a "to" config.
         * - _Required_: Yes
         * - _Type_: Array of [DataflowEdge](./aws-properties-groundstation-missionprofile-dataflowedge.html)
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-dataflowedges */
        "DataflowEdges": DataflowEdge[];
        /**
         * - Minimum length of a contact in seconds that Ground Station will return when listing contacts. Ground Station will not return contacts shorter than this duration.
         * - _Required_: Yes
         * - _Type_: Integer
         * - _Minimum_: `1`
         * - _Maximum_: `21600`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-minimumviablecontactdurationseconds */
        "MinimumViableContactDurationSeconds": number | Intrinsic;
        /**
         * - The name of the mission profile.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[ a-zA-Z0-9_:-]{1,256}$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-name */
        "Name": string | Intrinsic;
        /**
         * - KMS key to use for encrypting streams.
         * - _Required_: No
         * - _Type_: [StreamsKmsKey](./aws-properties-groundstation-missionprofile-streamskmskey.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-streamskmskey */
        "StreamsKmsKey"?: StreamsKmsKey;
        /**
         * - Role to use for encrypting streams with KMS key.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-streamskmsrole */
        "StreamsKmsRole"?: string | Intrinsic;
        /**
         * - Tags assigned to the mission profile.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-groundstation-missionprofile-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-tags */
        "Tags"?: Tag[];
        /**
         * - The ARN of a tracking config objects that defines how to track the satellite through the sky during a contact.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(arn:(aws[a-zA-Z-]*)?:[a-z0-9-.]+:.*)|()$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-groundstation-missionprofile.html#cfn-groundstation-missionprofile-trackingconfigarn */
        "TrackingConfigArn": string | Intrinsic;
    };
}