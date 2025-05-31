import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::DataSync::LocationFSxLustre](./aws-resource-datasync-locationfsxlustre.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s+=._:/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::DataSync::LocationFSxLustre` resource specifies an endpoint for an Amazon FSx for Lustre file system.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html */

export interface DataSyncLocationFSxLustre extends ResourceAttributes {
    "Type": "AWS::DataSync::LocationFSxLustre";
    "Properties": {
        /**
         * - Specifies the Amazon Resource Name (ARN) of the FSx for Lustre file system.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):fsx:[a-z\-0-9]+:[0-9]{12}:file-system/fs-[0-9a-f]+$`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-fsxfilesystemarn */
        "FsxFilesystemArn"?: string | Intrinsic;
        /**
         * - The ARNs of the security groups that are used to configure the FSx for Lustre file system.
         * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):ec2:[a-z\-0-9]*:[0-9]{12}:security-group/.*$`
         * - _Length constraints_: Maximum length of 128.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `128 | 5`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-securitygrouparns */
        "SecurityGroupArns": (string | Intrinsic)[];
        /**
         * - Specifies a mount path for your FSx for Lustre file system. The path can include subdirectories.
         * - When the location is used as a source, DataSync reads data from the mount path. When the location is used as a destination, DataSync writes data to the mount path. If you don't include this parameter, DataSync uses the file system's root directory (`/`).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_\-\+\./\(\)\$\p{Zs}]+$`
         * - _Maximum_: `4096`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-subdirectory */
        "Subdirectory"?: string | Intrinsic;
        /**
         * - Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your location.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-datasync-locationfsxlustre-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-locationfsxlustre.html#cfn-datasync-locationfsxlustre-tags */
        "Tags"?: Tag[];
    };
}