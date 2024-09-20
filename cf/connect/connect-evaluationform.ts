import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A scoring strategy of the evaluation form.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface ScoringStrategy {
  /**
   * - The scoring mode of the evaluation form.
   * - _Allowed values_: `QUESTION_ONLY` | `SECTION_ONLY`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `QUESTION_ONLY | SECTION_ONLY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-scoringstrategy-mode */
  Mode: string | Intrinsic
  /**
   * - The scoring status of the evaluation form.
   * - _Allowed values_: `ENABLED` | `DISABLED`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-scoringstrategy-status */
  Status: string | Intrinsic
}

/**
 * A key-value pair to associate with a resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface Tag {
  /**
   * - The key name of the tag. You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for the tag. You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, \_, ., /, =, +, and -
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-tag-value */
  Value: string | Intrinsic
}

/**
 * Information about the option range used for scoring in numeric questions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormNumericQuestionOption {
  /**
   * - The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation gets a score of 0.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-automaticfail */
  AutomaticFail?: boolean | Intrinsic
  /**
   * - The maximum answer value of the range option.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-maxvalue */
  MaxValue: number | Intrinsic
  /**
   * - The minimum answer value of the range option.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-minvalue */
  MinValue: number | Intrinsic
  /**
   * - The score assigned to answer values within the range option.
   * - _Minimum_: 0
   * - _Maximum_: 10
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionoption-score */
  Score?: number | Intrinsic
}

/**
 * Information about the automation configuration in single select questions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormSingleSelectQuestionOption {
  /**
   * - The flag to mark the option as automatic fail. If an automatic fail answer is provided, the overall evaluation gets a score of 0.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-automaticfail */
  AutomaticFail?: boolean | Intrinsic
  /**
   * - The identifier of the answer option. An identifier must be unique within the question.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 40.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9._-]{1,40}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-refid */
  RefId: string | Intrinsic
  /**
   * - The score assigned to the answer option.
   * - _Minimum_: 0
   * - _Maximum_: 10
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-score */
  Score?: number | Intrinsic
  /**
   * - The title of the answer option.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 128.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionoption-text */
  Text: string | Intrinsic
}

/**
 * Information about the property value used in automation of a numeric questions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface NumericQuestionPropertyValueAutomation {
  /**
   * - The property label of the automation.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `OVERALL_CUSTOMER_SENTIMENT_SCORE | OVERALL_AGENT_SENTIMENT_SCORE | NON_TALK_TIME | NON_TALK_TIME_PERCENTAGE | NUMBER_OF_INTERRUPTIONS | CONTACT_DURATION | AGENT_INTERACTION_DURATION | CUSTOMER_HOLD_TIME`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-numericquestionpropertyvalueautomation-label */
  Label: string | Intrinsic
}

/**
 * Information about the automation option based on a rule category for a single select question.
 * _Length Constraints_: Minimum length of 1. Maximum length of 50.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface SingleSelectQuestionRuleCategoryAutomation {
  /**
   * - The category name, as defined in Rules.
   * - _Minimum_: 1
   * - _Maximum_: 50
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-singleselectquestionrulecategoryautomation-category */
  Category: string | Intrinsic
  /**
   * - The condition to apply for the automation option. If the condition is PRESENT, then the option is applied when the contact data includes the category. Similarly, if the condition is NOT\_PRESENT, then the option is applied when the contact data does not include the category.
   * - _Allowed values_: `PRESENT` | `NOT_PRESENT`
   * - _Maximum_: 50
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PRESENT | NOT_PRESENT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-singleselectquestionrulecategoryautomation-condition */
  Condition: string | Intrinsic
  /**
   * - The identifier of the answer option. An identifier must be unique within the question.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 40.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9._-]{1,40}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-singleselectquestionrulecategoryautomation-optionrefid */
  OptionRefId: string | Intrinsic
}

/**
 * Information about the automation configuration in numeric questions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormNumericQuestionAutomation {
  /**
   * - The property value of the automation.
   * - _Required_: Yes
   * - _Type_: [NumericQuestionPropertyValueAutomation](./aws-properties-connect-evaluationform-numericquestionpropertyvalueautomation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionautomation-propertyvalue */
  PropertyValue: NumericQuestionPropertyValueAutomation
}

/**
 * The automation options of the single select question.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormSingleSelectQuestionAutomationOption {
  /**
   * - The automation option based on a rule category for the single select question.
   * - _Required_: Yes
   * - _Type_: [SingleSelectQuestionRuleCategoryAutomation](./aws-properties-connect-evaluationform-singleselectquestionrulecategoryautomation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionautomationoption-rulecategory */
  RuleCategory: SingleSelectQuestionRuleCategoryAutomation
}

/**
 * Information about properties for a numeric question in an evaluation form.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormNumericQuestionProperties {
  /**
   * - The automation properties of the numeric question.
   * - _Required_: No
   * - _Type_: [EvaluationFormNumericQuestionAutomation](./aws-properties-connect-evaluationform-evaluationformnumericquestionautomation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-automation */
  Automation?: EvaluationFormNumericQuestionAutomation
  /**
   * - The maximum answer value.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-maxvalue */
  MaxValue: number | Intrinsic
  /**
   * - The minimum answer value.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-minvalue */
  MinValue: number | Intrinsic
  /**
   * - The scoring options of the numeric question.
   * - _Required_: No
   * - _Type_: Array of [EvaluationFormNumericQuestionOption](./aws-properties-connect-evaluationform-evaluationformnumericquestionoption.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformnumericquestionproperties-options */
  Options?: EvaluationFormNumericQuestionOption[]
}

/**
 * Information about the automation configuration in single select questions. Automation options are evaluated in order, and the first matched option is applied. If no automation option matches, and there is a default option, then the default option is applied.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormSingleSelectQuestionAutomation {
  /**
   * - The identifier of the default answer option, when none of the automation options match the criteria.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 40.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9._-]{1,40}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionautomation-defaultoptionrefid */
  DefaultOptionRefId?: string | Intrinsic
  /**
   * - The automation options of the single select question.
   * - _Minimum_: 1
   * - _Maximum_: 20
   * - _Required_: Yes
   * - _Type_: Array of [EvaluationFormSingleSelectQuestionAutomationOption](./aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomationoption.html)
   * - _Minimum_: `1`
   * - _Maximum_: `20`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionautomation-options */
  Options: EvaluationFormSingleSelectQuestionAutomationOption[]
}

/**
 * Information about the options in single select questions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormSingleSelectQuestionProperties {
  /**
   * - The display mode of the single select question.
   * - _Required_: No
   * - _Type_: [EvaluationFormSingleSelectQuestionAutomation](./aws-properties-connect-evaluationform-evaluationformsingleselectquestionautomation.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionproperties-automation */
  Automation?: EvaluationFormSingleSelectQuestionAutomation
  /**
   * - The display mode of the single select question.
   * - _Allowed values_: `DROPDOWN` | `RADIO`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DROPDOWN | RADIO`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionproperties-displayas */
  DisplayAs?: string | Intrinsic
  /**
   * - The answer options of the single select question.
   * - _Minimum_: 2
   * - _Maximum_: 256
   * - _Required_: Yes
   * - _Type_: Array of [EvaluationFormSingleSelectQuestionOption](./aws-properties-connect-evaluationform-evaluationformsingleselectquestionoption.html)
   * - _Minimum_: `2`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsingleselectquestionproperties-options */
  Options: EvaluationFormSingleSelectQuestionOption[]
}

/**
 * Information about properties for a question in an evaluation form. The question type properties must be either for a numeric question or a single select question.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormQuestionTypeProperties {
  /**
   * - The properties of the numeric question.
   * - _Required_: No
   * - _Type_: [EvaluationFormNumericQuestionProperties](./aws-properties-connect-evaluationform-evaluationformnumericquestionproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestiontypeproperties-numeric */
  Numeric?: EvaluationFormNumericQuestionProperties
  /**
   * - The properties of the numeric question.
   * - _Required_: No
   * - _Type_: [EvaluationFormSingleSelectQuestionProperties](./aws-properties-connect-evaluationform-evaluationformsingleselectquestionproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestiontypeproperties-singleselect */
  SingleSelect?: EvaluationFormSingleSelectQuestionProperties
}

/**
 * Information about a question from an evaluation form.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormQuestion {
  /**
   * - The instructions of the section.
   * - _Length Constraints_: Minimum length of 0. Maximum length of 1024.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestion-instructions */
  Instructions?: string | Intrinsic
  /**
   * - The flag to enable not applicable answers to the question.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestion-notapplicableenabled */
  NotApplicableEnabled?: boolean | Intrinsic
  /**
   * - The type of the question.
   * - _Allowed values_: `NUMERIC` | `SINGLESELECT` | `TEXT`
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `NUMERIC | SINGLESELECT | TEXT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestion-questiontype */
  QuestionType: string | Intrinsic
  /**
   * - The properties of the type of question. Text questions do not have to define question type properties.
   * - _Required_: No
   * - _Type_: [EvaluationFormQuestionTypeProperties](./aws-properties-connect-evaluationform-evaluationformquestiontypeproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestion-questiontypeproperties */
  QuestionTypeProperties?: EvaluationFormQuestionTypeProperties
  /**
   * - The identifier of the question. An identifier must be unique within the evaluation form.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 40.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9._-]{1,40}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestion-refid */
  RefId: string | Intrinsic
  /**
   * - The title of the question.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 350.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `350`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestion-title */
  Title: string | Intrinsic
  /**
   * - The scoring weight of the section.
   * - _Minimum_: 0
   * - _Maximum_: 100
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformquestion-weight */
  Weight?: number | Intrinsic
}

/**
 * Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormItem {
  /**
   * - The information of the question.
   * - _Required_: No
   * - _Type_: [EvaluationFormQuestion](./aws-properties-connect-evaluationform-evaluationformquestion.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformitem-question */
  Question?: EvaluationFormQuestion
  /**
   * - The information of the section.
   * - _Required_: No
   * - _Type_: [EvaluationFormSection](./aws-properties-connect-evaluationform-evaluationformsection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformitem-section */
  Section?: EvaluationFormSection
}

/**
 * Information about a section from an evaluation form. A section can contain sections and/or questions. Evaluation forms can only contain sections and subsections (two level nesting).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormSection {
  /**
   * - The instructions of the section.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsection-instructions */
  Instructions?: string | Intrinsic
  /**
   * - The items of the section.
   * - _Minimum_: 1
   * - _Required_: No
   * - _Type_: Array of [EvaluationFormItem](./aws-properties-connect-evaluationform-evaluationformitem.html)
   * - _Minimum_: `1`
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsection-items */
  Items?: EvaluationFormItem[]
  /**
   * - The identifier of the section. An identifier must be unique within the evaluation form.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 40.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9._-]{1,40}$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsection-refid */
  RefId: string | Intrinsic
  /**
   * - The title of the section.
   * - _Length Constraints_: Minimum length of 1. Maximum length of 128.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsection-title */
  Title: string | Intrinsic
  /**
   * - The scoring weight of the section.
   * - _Minimum_: 0
   * - _Maximum_: 100
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `0`
   * - _Maximum_: `100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformsection-weight */
  Weight?: number | Intrinsic
}

/**
 * An item at the root level. All items must be sections.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface EvaluationFormBaseItem {
  /**
   * - A subsection or inner section of an item.
   * - _Required_: Yes
   * - _Type_: [EvaluationFormSection](./aws-properties-connect-evaluationform-evaluationformsection.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-evaluationformbaseitem-section */
  Section: EvaluationFormSection
}

/**
 * Creates an evaluation form for the specified Amazon Connect instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html */

export interface ConnectEvaluationForm extends ResourceAttributes {
  Type: 'AWS::Connect::EvaluationForm'
  Properties: {
    /**
     * - The description of the evaluation form.
     * - _Length Constraints_: Minimum length of 0. Maximum length of 1024.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-description */
    Description?: string | Intrinsic
    /**
     * - The identifier of the Amazon Connect instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-instancearn */
    InstanceArn: string | Intrinsic
    /**
     * - Items that are part of the evaluation form. The total number of sections and questions must not exceed 100 each. Questions must be contained in a section.
     * - _Minimum size_: 1
     * - _Maximum size_: 100
     * - _Required_: Yes
     * - _Type_: Array of [EvaluationFormBaseItem](./aws-properties-connect-evaluationform-evaluationformbaseitem.html)
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-items */
    Items: EvaluationFormBaseItem[]
    /**
     * - A scoring strategy of the evaluation form.
     * - _Required_: No
     * - _Type_: [ScoringStrategy](./aws-properties-connect-evaluationform-scoringstrategy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-scoringstrategy */
    ScoringStrategy?: ScoringStrategy
    /**
     * - The status of the evaluation form.
     * - _Allowed values_: `DRAFT` | `ACTIVE`
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DRAFT | ACTIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-status */
    Status: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-connect-evaluationform-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-tags */
    Tags?: Tag[]
    /**
     * - A title of the evaluation form.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-evaluationform.html#cfn-connect-evaluationform-title */
    Title: string | Intrinsic
  }
}
