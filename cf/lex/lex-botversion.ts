import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The version of a bot used for a bot locale.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html */

export interface BotVersionLocaleDetails {
  /**
   * - The version of a bot used for a bot locale.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(DRAFT|[0-9]+)$`
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-botversionlocaledetails-sourcebotversion */
  SourceBotVersion: string | Intrinsic
}

/**
 * Specifies the locale that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html */

export interface BotVersionLocaleSpecification {
  /**
   * - The version of a bot used for a bot locale.
   * - _Required_: Yes
   * - _Type_: [BotVersionLocaleDetails](./aws-properties-lex-botversion-botversionlocaledetails.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-botversionlocalespecification-botversionlocaledetails */
  BotVersionLocaleDetails: BotVersionLocaleDetails
  /**
   * - The identifier of the locale to add to the version.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-botversionlocalespecification-localeid */
  LocaleId: string | Intrinsic
}

/**
 * ###### Note
 *
 * Amazon Lex V2 is the only supported version in AWS CloudFormation.
 * Specifies a new version of the bot based on the `DRAFT` version. If the `DRAFT` version of this resource hasn't changed since you created the last version, Amazon Lex doesn't create a new version, it returns the last created version.
 * When you specify the first version of a bot, Amazon Lex sets the version to 1. Subsequent versions increment by 1.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html */

export interface LexBotVersion extends ResourceAttributes {
  Type: 'AWS::Lex::BotVersion'
  Properties: {
    /**
     * - The unique identifier of the bot.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-zA-Z]+$`
     * - _Minimum_: `10`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-botid */
    BotId: string | Intrinsic
    /**
     * - Specifies the locales that Amazon Lex adds to this version. You can choose the Draft version or any other previously published version for each locale. When you specify a source version, the locale data is copied from the source version to the new version.
     * - _Required_: Yes
     * - _Type_: [Array](./aws-properties-lex-botversion-botversionlocalespecification.html) of [BotVersionLocaleSpecification](./aws-properties-lex-botversion-botversionlocalespecification.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-botversionlocalespecification */
    BotVersionLocaleSpecification: BotVersionLocaleSpecification[]
    /**
     * - The description of the version.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lex-botversion.html#cfn-lex-botversion-description */
    Description?: string | Intrinsic
  }
}
