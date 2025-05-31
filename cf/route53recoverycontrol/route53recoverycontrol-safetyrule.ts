import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Route53RecoveryControl::SafetyRule](./aws-resource-route53recoverycontrol-safetyrule.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `256`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-tag-value */
    "Value": string | Intrinsic;
}

/**
 * An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is `On` after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html */

export interface AssertionRule {
    /**
     * - The routing controls that are part of transactions that are evaluated to determine if a request to change a routing control state is allowed. For example, you might include three routing controls, one for each of three AWS Regions.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-assertionrule-assertedcontrols */
    "AssertedControls": (string | Intrinsic)[];
    /**
     * - An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent flapping of state. The wait period is 5000 ms by default, but you can choose a custom value.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-assertionrule-waitperiodms */
    "WaitPeriodMs": number | Intrinsic;
}

/**
 * A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.
 * For example, if you specify one gating routing control and you set the `Type` in the rule configuration to `OR`, that indicates that you must set the gating routing control to `On` for the rule to evaluate as true; that is, for the gating control switch to be On. When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html */

export interface GatingRule {
    /**
     * - An array of gating routing control Amazon Resource Names (ARNs). For a simple on-off switch, specify the ARN for one routing control. The gating routing controls are evaluated by the rule configuration that you specify to determine if the target routing control states can be changed.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule-gatingcontrols */
    "GatingControls": (string | Intrinsic)[];
    /**
     * - An array of target routing control Amazon Resource Names (ARNs) for which the states can only be updated if the rule configuration that you specify evaluates to true for the gating routing control. As a simple example, if you have a single gating control, it acts as an overall on-off switch for a set of target routing controls. You can use this to manually override automated failover, for example.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule-targetcontrols */
    "TargetControls": (string | Intrinsic)[];
    /**
     * - An evaluation period, in milliseconds (ms), during which any request against the target routing controls will fail. This helps prevent flapping of state. The wait period is 5000 ms by default, but you can choose a custom value.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule-waitperiodms */
    "WaitPeriodMs": number | Intrinsic;
}

/**
 * The rule configuration for an assertion rule. That is, the criteria that you set for specific assertion controls (routing controls) that specify how many controls must be enabled after a transaction completes.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html */

export interface RuleConfig {
    /**
     * - Logical negation of the rule. If the rule would usually evaluate true, it's evaluated as false, and vice versa.
     * - _Required_: Yes
     * - _Type_: Boolean
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-ruleconfig-inverted */
    "Inverted": boolean | Intrinsic;
    /**
     * - The value of N, when you specify an `ATLEAST` rule type. That is, `Threshold` is the number of controls that must be set when you specify an `ATLEAST` type.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-ruleconfig-threshold */
    "Threshold": number | Intrinsic;
    /**
     * - A rule can be one of the following: `ATLEAST`, `AND`, or `OR`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `AND | OR | ATLEAST`
     * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-ruleconfig-type */
    "Type": string | Intrinsic;
}

/**
 * Creates a safety rule in a control panel in Amazon Route 53 Application Recovery Controller. Safety rules in Amazon Route 53 Application Recovery Controller let you add safeguards around changing routing control states, and enabling and disabling routing controls, to help prevent unwanted outcomes. Note that the name of a safety rule must be unique within a control panel.
 * There are two types of safety rules in Route 53 ARC: assertion rules and gating rules.
 * Assertion rule: An assertion rule enforces that, when you change a routing control state, certain criteria are met. For example, the criteria might be that at least one routing control state is `On` after the transaction completes so that traffic continues to be directed to at least one cell for the application. This prevents a fail-open scenario.
 * Gating rule: A gating rule lets you configure a gating routing control as an overall on-off switch for a group of routing controls. Or, you can configure more complex gating scenarios, for example, by configuring multiple gating routing controls.
 * For more information, see [Safety rules](https://docs.aws.amazon.com/r53recovery/latest/dg/routing-control.safety-rules.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html */

export interface Route53RecoveryControlSafetyRule extends ResourceAttributes {
    "Type": "AWS::Route53RecoveryControl::SafetyRule";
    "Properties": {
        /**
         * - An assertion rule enforces that, when you change a routing control state, that the criteria that you set in the rule configuration is met. Otherwise, the change to the routing control is not accepted. For example, the criteria might be that at least one routing control state is `On` after the transaction so that traffic continues to flow to at least one cell for the application. This ensures that you avoid a fail-open scenario.
         * - _Required_: No
         * - _Type_: [AssertionRule](./aws-properties-route53recoverycontrol-safetyrule-assertionrule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-assertionrule */
        "AssertionRule"?: AssertionRule;
        /**
         * - The Amazon Resource Name (ARN) of the control panel.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-controlpanelarn */
        "ControlPanelArn"?: string | Intrinsic;
        /**
         * - A gating rule verifies that a gating routing control or set of gating routing controls, evaluates as true, based on a rule configuration that you specify, which allows a set of routing control state changes to complete.
         * - For example, if you specify one gating routing control and you set the `Type` in the rule configuration to `OR`, that indicates that you must set the gating routing control to `On` for the rule to evaluate as true; that is, for the gating control switch to be On. When you do that, then you can update the routing control states for the target routing controls that you specify in the gating rule.
         * - _Required_: No
         * - _Type_: [GatingRule](./aws-properties-route53recoverycontrol-safetyrule-gatingrule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-gatingrule */
        "GatingRule"?: GatingRule;
        /**
         * - The name of the assertion rule. The name must be unique within a control panel. You can use any non-white space character in the name except the following: & > < ' (single quote) " (double quote) ; (semicolon)
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-name */
        "Name"?: string | Intrinsic;
        /**
         * - The criteria that you set for specific assertion controls (routing controls) that designate how many control states must be `ON` as the result of a transaction. For example, if you have three assertion controls, you might specify `ATLEAST 2` for your rule configuration. This means that at least two assertion controls must be `ON`, so that at least two AWS Regions have traffic flowing to them.
         * - _Required_: No
         * - _Type_: [RuleConfig](./aws-properties-route53recoverycontrol-safetyrule-ruleconfig.html)
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-ruleconfig */
        "RuleConfig"?: RuleConfig;
        /**
         * - The tags associated with the safety rule.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-route53recoverycontrol-safetyrule-tag.html)
         * - _Update requires_: [Some interruptions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-some-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoverycontrol-safetyrule.html#cfn-route53recoverycontrol-safetyrule-tags */
        "Tags"?: Tag[];
    };
}