import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a version of the flow that you can deploy. For more information, see [Deploy a flow in Amazon Bedrock](https://docs.aws.amazon.com/bedrock/latest/userguide/flows-deploy.html) in the Amazon Bedrock User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html */

export interface BedrockFlowVersion extends ResourceAttributes {
    "Type": "AWS::Bedrock::FlowVersion";
    "Properties": {
        /**
         * - The description of the flow version.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html#cfn-bedrock-flowversion-description */
        "Description"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the flow that the version belongs to.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws(-[^:]+)?:bedrock:[a-z0-9-]{1,20}:[0-9]{12}:flow/[0-9a-zA-Z]{10}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-flowversion.html#cfn-bedrock-flowversion-flowarn */
        "FlowArn": string | Intrinsic;
    };
}