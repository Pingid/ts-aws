import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates a new Amazon Q in Connect message template version from the current content and configuration of a message template. Versions are immutable and monotonically increasing. Once a version is created, you can reference a specific version of the message template by passing in `<messageTemplateArn>:<versionNumber>` as the message template identifier. An error is displayed if the supplied `messageTemplateContentSha256` is different from the `messageTemplateContentSha256` of the message template with `$LATEST` qualifier. If multiple `CreateMessageTemplateVersion` requests are made while the message template remains the same, only the first invocation creates a new version and the succeeding requests will return the same response as the first invocation.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplateversion.html */

export interface WisdomMessageTemplateVersion extends ResourceAttributes {
    "Type": "AWS::Wisdom::MessageTemplateVersion";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the message template.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:[a-z-]*?:wisdom:[a-z0-9-]*?:[0-9]{12}:[a-z-]*?/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}(?:/[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12})?$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplateversion.html#cfn-wisdom-messagetemplateversion-messagetemplatearn */
        "MessageTemplateArn": string | Intrinsic;
        /**
         * - The content SHA256 of the message template.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-wisdom-messagetemplateversion.html#cfn-wisdom-messagetemplateversion-messagetemplatecontentsha256 */
        "MessageTemplateContentSha256"?: string | Intrinsic;
    };
}