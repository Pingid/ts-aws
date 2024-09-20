import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Defines filters that the lifecycle policy uses to determine impacted resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface Filter {
  /**
   * - For age-based filters, this is the number of resources to keep on hand after the lifecycle `DELETE` action is applied. Impacted resources are only deleted if you have more than this number of resources. If you have fewer resources than this number, the impacted resource is not deleted.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-filter-retainatleast */
  RetainAtLeast?: number | Intrinsic
  /**
   * - Filter resources based on either `age` or `count`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `AGE | COUNT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-filter-type */
  Type: string | Intrinsic
  /**
   * - Defines the unit of time that the lifecycle policy uses to determine impacted resources. This is required for age-based rules.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DAYS | WEEKS | MONTHS | YEARS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-filter-unit */
  Unit?: string | Intrinsic
  /**
   * - The number of units for the time period or for the count. For example, a value of `6` might refer to six months or six AMIs.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-filter-value */
  Value: number | Intrinsic
}

/**
 * Specifies an Image Builder recipe that the lifecycle policy uses for resource selection.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface RecipeSelection {
  /**
   * - The name of an Image Builder recipe that the lifecycle policy uses for resource selection.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-recipeselection-name */
  Name: string | Intrinsic
  /**
   * - The version of the Image Builder recipe specified by the `name` field.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[0-9]+\.[0-9]+\.[0-9]+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-recipeselection-semanticversion */
  SemanticVersion: string | Intrinsic
}

/**
 * Specifies how the lifecycle policy should apply actions to selected resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface IncludeResources {
  /**
   * - Specifies whether the lifecycle action should apply to distributed AMIs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-includeresources-amis */
  Amis?: boolean | Intrinsic
  /**
   * - Specifies whether the lifecycle action should apply to distributed containers.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-includeresources-containers */
  Containers?: boolean | Intrinsic
  /**
   * - Specifies whether the lifecycle action should apply to snapshots associated with distributed AMIs.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-includeresources-snapshots */
  Snapshots?: boolean | Intrinsic
}

/**
 * Defines criteria to exclude AMIs from lifecycle actions based on the last time they were used to launch an instance.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface LastLaunched {
  /**
   * - Defines the unit of time that the lifecycle policy uses to calculate elapsed time since the last instance launched from the AMI. For example: days, weeks, months, or years.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DAYS | WEEKS | MONTHS | YEARS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-lastlaunched-unit */
  Unit: string | Intrinsic
  /**
   * - The integer number of units for the time period. For example `6` (months).
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `365`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-lastlaunched-value */
  Value: number | Intrinsic
}

/**
 * Resource selection criteria for the lifecycle policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface ResourceSelection {
  /**
   * - A list of recipes that are used as selection criteria for the output images that the lifecycle policy applies to.
   * - _Required_: No
   * - _Type_: Array of [RecipeSelection](./aws-properties-imagebuilder-lifecyclepolicy-recipeselection.html)
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-resourceselection-recipes */
  Recipes?: RecipeSelection[]
  /**
   * - A list of tags that are used as selection criteria for the Image Builder image resources that the lifecycle policy applies to.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.{1,}`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-resourceselection-tagmap */
  TagMap?: Record<string, string | Intrinsic>
}

/**
 * Contains selection criteria for the lifecycle policy.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface Action {
  /**
   * - Specifies the resources that the lifecycle policy applies to.
   * - _Required_: No
   * - _Type_: [IncludeResources](./aws-properties-imagebuilder-lifecyclepolicy-includeresources.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-action-includeresources */
  IncludeResources?: IncludeResources
  /**
   * - Specifies the lifecycle action to take.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DELETE | DEPRECATE | DISABLE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-action-type */
  Type: string | Intrinsic
}

/**
 * Defines criteria for AMIs that are excluded from lifecycle actions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface AmiExclusionRules {
  /**
   * - Configures whether public AMIs are excluded from the lifecycle action.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-ispublic */
  IsPublic?: boolean | Intrinsic
  /**
   * - Specifies configuration details for Image Builder to exclude the most recent resources from lifecycle actions.
   * - _Required_: No
   * - _Type_: [LastLaunched](./aws-properties-imagebuilder-lifecyclepolicy-lastlaunched.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-lastlaunched */
  LastLaunched?: LastLaunched
  /**
   * - Configures AWS Regions that are excluded from the lifecycle action.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-regions */
  Regions?: (string | Intrinsic)[]
  /**
   * - Specifies AWS accounts whose resources are excluded from the lifecycle action.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `1536`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-sharedaccounts */
  SharedAccounts?: (string | Intrinsic)[]
  /**
   * - Lists tags that should be excluded from lifecycle actions for the AMIs that have them.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.{1,}`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-amiexclusionrules-tagmap */
  TagMap?: Record<string, string | Intrinsic>
}

/**
 * Specifies resources that lifecycle policy actions should not apply to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface ExclusionRules {
  /**
   * - Lists configuration values that apply to AMIs that Image Builder should exclude from the lifecycle action.
   * - _Required_: No
   * - _Type_: [AmiExclusionRules](./aws-properties-imagebuilder-lifecyclepolicy-amiexclusionrules.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-exclusionrules-amis */
  Amis?: AmiExclusionRules
  /**
   * - Contains a list of tags that Image Builder uses to skip lifecycle actions for Image Builder image resources that have them.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.{1,}`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-exclusionrules-tagmap */
  TagMap?: Record<string, string | Intrinsic>
}

/**
 * The configuration details for a lifecycle policy resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface PolicyDetail {
  /**
   * - Configuration details for the policy action.
   * - _Required_: Yes
   * - _Type_: [Action](./aws-properties-imagebuilder-lifecyclepolicy-action.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-policydetail-action */
  Action: Action
  /**
   * - Additional rules to specify resources that should be exempt from policy actions.
   * - _Required_: No
   * - _Type_: [ExclusionRules](./aws-properties-imagebuilder-lifecyclepolicy-exclusionrules.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-policydetail-exclusionrules */
  ExclusionRules?: ExclusionRules
  /**
   * - Specifies the resources that the lifecycle policy applies to.
   * - _Required_: Yes
   * - _Type_: [Filter](./aws-properties-imagebuilder-lifecyclepolicy-filter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-policydetail-filter */
  Filter: Filter
}

/**
 * Create a lifecycle policy resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html */

export interface ImageBuilderLifecyclePolicy extends ResourceAttributes {
  Type: 'AWS::ImageBuilder::LifecyclePolicy'
  Properties: {
    /**
     * - Optional description for the lifecycle policy.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-description */
    Description?: string | Intrinsic
    /**
     * - The name or Amazon Resource Name (ARN) for the IAM role you create that grants Image Builder access to run lifecycle actions.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?:arn:aws(?:-[a-z]+)*:iam::[0-9]{12}:role/)?[a-zA-Z_0-9+=,.@\-_/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-executionrole */
    ExecutionRole: string | Intrinsic
    /**
     * - The name of the lifecycle policy to create.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[-_A-Za-z-0-9][-_A-Za-z0-9 ]{1,126}[-_A-Za-z-0-9]$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-name */
    Name: string | Intrinsic
    /**
     * - Configuration details for the lifecycle policy rules.
     * - _Required_: Yes
     * - _Type_: Array of [PolicyDetail](./aws-properties-imagebuilder-lifecyclepolicy-policydetail.html)
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-policydetails */
    PolicyDetails: PolicyDetail[]
    /**
     * - Selection criteria for the resources that the lifecycle policy applies to.
     * - _Required_: Yes
     * - _Type_: [ResourceSelection](./aws-properties-imagebuilder-lifecyclepolicy-resourceselection.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-resourceselection */
    ResourceSelection: ResourceSelection
    /**
     * - The type of Image Builder resource that the lifecycle policy applies to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AMI_IMAGE | CONTAINER_IMAGE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-resourcetype */
    ResourceType: string | Intrinsic
    /**
     * - Indicates whether the lifecycle policy resource is enabled.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DISABLED | ENABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-status */
    Status?: string | Intrinsic
    /**
     * - Tags to apply to the lifecycle policy resource.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.{1,}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-imagebuilder-lifecyclepolicy.html#cfn-imagebuilder-lifecyclepolicy-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
