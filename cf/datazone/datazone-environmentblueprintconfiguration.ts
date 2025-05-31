import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The regional parameters in the environment blueprint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html */

export interface RegionalParameter {
    /**
     * - A string to string map containing parameters for the region.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-regionalparameter-parameters */
    "Parameters"?: Record<string, string | Intrinsic>;
    /**
     * - The region specified in the environment parameter.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-regionalparameter-region */
    "Region"?: string | Intrinsic;
}

/**
 * The `LakeFormationConfiguration` property type specifies Property description not available. for an [AWS::DataZone::EnvironmentBlueprintConfiguration](./aws-resource-datazone-environmentblueprintconfiguration.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html */

export interface LakeFormationConfiguration {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 0`
     * - _Maximum_: `1024 | 20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-lakeformationconfiguration-locationregistrationexcludes3locations */
    "LocationRegistrationExcludeS3Locations"?: (string | Intrinsic)[];
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-lakeformationconfiguration-locationregistrationrole */
    "LocationRegistrationRole"?: string | Intrinsic;
}

/**
 * The `ProvisioningConfiguration` property type specifies Property description not available. for an [AWS::DataZone::EnvironmentBlueprintConfiguration](./aws-resource-datazone-environmentblueprintconfiguration.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html */

export interface ProvisioningConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: [LakeFormationConfiguration](./aws-properties-datazone-environmentblueprintconfiguration-lakeformationconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-provisioningconfiguration-lakeformationconfiguration */
    "LakeFormationConfiguration": LakeFormationConfiguration;
}

/**
 * The configuration details of an environment blueprint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html */

export interface DataZoneEnvironmentBlueprintConfiguration extends ResourceAttributes {
    "Type": "AWS::DataZone::EnvironmentBlueprintConfiguration";
    "Properties": {
        /**
         * - The identifier of the Amazon DataZone domain in which an environment blueprint exists.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-domainidentifier */
        "DomainIdentifier": string | Intrinsic;
        /**
         * - The enabled AWS Regions specified in a blueprint configuration.
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Maximum_: `16`
         * - _Minimum_: `4 | 0`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-enabledregions */
        "EnabledRegions": (string | Intrinsic)[];
        /**
         * - The identifier of the environment blueprint.
         * - In the current release, only the following values are supported: `DefaultDataLake` and `DefaultDataWarehouse`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-environmentblueprintidentifier */
        "EnvironmentBlueprintIdentifier": string | Intrinsic;
        /**
         * - The environment role permission boundary.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws[^:]*:iam::(aws|\d{12}):policy/[\w+=,.@-]*$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-environmentrolepermissionboundary */
        "EnvironmentRolePermissionBoundary"?: string | Intrinsic;
        /**
         * - The ARN of the manage access role.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-manageaccessrolearn */
        "ManageAccessRoleArn"?: string | Intrinsic;
        /**
         * - The provisioning configuration of a blueprint.
         * - _Required_: No
         * - _Type_: Array of [ProvisioningConfiguration](./aws-properties-datazone-environmentblueprintconfiguration-provisioningconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-provisioningconfigurations */
        "ProvisioningConfigurations"?: ProvisioningConfiguration[];
        /**
         * - The ARN of the provisioning role.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-provisioningrolearn */
        "ProvisioningRoleArn"?: string | Intrinsic;
        /**
         * - The regional parameters of the environment blueprint.
         * - _Required_: No
         * - _Type_: Array of [RegionalParameter](./aws-properties-datazone-environmentblueprintconfiguration-regionalparameter.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-environmentblueprintconfiguration.html#cfn-datazone-environmentblueprintconfiguration-regionalparameters */
        "RegionalParameters"?: RegionalParameter[];
    };
}