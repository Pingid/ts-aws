import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The model.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface Model {
  /**
   * - The ARN of the model.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-model-arn */
  Arn?: string | Intrinsic
}

/**
 * A key and value pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface Tag {
  /**
   * - A tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-tag-key */
  Key: string | Intrinsic
  /**
   * - A value assigned to a tag key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-tag-value */
  Value: string | Intrinsic
}

/**
 * The entity type details.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface EntityType {
  /**
   * - The entity type ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-entitytype-arn */
  Arn?: string | Intrinsic
  /**
   * - Timestamp of when the entity type was created.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-entitytype-createdtime */
  CreatedTime?: string | Intrinsic
  /**
   * - The entity type description.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-entitytype-description */
  Description?: string | Intrinsic
  /**
   * - Indicates whether the resource is defined within this CloudFormation template and impacts the create, update, and delete behavior of the stack. If the value is `true`, CloudFormation will create/update/delete the resource when creating/updating/deleting the stack. If the value is `false`, CloudFormation will validate that the object exists and then use it within the resource without making changes to the object.
   * - For example, when creating `AWS::FraudDetector::Detector` you must define at least two variables. You can set `Inline=true` for these Variables and CloudFormation will create/update/delete the variables as part of stack operations. However, if you set `Inline=false`, CloudFormation will associate the variables to your detector but not execute any changes to the variables.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-entitytype-inline */
  Inline?: boolean | Intrinsic
  /**
   * - Timestamp of when the entity type was last updated.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-entitytype-lastupdatedtime */
  LastUpdatedTime?: string | Intrinsic
  /**
   * - The entity type name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-entitytype-name */
  Name?: string | Intrinsic
  /**
   * - An array of key-value pairs to apply to this resource.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-frauddetector-detector-tag.html)
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-entitytype-tags */
  Tags?: Tag[]
}

/**
 * The event type variable for the detector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface EventVariable {
  /**
   * - The event variable ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-arn */
  Arn?: string | Intrinsic
  /**
   * - Timestamp for when the event variable was created.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-createdtime */
  CreatedTime?: string | Intrinsic
  /**
   * - The data source of the event variable.
   * - Valid values: `EVENT | EXTERNAL_MODEL_SCORE`
   * - When defining a variable within a detector, you can only use the `EVENT` value for DataSource when the _Inline_ property is set to true. If the _Inline_ property is set false, you can use either `EVENT` or `MODEL_SCORE` for DataSource.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `EVENT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-datasource */
  DataSource?: string | Intrinsic
  /**
   * - The data type of the event variable.
   * - Valid values: `STRING | INTEGER | BOOLEAN | FLOAT`
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `STRING | INTEGER | FLOAT | BOOLEAN`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-datatype */
  DataType?: string | Intrinsic
  /**
   * - The default value of the event variable. This is required if you are providing the details of your variables instead of the ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-defaultvalue */
  DefaultValue?: string | Intrinsic
  /**
   * - The description of the event variable.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-description */
  Description?: string | Intrinsic
  /**
   * - Indicates whether the resource is defined within this CloudFormation template and impacts the create, update, and delete behavior of the stack. If the value is `true`, CloudFormation will create/update/delete the resource when creating/updating/deleting the stack. If the value is `false`, CloudFormation will validate that the object exists and then use it within the resource without making changes to the object.
   * - For example, when creating `AWS::FraudDetector::Detector` you must define at least two variables. You can set `Inline=true` for these variables and CloudFormation will create/update/delete the variables as part of stack operations. However, if you set `Inline=false`, CloudFormation will associate the variables to your detector but not execute any changes to the variables.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-inline */
  Inline?: boolean | Intrinsic
  /**
   * - Timestamp for when the event variable was last updated.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-lastupdatedtime */
  LastUpdatedTime?: string | Intrinsic
  /**
   * - The name of the event variable.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-name */
  Name?: string | Intrinsic
  /**
   * - An array of key-value pairs to apply to this resource.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-frauddetector-detector-tag.html)
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-tags */
  Tags?: Tag[]
  /**
   * - The type of event variable. For more information, see [Variable types](https://docs.aws.amazon.com/frauddetector/latest/ug/create-a-variable.html#variable-types).
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `AUTH_CODE | AVS | BILLING_ADDRESS_L1 | BILLING_ADDRESS_L2 | BILLING_CITY | BILLING_COUNTRY | BILLING_NAME | BILLING_PHONE | BILLING_STATE | BILLING_ZIP | CARD_BIN | CATEGORICAL | CURRENCY_CODE | EMAIL_ADDRESS | FINGERPRINT | FRAUD_LABEL | FREE_FORM_TEXT | IP_ADDRESS | NUMERIC | ORDER_ID | PAYMENT_TYPE | PHONE_NUMBER | PRICE | PRODUCT_CATEGORY | SHIPPING_ADDRESS_L1 | SHIPPING_ADDRESS_L2 | SHIPPING_CITY | SHIPPING_COUNTRY | SHIPPING_NAME | SHIPPING_PHONE | SHIPPING_STATE | SHIPPING_ZIP | USERAGENT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventvariable-variabletype */
  VariableType?: string | Intrinsic
}

/**
 * The label details.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface Label {
  /**
   * - The label ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-label-arn */
  Arn?: string | Intrinsic
  /**
   * - Timestamp of when the event type was created.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-label-createdtime */
  CreatedTime?: string | Intrinsic
  /**
   * - The label description.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-label-description */
  Description?: string | Intrinsic
  /**
   * - Indicates whether the resource is defined within this CloudFormation template and impacts the create, update, and delete behavior of the stack. If the value is `true`, CloudFormation will create/update/delete the resource when creating/updating/deleting the stack. If the value is `false`, CloudFormation will validate that the object exists and then use it within the resource without making changes to the object.
   * - For example, when creating `AWS::FraudDetector::Detector` you must define at least two variables. You can set `Inline=true` for these variables and CloudFormation will create/update/delete the variables as part of stack operations. However, if you set `Inline=false`, CloudFormation will associate the variables to your detector but not execute any changes to the variables.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-label-inline */
  Inline?: boolean | Intrinsic
  /**
   * - Timestamp of when the label was last updated.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-label-lastupdatedtime */
  LastUpdatedTime?: string | Intrinsic
  /**
   * - The label name.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-label-name */
  Name?: string | Intrinsic
  /**
   * - An array of key-value pairs to apply to this resource.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-frauddetector-detector-tag.html)
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-label-tags */
  Tags?: Tag[]
}

/**
 * The outcome.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface Outcome {
  /**
   * - The outcome ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-outcome-arn */
  Arn?: string | Intrinsic
  /**
   * - The timestamp when the outcome was created.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-outcome-createdtime */
  CreatedTime?: string | Intrinsic
  /**
   * - The outcome description.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-outcome-description */
  Description?: string | Intrinsic
  /**
   * - Indicates whether the resource is defined within this CloudFormation template and impacts the create, update, and delete behavior of the stack. If the value is `true`, CloudFormation will create/update/delete the resource when creating/updating/deleting the stack. If the value is `false`, CloudFormation will validate that the object exists and then use it within the resource without making changes to the object.
   * - For example, when creating `AWS::FraudDetector::Detector` you must define at least two variables. You can set `Inline=true` for these variables and CloudFormation will create/update/delete the variables as part of stack operations. However, if you set `Inline=false`, CloudFormation will associate the variables to your detector but not execute any changes to the variables.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-outcome-inline */
  Inline?: boolean | Intrinsic
  /**
   * - The timestamp when the outcome was last updated.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-outcome-lastupdatedtime */
  LastUpdatedTime?: string | Intrinsic
  /**
   * - The outcome name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-z_-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-outcome-name */
  Name?: string | Intrinsic
  /**
   * - An array of key-value pairs to apply to this resource.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-frauddetector-detector-tag.html)
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-outcome-tags */
  Tags?: Tag[]
}

/**
 * The event type details.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface EventType {
  /**
   * - The entity type ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^arn\:aws[a-z-]{0,15}\:frauddetector\:[a-z0-9-]{3,20}\:[0-9]{12}\:[^\s]{2,128}$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-arn */
  Arn?: string | Intrinsic
  /**
   * - Timestamp of when the event type was created.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-createdtime */
  CreatedTime?: string | Intrinsic
  /**
   * - The event type description.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-description */
  Description?: string | Intrinsic
  /**
   * - The event type entity types.
   * - _Required_: No
   * - _Type_: Array of [EntityType](./aws-properties-frauddetector-detector-entitytype.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-entitytypes */
  EntityTypes?: EntityType[]
  /**
   * - The event type event variables.
   * - _Required_: No
   * - _Type_: Array of [EventVariable](./aws-properties-frauddetector-detector-eventvariable.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-eventvariables */
  EventVariables?: EventVariable[]
  /**
   * - Indicates whether the resource is defined within this CloudFormation template and impacts the create, update, and delete behavior of the stack. If the value is `true`, CloudFormation will create/update/delete the resource when creating/updating/deleting the stack. If the value is `false`, CloudFormation will validate that the object exists and then use it within the resource without making changes to the object.
   * - For example, when creating `AWS::FraudDetector::Detector` you must define at least two variables. You can set `Inline=true` for these variables and CloudFormation will create/update/delete the Variables as part of stack operations. However, if you set `Inline=false`, CloudFormation will associate the variables to your detector but not execute any changes to the variables.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-inline */
  Inline?: boolean | Intrinsic
  /**
   * - The event type labels.
   * - _Required_: No
   * - _Type_: Array of [Label](./aws-properties-frauddetector-detector-label.html)
   * - _Minimum_: `2`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-labels */
  Labels?: Label[]
  /**
   * - Timestamp of when the event type was last updated.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `11`
   * - _Maximum_: `30`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-lastupdatedtime */
  LastUpdatedTime?: string | Intrinsic
  /**
   * - The event type name.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-z_-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-name */
  Name?: string | Intrinsic
  /**
   * - An array of key-value pairs to apply to this resource.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-frauddetector-detector-tag.html)
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype-tags */
  Tags?: Tag[]
}

/**
 * A rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface Rule {
  /**
   * - The rule ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-arn */
  Arn?: string | Intrinsic
  /**
   * - Timestamp for when the rule was created.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-createdtime */
  CreatedTime?: string | Intrinsic
  /**
   * - The rule description.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-description */
  Description?: string | Intrinsic
  /**
   * - The detector for which the rule is associated.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-z_-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-detectorid */
  DetectorId?: string | Intrinsic
  /**
   * - The rule expression. A rule expression captures the business logic. For more information, see [Rule language reference](https://docs.aws.amazon.com/frauddetector/latest/ug/rule-language-reference.html).
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-expression */
  Expression?: string | Intrinsic
  /**
   * - The rule language.
   * - Valid Value: DETECTORPL
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `DETECTORPL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-language */
  Language?: string | Intrinsic
  /**
   * - Timestamp for when the rule was last updated.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-lastupdatedtime */
  LastUpdatedTime?: string | Intrinsic
  /**
   * - The rule outcome.
   * - _Required_: No
   * - _Type_: Array of [Outcome](./aws-properties-frauddetector-detector-outcome.html)
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-outcomes */
  Outcomes?: Outcome[]
  /**
   * - The rule ID.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[0-9a-z_-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-ruleid */
  RuleId?: string | Intrinsic
  /**
   * - The rule version.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^([1-9][0-9]*)$`
   * - _Minimum_: `1`
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-ruleversion */
  RuleVersion?: string | Intrinsic
  /**
   * - An array of key-value pairs to apply to this resource.
   * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-frauddetector-detector-tag.html)
   * - _Maximum_: `200`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rule-tags */
  Tags?: Tag[]
}

/**
 * Manages a detector and associated detector versions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html */

export interface FraudDetectorDetector extends ResourceAttributes {
  Type: 'AWS::FraudDetector::Detector'
  Properties: {
    /**
     * - The models to associate with this detector. You must provide the ARNs of all the models you want to associate.
     * - _Required_: No
     * - _Type_: Array of [Model](./aws-properties-frauddetector-detector-model.html)
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-associatedmodels */
    AssociatedModels?: Model[]
    /**
     * - The detector description.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-description */
    Description?: string | Intrinsic
    /**
     * - The name of the detector.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9a-z_-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-detectorid */
    DetectorId: string | Intrinsic
    /**
     * - The status of the detector version. If a value is not provided for this property, AWS CloudFormation assumes `DRAFT` status.
     * - Valid values: `ACTIVE | DRAFT`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DRAFT | ACTIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-detectorversionstatus */
    DetectorVersionStatus?: string | Intrinsic
    /**
     * - The event type associated with this detector.
     * - _Required_: Yes
     * - _Type_: [EventType](./aws-properties-frauddetector-detector-eventtype.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-eventtype */
    EventType: EventType
    /**
     * - The rule execution mode for the rules included in the detector version.
     * - Valid values: `FIRST_MATCHED | ALL_MATCHED` Default value: `FIRST_MATCHED`
     * - You can define and edit the rule mode at the detector version level, when it is in draft status.
     * - If you specify `FIRST_MATCHED`, Amazon Fraud Detector evaluates rules sequentially, first to last, stopping at the first matched rule. Amazon Fraud dectector then provides the outcomes for that single rule.
     * - If you specifiy `ALL_MATCHED`, Amazon Fraud Detector evaluates all rules and returns the outcomes for all matched rules.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `FIRST_MATCHED | ALL_MATCHED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-ruleexecutionmode */
    RuleExecutionMode?: string | Intrinsic
    /**
     * - The rules to include in the detector version.
     * - _Required_: Yes
     * - _Type_: Array of [Rule](./aws-properties-frauddetector-detector-rule.html)
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-rules */
    Rules: Rule[]
    /**
     * - An array of key-value pairs to apply to this resource.
     * - For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-frauddetector-detector-tag.html)
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-frauddetector-detector.html#cfn-frauddetector-detector-tags */
    Tags?: Tag[]
  }
}
