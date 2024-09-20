import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Settings to configure server-side encryption for an activity. By default, Step Functions provides transparent server-side encryption. With this configuration, you can specify a customer managed AWS KMS key for encryption.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html */

export interface EncryptionConfiguration {
  /**
   * - Maximum duration that Step Functions will reuse data keys. When the period expires, Step Functions will call `GenerateDataKey`. Only applies to customer managed keys.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `60`
   * - _Maximum_: `900`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-encryptionconfiguration-kmsdatakeyreuseperiodseconds */
  KmsDataKeyReusePeriodSeconds?: number | Intrinsic
  /**
   * - An alias, alias ARN, key ID, or key ARN of a symmetric encryption AWS KMS key to encrypt data. To specify a AWS KMS key in a different AWS account, you must use the key ARN or alias ARN.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-encryptionconfiguration-kmskeyid */
  KmsKeyId?: string | Intrinsic
  /**
   * - Encryption option for an activity.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CUSTOMER_MANAGED_KMS_KEY | AWS_OWNED_KEY`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-encryptionconfiguration-type */
  Type: string | Intrinsic
}

/**
 * The `TagsEntry` property specifies _tags_ to identify an activity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html */

export interface TagsEntry {
  /**
   * - The `key` for a key-value pair in a tag entry.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-tagsentry-key */
  Key: string | Intrinsic
  /**
   * - The `value` for a key-value pair in a tag entry.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-tagsentry-value */
  Value: string | Intrinsic
}

/**
 * An activity is a task that you write in any programming language and host on any machine that has access to AWS Step Functions. Activities must poll Step Functions using the `GetActivityTask` API action and respond using `SendTask*` API actions. This function makes Step Functions aware of your activity and returns an identifier for use in a state machine and when polling from the activity.
 * For information about creating an activity, see [Creating an Activity State Machine](https://docs.aws.amazon.com/step-functions/latest/dg/tutorial-creating-activity-state-machine.html) in the _AWS Step Functions Developer Guide_ and [CreateActivity](https://docs.aws.amazon.com/step-functions/latest/apireference/API_CreateActivity.html) in the _AWS Step Functions API Reference_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html */

export interface StepFunctionsActivity extends ResourceAttributes {
  Type: 'AWS::StepFunctions::Activity'
  Properties: {
    /**
     * - Encryption configuration for the activity.
     * - Activity configuration is immutable, and resource names must be unique. To set customer managed keys for encryption, you must create a **new Activity**. If you attempt to change the configuration in your CFN template for an existing activity, you will receive an `ActivityAlreadyExists` exception.
     * - To update your activity to include customer managed keys, set a new activity name within your AWS CloudFormation template.
     * - _Required_: No
     * - _Type_: [EncryptionConfiguration](./aws-properties-stepfunctions-activity-encryptionconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-encryptionconfiguration */
    EncryptionConfiguration?: EncryptionConfiguration
    /**
     * - The name of the activity.
     * - A name must _not_ contain:
     * - To enable logging with CloudWatch Logs, the name should only contain 0-9, A-Z, a-z, - and \_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `80`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-name */
    Name: string | Intrinsic
    /**
     * - The list of tags to add to a resource.
     * - Tags may only contain Unicode letters, digits, white space, or these symbols: `_ . : / = + - @`.
     * - _Required_: No
     * - _Type_: Array of [TagsEntry](./aws-properties-stepfunctions-activity-tagsentry.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-stepfunctions-activity.html#cfn-stepfunctions-activity-tags */
    Tags?: TagsEntry[]
  }
}
