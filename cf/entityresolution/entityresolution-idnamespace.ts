import type { Intrinsic } from '../intrinsic/index.js' /**
 * An object containing `InputSourceARN` and `SchemaName`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html */

export interface IdNamespaceInputSource {
  /**
   * - An AWS Glue table Amazon Resource Name (ARN) or a matching workflow ARN for the input source table.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(idnamespace/[a-zA-Z_0-9-]{1,255})$|^arn:(aws|aws-us-gov|aws-cn):glue:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:(table/[a-zA-Z_0-9-]{1,255}/[a-zA-Z_0-9-]{1,255})$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idnamespaceinputsource-inputsourcearn */
  InputSourceARN: string | Intrinsic
  /**
   * - The name of the schema.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z_0-9-]*$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idnamespaceinputsource-schemaname */
  SchemaName?: string | Intrinsic
}

/**
 * The tags used to organize, track, or control access for this resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html */

export interface Tag {
  /**
   * - The key of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-tag-value */
  Value: string | Intrinsic
}

/**
 * An object containing `ProviderConfiguration` and `ProviderServiceArn`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html */

export interface NamespaceProviderProperties {
  /**
   * - An object which defines any additional configurations required by the provider service.
   * - _Required_: No
   * - _Type_: Object of String
   * - _Pattern_: `^.+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-namespaceproviderproperties-providerconfiguration */
  ProviderConfiguration?: Record<string, string | Intrinsic>
  /**
   * - The Amazon Resource Name (ARN) of the provider service.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):(entityresolution):([a-z]{2}-[a-z]{1,10}-[0-9])::providerservice/([a-zA-Z0-9_-]{1,255})/([a-zA-Z0-9_-]{1,255})$`
   * - _Minimum_: `20`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-namespaceproviderproperties-providerservicearn */
  ProviderServiceArn: string | Intrinsic
}

/**
 * An object containing `RuleName`, and `MatchingKeys`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html */

export interface Rule {
  /**
   * - A list of `MatchingKeys`. The `MatchingKeys` must have been defined in the `SchemaMapping`. Two records are considered to match according to this rule if all of the `MatchingKeys` match.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-rule-matchingkeys */
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
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-rule-rulename */
  RuleName: string | Intrinsic
}

/**
 * The rule-based properties of an ID namespace. These properties define how the ID namespace can be used in an ID mapping workflow.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html */

export interface NamespaceRuleBasedProperties {
  /**
   * - The comparison type. You can either choose `ONE_TO_ONE` or `MANY_TO_MANY` as the `attributeMatchingModel`.
   * - If you choose `MANY_TO_MANY`, the system can match attributes across the sub-types of an attribute type. For example, if the value of the `Email` field of Profile A matches the value of `BusinessEmail` field of Profile B, the two profiles are matched on the `Email` attribute type.
   * - If you choose `ONE_TO_ONE`, the system can only match attributes if the sub-types are an exact match. For example, for the `Email` attribute type, the system will only consider it a match if the value of the `Email` field of Profile A matches the value of the `Email` field of Profile B.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ONE_TO_ONE | MANY_TO_MANY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-namespacerulebasedproperties-attributematchingmodel */
  AttributeMatchingModel?: string | Intrinsic
  /**
   * - The type of matching record that is allowed to be used in an ID mapping workflow.
   * - If the value is set to `ONE_SOURCE_TO_ONE_TARGET`, only one record in the source is matched to one record in the target.
   * - If the value is set to `MANY_SOURCE_TO_ONE_TARGET`, all matching records in the source are matched to one record in the target.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-namespacerulebasedproperties-recordmatchingmodels */
  RecordMatchingModels?: (string | Intrinsic)[]
  /**
   * - The sets of rules you can use in an ID mapping workflow. The limitations specified for the source and target must be compatible.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-namespacerulebasedproperties-ruledefinitiontypes */
  RuleDefinitionTypes?: (string | Intrinsic)[]
  /**
   * - The rules for the ID namespace.
   * - _Required_: No
   * - _Type_: Array of [Rule](./aws-properties-entityresolution-idnamespace-rule.html)
   * - _Minimum_: `1`
   * - _Maximum_: `25`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-namespacerulebasedproperties-rules */
  Rules?: Rule[]
}

/**
 * An object containing `IdMappingType`, `ProviderProperties`, and `RuleBasedProperties`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html */

export interface IdNamespaceIdMappingWorkflowProperties {
  /**
   * - The type of ID mapping.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `PROVIDER | RULE_BASED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties-idmappingtype */
  IdMappingType: string | Intrinsic
  /**
   * - An object which defines any additional configurations required by the provider service.
   * - _Required_: No
   * - _Type_: [NamespaceProviderProperties](./aws-properties-entityresolution-idnamespace-namespaceproviderproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties-providerproperties */
  ProviderProperties?: NamespaceProviderProperties
  /**
   * - An object which defines any additional configurations required by rule-based matching.
   * - _Required_: No
   * - _Type_: [NamespaceRuleBasedProperties](./aws-properties-entityresolution-idnamespace-namespacerulebasedproperties.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties-rulebasedproperties */
  RuleBasedProperties?: NamespaceRuleBasedProperties
}

/**
 * Creates an ID namespace object which will help customers provide metadata explaining their dataset and how to use it. Each ID namespace must have a unique name. To modify an existing ID namespace, use the `UpdateIdNamespace` API.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html */

export interface EntityResolutionIdNamespace {
  Type: 'AWS::EntityResolution::IdNamespace'
  Properties: {
    /**
     * - The description of the ID namespace.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-description */
    Description?: string | Intrinsic
    /**
     * - Determines the properties of `IdMappingWorflow` where this `IdNamespace` can be used as a `Source` or a `Target`.
     * - _Required_: No
     * - _Type_: Array of [IdNamespaceIdMappingWorkflowProperties](./aws-properties-entityresolution-idnamespace-idnamespaceidmappingworkflowproperties.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idmappingworkflowproperties */
    IdMappingWorkflowProperties?: IdNamespaceIdMappingWorkflowProperties[]
    /**
     * - The name of the ID namespace.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z_0-9-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-idnamespacename */
    IdNamespaceName: string | Intrinsic
    /**
     * - A list of `InputSource` objects, which have the fields `InputSourceARN` and `SchemaName`.
     * - _Required_: No
     * - _Type_: Array of [IdNamespaceInputSource](./aws-properties-entityresolution-idnamespace-idnamespaceinputsource.html)
     * - _Minimum_: `0`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-inputsourceconfig */
    InputSourceConfig?: IdNamespaceInputSource[]
    /**
     * - The Amazon Resource Name (ARN) of the IAM role. AWS Entity Resolution assumes this role to access the resources defined in this `IdNamespace` on your behalf as part of the workflow run.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):iam::\d{12}:role/?[a-zA-Z_0-9+=,.@\-_/]+$`
     * - _Minimum_: `32`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-rolearn */
    RoleArn?: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for this resource.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-entityresolution-idnamespace-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-tags */
    Tags?: Tag[]
    /**
     * - The type of ID namespace. There are two types: `SOURCE` and `TARGET`.
     * - The `SOURCE` contains configurations for `sourceId` data that will be processed in an ID mapping workflow.
     * - The `TARGET` contains a configuration of `targetId` which all `sourceIds` will resolve to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SOURCE | TARGET`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-idnamespace.html#cfn-entityresolution-idnamespace-type */
    Type: string | Intrinsic
  }
}
