import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A mapping of `artifactStore` objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
 * ###### Note
 * 
 * You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface ArtifactStoreMap {
    /**
     * - Represents information about the S3 bucket where artifacts are stored for the pipeline.
     * - _Required_: Conditional
     * - _Type_: [ArtifactStore](./aws-properties-codepipeline-pipeline-artifactstore.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstoremap-artifactstore */
    "ArtifactStore"?: ArtifactStore;
    /**
     * - The action declaration's AWS Region, such as us-east-1.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `4`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstoremap-region */
    "Region": string | Intrinsic;
}

/**
 * The name of the pipeline in which you want to disable the flow of artifacts from one stage to another.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface StageTransition {
    /**
     * - The reason given to the user that a stage is disabled, such as waiting for manual approval or manual tests. This message is displayed in the pipeline console UI.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9!@ \(\)\.\*\?\-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagetransition-reason */
    "Reason": string | Intrinsic;
    /**
     * - The name of the stage where you want to disable the inbound or outbound transition of artifacts.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9.@\-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagetransition-stagename */
    "StageName": string | Intrinsic;
}

/**
 * A variable declared at the pipeline level.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface VariableDeclaration {
    /**
     * - The value of a pipeline-level variable.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-variabledeclaration-defaultvalue */
    "DefaultValue"?: string | Intrinsic;
    /**
     * - The description of a pipeline-level variable. It's used to add additional context about the variable, and not being used at time when pipeline executes.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-variabledeclaration-description */
    "Description"?: string | Intrinsic;
    /**
     * - The name of a pipeline-level variable.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9@\-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-variabledeclaration-name */
    "Name": string | Intrinsic;
}

/**
 * A tag is a key-value pair that is used to manage the resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface Tag {
    /**
     * - The tag's key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag's value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Reserved for future use.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface BlockerDeclaration {
    /**
     * - Reserved for future use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-blockerdeclaration-name */
    "Name": string | Intrinsic;
    /**
     * - Reserved for future use.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Schedule`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-blockerdeclaration-type */
    "Type": string | Intrinsic;
}

/**
 * Represents information about the key used to encrypt data in the artifact store, such as an AWS Key Management Service (AWS KMS) key.
 * `EncryptionKey` is a property of the [ArtifactStore](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-codepipeline-pipeline-artifactstore.html) property type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface EncryptionKey {
    /**
     * - The ID used to identify the key. For an AWS KMS key, you can use the key ID, the key ARN, or the alias ARN.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-encryptionkey-id */
    "Id": string | Intrinsic;
    /**
     * - The type of encryption key, such as an AWS KMS key. When creating or updating a pipeline, the value must be set to 'KMS'.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-encryptionkey-type */
    "Type": string | Intrinsic;
}

/**
 * The S3 bucket where artifacts for the pipeline are stored.
 * ###### Note
 * 
 * You must include either `artifactStore` or `artifactStores` in your pipeline, but you cannot use both. If you create a cross-region action in your pipeline, you must use `artifactStores`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface ArtifactStore {
    /**
     * - The encryption key used to encrypt the data in the artifact store, such as an AWS Key Management Service (AWS KMS) key. If this is undefined, the default key for Amazon S3 is used. To see an example artifact store encryption key field, see the example structure here: [AWS::CodePipeline::Pipeline](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html).
     * - _Required_: No
     * - _Type_: [EncryptionKey](./aws-properties-codepipeline-pipeline-encryptionkey.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstore-encryptionkey */
    "EncryptionKey"?: EncryptionKey;
    /**
     * - The S3 bucket used for storing the artifacts for a pipeline. You can specify the name of an S3 bucket but not a folder in the bucket. A folder to contain the pipeline artifacts is created for you based on the name of the pipeline. You can use any S3 bucket in the same AWS Region as the pipeline to store your pipeline artifacts.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9\-\.]+`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstore-location */
    "Location": string | Intrinsic;
    /**
     * - The type of the artifact store, such as S3.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `S3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstore-type */
    "Type": string | Intrinsic;
}

/**
 * The conditions for making checks that, if met, succeed a stage. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface SuccessConditions {
    /**
     * - The conditions that are success conditions.
     * - _Required_: No
     * - _Type_: Array of [Condition](./aws-properties-codepipeline-pipeline-condition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-successconditions-conditions */
    "Conditions"?: Condition[];
}

/**
 * Represents information about an action type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface ActionTypeId {
    /**
     * - A category defines what kind of action can be taken in the stage, and constrains the provider type for the action. Valid categories are limited to one of the values below.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `Source | Build | Test | Deploy | Invoke | Approval | Compute`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiontypeid-category */
    "Category": string | Intrinsic;
    /**
     * - The creator of the action being called. There are three valid values for the `Owner` field in the action category section within your pipeline structure: `AWS`, `ThirdParty`, and `Custom`. For more information, see [Valid Action Types and Providers in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiontypeid-owner */
    "Owner": string | Intrinsic;
    /**
     * - The provider of the service being called by the action. Valid providers are determined by the action category. For example, an action in the Deploy category type might have a provider of CodeDeploy, which would be specified as `CodeDeploy`. For more information, see [Valid Action Types and Providers in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#actions-valid-providers).
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiontypeid-provider */
    "Provider": string | Intrinsic;
    /**
     * - A string that describes the action version.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiontypeid-version */
    "Version": string | Intrinsic;
}

/**
 * The environment variables for the action.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface EnvironmentVariable {
    /**
     * - The environment variable name in the key-value pair.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-environmentvariable-name */
    "Name": string | Intrinsic;
    /**
     * - Specifies the type of use for the environment variable value. The value can be either `PLAINTEXT` or `SECRETS_MANAGER`. If the value is `SECRETS_MANAGER`, provide the Secrets reference in the EnvironmentVariable value.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PLAINTEXT | SECRETS_MANAGER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-environmentvariable-type */
    "Type"?: string | Intrinsic;
    /**
     * - The environment variable value in the key-value pair.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*`
     * - _Minimum_: `1`
     * - _Maximum_: `2000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-environmentvariable-value */
    "Value": string | Intrinsic;
}

/**
 * Represents information about the output of an action.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface OutputArtifact {
    /**
     * - The files that you want to associate with the output artifact that will be exported from the compute action.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-outputartifact-files */
    "Files"?: (string | Intrinsic)[];
    /**
     * - The name of the output of an artifact, such as "My App".
     * - The output artifact name must exactly match the input artifact declared for a downstream action. However, the downstream action's input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.
     * - Output artifact names must be unique within a pipeline.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_\-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-outputartifact-name */
    "Name": string | Intrinsic;
}

/**
 * The retry configuration specifies automatic retry for a failed stage, along with the configured retry mode.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface RetryConfiguration {
    /**
     * - The method that you want to configure for automatic stage retry on stage failure. You can specify to retry only failed action in the stage or all actions in the stage.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ALL_ACTIONS | FAILED_ACTIONS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-retryconfiguration-retrymode */
    "RetryMode"?: string | Intrinsic;
}

/**
 * The configuration that specifies the result, such as rollback, to occur upon stage failure. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface FailureConditions {
    /**
     * - The conditions that are configured as failure conditions. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
     * - _Required_: No
     * - _Type_: Array of [Condition](./aws-properties-codepipeline-pipeline-condition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-failureconditions-conditions */
    "Conditions"?: Condition[];
    /**
     * - The specified result for when the failure conditions are met, such as rolling back the stage.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ROLLBACK | RETRY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-failureconditions-result */
    "Result"?: string | Intrinsic;
    /**
     * - The retry configuration specifies automatic retry for a failed stage, along with the configured retry mode.
     * - _Required_: No
     * - _Type_: [RetryConfiguration](./aws-properties-codepipeline-pipeline-retryconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-failureconditions-retryconfiguration */
    "RetryConfiguration"?: RetryConfiguration;
}

/**
 * Represents information about an artifact to be worked on, such as a test or build artifact.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface InputArtifact {
    /**
     * - The name of the artifact to be worked on (for example, "My App").
     * - Artifacts are the files that are worked on by actions in the pipeline. See the action configuration for each action for details about artifact parameters. For example, the S3 source action input artifact is a file name (or file path), and the files are generally provided as a ZIP file. Example artifact name: SampleApp\_Windows.zip
     * - The input artifact of an action must exactly match the output artifact declared in a preceding action, but the input artifact does not have to be the next action in strict sequence from the action that provided the output artifact. Actions in parallel can declare different output artifacts, which are in turn consumed by different following actions.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_\-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-inputartifact-name */
    "Name": string | Intrinsic;
}

/**
 * Represents information about an action declaration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface ActionDeclaration {
    /**
     * - Specifies the action type and the provider of the action.
     * - _Required_: Yes
     * - _Type_: [ActionTypeId](./aws-properties-codepipeline-pipeline-actiontypeid.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-actiontypeid */
    "ActionTypeId": ActionTypeId;
    /**
     * - The shell commands to run with your compute action in CodePipeline. All commands are supported except multi-line formats. While CodeBuild logs and permissions are used, you do not need to create any resources in CodeBuild.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-commands */
    "Commands"?: (string | Intrinsic)[];
    /**
     * - The action's configuration. These are key-value pairs that specify input values for an action. For more information, see [Action Structure Requirements in CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/reference-pipeline-structure.html#action-requirements). For the list of configuration properties for the AWS CloudFormation action type in CodePipeline, see [Configuration Properties Reference](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-action-reference.html) in the _AWS CloudFormation User Guide_. For template snippets with examples, see [Using Parameter Override Functions with CodePipeline Pipelines](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/continuous-delivery-codepipeline-parameter-override-functions.html) in the _AWS CloudFormation User Guide_.
     * - The values can be represented in either JSON or YAML format. For example, the JSON configuration item format is as follows:
     * - _JSON:_
     * - `"Configuration" : { Key : Value },`
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-configuration */
    "Configuration"?: any | Intrinsic;
    /**
     * - The environment variables for the action.
     * - _Required_: No
     * - _Type_: Array of [EnvironmentVariable](./aws-properties-codepipeline-pipeline-environmentvariable.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-environmentvariables */
    "EnvironmentVariables"?: EnvironmentVariable[];
    /**
     * - The name or ID of the artifact consumed by the action, such as a test or build artifact. While the field is not a required parameter, most actions have an action configuration that requires a specified quantity of input artifacts. To refer to the action configuration specification by action provider, see the [Action structure reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) in the _AWS CodePipeline User Guide_.
     * - _Required_: No
     * - _Type_: Array of [InputArtifact](./aws-properties-codepipeline-pipeline-inputartifact.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-inputartifacts */
    "InputArtifacts"?: InputArtifact[];
    /**
     * - The action declaration's name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9.@\-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-name */
    "Name": string | Intrinsic;
    /**
     * - The variable namespace associated with the action. All variables produced as output by this action fall under this namespace.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9@\-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-namespace */
    "Namespace"?: string | Intrinsic;
    /**
     * - The name or ID of the result of the action declaration, such as a test or build artifact. While the field is not a required parameter, most actions have an action configuration that requires a specified quantity of output artifacts. To refer to the action configuration specification by action provider, see the [Action structure reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/action-reference.html) in the _AWS CodePipeline User Guide_.
     * - _Required_: No
     * - _Type_: Array of [OutputArtifact](./aws-properties-codepipeline-pipeline-outputartifact.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-outputartifacts */
    "OutputArtifacts"?: OutputArtifact[];
    /**
     * - The list of variables that are to be exported from the compute action. This is specifically CodeBuild environment variables as used for that action.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `15`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-outputvariables */
    "OutputVariables"?: (string | Intrinsic)[];
    /**
     * - The action declaration's AWS Region, such as us-east-1.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `4`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-region */
    "Region"?: string | Intrinsic;
    /**
     * - The ARN of the IAM service role that performs the declared action. This is assumed through the roleArn for the pipeline.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-rolearn */
    "RoleArn"?: string | Intrinsic;
    /**
     * - The order in which actions are run.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Maximum_: `999`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-runorder */
    "RunOrder"?: number | Intrinsic;
    /**
     * - A timeout duration in minutes that can be applied against the ActionType’s default timeout value specified in [Quotas for AWS CodePipeline](https://docs.aws.amazon.com/codepipeline/latest/userguide/limits.html). This attribute is available only to the manual approval ActionType.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `5`
     * - _Maximum_: `86400`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-actiondeclaration-timeoutinminutes */
    "TimeoutInMinutes"?: number | Intrinsic;
}

/**
 * The Git repository file paths specified as filter criteria to start the pipeline.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface GitFilePathFilterCriteria {
    /**
     * - The list of patterns of Git repository file paths that, when a commit is pushed, are to be excluded from starting the pipeline.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitfilepathfiltercriteria-excludes */
    "Excludes"?: (string | Intrinsic)[];
    /**
     * - The list of patterns of Git repository file paths that, when a commit is pushed, are to be included as criteria that starts the pipeline.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitfilepathfiltercriteria-includes */
    "Includes"?: (string | Intrinsic)[];
}

/**
 * The Git tags specified as filter criteria for whether a Git tag repository event will start the pipeline.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface GitTagFilterCriteria {
    /**
     * - The list of patterns of Git tags that, when pushed, are to be excluded from starting the pipeline.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gittagfiltercriteria-excludes */
    "Excludes"?: (string | Intrinsic)[];
    /**
     * - The list of patterns of Git tags that, when pushed, are to be included as criteria that starts the pipeline.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gittagfiltercriteria-includes */
    "Includes"?: (string | Intrinsic)[];
}

/**
 * The event criteria that specify when a specified repository event will start the pipeline for the specified trigger configuration, such as the lists of Git tags to include and exclude.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface GitPushFilter {
    /**
     * - The field that specifies to filter on branches for the push trigger configuration.
     * - _Required_: No
     * - _Type_: [GitBranchFilterCriteria](./aws-properties-codepipeline-pipeline-gitbranchfiltercriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitpushfilter-branches */
    "Branches"?: GitBranchFilterCriteria;
    /**
     * - The field that specifies to filter on file paths for the push trigger configuration.
     * - _Required_: No
     * - _Type_: [GitFilePathFilterCriteria](./aws-properties-codepipeline-pipeline-gitfilepathfiltercriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitpushfilter-filepaths */
    "FilePaths"?: GitFilePathFilterCriteria;
    /**
     * - The field that contains the details for the Git tags trigger configuration.
     * - _Required_: No
     * - _Type_: [GitTagFilterCriteria](./aws-properties-codepipeline-pipeline-gittagfiltercriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitpushfilter-tags */
    "Tags"?: GitTagFilterCriteria;
}

/**
 * The Git repository branches specified as filter criteria to start the pipeline.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface GitBranchFilterCriteria {
    /**
     * - The list of patterns of Git branches that, when a commit is pushed, are to be excluded from starting the pipeline.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitbranchfiltercriteria-excludes */
    "Excludes"?: (string | Intrinsic)[];
    /**
     * - The list of patterns of Git branches that, when a commit is pushed, are to be included as criteria that starts the pipeline.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `8`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitbranchfiltercriteria-includes */
    "Includes"?: (string | Intrinsic)[];
}

/**
 * The event criteria for the pull request trigger configuration, such as the lists of branches or file paths to include and exclude.
 * The following are valid values for the events for this filter:
 * *   CLOSED
 *     
 * *   OPEN
 *     
 * *   UPDATED
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface GitPullRequestFilter {
    /**
     * - The field that specifies to filter on branches for the pull request trigger configuration.
     * - _Required_: No
     * - _Type_: [GitBranchFilterCriteria](./aws-properties-codepipeline-pipeline-gitbranchfiltercriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitpullrequestfilter-branches */
    "Branches"?: GitBranchFilterCriteria;
    /**
     * - The field that specifies which pull request events to filter on (OPEN, UPDATED, CLOSED) for the trigger configuration.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitpullrequestfilter-events */
    "Events"?: (string | Intrinsic)[];
    /**
     * - The field that specifies to filter on file paths for the pull request trigger configuration.
     * - _Required_: No
     * - _Type_: [GitFilePathFilterCriteria](./aws-properties-codepipeline-pipeline-gitfilepathfiltercriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitpullrequestfilter-filepaths */
    "FilePaths"?: GitFilePathFilterCriteria;
}

/**
 * A type of trigger configuration for Git-based source actions.
 * ###### Note
 * 
 * You can specify the Git configuration trigger type for all third-party Git-based source actions that are supported by the `CodeStarSourceConnection` action type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface GitConfiguration {
    /**
     * - The field where the repository event that will start the pipeline is specified as pull requests.
     * - _Required_: No
     * - _Type_: Array of [GitPullRequestFilter](./aws-properties-codepipeline-pipeline-gitpullrequestfilter.html)
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitconfiguration-pullrequest */
    "PullRequest"?: GitPullRequestFilter[];
    /**
     * - The field where the repository event that will start the pipeline, such as pushing Git tags, is specified with details.
     * - _Required_: No
     * - _Type_: Array of [GitPushFilter](./aws-properties-codepipeline-pipeline-gitpushfilter.html)
     * - _Minimum_: `1`
     * - _Maximum_: `3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitconfiguration-push */
    "Push"?: GitPushFilter[];
    /**
     * - The name of the pipeline source action where the trigger configuration, such as Git tags, is specified. The trigger configuration will start the pipeline upon the specified change only.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9.@\-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-gitconfiguration-sourceactionname */
    "SourceActionName": string | Intrinsic;
}

/**
 * Represents information about the specified trigger configuration, such as the filter criteria and the source stage for the action that contains the trigger.
 * ###### Note
 * 
 * This is only supported for the `CodeStarSourceConnection` action type.
 * ###### Note
 * 
 * When a trigger configuration is specified, default change detection for repository and branch commits is disabled.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface PipelineTriggerDeclaration {
    /**
     * - Provides the filter criteria and the source stage for the repository event that starts the pipeline, such as Git tags.
     * - _Required_: No
     * - _Type_: [GitConfiguration](./aws-properties-codepipeline-pipeline-gitconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-pipelinetriggerdeclaration-gitconfiguration */
    "GitConfiguration"?: GitConfiguration;
    /**
     * - The source provider for the event, such as connections configured for a repository with Git tags, for the specified trigger configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `CodeStarSourceConnection`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-pipelinetriggerdeclaration-providertype */
    "ProviderType": string | Intrinsic;
}

/**
 * The ID for the rule type, which is made up of the combined values for category, owner, provider, and version. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html). For more information about rules, see the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface RuleTypeId {
    /**
     * - A category defines what kind of rule can be run in the stage, and constrains the provider type for the rule. The valid category is `Rule`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Rule`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruletypeid-category */
    "Category"?: string | Intrinsic;
    /**
     * - The creator of the rule being called. The valid value for the `Owner` field in the rule category is `AWS`.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AWS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruletypeid-owner */
    "Owner"?: string | Intrinsic;
    /**
     * - The rule provider, such as the `DeploymentWindow` rule. For a list of rule provider names, see the rules listed in the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9A-Za-z_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `35`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruletypeid-provider */
    "Provider"?: string | Intrinsic;
    /**
     * - A string that describes the rule version.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9A-Za-z_-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `9`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruletypeid-version */
    "Version"?: string | Intrinsic;
}

/**
 * Represents information about the rule to be created for an associated condition. An example would be creating a new rule for an entry condition, such as a rule that checks for a test result before allowing the run to enter the deployment stage. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html). For more information about rules, see the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface RuleDeclaration {
    /**
     * - The shell commands to run with your commands rule in CodePipeline. All commands are supported except multi-line formats. While CodeBuild logs and permissions are used, you do not need to create any resources in CodeBuild.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruledeclaration-commands */
    "Commands"?: (string | Intrinsic)[];
    /**
     * - The action configuration fields for the rule.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruledeclaration-configuration */
    "Configuration"?: any | Intrinsic;
    /**
     * - The input artifacts fields for the rule, such as specifying an input file for the rule.
     * - _Required_: No
     * - _Type_: Array of [InputArtifact](./aws-properties-codepipeline-pipeline-inputartifact.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruledeclaration-inputartifacts */
    "InputArtifacts"?: InputArtifact[];
    /**
     * - The name of the rule that is created for the condition, such as `VariableCheck`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9.@\-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruledeclaration-name */
    "Name"?: string | Intrinsic;
    /**
     * - The Region for the condition associated with the rule.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `4`
     * - _Maximum_: `30`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruledeclaration-region */
    "Region"?: string | Intrinsic;
    /**
     * - The pipeline role ARN associated with the rule.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruledeclaration-rolearn */
    "RoleArn"?: string | Intrinsic;
    /**
     * - The ID for the rule type, which is made up of the combined values for category, owner, provider, and version.
     * - _Required_: No
     * - _Type_: [RuleTypeId](./aws-properties-codepipeline-pipeline-ruletypeid.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-ruledeclaration-ruletypeid */
    "RuleTypeId"?: RuleTypeId;
}

/**
 * The condition for the stage. A condition is made up of the rules and the result for the condition. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).. For more information about rules, see the [AWS CodePipeline rule reference](https://docs.aws.amazon.com/codepipeline/latest/userguide/rule-reference.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface Condition {
    /**
     * - The action to be done when the condition is met. For example, rolling back an execution for a failure condition.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ROLLBACK | FAIL | RETRY | SKIP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-condition-result */
    "Result"?: string | Intrinsic;
    /**
     * - The rules that make up the condition.
     * - _Required_: No
     * - _Type_: Array of [RuleDeclaration](./aws-properties-codepipeline-pipeline-ruledeclaration.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-condition-rules */
    "Rules"?: RuleDeclaration[];
}

/**
 * The conditions for making checks for entry to a stage. For more information about conditions, see [Stage conditions](https://docs.aws.amazon.com/codepipeline/latest/userguide/stage-conditions.html) and [How do stage conditions work?](https://docs.aws.amazon.com/codepipeline/latest/userguide/concepts-how-it-works-conditions.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface BeforeEntryConditions {
    /**
     * - The conditions that are configured as entry conditions.
     * - _Required_: No
     * - _Type_: Array of [Condition](./aws-properties-codepipeline-pipeline-condition.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-beforeentryconditions-conditions */
    "Conditions"?: Condition[];
}

/**
 * Represents information about a stage and its definition.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface StageDeclaration {
    /**
     * - The actions included in a stage.
     * - _Required_: Yes
     * - _Type_: Array of [ActionDeclaration](./aws-properties-codepipeline-pipeline-actiondeclaration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagedeclaration-actions */
    "Actions": ActionDeclaration[];
    /**
     * - The method to use when a stage allows entry. For example, configuring this field for conditions will allow entry to the stage when the conditions are met.
     * - _Required_: No
     * - _Type_: [BeforeEntryConditions](./aws-properties-codepipeline-pipeline-beforeentryconditions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagedeclaration-beforeentry */
    "BeforeEntry"?: BeforeEntryConditions;
    /**
     * - Reserved for future use.
     * - _Required_: No
     * - _Type_: Array of [BlockerDeclaration](./aws-properties-codepipeline-pipeline-blockerdeclaration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagedeclaration-blockers */
    "Blockers"?: BlockerDeclaration[];
    /**
     * - The name of the stage.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[A-Za-z0-9.@\-_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagedeclaration-name */
    "Name": string | Intrinsic;
    /**
     * - The method to use when a stage has not completed successfully. For example, configuring this field for rollback will roll back a failed stage automatically to the last successful pipeline execution in the stage.
     * - _Required_: No
     * - _Type_: [FailureConditions](./aws-properties-codepipeline-pipeline-failureconditions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagedeclaration-onfailure */
    "OnFailure"?: FailureConditions;
    /**
     * - The method to use when a stage has succeeded. For example, configuring this field for conditions will allow the stage to succeed when the conditions are met.
     * - _Required_: No
     * - _Type_: [SuccessConditions](./aws-properties-codepipeline-pipeline-successconditions.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stagedeclaration-onsuccess */
    "OnSuccess"?: SuccessConditions;
}

/**
 * The `AWS::CodePipeline::Pipeline` resource creates a CodePipeline pipeline that describes how software changes go through a release process. For more information, see [What Is CodePipeline?](https://docs.aws.amazon.com/codepipeline/latest/userguide/welcome.html) in the _CodePipeline User Guide_.
 * For an example in YAML and JSON that contains the parameters in this reference, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#aws-resource-codepipeline-pipeline--examples).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html */

export interface CodePipelinePipeline extends ResourceAttributes {
    "Type": "AWS::CodePipeline::Pipeline";
    "Properties": {
        /**
         * - The S3 bucket where artifacts for the pipeline are stored.
         * - _Required_: Conditional
         * - _Type_: [ArtifactStore](./aws-properties-codepipeline-pipeline-artifactstore.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstore */
        "ArtifactStore"?: ArtifactStore;
        /**
         * - A mapping of `artifactStore` objects and their corresponding AWS Regions. There must be an artifact store for the pipeline Region and for each cross-region action in the pipeline.
         * - _Required_: Conditional
         * - _Type_: Array of [ArtifactStoreMap](./aws-properties-codepipeline-pipeline-artifactstoremap.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-artifactstores */
        "ArtifactStores"?: ArtifactStoreMap[];
        /**
         * - Represents the input of a `DisableStageTransition` action.
         * - _Required_: No
         * - _Type_: Array of [StageTransition](./aws-properties-codepipeline-pipeline-stagetransition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-disableinboundstagetransitions */
        "DisableInboundStageTransitions"?: StageTransition[];
        /**
         * - The method that the pipeline will use to handle multiple executions. The default mode is SUPERSEDED.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `QUEUED | SUPERSEDED | PARALLEL`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-executionmode */
        "ExecutionMode"?: string | Intrinsic;
        /**
         * - The name of the pipeline.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[A-Za-z0-9.@\-_]+`
         * - _Minimum_: `1`
         * - _Maximum_: `100`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-name */
        "Name"?: string | Intrinsic;
        /**
         * - CodePipeline provides the following pipeline types, which differ in characteristics and price, so that you can tailor your pipeline features and cost to the needs of your applications.
         * - For information about pricing for CodePipeline, see [Pricing](https://aws.amazon.com/codepipeline/pricing/).
         * - For information about which type of pipeline to choose, see [What type of pipeline is right for me?](https://docs.aws.amazon.com/codepipeline/latest/userguide/pipeline-types-planning.html).
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `V1 | V2`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-pipelinetype */
        "PipelineType"?: string | Intrinsic;
        /**
         * - Indicates whether to rerun the CodePipeline pipeline after you update it.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-restartexecutiononupdate */
        "RestartExecutionOnUpdate"?: boolean | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) for CodePipeline to use to either perform actions with no `actionRoleArn`, or to use to assume roles for actions with an `actionRoleArn`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:aws(-[\w]+)*:iam::[0-9]{12}:role/.*`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-rolearn */
        "RoleArn": string | Intrinsic;
        /**
         * - Represents information about a stage and its definition.
         * - _Required_: Yes
         * - _Type_: Array of [StageDeclaration](./aws-properties-codepipeline-pipeline-stagedeclaration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-stages */
        "Stages": StageDeclaration[];
        /**
         * - Specifies the tags applied to the pipeline.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-codepipeline-pipeline-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-tags */
        "Tags"?: Tag[];
        /**
         * - The trigger configuration specifying a type of event, such as Git tags, that starts the pipeline.
         * - _Required_: No
         * - _Type_: Array of [PipelineTriggerDeclaration](./aws-properties-codepipeline-pipeline-pipelinetriggerdeclaration.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-triggers */
        "Triggers"?: PipelineTriggerDeclaration[];
        /**
         * - A list that defines the pipeline variables for a pipeline resource. Variable names can have alphanumeric and underscore characters, and the values must match `[A-Za-z0-9@\-_]+`.
         * - _Required_: No
         * - _Type_: Array of [VariableDeclaration](./aws-properties-codepipeline-pipeline-variabledeclaration.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codepipeline-pipeline.html#cfn-codepipeline-pipeline-variables */
        "Variables"?: VariableDeclaration[];
    };
}