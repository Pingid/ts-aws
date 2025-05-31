import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies the stack names for the `StackFilters` property type to include or exclude specific stacks from Hook invocations.
 * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html */

export interface StackNames {
    /**
     * - The stack names to exclude. All stacks except those listed here will invoke the Hook.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stacknames-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - The stack names to include. Only the stacks specified in this list will invoke the Hook.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stacknames-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * Specifies the stack roles for the `StackFilters` property type to include or exclude specific stacks from Hook invocations based on their associated IAM roles.
 * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html */

export interface StackRoles {
    /**
     * - The IAM role ARNs for stacks you want to exclude. The Hook will be invoked on all stacks except those initiated by the specified roles.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stackroles-exclude */
    "Exclude"?: (string | Intrinsic)[];
    /**
     * - The IAM role ARNs to target stacks associated with these roles. Only stack operations initiated by these roles will invoke the Hook.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stackroles-include */
    "Include"?: (string | Intrinsic)[];
}

/**
 * The `StackFilters` property type specifies stack level filters for a Hook.
 * The `StackNames` or `StackRoles` properties are optional. However, you must specify at least one of these properties.
 * For more information, see [AWS CloudFormation Hooks stack level filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-stack-level-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html */

export interface StackFilters {
    /**
     * - The filtering criteria.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ALL | ANY`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stackfilters-filteringcriteria */
    "FilteringCriteria": string | Intrinsic;
    /**
     * - Includes or excludes specific stacks from Hook invocations.
     * - _Required_: No
     * - _Type_: [StackNames](./aws-properties-cloudformation-lambdahook-stacknames.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stackfilters-stacknames */
    "StackNames"?: StackNames;
    /**
     * - Includes or excludes specific stacks from Hook invocations based on their associated IAM roles.
     * - _Required_: No
     * - _Type_: [StackRoles](./aws-properties-cloudformation-lambdahook-stackroles.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stackfilters-stackroles */
    "StackRoles"?: StackRoles;
}

/**
 * Specifies the resource types, actions, and invocation points to target for the `TargetFilters` property type.
 * For more information, see [AWS CloudFormation Hook target filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-target-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html */

export interface TargetFiltersItems {
    /**
     * - The actions to target.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetfiltersitems-actions */
    "Actions"?: (string | Intrinsic)[];
    /**
     * - The invocation points to target.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetfiltersitems-invocationpoints */
    "InvocationPoints"?: (string | Intrinsic)[];
    /**
     * - The resource types to target, such as `AWS::S3::Bucket` or `AWS::DynamoDB::Table`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetfiltersitems-targetnames */
    "TargetNames"?: (string | Intrinsic)[];
}

/**
 * The `TargetFilters` property type specifies the target filters for the Hook.
 * For more information, see [AWS CloudFormation Hook target filters](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-target-filtering.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html */

export interface TargetFilters {
    /**
     * - The specific resource types, actions, and invocation points to target.
     * - _Required_: No
     * - _Type_: [TargetFiltersItems](./aws-properties-cloudformation-lambdahook-targetfiltersitems.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetfilters-targetfiltersitems */
    "TargetFiltersItems"?: TargetFiltersItems;
}

/**
 * The `AWS::CloudFormation::LambdaHook` resource creates and activates a Lambda Hook. You can use a Lambda Hook to evaluate your resources before allowing stack operations. This resource forwards requests for resource evaluation to a Lambda function.
 * For more information, see [Lambda Hooks](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/lambda-hooks.html) in the _AWS CloudFormation Hooks User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html */

export interface CloudFormationLambdaHook extends ResourceAttributes {
    "Type": "AWS::CloudFormation::LambdaHook";
    "Properties": {
        /**
         * - The type name alias for the Hook. This alias must be unique per account and Region.
         * - The alias must be in the form `Name1::Name2::Name3` and must not begin with `AWS`. For example, `Private::Lambda::MyTestHook`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(?!(?i)aws)[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}::[A-Za-z0-9]{2,64}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-alias */
        "Alias": string | Intrinsic;
        /**
         * - The IAM role that the Hook assumes to invoke your Lambda function.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `arn:.+:iam::[0-9]{12}:role/.+`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-executionrole */
        "ExecutionRole": string | Intrinsic;
        /**
         * - Specifies how the Hook responds when the Lambda function invoked by the Hook returns a `FAILED` response.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `FAIL | WARN`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-failuremode */
        "FailureMode": string | Intrinsic;
        /**
         * - Specifies if the Hook is `ENABLED` or `DISABLED`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-hookstatus */
        "HookStatus": string | Intrinsic;
        /**
         * - Specifies the Lambda function for the Hook. You can use:
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}(-gov)?(-iso([a-z])?)?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?`
         * - _Minimum_: `1`
         * - _Maximum_: `170`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-lambdafunction */
        "LambdaFunction": string | Intrinsic;
        /**
         * - Specifies the stack level filters for the Hook.
         * - Example stack level filter in JSON:
         * - Example stack level filter in YAML:
         * - _Required_: No
         * - _Type_: [StackFilters](./aws-properties-cloudformation-lambdahook-stackfilters.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-stackfilters */
        "StackFilters"?: StackFilters;
        /**
         * - Specifies the target filters for the Hook.
         * - Example target filter in JSON:
         * - Example target filter in YAML:
         * - _Required_: No
         * - _Type_: [TargetFilters](./aws-properties-cloudformation-lambdahook-targetfilters.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetfilters */
        "TargetFilters"?: TargetFilters;
        /**
         * - Specifies the list of operations the Hook is run against. For more information, see [Hook targets](https://docs.aws.amazon.com/cloudformation-cli/latest/hooks-userguide/hooks-concepts.html#hook-terms-hook-target) in the _AWS CloudFormation Hooks User Guide_.
         * - Valid values: `STACK` | `RESOURCE` | `CHANGE_SET` | `CLOUD_CONTROL`
         * - _Required_: Yes
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-lambdahook.html#cfn-cloudformation-lambdahook-targetoperations */
        "TargetOperations": (string | Intrinsic)[];
    };
}