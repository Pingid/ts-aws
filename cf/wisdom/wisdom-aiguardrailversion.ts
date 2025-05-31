import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates an Amazon Q in Connect AI Guardrail version.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrailversion.html */

export interface WisdomAIGuardrailVersion extends ResourceAttributes {
    "Type": "AWS::Wisdom::AIGuardrailVersion";
    "Properties": {
        /**
         * - The ID of the AI guardrail version.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrailversion.html#cfn-wisdom-aiguardrailversion-aiguardrailid */
        "AIGuardrailId": string | Intrinsic;
        /**
         * - The ID of the AI guardrail version assistant.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrailversion.html#cfn-wisdom-aiguardrailversion-assistantid */
        "AssistantId": string | Intrinsic;
        /**
         * - The modified time of the AI guardrail version in seconds.
         * - _Required_: No
         * - _Type_: Number
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-aiguardrailversion.html#cfn-wisdom-aiguardrailversion-modifiedtimeseconds */
        "ModifiedTimeSeconds"?: number | Intrinsic;
    };
}