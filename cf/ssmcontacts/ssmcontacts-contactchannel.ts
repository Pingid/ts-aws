import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::SSMContacts::ContactChannel` resource specifies a contact channel as the method that Incident Manager uses to engage your contact.
 * ###### Note
 *
 * **Template example**: We recommend creating all Incident Manager `Contacts` resources using a single AWS CloudFormation template. For a demonstration, see the examples for [AWS::SSMContacts::Contacts](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contact.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html */

export interface SSMContactsContactChannel extends ResourceAttributes {
  Type: 'AWS::SSMContacts::ContactChannel'
  Properties: {
    /**
     * - The details that Incident Manager uses when trying to engage the contact channel.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeladdress */
    ChannelAddress?: string | Intrinsic
    /**
     * - The name of the contact channel.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z 0-9_\-+'&amp;\uD83C-\uDBFF\uDC00-\uDFFF\u2000-\u3300]+`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channelname */
    ChannelName?: string | Intrinsic
    /**
     * - The type of the contact channel. Incident Manager supports three contact methods:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SMS | VOICE | EMAIL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-channeltype */
    ChannelType?: string | Intrinsic
    /**
     * - The Amazon Resource Name (ARN) of the contact you are adding the contact channel to.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:[-\w+=\/,.@]+:[-\w+=\/,.@]+:[-\w+=\/,.@]*:[0-9]+:([\w+=\/,.@:-]+)*`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-contactid */
    ContactId?: string | Intrinsic
    /**
     * - If you want to activate the channel at a later time, you can choose to defer activation. Incident Manager can't engage your contact channel until it has been activated.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ssmcontacts-contactchannel.html#cfn-ssmcontacts-contactchannel-deferactivation */
    DeferActivation?: boolean | Intrinsic
  }
}
