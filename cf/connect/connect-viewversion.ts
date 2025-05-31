import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a version for the specified customer-managed view within the specified instance.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html */

export interface ConnectViewVersion extends ResourceAttributes {
    "Type": "AWS::Connect::ViewVersion";
    "Properties": {
        /**
         * - The description of the view version.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([\p{L}\p{N}_.:\/=+\-@,]+[\p{L}\p{Z}\p{N}_.:\/=+\-@,]*)$`
         * - _Minimum_: `1`
         * - _Maximum_: `4096`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html#cfn-connect-viewversion-versiondescription */
        "VersionDescription"?: string | Intrinsic;
        /**
         * - The unqualified Amazon Resource Name (ARN) of the view.
         * - For example:
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*view/[-:a-zA-Z0-9]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html#cfn-connect-viewversion-viewarn */
        "ViewArn": string | Intrinsic;
        /**
         * - Indicates the checksum value of the latest published view content.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9]{64}$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-viewversion.html#cfn-connect-viewversion-viewcontentsha256 */
        "ViewContentSha256"?: string | Intrinsic;
    };
}