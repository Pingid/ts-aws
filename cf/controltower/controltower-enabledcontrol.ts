import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::ControlTower::EnabledControl](./aws-resource-controltower-enabledcontrol.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A set of parameters that configure the behavior of the enabled control. Expressed as a key/value pair, where `Key` is of type `String` and `Value` is of type `Document`.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html */

export interface EnabledControlParameter {
    /**
     * - The key of a key/value pair. It is of type `string`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-enabledcontrolparameter-key */
    "Key": string | Intrinsic;
    /**
     * - The value of a key/value pair. It can be of type `array`, `string`, `number`, `object`, or `boolean`. \[Note: The _Type_ field that follows may show a single type such as Number, which is only one possible type.\]
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-enabledcontrolparameter-value */
    "Value": (string | Intrinsic)[];
}

/**
 * The resource represents an enabled control. It specifies an asynchronous operation that creates AWS resources on the specified organizational unit and the accounts it contains. The resources created will vary according to the control that you specify.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html */

export interface ControlTowerEnabledControl extends ResourceAttributes {
    "Type": "AWS::ControlTower::EnabledControl";
    "Properties": {
        /**
         * - The ARN of the control. Only **Strongly recommended** and **Elective** controls are permitted, with the exception of the **Region deny** control. For information on how to find the `controlIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[0-9a-zA-Z_\-:\/]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-controlidentifier */
        "ControlIdentifier": string | Intrinsic;
        /**
         * - Array of `EnabledControlParameter` objects.
         * - _Required_: No
         * - _Type_: Array of [EnabledControlParameter](./aws-properties-controltower-enabledcontrol-enabledcontrolparameter.html)
         * - _Minimum_: `1`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-parameters */
        "Parameters"?: EnabledControlParameter[];
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-controltower-enabledcontrol-tag.html)
         * - _Minimum_: `1`
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-tags */
        "Tags"?: Tag[];
        /**
         * - The ARN of the organizational unit. For information on how to find the `targetIdentifier`, see [the overview page](https://docs.aws.amazon.com/controltower/latest/APIReference/Welcome.html).
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[0-9a-zA-Z_\-:\/]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-controltower-enabledcontrol.html#cfn-controltower-enabledcontrol-targetidentifier */
        "TargetIdentifier": string | Intrinsic;
    };
}