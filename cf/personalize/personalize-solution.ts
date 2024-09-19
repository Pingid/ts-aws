import type { Intrinsic } from '../intrinsic/index.js' /**
 * When the solution performs AutoML (`performAutoML` is true in [CreateSolution](https://docs.aws.amazon.com/personalize/latest/dg/API_CreateSolution.html)), Amazon Personalize determines which recipe, from the specified list, optimizes the given metric. Amazon Personalize then uses that recipe for the solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface AutoMLConfig {
  /**
   * - The metric to optimize.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-automlconfig-metricname */
  MetricName?: string | Intrinsic
  /**
   * - The list of candidate recipes.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `256 | 100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-automlconfig-recipelist */
  RecipeList?: (string | Intrinsic)[]
}

/**
 * The metric to optimize during hyperparameter optimization (HPO).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface HpoObjective {
  /**
   * - The name of the metric.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hpoobjective-metricname */
  MetricName?: string | Intrinsic
  /**
   * - A regular expression for finding the metric in the training job logs.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hpoobjective-metricregex */
  MetricRegex?: string | Intrinsic
  /**
   * - The type of the metric. Valid values are `Maximize` and `Minimize`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `Maximize | Minimize`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hpoobjective-type */
  Type?: string | Intrinsic
}

/**
 * Describes the resource configuration for hyperparameter optimization (HPO).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface HpoResourceConfig {
  /**
   * - The maximum number of training jobs when you create a solution version. The maximum value for `maxNumberOfTrainingJobs` is `40`.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hporesourceconfig-maxnumberoftrainingjobs */
  MaxNumberOfTrainingJobs?: string | Intrinsic
  /**
   * - The maximum number of parallel training jobs when you create a solution version. The maximum value for `maxParallelTrainingJobs` is `10`.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hporesourceconfig-maxparalleltrainingjobs */
  MaxParallelTrainingJobs?: string | Intrinsic
}

/**
 * Provides the name and range of a categorical hyperparameter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface CategoricalHyperParameterRange {
  /**
   * - The name of the hyperparameter.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-categoricalhyperparameterrange-name */
  Name?: string | Intrinsic
  /**
   * - A list of the categories for the hyperparameter.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1000 | 100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-categoricalhyperparameterrange-values */
  Values?: (string | Intrinsic)[]
}

/**
 * Provides the name and range of a continuous hyperparameter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface ContinuousHyperParameterRange {
  /**
   * - The maximum allowable value for the hyperparameter.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `-1000000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-continuoushyperparameterrange-maxvalue */
  MaxValue?: number | Intrinsic
  /**
   * - The minimum allowable value for the hyperparameter.
   * - _Required_: No
   * - _Type_: Number
   * - _Minimum_: `-1000000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-continuoushyperparameterrange-minvalue */
  MinValue?: number | Intrinsic
  /**
   * - The name of the hyperparameter.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-continuoushyperparameterrange-name */
  Name?: string | Intrinsic
}

/**
 * Provides the name and range of an integer-valued hyperparameter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface IntegerHyperParameterRange {
  /**
   * - The maximum allowable value for the hyperparameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Maximum_: `1000000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-integerhyperparameterrange-maxvalue */
  MaxValue?: number | Intrinsic
  /**
   * - The minimum allowable value for the hyperparameter.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `-1000000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-integerhyperparameterrange-minvalue */
  MinValue?: number | Intrinsic
  /**
   * - The name of the hyperparameter.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-integerhyperparameterrange-name */
  Name?: string | Intrinsic
}

/**
 * Specifies the hyperparameters and their ranges. Hyperparameters can be categorical, continuous, or integer-valued.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface AlgorithmHyperParameterRanges {
  /**
   * - Provides the name and range of a categorical hyperparameter.
   * - _Required_: No
   * - _Type_: Array of [CategoricalHyperParameterRange](./aws-properties-personalize-solution-categoricalhyperparameterrange.html)
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-algorithmhyperparameterranges-categoricalhyperparameterranges */
  CategoricalHyperParameterRanges?: CategoricalHyperParameterRange[]
  /**
   * - Provides the name and range of a continuous hyperparameter.
   * - _Required_: No
   * - _Type_: Array of [ContinuousHyperParameterRange](./aws-properties-personalize-solution-continuoushyperparameterrange.html)
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-algorithmhyperparameterranges-continuoushyperparameterranges */
  ContinuousHyperParameterRanges?: ContinuousHyperParameterRange[]
  /**
   * - Provides the name and range of an integer-valued hyperparameter.
   * - _Required_: No
   * - _Type_: Array of [IntegerHyperParameterRange](./aws-properties-personalize-solution-integerhyperparameterrange.html)
   * - _Maximum_: `100`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-algorithmhyperparameterranges-integerhyperparameterranges */
  IntegerHyperParameterRanges?: IntegerHyperParameterRange[]
}

/**
 * Describes the properties for hyperparameter optimization (HPO).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface HpoConfig {
  /**
   * - The hyperparameters and their allowable ranges.
   * - _Required_: No
   * - _Type_: [AlgorithmHyperParameterRanges](./aws-properties-personalize-solution-algorithmhyperparameterranges.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hpoconfig-algorithmhyperparameterranges */
  AlgorithmHyperParameterRanges?: AlgorithmHyperParameterRanges
  /**
   * - The metric to optimize during HPO.
   * - _Required_: No
   * - _Type_: [HpoObjective](./aws-properties-personalize-solution-hpoobjective.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hpoconfig-hpoobjective */
  HpoObjective?: HpoObjective
  /**
   * - Describes the resource configuration for HPO.
   * - _Required_: No
   * - _Type_: [HpoResourceConfig](./aws-properties-personalize-solution-hporesourceconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-hpoconfig-hporesourceconfig */
  HpoResourceConfig?: HpoResourceConfig
}

/**
 * Describes the configuration properties for the solution.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface SolutionConfig {
  /**
   * - Lists the algorithm hyperparameters and their values.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.{1,}`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-solutionconfig-algorithmhyperparameters */
  AlgorithmHyperParameters?: Record<string, string | Intrinsic>
  /**
   * - The [AutoMLConfig](https://docs.aws.amazon.com/personalize/latest/dg/API_AutoMLConfig.html) object containing a list of recipes to search when AutoML is performed.
   * - _Required_: No
   * - _Type_: [AutoMLConfig](./aws-properties-personalize-solution-automlconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-solutionconfig-automlconfig */
  AutoMLConfig?: AutoMLConfig
  /**
   * - Only events with a value greater than or equal to this threshold are used for training a model.
   * - _Required_: No
   * - _Type_: String
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-solutionconfig-eventvaluethreshold */
  EventValueThreshold?: string | Intrinsic
  /**
   * - Lists the feature transformation parameters.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `.{1,}`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-solutionconfig-featuretransformationparameters */
  FeatureTransformationParameters?: Record<string, string | Intrinsic>
  /**
   * - Describes the properties for hyperparameter optimization (HPO).
   * - _Required_: No
   * - _Type_: [HpoConfig](./aws-properties-personalize-solution-hpoconfig.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-solutionconfig-hpoconfig */
  HpoConfig?: HpoConfig
}

/**
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html */

export interface PersonalizeSolution {
  Type: 'AWS::Personalize::Solution'
  Properties: {
    /**
     * - The Amazon Resource Name (ARN) of the dataset group that provides the training data.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:([a-z\d-]+):personalize:.*:.*:.+`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-datasetgrouparn */
    DatasetGroupArn: string | Intrinsic
    /**
     * - The event type (for example, 'click' or 'like') that is used for training the model. If no `eventType` is provided, Amazon Personalize uses all interactions for training with equal weight regardless of type.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-eventtype */
    EventType?: string | Intrinsic
    /**
     * - The name of the solution.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9\-_]*`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-name */
    Name: string | Intrinsic
    /**
     * - When true, Amazon Personalize performs a search for the best USER\_PERSONALIZATION recipe from the list specified in the solution configuration (`recipeArn` must not be specified). When false (the default), Amazon Personalize uses `recipeArn` for training.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-performautoml */
    PerformAutoML?: boolean | Intrinsic
    /**
     * - Whether to perform hyperparameter optimization (HPO) on the chosen recipe. The default is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-performhpo */
    PerformHPO?: boolean | Intrinsic
    /**
     * - The ARN of the recipe used to create the solution. This is required when `performAutoML` is false.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:([a-z\d-]+):personalize:.*:.*:.+`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-recipearn */
    RecipeArn?: string | Intrinsic
    /**
     * - Describes the configuration properties for the solution.
     * - _Required_: No
     * - _Type_: [SolutionConfig](./aws-properties-personalize-solution-solutionconfig.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-personalize-solution.html#cfn-personalize-solution-solutionconfig */
    SolutionConfig?: SolutionConfig
  }
}
