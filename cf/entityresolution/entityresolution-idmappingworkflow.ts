import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * An object containing `InputSourceARN`, `SchemaName`, and `Type`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface IdMappingWorkflowInputSource {
  /**
   * - An AWS Glue table Amazon Resource Name (ARN) or a matching workflow ARN for the input source table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(idnamespace/[a-zA-Z_0-9-]{1,255})$|^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(matchingworkflow/[a-zA-Z_0-9-]{1,255})$|^arn:(aws|aws-us-gov|aws-cn):glue:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(table/[a-zA-Z_0-9-]{1,255}/[a-zA-Z_0-9-]{1,255})$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowinputsource-inputsourcearn */
  InputSourceARN: string | Intrinsic
  /**
   * - The ARN (Amazon Resource Name) that AWS Entity Resolution generated for the `SchemaMapping`.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):entityresolution:.*:[0-9]+:(schemamapping/.*)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowinputsource-schemaarn */
  SchemaArn?: string | Intrinsic
  /**
   * - The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
   * - The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
   * - The `TARGET` contains a configuration of `targetId` which all `sourceIds` will resolve to.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SOURCE | TARGET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowinputsource-type */
  Type?: string | Intrinsic
}

/**
 * A list of `IdMappingWorkflowOutputSource` objects, each of which contains fields `OutputS3Path` and `Output`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface IdMappingWorkflowOutputSource {
  /**
   * - Customer AWS KMS ARN for encryption at rest. If not provided, system will use an AWS Entity Resolution managed KMS key.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):kms:.*:[0-9]+:.*$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowoutputsource-kmsarn */
  KMSArn?: string | Intrinsic
  /**
   * - The S3 path to which AWS Entity Resolution will write the output table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^s3://([^/]+)/?(.*?([^/]+)/?)$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingworkflowoutputsource-outputs3path */
  OutputS3Path: string | Intrinsic
}

/**
 * The tags used to organize, track, or control access for this resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-tag-value */
  Value: string | Intrinsic
}

/**
 * The Amazon S3 location that temporarily stores your data while it processes. Your information won't be saved permanently.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface IntermediateSourceConfiguration {
  /**
   * - The Amazon S3 location (bucket and prefix). For example: `s3://provider_bucket/DOC-EXAMPLE-BUCKET`
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-intermediatesourceconfiguration-intermediates3path */
  IntermediateS3Path: string | Intrinsic
}

/**
 * An object containing `RuleName`, and `MatchingKeys`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface Rule {
  /**
   * - A list of `MatchingKeys`. The `MatchingKeys` must have been defined in the `SchemaMapping`. Two records are considered to match according to this rule if all of the `MatchingKeys` match.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `15`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-rule-matchingkeys */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-rule-rulename */
  RuleName: string | Intrinsic
}

/**
 * An object containing the `providerServiceARN`, `intermediateSourceConfiguration`, and `providerConfiguration`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface ProviderProperties {
  /**
   * - The Amazon S3 location that temporarily stores your data while it processes. Your information won't be saved permanently.
   * - _Required_: No
   * - _Type_: [IntermediateSourceConfiguration](./aws-properties-entityresolution-idmappingworkflow-intermediatesourceconfiguration.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-providerproperties-intermediatesourceconfiguration */
  IntermediateSourceConfiguration?: IntermediateSourceConfiguration
  /**
   * - The required configuration fields to use with the provider service.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^.+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-providerproperties-providerconfiguration */
  ProviderConfiguration?: Record<string, string | Intrinsic>
  /**
   * - The ARN of the provider service.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):(entityresolution):([a-z]{2}-[a-z]{1,10}-[0-9])::providerservice/([a-zA-Z0-9_-]{1,255})/([a-zA-Z0-9_-]{1,255})$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-providerproperties-providerservicearn */
  ProviderServiceArn: string | Intrinsic
}

/**
 * An object that defines the list of matching rules to run in an ID mapping workflow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface IdMappingRuleBasedProperties {
  /**
   * - The comparison type. You can either choose `ONE_TO_ONE` or `MANY_TO_MANY` as the `attributeMatchingModel`.
   * - If you choose `MANY_TO_MANY`, the system can match attributes across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A matches the value of the `BusinessEmail` field of Profile B, the two profiles are matched on the `Email` attribute type.
   * - If you choose `ONE_TO_ONE`, the system can only match attributes if the sub-types are an exact match. For example, for the `Email` attribute type, the system will only consider it a match if the value of the `Email` field of Profile A matches the value of the `Email` field of Profile B.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ONE_TO_ONE | MANY_TO_MANY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingrulebasedproperties-attributematchingmodel */
  AttributeMatchingModel: string | Intrinsic
  /**
   * - The type of matching record that is allowed to be used in an ID mapping workflow.
   * - If the value is set to `ONE_SOURCE_TO_ONE_TARGET`, only one record in the source can be matched to the same record in the target.
   * - If the value is set to `MANY_SOURCE_TO_ONE_TARGET`, multiple records in the source can be matched to one record in the target.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ONE_SOURCE_TO_ONE_TARGET | MANY_SOURCE_TO_ONE_TARGET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingrulebasedproperties-recordmatchingmodel */
  RecordMatchingModel: string | Intrinsic
  /**
   * - The set of rules you can use in an ID mapping workflow. The limitations specified for the source or target to define the match rules must be compatible.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SOURCE | TARGET`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingrulebasedproperties-ruledefinitiontype */
  RuleDefinitionType?: string | Intrinsic
  /**
   * - The rules that can be used for ID mapping.
   * - _Required_: No
   * - _Type_: Array of [Rule](./aws-properties-entityresolution-idmappingworkflow-rule.html)
   * - _Minimum_: `1`
   * - _Maximum_: `25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingrulebasedproperties-rules */
  Rules?: Rule[]
}

/**
 * An object which defines the ID mapping technique and any additional configurations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface IdMappingTechniques {
  /**
   * - The type of ID mapping.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PROVIDER | RULE_BASED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingtechniques-idmappingtype */
  IdMappingType?: string | Intrinsic
  /**
   * - An object which defines any additional configurations required by the provider service.
   * - _Required_: No
   * - _Type_: [ProviderProperties](./aws-properties-entityresolution-idmappingworkflow-providerproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingtechniques-providerproperties */
  ProviderProperties?: ProviderProperties
  /**
   * - An object which defines any additional configurations required by rule-based matching.
   * - _Required_: No
   * - _Type_: [IdMappingRuleBasedProperties](./aws-properties-entityresolution-idmappingworkflow-idmappingrulebasedproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingtechniques-rulebasedproperties */
  RuleBasedProperties?: IdMappingRuleBasedProperties
}

/**
 * Creates an `IdMappingWorkflow` object which stores the configuration of the data processing job to be run. Each `IdMappingWorkflow` must have a unique workflow name. To modify an existing workflow, use the `UpdateIdMappingWorkflow` API.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html */

export interface EntityResolutionIdMappingWorkflow extends ResourceAttributes {
  Type: 'AWS::EntityResolution::IdMappingWorkflow'
  Properties: {
    /**
     * - A description of the workflow.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-description */
    Description?: string | Intrinsic
    /**
     * - An object which defines the ID mapping technique and any additional configurations.
     * - _Required_: Yes
     * - _Type_: [IdMappingTechniques](./aws-properties-entityresolution-idmappingworkflow-idmappingtechniques.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-idmappingtechniques */
    IdMappingTechniques: IdMappingTechniques
    /**
     * - A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
     * - _Required_: Yes
     * - _Type_: Array of [IdMappingWorkflowInputSource](./aws-properties-entityresolution-idmappingworkflow-idmappingworkflowinputsource.html)
     * - _Minimum_: `1`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-inputsourceconfig */
    InputSourceConfig: IdMappingWorkflowInputSource[]
    /**
     * - A list of `IdMappingWorkflowOutputSource` objects, each of which contains fields `OutputS3Path` and `Output`.
     * - _Required_: No
     * - _Type_: Array of [IdMappingWorkflowOutputSource](./aws-properties-entityresolution-idmappingworkflow-idmappingworkflowoutputsource.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-outputsourceconfig */
    OutputSourceConfig?: IdMappingWorkflowOutputSource[]
    /**
     * - The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to create resources on your behalf as part of workflow execution.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-rolearn */
    RoleArn: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-entityresolution-idmappingworkflow-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-tags */
    Tags?: Tag[]
    /**
     * - The name of the workflow. There can't be multiple `IdMappingWorkflows` with the same name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z_0-9-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idmappingworkflow.html#cfn-entityresolution-idmappingworkflow-workflowname */
    WorkflowName: string | Intrinsic
  }
}
