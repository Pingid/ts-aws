import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the input parameters for a Guard Hook.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface Options {
    /**
     * - Specifies the S3 location where your input parameters are located.
     * - _Required_: No
     * - _Type_: [S3Location](./aws-properties-cloudformation-guardhook-s3location.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-options-inputparams */
    "InputParams"?: S3Location;
}

/**
 * Specifies the S3 location where your Guard rules or input parameters are located.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface S3Location {
    /**
     * - Specifies the S3 path to the file containing your Guard rules or input parameters (in the form `s3://<bucket name>/<file name>`).
     * - For Guard rules, the object stored in S3 must have one of the following file extensions: `.guard`, `.zip`, or `.tar.gz`.
     * - For input parameters, the object stored in S3 must have one of the following file extensions: `.yaml`, `.json`, `.zip`, or `.tar.gz`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-s3location-uri */
    "Uri": string | Intrinsic;
    /**
     * - For S3 buckets with versioning enabled, specifies the unique ID of the S3 object version to download your Guard rules or input parameters from.
     * - The Guard Hook downloads files from S3 every time the Hook is invoked. To prevent accidental changes or deletions, we recommend using a version when configuring your Guard Hook.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-s3location-versionid */
    "VersionId"?: string | Intrinsic;
}

/**
 * Specifies the resource types, actions, and invocation points to target for the `TargetFilters` property type.
 * For more information, see [AWS CloudFormation Hook target filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-target-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface TargetFiltersItems {
    /**
     * - The actions to target. For `CHANGE_SET` Hook targets, you can only target `CREATE` actions.
     * - Valid values: `CREATE` | `UPDATE` | `DELETE`
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetfiltersitems-actions */
    "Actions"?: (string | Intrinsic)[];
    /**
     * - The invocation points to target. The only valid value is `PRE_PROVISION`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetfiltersitems-invocationpoints */
    "InvocationPoints"?: (string | Intrinsic)[];
    /**
     * - The resource types to target, such as `AWS::S3::Bucket` or `AWS::DynamoDB::Table`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetfiltersitems-targetnames */
    "TargetNames"?: (string | Intrinsic)[];
}

/**
 * The `TargetFilters` property type specifies the target filters for the Hook.
 * For more information, see [AWS CloudFormation Hook target filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-target-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface TargetFilters {
    /**
     * - The specific resource types, actions, and invocation points to target.
     * - _Required_: No
     * - _Type_: [TargetFiltersItems](./aws-properties-cloudformation-guardhook-targetfiltersitems.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetfilters-targetfiltersitems */
    "TargetFiltersItems"?: TargetFiltersItems;
}

/**
 * Specifies the stack names for the `StackFilters` property type to include or exclude specific stacks from Hook invocations.
 * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface StackNames {
    /**
     * - The stack names to exclude. All stacks except those listed here will invoke the Hook.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stacknames-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - The stack names to include. Only the stacks specified in this list will invoke the Hook.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stacknames-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * Specifies the stack roles for the `StackFilters` property type to include or exclude specific stacks from Hook invocations based on their associated IAM roles.
 * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface StackRoles {
    /**
     * - The IAM role ARNs for stacks you want to exclude. The Hook will be invoked on all stacks except those initiated by the specified roles.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stackroles-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - The IAM role ARNs to target stacks associated with these roles. Only stack operations initiated by these roles will invoke the Hook.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stackroles-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * The `StackFilters` property type specifies stack level filters for a Hook.
 * The `StackNames` or `StackRoles` properties are optional. However, you must specify at least one of these properties.
 * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface StackFilters {
    /**
     * - The filtering criteria.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ALL | ANY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stackfilters-filteringcriteria */
    "FilteringCriteria": string | Intrinsic;
    /**
     * - Includes or excludes specific stacks from Hook invocations.
     * - _Required_: No
     * - _Type_: [StackNames](./aws-properties-cloudformation-guardhook-stacknames.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stackfilters-stacknames */
    "StackNames"?: StackNames;
    /**
     * - Includes or excludes specific stacks from Hook invocations based on their associated IAM roles.
     * - _Required_: No
     * - _Type_: [StackRoles](./aws-properties-cloudformation-guardhook-stackroles.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stackfilters-stackroles */
    "StackRoles"?: StackRoles;
}

/**
 * The `AWS::CloudFormation::GuardHook` resource creates and activates a Guard Hook. Using the Guard domain specific language (DSL), you can author Guard Hooks to evaluate your resources before allowing stack operations.
 * For more information, see [Guard Hooks](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/guard-hooks.html) in the _AWS CloudFormation Hooks User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html */

export interface CloudFormationGuardHook extends ResourceAttributes {
    "Type": "AWS::CloudFormation::GuardHook";
    "Properties": {
        /**
         * - The type name alias for the Hook. This alias must be unique per account and Region.
         * - The alias must be in the form `Name1::Name2::Name3` and must not begin with `AWS`. For example, `Private::Guard::MyTestHook`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(?!(?i)aws)[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-alias */
        "Alias": string | Intrinsic;
        /**
         * - The IAM role that the Hook assumes to retrieve your Guard rules from S3 and optionally write a detailed Guard output report back.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-executionrole */
        "ExecutionRole": string | Intrinsic;
        /**
         * - Specifies how the Hook responds when rules fail their evaluation.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `FAIL | WARN`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-failuremode */
        "FailureMode": string | Intrinsic;
        /**
         * - Specifies if the Hook is `ENABLED` or `DISABLED`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-hookstatus */
        "HookStatus": string | Intrinsic;
        /**
         * - Specifies the name of an S3 bucket to store the Guard output report. This report contains the results of your Guard rule validations.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-logbucket */
        "LogBucket"?: string | Intrinsic;
        /**
         * - Specifies the S3 location of your input parameters.
         * - _Required_: No
         * - _Type_: [Options](./aws-properties-cloudformation-guardhook-options.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-options */
        "Options"?: Options;
        /**
         * - Specifies the S3 location of your Guard rules.
         * - _Required_: Yes
         * - _Type_: [S3Location](./aws-properties-cloudformation-guardhook-s3location.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-rulelocation */
        "RuleLocation": S3Location;
        /**
         * - Specifies the stack level filters for the Hook.
         * - Example stack level filter in JSON:
         * - Example stack level filter in YAML:
         * - _Required_: No
         * - _Type_: [StackFilters](./aws-properties-cloudformation-guardhook-stackfilters.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-stackfilters */
        "StackFilters"?: StackFilters;
        /**
         * - Specifies the target filters for the Hook.
         * - Example target filter in JSON:
         * - Example target filter in YAML:
         * - _Required_: No
         * - _Type_: [TargetFilters](./aws-properties-cloudformation-guardhook-targetfilters.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetfilters */
        "TargetFilters"?: TargetFilters;
        /**
         * - Specifies the list of operations the Hook is run against. For more information, see [Hook targets](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-concepts.html#hook-terms-hook-target) in the _AWS CloudFormation Hooks User Guide_.
         * - Valid values: `STACK` | `RESOURCE` | `CHANGE_SET` | `CLOUD_CONTROL`
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-guardhook.html#cfn-cloudformation-guardhook-targetoperations */
        "TargetOperations": (string | Intrinsic)[];
    };
}