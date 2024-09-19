import type { Intrinsic } from '../intrinsic/index.js' /**
 * An object which defines an incremental run type and has only `incrementalRunType` as a field.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface IncrementalRunConfig {
  /**
   * - The type of incremental run. It takes only one value: `IMMEDIATE`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `IMMEDIATE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-incrementalrunconfig-incrementalruntype */
  IncrementalRunType: string | Intrinsic
}

/**
 * An object containing `InputSourceARN`, `SchemaName`, and `ApplyNormalization`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface InputSource {
  /**
   * - Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an `AttributeType` of `PHONE_NUMBER`, and the data in the input table is in a format of 1234567890, AWS Entity Resolution will normalize this field in the output to (123)-456-7890.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-inputsource-applynormalization */
  ApplyNormalization?: boolean | Intrinsic
  /**
   * - An object containing `InputSourceARN`, `SchemaName`, and `ApplyNormalization`.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn):.*:.*:[0-9]+:.*$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-inputsource-inputsourcearn */
  InputSourceARN: string | Intrinsic
  /**
   * - The name of the schema.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):entityresolution:.*:[0-9]+:(schemamapping/.*)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-inputsource-schemaarn */
  SchemaArn: string | Intrinsic
}

/**
 * The tags used to organize, track, or control access for this resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-tag-value */
  Value: string | Intrinsic
}

/**
 * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed`. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface OutputAttribute {
  /**
   * - Enables the ability to hash the column values in the output.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputattribute-hashed */
  Hashed?: boolean | Intrinsic
  /**
   * - A name of a column to be written to the output. This must be an `InputField` name in the schema mapping.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z_0-9- \t]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputattribute-name */
  Name: string | Intrinsic
}

/**
 * The Amazon S3 location that temporarily stores your data while it processes. Your information won't be saved permanently.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface IntermediateSourceConfiguration {
  /**
   * - The Amazon S3 location (bucket and prefix). For example: `s3://provider_bucket/DOC-EXAMPLE-BUCKET`
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-intermediatesourceconfiguration-intermediates3path */
  IntermediateS3Path: string | Intrinsic
}

/**
 * An object containing `RuleName`, and `MatchingKeys`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface Rule {
  /**
   * - A list of `MatchingKeys`. The `MatchingKeys` must have been defined in the `SchemaMapping`. Two records are considered to match according to this rule if all of the `MatchingKeys` match.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-rule-matchingkeys */
  MatchingKeys: (string | Intrinsic)[]
  /**
   * - A name for the matching rule.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z_0-9- \t]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-rule-rulename */
  RuleName: string | Intrinsic
}

/**
 * A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed`. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface OutputSource {
  /**
   * - Normalizes the attributes defined in the schema in the input data. For example, if an attribute has an `AttributeType` of `PHONE_NUMBER`, and the data in the input table is in a format of 1234567890, AWS Entity Resolution will normalize this field in the output to (123)-456-7890.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputsource-applynormalization */
  ApplyNormalization?: boolean | Intrinsic
  /**
   * - Customer KMS ARN for encryption at rest. If not provided, system will use an AWS Entity Resolution managed KMS key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):kms:.*:[0-9]+:.*$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputsource-kmsarn */
  KMSArn?: string | Intrinsic
  /**
   * - A list of `OutputAttribute` objects, each of which have the fields `Name` and `Hashed`. Each of these objects selects a column to be included in the output table, and whether the values of the column should be hashed.
   * - _Required_: Yes
   * - _Type_: Array of [OutputAttribute](./aws-properties-entityresolution-matchingworkflow-outputattribute.html)
   * - _Minimum_: `0`
   * - _Maximum_: `750`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputsource-output */
  Output: OutputAttribute[]
  /**
   * - The S3 path to which AWS Entity Resolution will write the output table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^s3://([^/]+)/?(.*?([^/]+)/?)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputsource-outputs3path */
  OutputS3Path: string | Intrinsic
}

/**
 * An object containing the `providerServiceARN`, `intermediateSourceConfiguration`, and `providerConfiguration`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface ProviderProperties {
  /**
   * - The Amazon S3 location that temporarily stores your data while it processes. Your information won't be saved permanently.
   * - _Required_: No
   * - _Type_: [IntermediateSourceConfiguration](./aws-properties-entityresolution-matchingworkflow-intermediatesourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-providerproperties-intermediatesourceconfiguration */
  IntermediateSourceConfiguration?: IntermediateSourceConfiguration
  /**
   * - The required configuration fields to use with the provider service.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^.+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-providerproperties-providerconfiguration */
  ProviderConfiguration?: Record<string, string | Intrinsic>
  /**
   * - The ARN of the provider service.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-providerproperties-providerservicearn */
  ProviderServiceArn: string | Intrinsic
}

/**
 * An object which defines the list of matching rules to run in a matching workflow. RuleBasedProperties contain a `Rules` field, which is a list of rule objects.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface RuleBasedProperties {
  /**
   * - The comparison type. You can either choose `ONE_TO_ONE` or `MANY_TO_MANY` as the `attributeMatchingModel`.
   * - If you choose `MANY_TO_MANY`, the system can match attributes across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A and the value of `BusinessEmail` field of Profile B matches, the two profiles are matched on the `Email` attribute type.
   * - If you choose `ONE_TO_ONE`, the system can only match attributes if the sub-types are an exact match. For example, for the `Email` attribute type, the system will only consider it a match if the value of the `Email` field of Profile A matches the value of the `Email` field of Profile B.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ONE_TO_ONE | MANY_TO_MANY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-rulebasedproperties-attributematchingmodel */
  AttributeMatchingModel: string | Intrinsic
  /**
   * - An indicator of whether to generate IDs and index the data or not.
   * - If you choose `IDENTIFIER_GENERATION`, the process generates IDs and indexes the data.
   * - If you choose `INDEXING`, the process indexes the data without generating IDs.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `IDENTIFIER_GENERATION | INDEXING`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-rulebasedproperties-matchpurpose */
  MatchPurpose?: string | Intrinsic
  /**
   * - A list of `Rule` objects, each of which have fields `RuleName` and `MatchingKeys`.
   * - _Required_: Yes
   * - _Type_: Array of [Rule](./aws-properties-entityresolution-matchingworkflow-rule.html)
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-rulebasedproperties-rules */
  Rules: Rule[]
}

/**
 * An object which defines the `resolutionType` and the `ruleBasedProperties`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface ResolutionTechniques {
  /**
   * - The properties of the provider service.
   * - _Required_: No
   * - _Type_: [ProviderProperties](./aws-properties-entityresolution-matchingworkflow-providerproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-resolutiontechniques-providerproperties */
  ProviderProperties?: ProviderProperties
  /**
   * - The type of matching. There are three types of matching: `RULE_MATCHING`, `ML_MATCHING`, and `PROVIDER`.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `RULE_MATCHING | ML_MATCHING | PROVIDER`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-resolutiontechniques-resolutiontype */
  ResolutionType?: string | Intrinsic
  /**
   * - An object which defines the list of matching rules to run and has a field `Rules`, which is a list of rule objects.
   * - _Required_: No
   * - _Type_: [RuleBasedProperties](./aws-properties-entityresolution-matchingworkflow-rulebasedproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-resolutiontechniques-rulebasedproperties */
  RuleBasedProperties?: RuleBasedProperties
}

/**
 * Creates a `MatchingWorkflow` object which stores the configuration of the data processing job to be run. It is important to note that there should not be a pre-existing `MatchingWorkflow` with the same name. To modify an existing workflow, utilize the `UpdateMatchingWorkflow` API.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html */

export interface EntityResolutionMatchingWorkflow {
  Type: 'AWS::EntityResolution::MatchingWorkflow'
  Properties: {
    /**
     * - A description of the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-description */
    Description?: string | Intrinsic
    /**
     * - An object which defines an incremental run type and has only `incrementalRunType` as a field.
     * - _Required_: No
     * - _Type_: [IncrementalRunConfig](./aws-properties-entityresolution-matchingworkflow-incrementalrunconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-incrementalrunconfig */
    IncrementalRunConfig?: IncrementalRunConfig
    /**
     * - A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
     * - _Required_: Yes
     * - _Type_: Array of [InputSource](./aws-properties-entityresolution-matchingworkflow-inputsource.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-inputsourceconfig */
    InputSourceConfig: InputSource[]
    /**
     * - A list of `OutputSource` objects, each of which contains fields `OutputS3Path`, `ApplyNormalization`, and `Output`.
     * - _Required_: Yes
     * - _Type_: Array of [OutputSource](./aws-properties-entityresolution-matchingworkflow-outputsource.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-outputsourceconfig */
    OutputSourceConfig: OutputSource[]
    /**
     * - An object which defines the `resolutionType` and the `ruleBasedProperties`.
     * - _Required_: Yes
     * - _Type_: [ResolutionTechniques](./aws-properties-entityresolution-matchingworkflow-resolutiontechniques.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-resolutiontechniques */
    ResolutionTechniques: ResolutionTechniques
    /**
     * - The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-entityresolution-matchingworkflow-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-tags */
    Tags?: Tag[]
    /**
     * - The name of the workflow. There can't be multiple `MatchingWorkflows` with the same name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z_0-9-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-matchingworkflow.html#cfn-entityresolution-matchingworkflow-workflowname */
    WorkflowName: string | Intrinsic
  }
}
