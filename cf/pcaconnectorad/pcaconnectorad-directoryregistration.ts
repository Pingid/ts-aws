import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a directory registration that authorizes communication between AWS Private CA and an Active Directory
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html */

export interface PCAConnectorADDirectoryRegistration extends ResourceAttributes {
    "Type": "AWS::PCAConnectorAD::DirectoryRegistration";
    "Properties": {
        /**
         * - The identifier of the Active Directory.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^d-[0-9a-f]{10}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html#cfn-pcaconnectorad-directoryregistration-directoryid */
        "DirectoryId": string | Intrinsic;
        /**
         * - Metadata assigned to a directory registration consisting of a key-value pair.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorad-directoryregistration.html#cfn-pcaconnectorad-directoryregistration-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}