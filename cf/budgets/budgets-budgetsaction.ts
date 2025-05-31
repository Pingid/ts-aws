import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The trigger threshold of the action.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface ActionThreshold {
    /**
     * - The type of threshold for a notification.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `PERCENTAGE | ABSOLUTE_VALUE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-actionthreshold-type */
    "Type": string | Intrinsic;
    /**
     * - The threshold of a notification.
     * - _Required_: Yes
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-actionthreshold-value */
    "Value": number | Intrinsic;
}

/**
 * The subscriber to a budget notification. The subscriber consists of a subscription type and either an Amazon SNS topic or an email address.
 * For example, an email subscriber has the following parameters:
 * *   A `subscriptionType` of `EMAIL`
 *     
 * *   An `address` of `example@example.com`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface Subscriber {
    /**
     * - The address that AWS sends budget notifications to, either an SNS topic or an email.
     * - When you create a subscriber, the value of `Address` can't contain line breaks.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-subscriber-address */
    "Address": string | Intrinsic;
    /**
     * - The type of notification that AWS sends to a subscriber.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SNS | EMAIL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-subscriber-type */
    "Type": string | Intrinsic;
}

/**
 * The tag structure that contains a tag key and value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface ResourceTag {
    /**
     * - The key that's associated with the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-resourcetag-key */
    "Key": string | Intrinsic;
    /**
     * - The value that's associated with the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-resourcetag-value */
    "Value": string | Intrinsic;
}

/**
 * The AWS Identity and Access Management (IAM) action definition details.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface IamActionDefinition {
    /**
     * - A list of groups to be attached. There must be at least one group.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-iamactiondefinition-groups */
    "Groups"?: (string | Intrinsic)[];
    /**
     * - The Amazon Resource Name (ARN) of the policy to be attached.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-cn|-us-gov|-iso|-iso-[a-z]{1})?:iam::(\d{12}|aws):policy(\u002F[\u0021-\u007F]+\u002F|\u002F)[\w+=,.@-]+$`
     * - _Minimum_: `25`
     * - _Maximum_: `684`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-iamactiondefinition-policyarn */
    "PolicyArn": string | Intrinsic;
    /**
     * - A list of roles to be attached. There must be at least one role.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-iamactiondefinition-roles */
    "Roles"?: (string | Intrinsic)[];
    /**
     * - A list of users to be attached. There must be at least one user.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-iamactiondefinition-users */
    "Users"?: (string | Intrinsic)[];
}

/**
 * The service control policies (SCP) action definition details.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface ScpActionDefinition {
    /**
     * - The policy ID attached.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^p-[0-9a-zA-Z_]{8,128}$`
     * - _Minimum_: `10`
     * - _Maximum_: `130`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-scpactiondefinition-policyid */
    "PolicyId": string | Intrinsic;
    /**
     * - A list of target IDs.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-scpactiondefinition-targetids */
    "TargetIds": (string | Intrinsic)[];
}

/**
 * The Amazon EC2 Systems Manager (SSM) action definition details.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface SsmActionDefinition {
    /**
     * - The EC2 and RDS instance IDs.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-ssmactiondefinition-instanceids */
    "InstanceIds": (string | Intrinsic)[];
    /**
     * - The Region to run the (SSM) document.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^\w{2}-\w+(-\w+)?-\d$`
     * - _Minimum_: `9`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-ssmactiondefinition-region */
    "Region": string | Intrinsic;
    /**
     * - The action subType.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `STOP_EC2_INSTANCES | STOP_RDS_INSTANCES`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-ssmactiondefinition-subtype */
    "Subtype": string | Intrinsic;
}

/**
 * The definition is where you specify all of the type-specific parameters.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface Definition {
    /**
     * - The AWS Identity and Access Management (IAM) action definition details.
     * - _Required_: No
     * - _Type_: [IamActionDefinition](./aws-properties-budgets-budgetsaction-iamactiondefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-definition-iamactiondefinition */
    "IamActionDefinition"?: IamActionDefinition;
    /**
     * - The service control policies (SCP) action definition details.
     * - _Required_: No
     * - _Type_: [ScpActionDefinition](./aws-properties-budgets-budgetsaction-scpactiondefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-definition-scpactiondefinition */
    "ScpActionDefinition"?: ScpActionDefinition;
    /**
     * - The Amazon EC2 Systems Manager (SSM) action definition details.
     * - _Required_: No
     * - _Type_: [SsmActionDefinition](./aws-properties-budgets-budgetsaction-ssmactiondefinition.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-definition-ssmactiondefinition */
    "SsmActionDefinition"?: SsmActionDefinition;
}

/**
 * The `AWS::Budgets::BudgetsAction` resource enables you to take predefined actions that are initiated when a budget threshold has been exceeded. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) in the _AWS Billing and Cost Management User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html */

export interface BudgetsBudgetsAction extends ResourceAttributes {
    "Type": "AWS::Budgets::BudgetsAction";
    "Properties": {
        /**
         * - The trigger threshold of the action.
         * - _Required_: Yes
         * - _Type_: [ActionThreshold](./aws-properties-budgets-budgetsaction-actionthreshold.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-actionthreshold */
        "ActionThreshold": ActionThreshold;
        /**
         * - The type of action. This defines the type of tasks that can be carried out by this action. This field also determines the format for definition.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `APPLY_IAM_POLICY | APPLY_SCP_POLICY | RUN_SSM_DOCUMENTS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-actiontype */
        "ActionType": string | Intrinsic;
        /**
         * - This specifies if the action needs manual or automatic approval.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `AUTOMATIC | MANUAL`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-approvalmodel */
        "ApprovalModel"?: string | Intrinsic;
        /**
         * - A string that represents the budget name. ":" and "\\" characters aren't allowed.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-budgetname */
        "BudgetName": string | Intrinsic;
        /**
         * - Specifies all of the type-specific parameters.
         * - _Required_: Yes
         * - _Type_: [Definition](./aws-properties-budgets-budgetsaction-definition.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-definition */
        "Definition": Definition;
        /**
         * - The role passed for action execution and reversion. Roles and actions must be in the same account.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws(-cn|-us-gov|-iso|-iso-[a-z]{1})?:iam::\d{12}:role(\u002F[\u0021-\u007F]+\u002F|\u002F)[\w+=,.@-]+$`
         * - _Minimum_: `32`
         * - _Maximum_: `618`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-executionrolearn */
        "ExecutionRoleArn": string | Intrinsic;
        /**
         * - The type of a notification.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `ACTUAL | FORECASTED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-notificationtype */
        "NotificationType": string | Intrinsic;
        /**
         * - An optional list of tags to associate with the specified budget action. Each tag consists of a key and a value, and each key must be unique for the resource.
         * - _Required_: No
         * - _Type_: Array of [ResourceTag](./aws-properties-budgets-budgetsaction-resourcetag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-resourcetags */
        "ResourceTags"?: ResourceTag[];
        /**
         * - A list of subscribers.
         * - _Required_: Yes
         * - _Type_: Array of [Subscriber](./aws-properties-budgets-budgetsaction-subscriber.html)
         * - _Minimum_: `1`
         * - _Maximum_: `11`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budgetsaction.html#cfn-budgets-budgetsaction-subscribers */
        "Subscribers": Subscriber[];
    };
}