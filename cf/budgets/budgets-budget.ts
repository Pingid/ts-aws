import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The tag structure that contains a tag key and value.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface ResourceTag {
  /**
   * - The key that's associated with the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-resourcetag-key */
  Key: string | Intrinsic
  /**
   * - The value that's associated with the tag.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-resourcetag-value */
  Value?: string | Intrinsic
}

/**
 * The amount of cost or usage that's measured for a budget.
 * _Cost example:_ A `Spend` for `3 USD` of costs has the following parameters:
 * *   An `Amount` of `3`
 *
 * *   A `Unit` of `USD`
 * _Usage example:_ A `Spend` for `3 GB` of S3 usage has the following parameters:
 * *   An `Amount` of `3`
 *
 * *   A `Unit` of `GB`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface Spend {
  /**
   * - The cost or usage amount that's associated with a budget forecast, actual spend, or budget threshold.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-spend-amount */
  Amount: number | Intrinsic
  /**
   * - The unit of measurement that's used for the budget forecast, actual spend, or budget threshold.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-spend-unit */
  Unit: string | Intrinsic
}

/**
 * The types of cost that are included in a `COST` budget, such as tax and subscriptions.
 * `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, and `SAVINGS_PLANS_COVERAGE` budgets don't have `CostTypes`.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface CostTypes {
  /**
   * - Specifies whether a budget includes credits.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includecredit */
  IncludeCredit?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes discounts.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includediscount */
  IncludeDiscount?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes non-RI subscription costs.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includeothersubscription */
  IncludeOtherSubscription?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes recurring fees such as monthly RI fees.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includerecurring */
  IncludeRecurring?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes refunds.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includerefund */
  IncludeRefund?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes subscriptions.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includesubscription */
  IncludeSubscription?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes support subscription fees.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includesupport */
  IncludeSupport?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes taxes.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includetax */
  IncludeTax?: boolean | Intrinsic
  /**
   * - Specifies whether a budget includes upfront RI costs.
   * - The default value is `true`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-includeupfront */
  IncludeUpfront?: boolean | Intrinsic
  /**
   * - Specifies whether a budget uses the amortized rate.
   * - The default value is `false`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-useamortized */
  UseAmortized?: boolean | Intrinsic
  /**
   * - Specifies whether a budget uses a blended rate.
   * - The default value is `false`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-costtypes-useblended */
  UseBlended?: boolean | Intrinsic
}

/**
 * The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface TimePeriod {
  /**
   * - The end date for a budget. If you didn't specify an end date, AWS set your end date to `06/15/87 00:00 UTC`. The defaults are the same for the AWS Billing and Cost Management console and the API.
   * - After the end date, AWS deletes the budget and all the associated notifications and subscribers. You can change your end date with the `UpdateBudget` operation.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-timeperiod-end */
  End?: string | Intrinsic
  /**
   * - The start date for a budget. If you created your budget and didn't specify a start date, the start date defaults to the start of the chosen time period (MONTHLY, QUARTERLY, or ANNUALLY). For example, if you create your budget on January 24, 2019, choose `MONTHLY`, and don't set a start date, the start date defaults to `01/01/19 00:00 UTC`. The defaults are the same for the AWS Billing and Cost Management console and the API.
   * - You can change your start date with the `UpdateBudget` operation.
   * - Valid values depend on the value of `BudgetType`:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-timeperiod-start */
  Start?: string | Intrinsic
}

/**
 * A notification that's associated with a budget. A budget can have up to ten notifications.
 * Each notification must have at least one subscriber. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
 * For example, if you have a budget for 200 dollars and you want to be notified when you go over 160 dollars, create a notification with the following parameters:
 * *   A notificationType of `ACTUAL`
 *
 * *   A `thresholdType` of `PERCENTAGE`
 *
 * *   A `comparisonOperator` of `GREATER_THAN`
 *
 * *   A notification `threshold` of `80`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface Notification {
  /**
   * - The comparison that's used for this notification.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `GREATER_THAN | LESS_THAN | EQUAL_TO`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notification-comparisonoperator */
  ComparisonOperator: string | Intrinsic
  /**
   * - Specifies whether the notification is for how much you have spent (`ACTUAL`) or for how much that you're forecasted to spend (`FORECASTED`).
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `ACTUAL | FORECASTED`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notification-notificationtype */
  NotificationType: string | Intrinsic
  /**
   * - The threshold that's associated with a notification. Thresholds are always a percentage, and many customers find value being alerted between 50% - 200% of the budgeted amount. The maximum limit for your threshold is 1,000,000% above the budgeted amount.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notification-threshold */
  Threshold: number | Intrinsic
  /**
   * - The type of threshold for a notification. For `ABSOLUTE_VALUE` thresholds, AWS notifies you when you go over or are forecasted to go over your total cost threshold. For `PERCENTAGE` thresholds, AWS notifies you when you go over or are forecasted to go over a certain percentage of your forecasted spend. For example, if you have a budget for 200 dollars and you have a `PERCENTAGE` threshold of 80%, AWS notifies you when you go over 160 dollars.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `PERCENTAGE | ABSOLUTE_VALUE`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notification-thresholdtype */
  ThresholdType?: string | Intrinsic
}

/**
 * The `Subscriber` property type specifies who to notify for a Billing and Cost Management budget notification. The subscriber consists of a subscription type, and either an Amazon SNS topic or an email address.
 * For example, an email subscriber would have the following parameters:
 * *   A `subscriptionType` of `EMAIL`
 *
 * *   An `address` of `example@example.com`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface Subscriber {
  /**
   * - The address that AWS sends budget notifications to, either an SNS topic or an email.
   * - When you create a subscriber, the value of `Address` can't contain line breaks.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-subscriber-address */
  Address: string | Intrinsic
  /**
   * - The type of notification that AWS sends to a subscriber.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SNS | EMAIL`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-subscriber-subscriptiontype */
  SubscriptionType: string | Intrinsic
}

/**
 * The parameters that define or describe the historical data that your auto-adjusting budget is based on.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface HistoricalOptions {
  /**
   * - The number of budget periods included in the moving-average calculation that determines your auto-adjusted budget amount. The maximum value depends on the `TimeUnit` granularity of the budget:
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `60`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-historicaloptions-budgetadjustmentperiod */
  BudgetAdjustmentPeriod: number | Intrinsic
}

/**
 * A notification with subscribers. A notification can have one SNS subscriber and up to 10 email subscribers, for a total of 11 subscribers.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface NotificationWithSubscribers {
  /**
   * - The notification that's associated with a budget.
   * - _Required_: Yes
   * - _Type_: [Notification](./aws-properties-budgets-budget-notification.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notificationwithsubscribers-notification */
  Notification: Notification
  /**
   * - A list of subscribers who are subscribed to this notification.
   * - _Required_: Yes
   * - _Type_: Array of [Subscriber](./aws-properties-budgets-budget-subscriber.html)
   * - _Minimum_: `1`
   * - _Maximum_: `11`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notificationwithsubscribers-subscribers */
  Subscribers: Subscriber[]
}

/**
 * Determine the budget amount for an auto-adjusting budget.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface AutoAdjustData {
  /**
   * - The string that defines whether your budget auto-adjusts based on historical or forecasted data.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `HISTORICAL | FORECAST`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-autoadjustdata-autoadjusttype */
  AutoAdjustType: string | Intrinsic
  /**
   * - The parameters that define or describe the historical data that your auto-adjusting budget is based on.
   * - _Required_: No
   * - _Type_: [HistoricalOptions](./aws-properties-budgets-budget-historicaloptions.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-autoadjustdata-historicaloptions */
  HistoricalOptions?: HistoricalOptions
}

/**
 * Represents the output of the `CreateBudget` operation. The content consists of the detailed metadata and data file information, and the current status of the `budget` object.
 * This is the Amazon Resource Name (ARN) pattern for a budget:
 * `arn:aws:budgets::AccountId:budget/budgetName`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface BudgetData {
  /**
   * - Determine the budget amount for an auto-adjusting budget.
   * - _Required_: No
   * - _Type_: [AutoAdjustData](./aws-properties-budgets-budget-autoadjustdata.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-autoadjustdata */
  AutoAdjustData?: AutoAdjustData
  /**
   * - The total amount of cost, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage that you want to track with your budget.
   * - `BudgetLimit` is required for cost or usage budgets, but optional for RI or Savings Plans utilization or coverage budgets. RI and Savings Plans utilization or coverage budgets default to `100`. This is the only valid value for RI or Savings Plans utilization or coverage budgets. You can't use `BudgetLimit` with `PlannedBudgetLimits` for `CreateBudget` and `UpdateBudget` actions.
   * - _Required_: No
   * - _Type_: [Spend](./aws-properties-budgets-budget-spend.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-budgetlimit */
  BudgetLimit?: Spend
  /**
   * - The name of a budget. The value must be unique within an account. `BudgetName` can't include `:` and `\` characters. If you don't include value for `BudgetName` in the template, Billing and Cost Management assigns your budget a randomly generated name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-budgetname */
  BudgetName?: string | Intrinsic
  /**
   * - Specifies whether this budget tracks costs, usage, RI utilization, RI coverage, Savings Plans utilization, or Savings Plans coverage.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `USAGE | COST | RI_UTILIZATION | RI_COVERAGE | SAVINGS_PLANS_UTILIZATION | SAVINGS_PLANS_COVERAGE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-budgettype */
  BudgetType: string | Intrinsic
  /**
   * - The cost filters, such as `Region`, `Service`, `LinkedAccount`, `Tag`, or `CostCategory`, that are applied to a budget.
   * - AWS Budgets supports the following services as a `Service` filter for RI budgets:
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-costfilters */
  CostFilters?: any | Intrinsic
  /**
   * - The types of costs that are included in this `COST` budget.
   * - `USAGE`, `RI_UTILIZATION`, `RI_COVERAGE`, `SAVINGS_PLANS_UTILIZATION`, and `SAVINGS_PLANS_COVERAGE` budgets do not have `CostTypes`.
   * - _Required_: No
   * - _Type_: [CostTypes](./aws-properties-budgets-budget-costtypes.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-costtypes */
  CostTypes?: CostTypes
  /**
   * - A map containing multiple `BudgetLimit`, including current or future limits.
   * - `PlannedBudgetLimits` is available for cost or usage budget and supports both monthly and quarterly `TimeUnit`.
   * - For monthly budgets, provide 12 months of `PlannedBudgetLimits` values. This must start from the current month and include the next 11 months. The `key` is the start of the month, `UTC` in epoch seconds.
   * - For quarterly budgets, provide four quarters of `PlannedBudgetLimits` value entries in standard calendar quarter increments. This must start from the current quarter and include the next three quarters. The `key` is the start of the quarter, `UTC` in epoch seconds.
   * - If the planned budget expires before 12 months for monthly or four quarters for quarterly, provide the `PlannedBudgetLimits` values only for the remaining periods.
   * - If the budget begins at a date in the future, provide `PlannedBudgetLimits` values from the start date of the budget.
   * - After all of the `BudgetLimit` values in `PlannedBudgetLimits` are used, the budget continues to use the last limit as the `BudgetLimit`. At that point, the planned budget provides the same experience as a fixed budget.
   * - `DescribeBudget` and `DescribeBudgets` response along with `PlannedBudgetLimits` also contain `BudgetLimit` representing the current month or quarter limit present in `PlannedBudgetLimits`. This only applies to budgets that are created with `PlannedBudgetLimits`. Budgets that are created without `PlannedBudgetLimits` only contain `BudgetLimit`. They don't contain `PlannedBudgetLimits`.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-plannedbudgetlimits */
  PlannedBudgetLimits?: any | Intrinsic
  /**
   * - The period of time that is covered by a budget. The period has a start date and an end date. The start date must come before the end date. There are no restrictions on the end date.
   * - The start date for a budget. If you created your budget and didn't specify a start date, the start date defaults to the start of the chosen time period (MONTHLY, QUARTERLY, or ANNUALLY). For example, if you create your budget on January 24, 2019, choose `MONTHLY`, and don't set a start date, the start date defaults to `01/01/19 00:00 UTC`. The defaults are the same for the AWS Billing and Cost Management console and the API.
   * - You can change your start date with the `UpdateBudget` operation.
   * - After the end date, AWS deletes the budget and all associated notifications and subscribers.
   * - _Required_: No
   * - _Type_: [TimePeriod](./aws-properties-budgets-budget-timeperiod.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-timeperiod */
  TimePeriod?: TimePeriod
  /**
   * - The length of time until a budget resets the actual and forecasted spend. `DAILY` is available only for `RI_UTILIZATION` and `RI_COVERAGE` budgets.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `DAILY | MONTHLY | QUARTERLY | ANNUALLY`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budgetdata-timeunit */
  TimeUnit: string | Intrinsic
}

/**
 * The `AWS::Budgets::Budget` resource allows customers to take pre-defined actions that will trigger once a budget threshold has been exceeded. creates, replaces, or deletes budgets for Billing and Cost Management. For more information, see [Managing Your Costs with Budgets](https://docs.aws.amazon.com/awsaccountbilling/latest/aboutv2/budgets-managing-costs.html) in the _AWS Billing and Cost Management User Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html */

export interface BudgetsBudget extends ResourceAttributes {
  Type: 'AWS::Budgets::Budget'
  Properties: {
    /**
     * - The budget object that you want to create.
     * - _Required_: Yes
     * - _Type_: [BudgetData](./aws-properties-budgets-budget-budgetdata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-budget */
    Budget: BudgetData
    /**
     * - A notification that you want to associate with a budget. A budget can have up to five notifications, and each notification can have one SNS subscriber and up to 10 email subscribers. If you include notifications and subscribers in your `CreateBudget` call, AWS creates the notifications and subscribers for you.
     * - _Required_: No
     * - _Type_: Array of [NotificationWithSubscribers](./aws-properties-budgets-budget-notificationwithsubscribers.html)
     * - _Maximum_: `10`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-notificationswithsubscribers */
    NotificationsWithSubscribers?: NotificationWithSubscribers[]
    /**
     * - An optional list of tags to associate with the specified budget. Each tag consists of a key and a value, and each key must be unique for the resource.
     * - _Required_: No
     * - _Type_: Array of [ResourceTag](./aws-properties-budgets-budget-resourcetag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-budgets-budget.html#cfn-budgets-budget-resourcetags */
    ResourceTags?: ResourceTag[]
  }
}
