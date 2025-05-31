import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The tags to assign to the framework.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-tag-key */
    "Key"?: string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-tag-value */
    "Value"?: string | Intrinsic;
}

/**
 * The parameters for a control. A control can have zero, one, or more than one parameter. An example of a control with two parameters is: "backup plan frequency is at least `daily` and the retention period is at least `1 year`". The first parameter is `daily`. The second parameter is `1 year`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html */

export interface ControlInputParameter {
    /**
     * - The name of a parameter, for example, `BackupPlanFrequency`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-controlinputparameter-parametername */
    "ParameterName": string | Intrinsic;
    /**
     * - The value of parameter, for example, `hourly`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-controlinputparameter-parametervalue */
    "ParameterValue": string | Intrinsic;
}

/**
 * A framework consists of one or more controls. Each control has its own control scope. The control scope can include one or more resource types, a combination of a tag key and value, or a combination of one resource type and one resource ID. If no scope is specified, evaluations for the rule are triggered when any resource in your recording group changes in configuration.
 * ###### Note
 * 
 * To set a control scope that includes all of a particular resource, leave the `ControlScope` empty or do not pass it when calling `CreateFramework`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html */

export interface ControlScope {
    /**
     * - The ID of the only AWS resource that you want your control scope to contain.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-controlscope-complianceresourceids */
    "ComplianceResourceIds"?: (string | Intrinsic)[];
    /**
     * - Describes whether the control scope includes one or more types of resources, such as `EFS` or `RDS`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-controlscope-complianceresourcetypes */
    "ComplianceResourceTypes"?: (string | Intrinsic)[];
    /**
     * - The tag key-value pair applied to those AWS resources that you want to trigger an evaluation for a rule. A maximum of one key-value pair can be provided. The tag value is optional, but it cannot be an empty string if you are creating or editing a framework from the console (though the value can be an empty string when included in a CloudFormation template).
     * - The structure to assign a tag is: `[{"Key":"string","Value":"string"}]`.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-backup-framework-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-controlscope-tags */
    "Tags"?: Tag[];
}

/**
 * Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html */

export interface FrameworkControl {
    /**
     * - The name/value pairs.
     * - _Required_: No
     * - _Type_: Array of [ControlInputParameter](./aws-properties-backup-framework-controlinputparameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkcontrol-controlinputparameters */
    "ControlInputParameters"?: ControlInputParameter[];
    /**
     * - The name of a control. This name is between 1 and 256 characters.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkcontrol-controlname */
    "ControlName": string | Intrinsic;
    /**
     * - The scope of a control. The control scope defines what the control will evaluate. Three examples of control scopes are: a specific backup plan, all backup plans with a specific tag, or all backup plans.
     * - For more information, see [`ControlScope`.](https://docs.aws.amazon.com/aws-backup/latest/devguide/API_ControlScope.html)
     * - _Required_: No
     * - _Type_: [ControlScope](./aws-properties-backup-framework-controlscope.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkcontrol-controlscope */
    "ControlScope"?: ControlScope;
}

/**
 * Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance.
 * For a sample AWS CloudFormation template, see the [AWS Backup Developer Guide](https://docs.aws.amazon.com/aws-backup/latest/devguide/bam-cfn-integration.html#bam-cfn-frameworks-template).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html */

export interface BackupFramework extends ResourceAttributes {
    "Type": "AWS::Backup::Framework";
    "Properties": {
        /**
         * - Contains detailed information about all of the controls of a framework. Each framework must contain at least one control.
         * - _Required_: Yes
         * - _Type_: Array of [FrameworkControl](./aws-properties-backup-framework-frameworkcontrol.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkcontrols */
        "FrameworkControls": FrameworkControl[];
        /**
         * - An optional description of the framework with a maximum 1,024 characters.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkdescription */
        "FrameworkDescription"?: string | Intrinsic;
        /**
         * - The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (\_).
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z][_a-zA-Z0-9]*`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworkname */
        "FrameworkName"?: string | Intrinsic;
        /**
         * - The tags to assign to your framework.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-backup-framework-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-backup-framework.html#cfn-backup-framework-frameworktags */
        "FrameworkTags"?: Tag[];
    };
}