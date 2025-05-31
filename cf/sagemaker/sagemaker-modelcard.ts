import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Information about the user who created or modified an experiment, trial, trial component, lineage group, project, or model card.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface UserContext {
    /**
     * - The domain associated with the user.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-usercontext-domainid */
    "DomainId"?: string | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the user's profile.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-usercontext-userprofilearn */
    "UserProfileArn"?: string | Intrinsic;
    /**
     * - The name of the user's profile.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-usercontext-userprofilename */
    "UserProfileName"?: string | Intrinsic;
}

/**
 * The security configuration used to protect model card data.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface SecurityConfig {
    /**
     * - A AWS Key Management Service[key ID](https://docs.aws.amazon.com/kms/latest/developerguide/concepts.html#key-id-key-id) used to encrypt a model card.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-securityconfig-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
}

/**
 * A tag object that consists of a key and an optional value, used to manage metadata for SageMaker AWS resources.
 * You can add tags to notebook instances, training jobs, hyperparameter tuning jobs, batch transform jobs, models, labeling jobs, work teams, endpoint configurations, and endpoints. For more information on adding tags to SageMaker resources, see [AddTags](https://docs.aws.amazon.com/sagemaker/latest/APIReference/API_AddTags.html).
 * For more information on adding metadata to your AWS resources with tagging, see [Tagging AWS resources](https://docs.aws.amazon.com/general/latest/gr/aws_tagging.html). For advice on best practices for managing AWS resources with tagging, see [Tagging Best Practices: Implement an Effective AWS Resource Tagging Strategy](https://d1.awsstatic.com/whitepapers/aws-tagging-best-practices.pdf).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface Tag {
    /**
     * - The tag key. Tag keys must be unique per resource.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Additional information about the model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface AdditionalInformation {
    /**
     * - Caveats and recommendations for those who might use this model in their applications.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-additionalinformation-caveatsandrecommendations */
    "CaveatsAndRecommendations"?: string | Intrinsic;
    /**
     * - Any additional information to document about the model.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z_][a-zA-Z0-9_]*`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-additionalinformation-customdetails */
    "CustomDetails"?: Record<string, string | Intrinsic>;
    /**
     * - Any ethical considerations documented by the model card author.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-additionalinformation-ethicalconsiderations */
    "EthicalConsiderations"?: string | Intrinsic;
}

/**
 * Information about how the model supports business goals.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface BusinessDetails {
    /**
     * - The specific business problem that the model is trying to solve.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-businessdetails-businessproblem */
    "BusinessProblem"?: string | Intrinsic;
    /**
     * - The relevant stakeholders for the model.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-businessdetails-businessstakeholders */
    "BusinessStakeholders"?: string | Intrinsic;
    /**
     * - The broader business need that the model is serving.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-businessdetails-lineofbusiness */
    "LineOfBusiness"?: string | Intrinsic;
}

/**
 * The intended uses of a model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface IntendedUses {
    /**
     * - An explanation of why your organization categorizes the model with its risk rating.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-intendeduses-explanationsforriskrating */
    "ExplanationsForRiskRating"?: string | Intrinsic;
    /**
     * - Factors affecting model efficacy.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-intendeduses-factorsaffectingmodelefficiency */
    "FactorsAffectingModelEfficiency"?: string | Intrinsic;
    /**
     * - The intended use cases for the model.
     * - _Required_: No
     * - _Type_: [String](./aws-properties-sagemaker-modelcard-intendeduses.html)
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-intendeduses-intendeduses */
    "IntendedUses"?: string | Intrinsic;
    /**
     * - The general purpose of the model.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-intendeduses-purposeofmodel */
    "PurposeOfModel"?: string | Intrinsic;
    /**
     * - Your organization's risk rating. You can specify one the following values as the risk rating:
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `High | Medium | Low | Unknown`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-intendeduses-riskrating */
    "RiskRating"?: string | Intrinsic;
}

/**
 * An overview of a model's inference environment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface InferenceEnvironment {
    /**
     * - The container used to run the inference environment.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `1024 | 15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-inferenceenvironment-containerimage */
    "ContainerImage"?: (string | Intrinsic)[];
}

/**
 * An overview about the model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface ModelOverview {
    /**
     * - The algorithm used to solve the problem.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-algorithmtype */
    "AlgorithmType"?: string | Intrinsic;
    /**
     * - An overview about model inference.
     * - _Required_: No
     * - _Type_: [InferenceEnvironment](./aws-properties-sagemaker-modelcard-inferenceenvironment.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-inferenceenvironment */
    "InferenceEnvironment"?: InferenceEnvironment;
    /**
     * - The location of the model artifact.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `1024 | 15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-modelartifact */
    "ModelArtifact"?: (string | Intrinsic)[];
    /**
     * - The creator of the model.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-modelcreator */
    "ModelCreator"?: string | Intrinsic;
    /**
     * - A description of the model.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-modeldescription */
    "ModelDescription"?: string | Intrinsic;
    /**
     * - The SageMaker AI Model ARN or non-SageMaker AI Model ID.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-modelid */
    "ModelId"?: string | Intrinsic;
    /**
     * - The name of the model.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-modelname */
    "ModelName"?: string | Intrinsic;
    /**
     * - The owner of the model.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-modelowner */
    "ModelOwner"?: string | Intrinsic;
    /**
     * - The version of the model.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-modelversion */
    "ModelVersion"?: number | Intrinsic;
    /**
     * - The problem being solved with the model.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modeloverview-problemtype */
    "ProblemType"?: string | Intrinsic;
}

/**
 * The `ModelPackageCreator` property type specifies Property description not available. for an [AWS::SageMaker::ModelCard](./aws-resource-sagemaker-modelcard.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface ModelPackageCreator {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagecreator-userprofilename */
    "UserProfileName"?: string | Intrinsic;
}

/**
 * Specifies an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface SourceAlgorithm {
    /**
     * - The name of an algorithm that was used to create the model package. The algorithm must be either an algorithm resource in your SageMaker account or an algorithm in AWS Marketplace that you are subscribed to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `170`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-sourcealgorithm-algorithmname */
    "AlgorithmName": string | Intrinsic;
    /**
     * - The Amazon S3 path where the model artifacts, which result from model training, are stored. This path must point to a single `gzip` compressed tar archive (`.tar.gz` suffix).
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-sourcealgorithm-modeldataurl */
    "ModelDataUrl"?: string | Intrinsic;
}

/**
 * Function details.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface Function {
    /**
     * - An optional description of any conditions of your objective function metric.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-function-condition */
    "Condition"?: string | Intrinsic;
    /**
     * - The metric of the model's objective function. For example, _loss_ or _rmse_. The following list shows examples of the values that you can specify for the metric:
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-function-facet */
    "Facet"?: string | Intrinsic;
    /**
     * - The optimization direction of the model's objective function. You must specify one of the following values:
     * - _Required_: No
     * - _Type_: [String](./aws-properties-sagemaker-modelcard-function.html)
     * - _Allowed values_: `Maximize | Minimize`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-function-function */
    "Function"?: string | Intrinsic;
}

/**
 * The function that is optimized during model training.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface ObjectiveFunction {
    /**
     * - A function object that details optimization direction, metric, and additional descriptions.
     * - _Required_: No
     * - _Type_: [Function](./aws-properties-sagemaker-modelcard-function.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-objectivefunction-function */
    "Function"?: Function;
    /**
     * - Notes about the object function, including other considerations for possible objective functions.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-objectivefunction-notes */
    "Notes"?: string | Intrinsic;
}

/**
 * SageMaker AI training image.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface TrainingEnvironment {
    /**
     * - SageMaker AI inference image URI.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `1024 | 15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingenvironment-containerimage */
    "ContainerImage"?: (string | Intrinsic)[];
}

/**
 * A hyper parameter that was configured in training the model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface TrainingHyperParameter {
    /**
     * - The name of the hyper parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.{1,255}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-traininghyperparameter-name */
    "Name": string | Intrinsic;
    /**
     * - The value specified for the hyper parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.{1,255}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-traininghyperparameter-value */
    "Value": string | Intrinsic;
}

/**
 * A result from a SageMaker AI training job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface TrainingMetric {
    /**
     * - The name of the result from the SageMaker AI training job.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.{1,255}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingmetric-name */
    "Name": string | Intrinsic;
    /**
     * - Any additional notes describing the result of the training job.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingmetric-notes */
    "Notes"?: string | Intrinsic;
    /**
     * - The value of a result from the SageMaker AI training job.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingmetric-value */
    "Value": number | Intrinsic;
}

/**
 * The overview of a training job.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface TrainingJobDetails {
    /**
     * - The hyper parameters used in the training job.
     * - _Required_: No
     * - _Type_: Array of [TrainingHyperParameter](./aws-properties-sagemaker-modelcard-traininghyperparameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingjobdetails-hyperparameters */
    "HyperParameters"?: TrainingHyperParameter[];
    /**
     * - The SageMaker AI training job Amazon Resource Name (ARN)
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingarn */
    "TrainingArn"?: string | Intrinsic;
    /**
     * - The location of the datasets used to train the model.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `1024 | 15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingdatasets */
    "TrainingDatasets"?: (string | Intrinsic)[];
    /**
     * - The SageMaker AI training job image URI.
     * - _Required_: No
     * - _Type_: [TrainingEnvironment](./aws-properties-sagemaker-modelcard-trainingenvironment.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingenvironment */
    "TrainingEnvironment"?: TrainingEnvironment;
    /**
     * - The SageMaker AI training job results.
     * - _Required_: No
     * - _Type_: Array of [TrainingMetric](./aws-properties-sagemaker-modelcard-trainingmetric.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingjobdetails-trainingmetrics */
    "TrainingMetrics"?: TrainingMetric[];
    /**
     * - Additional hyper parameters that you've specified when training the model.
     * - _Required_: No
     * - _Type_: Array of [TrainingHyperParameter](./aws-properties-sagemaker-modelcard-traininghyperparameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedhyperparameters */
    "UserProvidedHyperParameters"?: TrainingHyperParameter[];
    /**
     * - Custom training job results.
     * - _Required_: No
     * - _Type_: Array of [TrainingMetric](./aws-properties-sagemaker-modelcard-trainingmetric.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingjobdetails-userprovidedtrainingmetrics */
    "UserProvidedTrainingMetrics"?: TrainingMetric[];
}

/**
 * The training details of the model
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface TrainingDetails {
    /**
     * - The function that is optimized during model training.
     * - _Required_: No
     * - _Type_: [ObjectiveFunction](./aws-properties-sagemaker-modelcard-objectivefunction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingdetails-objectivefunction */
    "ObjectiveFunction"?: ObjectiveFunction;
    /**
     * - Details about any associated training jobs.
     * - _Required_: No
     * - _Type_: [TrainingJobDetails](./aws-properties-sagemaker-modelcard-trainingjobdetails.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingdetails-trainingjobdetails */
    "TrainingJobDetails"?: TrainingJobDetails;
    /**
     * - Any observations about training.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-trainingdetails-trainingobservations */
    "TrainingObservations"?: string | Intrinsic;
}

/**
 * The `Container` property type specifies Property description not available. for an [AWS::SageMaker::ModelCard](./aws-resource-sagemaker-modelcard.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface Container {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-container-image */
    "Image": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-container-modeldataurl */
    "ModelDataUrl"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-container-nearestmodelname */
    "NearestModelName"?: string | Intrinsic;
}

/**
 * Defines how to perform inference generation after a training job is run.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface InferenceSpecification {
    /**
     * - The Amazon ECR registry path of the Docker image that contains the inference code.
     * - _Required_: Yes
     * - _Type_: Array of [Container](./aws-properties-sagemaker-modelcard-container.html)
     * - _Minimum_: `1`
     * - _Maximum_: `15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-inferencespecification-containers */
    "Containers": Container[];
}

/**
 * The `ModelPackageDetails` property type specifies Property description not available. for an [AWS::SageMaker::ModelCard](./aws-resource-sagemaker-modelcard.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface ModelPackageDetails {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-approvaldescription */
    "ApprovalDescription"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ModelPackageCreator](./aws-properties-sagemaker-modelcard-modelpackagecreator.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-createdby */
    "CreatedBy"?: ModelPackageCreator;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-domain */
    "Domain"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [InferenceSpecification](./aws-properties-sagemaker-modelcard-inferencespecification.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-inferencespecification */
    "InferenceSpecification"?: InferenceSpecification;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Approved | Rejected | PendingManualApproval`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-modelapprovalstatus */
    "ModelApprovalStatus"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagearn */
    "ModelPackageArn"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagedescription */
    "ModelPackageDescription"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagegroupname */
    "ModelPackageGroupName"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagename */
    "ModelPackageName"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Pending | InProgress | Completed | Failed | Deleting`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackagestatus */
    "ModelPackageStatus"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-modelpackageversion */
    "ModelPackageVersion"?: number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [SourceAlgorithm](./aws-properties-sagemaker-modelcard-sourcealgorithm.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-sourcealgorithms */
    "SourceAlgorithms"?: SourceAlgorithm[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelpackagedetails-task */
    "Task"?: string | Intrinsic;
}

/**
 * The `SimpleMetric` property type specifies Property description not available. for an [AWS::SageMaker::ModelCard](./aws-resource-sagemaker-modelcard.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface SimpleMetric {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.{1,255}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-simplemetric-name */
    "Name": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-simplemetric-notes */
    "Notes"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `number | string | boolean`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-simplemetric-type */
    "Type": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-simplemetric-value */
    "Value": number | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-simplemetric-xaxisname */
    "XAxisName"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-simplemetric-yaxisname */
    "YAxisName"?: string | Intrinsic;
}

/**
 * Metric data. The `type` determines the data types that you specify for `value`, `XAxisName` and `YAxisName`. For information about specifying values for metrics, see [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface MetricDataItems {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [SimpleMetric](./aws-properties-sagemaker-modelcard-simplemetric.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-metricdataitems-metricdataitems */
    "MetricDataItems"?: SimpleMetric;
}

/**
 * A group of metric data that you use to initialize a metric group object.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface MetricGroup {
    /**
     * - A list of metric objects. The `MetricDataItems` list can have one of the following values:
     * - For more information about the metric schema, see the definition section of the [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
     * - _Required_: Yes
     * - _Type_: Array of [MetricDataItems](./aws-properties-sagemaker-modelcard-metricdataitems.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-metricgroup-metricdata */
    "MetricData": MetricDataItems[];
    /**
     * - The metric group name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.{1,63}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-metricgroup-name */
    "Name": string | Intrinsic;
}

/**
 * The evaluation details of the model.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface EvaluationDetail {
    /**
     * - The location of the datasets used to evaluate the model.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Maximum_: `1024 | 10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-evaluationdetail-datasets */
    "Datasets"?: (string | Intrinsic)[];
    /**
     * - The Amazon Resource Name (ARN) of the evaluation job.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-evaluationdetail-evaluationjobarn */
    "EvaluationJobArn"?: string | Intrinsic;
    /**
     * - Any observations made during the model evaluation.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-evaluationdetail-evaluationobservation */
    "EvaluationObservation"?: string | Intrinsic;
    /**
     * - Additional attributes associated with the evaluation results.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z_][a-zA-Z0-9_]*`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-evaluationdetail-metadata */
    "Metadata"?: Record<string, string | Intrinsic>;
    /**
     * - An evaluation Metric Group object.
     * - _Required_: No
     * - _Type_: Array of [MetricGroup](./aws-properties-sagemaker-modelcard-metricgroup.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-evaluationdetail-metricgroups */
    "MetricGroups"?: MetricGroup[];
    /**
     * - The evaluation job name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.{1,63}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-evaluationdetail-name */
    "Name": string | Intrinsic;
}

/**
 * The content of the model card. It follows the [model card json schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface Content {
    /**
     * - Additional information about the model.
     * - _Required_: No
     * - _Type_: [AdditionalInformation](./aws-properties-sagemaker-modelcard-additionalinformation.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content-additionalinformation */
    "AdditionalInformation"?: AdditionalInformation;
    /**
     * - Information about how the model supports business goals.
     * - _Required_: No
     * - _Type_: [BusinessDetails](./aws-properties-sagemaker-modelcard-businessdetails.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content-businessdetails */
    "BusinessDetails"?: BusinessDetails;
    /**
     * - An overview about the model's evaluation.
     * - _Required_: No
     * - _Type_: Array of [EvaluationDetail](./aws-properties-sagemaker-modelcard-evaluationdetail.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content-evaluationdetails */
    "EvaluationDetails"?: EvaluationDetail[];
    /**
     * - The intended usage of the model.
     * - _Required_: No
     * - _Type_: [IntendedUses](./aws-properties-sagemaker-modelcard-intendeduses.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content-intendeduses */
    "IntendedUses"?: IntendedUses;
    /**
     * - An overview about the model
     * - _Required_: No
     * - _Type_: [ModelOverview](./aws-properties-sagemaker-modelcard-modeloverview.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content-modeloverview */
    "ModelOverview"?: ModelOverview;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [ModelPackageDetails](./aws-properties-sagemaker-modelcard-modelpackagedetails.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content-modelpackagedetails */
    "ModelPackageDetails"?: ModelPackageDetails;
    /**
     * - An overview about model training.
     * - _Required_: No
     * - _Type_: [TrainingDetails](./aws-properties-sagemaker-modelcard-trainingdetails.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content-trainingdetails */
    "TrainingDetails"?: TrainingDetails;
}

/**
 * Creates an Amazon SageMaker Model Card.
 * For information about how to use model cards, see [Amazon SageMaker Model Card](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html */

export interface SageMakerModelCard extends ResourceAttributes {
    "Type": "AWS::SageMaker::ModelCard";
    "Properties": {
        /**
         * - The content of the model card. Content uses the [model card JSON schema](https://docs.aws.amazon.com/sagemaker/latest/dg/model-cards.html#model-cards-json-schema).
         * - _Required_: Yes
         * - _Type_: [Content](./aws-properties-sagemaker-modelcard-content.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-content */
        "Content": Content;
        /**
         * - Information about the user who created or modified one or more of the following:
         * - _Required_: No
         * - _Type_: [UserContext](./aws-properties-sagemaker-modelcard-usercontext.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-createdby */
        "CreatedBy"?: UserContext;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: [UserContext](./aws-properties-sagemaker-modelcard-usercontext.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-lastmodifiedby */
        "LastModifiedBy"?: UserContext;
        /**
         * - The unique name of the model card.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9]){0,62}$`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelcardname */
        "ModelCardName": string | Intrinsic;
        /**
         * - The approval status of the model card within your organization. Different organizations might have different criteria for model card review and approval.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `Draft | PendingReview | Approved | Archived`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-modelcardstatus */
        "ModelCardStatus": string | Intrinsic;
        /**
         * - The security configuration used to protect model card data.
         * - _Required_: No
         * - _Type_: [SecurityConfig](./aws-properties-sagemaker-modelcard-securityconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-securityconfig */
        "SecurityConfig"?: SecurityConfig;
        /**
         * - Key-value pairs used to manage metadata for the model card.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-sagemaker-modelcard-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sagemaker-modelcard.html#cfn-sagemaker-modelcard-tags */
        "Tags"?: Tag[];
    };
}