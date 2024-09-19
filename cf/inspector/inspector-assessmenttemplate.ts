import type { Intrinsic } from '../intrinsic/index.js' /**
 * A key and value pair. This data type is used as a request parameter in the SetTagsForResource action and a response element in the ListTagsForResource action.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html */

export interface Tag {
  /**
   * - A tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-tag-key */
  Key: string | Intrinsic
  /**
   * - A value assigned to a tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::Inspector::AssessmentTemplate` resource creates an Amazon Inspector assessment template, which specifies the Inspector assessment targets that will be evaluated by an assessment run and its related configurations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html */

export interface InspectorAssessmentTemplate {
  Type: 'AWS::Inspector::AssessmentTemplate'
  Properties: {
    /**
     * - The ARN of the assessment target to be included in the assessment template.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `300`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-assessmenttargetarn */
    AssessmentTargetArn: string | Intrinsic
    /**
     * - The user-defined name that identifies the assessment template that you want to create. You can create several assessment templates for the same assessment target. The names of the assessment templates that correspond to a particular assessment target must be unique.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `140`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-assessmenttemplatename */
    AssessmentTemplateName?: string | Intrinsic
    /**
     * - The duration of the assessment run in seconds.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Minimum_: `180`
     * - _Maximum_: `86400`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-durationinseconds */
    DurationInSeconds: number | Intrinsic
    /**
     * - The ARNs of the rules packages that you want to use in the assessment template.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-rulespackagearns */
    RulesPackageArns: (string | Intrinsic)[]
    /**
     * - The user-defined attributes that are assigned to every finding that is generated by the assessment run that uses this assessment template. Within an assessment template, each key must be unique.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-inspector-assessmenttemplate-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspector-assessmenttemplate.html#cfn-inspector-assessmenttemplate-userattributesforfindings */
    UserAttributesForFindings?: Tag[]
  }
}
