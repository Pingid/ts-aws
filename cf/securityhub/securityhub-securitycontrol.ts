import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An object that includes the data type of a security control parameter and its current value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html */

export interface ParameterValue {
    /**
     * - A control parameter that is a boolean.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-boolean */
    "Boolean"?: boolean | Intrinsic;
    /**
     * - A control parameter that is a double.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-double */
    "Double"?: number | Intrinsic;
    /**
     * - A control parameter that is an enum.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-enum */
    "Enum"?: string | Intrinsic;
    /**
     * - A control parameter that is a list of enums.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-enumlist */
    "EnumList"?: (string | Intrinsic)[];
    /**
     * - A control parameter that is an integer.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-integer */
    "Integer"?: number | Intrinsic;
    /**
     * - A control parameter that is a list of integers.
     * - _Required_: No
     * - _Type_: Array of Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-integerlist */
    "IntegerList"?: (number | Intrinsic)[];
    /**
     * - A control parameter that is a string.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-string */
    "String"?: string | Intrinsic;
    /**
     * - A control parameter that is a list of strings.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parametervalue-stringlist */
    "StringList"?: (string | Intrinsic)[];
}

/**
 * An object that provides the current value of a security control parameter and identifies whether it has been customized.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html */

export interface ParameterConfiguration {
    /**
     * - The current value of a control parameter.
     * - _Required_: No
     * - _Type_: [ParameterValue](./aws-properties-securityhub-securitycontrol-parametervalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parameterconfiguration-value */
    "Value"?: ParameterValue;
    /**
     * - Identifies whether a control parameter uses a custom user-defined value or subscribes to the default AWS Security Hub behavior.
     * - When `ValueType` is set equal to `DEFAULT`, the default behavior can be a specific Security Hub default value, or the default behavior can be to ignore a specific parameter. When `ValueType` is set equal to `DEFAULT`, Security Hub ignores user-provided input for the `Value` field.
     * - When `ValueType` is set equal to `CUSTOM`, the `Value` field can't be empty.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DEFAULT | CUSTOM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parameterconfiguration-valuetype */
    "ValueType": string | Intrinsic;
}

/**
 * The `AWS::SecurityHub::SecurityControl` resource specifies custom parameter values for an AWS Security Hub control. For a list of controls that support custom parameters, see [Security Hub controls reference](https://docs.aws.amazon.com/securityhub/latest/userguide/securityhub-controls-reference.html). You can also use this resource to specify the use of default parameter values for a control. For more information about custom parameters, see [Custom control parameters](https://docs.aws.amazon.com/securityhub/latest/userguide/custom-control-parameters.html) in the _AWS Security Hub User Guide_.
 * Tags aren't supported for this resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html */

export interface SecurityHubSecurityControl extends ResourceAttributes {
    "Type": "AWS::SecurityHub::SecurityControl";
    "Properties": {
        /**
         * - The most recent reason for updating the customizable properties of a security control. This differs from the `UpdateReason` field of the [`BatchUpdateStandardsControlAssociations`](https://docs.aws.amazon.com/securityhub/1.0/APIReference/API_BatchUpdateStandardsControlAssociations.html) API, which tracks the reason for updating the enablement status of a control. This field accepts alphanumeric characters in addition to white spaces, dashes, and underscores.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([^-]|[-_ a-zA-Z0-9])+$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-lastupdatereason */
        "LastUpdateReason"?: string | Intrinsic;
        /**
         * - An object that identifies the name of a control parameter, its current value, and whether it has been customized.
         * - _Required_: Yes
         * - _Type_: Object of [ParameterConfiguration](./aws-properties-securityhub-securitycontrol-parameterconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-parameters */
        "Parameters": Record<string, ParameterConfiguration>;
        /**
         * - The Amazon Resource Name (ARN) for a security control across standards, such as `arn:aws:securityhub:eu-central-1:123456789012:security-control/S3.1`. This parameter doesn't mention a specific standard.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `.*\S.*`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-securitycontrolarn */
        "SecurityControlArn"?: string | Intrinsic;
        /**
         * - The unique identifier of a security control across standards. Values for this field typically consist of an AWS service name and a number, such as APIGateway.3.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `.*\S.*`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-securityhub-securitycontrol.html#cfn-securityhub-securitycontrol-securitycontrolid */
        "SecurityControlId"?: string | Intrinsic;
    };
}