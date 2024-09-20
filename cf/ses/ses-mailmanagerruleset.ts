import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A key-value pair (the value is optional), that you can define and assign to AWS resources.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface Tag {
  /**
   * - The key of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-tag-key */
  Key: string | Intrinsic
  /**
   * - The value of the key-value tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9/_\+=\.:@\-]*$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-tag-value */
  Value: string | Intrinsic
}

/**
 * The action to add a header to a message. When executed, this action will add the given header to the message.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface AddHeaderAction {
  /**
   * - The name of the header to add to an email. The header must be prefixed with "X-". Headers are added regardless of whether the header name pre-existed in the email.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[xX]\-[a-zA-Z0-9\-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `64`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-addheaderaction-headername */
  HeaderName: string | Intrinsic
  /**
   * - The value of the header to add to the email.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-addheaderaction-headervalue */
  HeaderValue: string | Intrinsic
}

/**
 * The action to archive the email by delivering the email to an Amazon SES archive.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface ArchiveAction {
  /**
   * - A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified archive has been deleted.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | DROP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-archiveaction-actionfailurepolicy */
  ActionFailurePolicy?: string | Intrinsic
  /**
   * - The identifier of the archive to send the email to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-archiveaction-targetarchive */
  TargetArchive: string | Intrinsic
}

/**
 * This action to delivers an email to a mailbox.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface DeliverToMailboxAction {
  /**
   * - A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the mailbox ARN is no longer valid.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | DROP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-delivertomailboxaction-actionfailurepolicy */
  ActionFailurePolicy?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of a WorkMail organization to deliver the email to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-delivertomailboxaction-mailboxarn */
  MailboxArn: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of an IAM role to use to execute this action. The role must have access to the workmail:DeliverToMailbox API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-delivertomailboxaction-rolearn */
  RoleArn: string | Intrinsic
}

/**
 * The action relays the email via SMTP to another specific SMTP server.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RelayAction {
  /**
   * - A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified relay has been deleted.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | DROP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-relayaction-actionfailurepolicy */
  ActionFailurePolicy?: string | Intrinsic
  /**
   * - This action specifies whether to preserve or replace original mail from address while relaying received emails to a destination server.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `REPLACE | PRESERVE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-relayaction-mailfrom */
  MailFrom?: string | Intrinsic
  /**
   * - The identifier of the relay resource to be used when relaying an email.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-relayaction-relay */
  Relay: string | Intrinsic
}

/**
 * This action replaces the email envelope recipients with the given list of recipients. If the condition of this action applies only to a subset of recipients, only those recipients are replaced with the recipients specified in the action. The message contents and headers are unaffected by this action, only the envelope recipients are updated.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface ReplaceRecipientAction {
  /**
   * - This action specifies the replacement recipient email addresses to insert.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Minimum_: `0 | 1`
   * - _Maximum_: `254 | 100`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-replacerecipientaction-replacewith */
  ReplaceWith?: (string | Intrinsic)[]
}

/**
 * Sends the email to the internet using the ses:SendRawEmail API.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface SendAction {
  /**
   * - A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the caller does not have the permissions to call the sendRawEmail API.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | DROP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-sendaction-actionfailurepolicy */
  ActionFailurePolicy?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the role to use for this action. This role must have access to the ses:SendRawEmail API.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-sendaction-rolearn */
  RoleArn: string | Intrinsic
}

/**
 * Writes the MIME content of the email to an S3 bucket.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface S3Action {
  /**
   * - A policy that states what to do in the case of failure. The action will fail if there are configuration errors. For example, the specified the bucket has been deleted.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `CONTINUE | DROP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-s3action-actionfailurepolicy */
  ActionFailurePolicy?: string | Intrinsic
  /**
   * - The Amazon Resource Name (ARN) of the IAM Role to use while writing to S3. This role must have access to the s3:PutObject, kms:Encrypt, and kms:GenerateDataKey APIs for the given bucket.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-s3action-rolearn */
  RoleArn: string | Intrinsic
  /**
   * - The bucket name of the S3 bucket to write to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9.-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `62`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-s3action-s3bucket */
  S3Bucket: string | Intrinsic
  /**
   * - The S3 prefix to use for the write to the s3 bucket.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9!_.*'()/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `62`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-s3action-s3prefix */
  S3Prefix?: string | Intrinsic
  /**
   * - The KMS Key ID to use to encrypt the message in S3.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9-:/]+$`
   * - _Minimum_: `20`
   * - _Maximum_: `2048`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-s3action-s3ssekmskeyid */
  S3SseKmsKeyId?: string | Intrinsic
}

/**
 * A DMARC policy expression. The condition matches if the given DMARC policy matches that of the incoming email.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleDmarcExpression {
  /**
   * - The operator to apply to the DMARC policy of the incoming email.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | NOT_EQUALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruledmarcexpression-operator */
  Operator: string | Intrinsic
  /**
   * - The values to use for the given DMARC policy operator. For the operator EQUALS, if multiple values are given, they are evaluated as an OR. That is, if any of the given values match, the condition is deemed to match. For the operator NOT\_EQUALS, if multiple values are given, they are evaluated as an AND. That is, only if the email's DMARC policy is not equal to any of the given values, then the condition is deemed to match.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruledmarcexpression-values */
  Values: (string | Intrinsic)[]
}

/**
 * The union type representing the allowed types of operands for a boolean condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleBooleanToEvaluate {
  /**
   * - The boolean type representing the allowed attribute types for an email.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `READ_RECEIPT_REQUESTED | TLS | TLS_WRAPPED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulebooleantoevaluate-attribute */
  Attribute: string | Intrinsic
}

/**
 * The IP address to evaluate for this condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleIpToEvaluate {
  /**
   * - The attribute of the email to evaluate.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SOURCE_IP`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleiptoevaluate-attribute */
  Attribute: string | Intrinsic
}

/**
 * The number to evaluate in a numeric condition expression.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleNumberToEvaluate {
  /**
   * - An email attribute that is used as the number to evaluate.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MESSAGE_SIZE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulenumbertoevaluate-attribute */
  Attribute: string | Intrinsic
}

/**
 * The string to evaluate in a string condition expression.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleStringToEvaluate {
  /**
   * - The email attribute to evaluate in a string condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `MAIL_FROM | HELO | RECIPIENT | SENDER | FROM | SUBJECT | TO | CC`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulestringtoevaluate-attribute */
  Attribute: string | Intrinsic
}

/**
 * The result of an analysis can be used in conditions to trigger actions. Analyses can inspect the email content and report a certain aspect of the email.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface Analysis {
  /**
   * - The Amazon Resource Name (ARN) of an Add On.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9:_/+=,@.#-]+$`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-analysis-analyzer */
  Analyzer: string | Intrinsic
  /**
   * - The returned value from an Add On.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[\sa-zA-Z0-9_]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-analysis-resultfield */
  ResultField: string | Intrinsic
}

/**
 * The action for a rule to take. Only one of the contained actions can be set.
 * ###### Important
 *
 * This data type is a UNION, so only one of the following members can be specified when used or returned.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleAction {
  /**
   * - This action adds a header. This can be used to add arbitrary email headers.
   * - _Required_: No
   * - _Type_: [AddHeaderAction](./aws-properties-ses-mailmanagerruleset-addheaderaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-addheader */
  AddHeader?: AddHeaderAction
  /**
   * - This action archives the email. This can be used to deliver an email to an archive.
   * - _Required_: No
   * - _Type_: [ArchiveAction](./aws-properties-ses-mailmanagerruleset-archiveaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-archive */
  Archive?: ArchiveAction
  /**
   * - This action delivers an email to a WorkMail mailbox.
   * - _Required_: No
   * - _Type_: [DeliverToMailboxAction](./aws-properties-ses-mailmanagerruleset-delivertomailboxaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-delivertomailbox */
  DeliverToMailbox?: DeliverToMailboxAction
  /**
   * - This action terminates the evaluation of rules in the rule set.
   * - _Required_: No
   * - _Type_: Json
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-drop */
  Drop?: any | Intrinsic
  /**
   * - This action relays the email to another SMTP server.
   * - _Required_: No
   * - _Type_: [RelayAction](./aws-properties-ses-mailmanagerruleset-relayaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-relay */
  Relay?: RelayAction
  /**
   * - The action replaces certain or all recipients with a different set of recipients.
   * - _Required_: No
   * - _Type_: [ReplaceRecipientAction](./aws-properties-ses-mailmanagerruleset-replacerecipientaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-replacerecipient */
  ReplaceRecipient?: ReplaceRecipientAction
  /**
   * - This action sends the email to the internet.
   * - _Required_: No
   * - _Type_: [SendAction](./aws-properties-ses-mailmanagerruleset-sendaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-send */
  Send?: SendAction
  /**
   * - This action writes the MIME content of the email to an S3 bucket.
   * - _Required_: No
   * - _Type_: [S3Action](./aws-properties-ses-mailmanagerruleset-s3action.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleaction-writetos3 */
  WriteToS3?: S3Action
}

/**
 * A boolean expression to be used in a rule condition.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleBooleanExpression {
  /**
   * - The operand on which to perform a boolean condition operation.
   * - _Required_: Yes
   * - _Type_: [RuleBooleanToEvaluate](./aws-properties-ses-mailmanagerruleset-rulebooleantoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulebooleanexpression-evaluate */
  Evaluate: RuleBooleanToEvaluate
  /**
   * - The matching operator for a boolean condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `IS_TRUE | IS_FALSE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulebooleanexpression-operator */
  Operator: string | Intrinsic
}

/**
 * An IP address expression matching certain IP addresses within a given range of IP addresses.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleIpExpression {
  /**
   * - The IP address to evaluate in this condition.
   * - _Required_: Yes
   * - _Type_: [RuleIpToEvaluate](./aws-properties-ses-mailmanagerruleset-ruleiptoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleipexpression-evaluate */
  Evaluate: RuleIpToEvaluate
  /**
   * - The operator to evaluate the IP address.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `CIDR_MATCHES | NOT_CIDR_MATCHES`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleipexpression-operator */
  Operator: string | Intrinsic
  /**
   * - The IP CIDR blocks in format "x.y.z.w/n" (eg 10.0.0.0/8) to match with the email's IP address. For the operator CIDR\_MATCHES, if multiple values are given, they are evaluated as an OR. That is, if the IP address is contained within any of the given CIDR ranges, the condition is deemed to match. For NOT\_CIDR\_MATCHES, if multiple CIDR ranges are given, the condition is deemed to match if the IP address is not contained in any of the given CIDR ranges.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `18 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleipexpression-values */
  Values: (string | Intrinsic)[]
}

/**
 * A number expression to match numeric conditions with integers from the incoming email.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleNumberExpression {
  /**
   * - The number to evaluate in a numeric condition expression.
   * - _Required_: Yes
   * - _Type_: [RuleNumberToEvaluate](./aws-properties-ses-mailmanagerruleset-rulenumbertoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulenumberexpression-evaluate */
  Evaluate: RuleNumberToEvaluate
  /**
   * - The operator for a numeric condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | NOT_EQUALS | LESS_THAN | GREATER_THAN | LESS_THAN_OR_EQUAL | GREATER_THAN_OR_EQUAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulenumberexpression-operator */
  Operator: string | Intrinsic
  /**
   * - The value to evaluate in a numeric condition expression.
   * - _Required_: Yes
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulenumberexpression-value */
  Value: number | Intrinsic
}

/**
 * A string expression is evaluated against strings or substrings of the email.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleStringExpression {
  /**
   * - The string to evaluate in a string condition expression.
   * - _Required_: Yes
   * - _Type_: [RuleStringToEvaluate](./aws-properties-ses-mailmanagerruleset-rulestringtoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulestringexpression-evaluate */
  Evaluate: RuleStringToEvaluate
  /**
   * - The matching operator for a string condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | NOT_EQUALS | STARTS_WITH | ENDS_WITH | CONTAINS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulestringexpression-operator */
  Operator: string | Intrinsic
  /**
   * - The string(s) to be evaluated in a string condition expression. For all operators, except for NOT\_EQUALS, if multiple values are given, the values are processed as an OR. That is, if any of the values match the email's string using the given operator, the condition is deemed to match. However, for NOT\_EQUALS, the condition is only deemed to match if none of the given strings match the email's string.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1 | 1`
   * - _Maximum_: `4096 | 10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulestringexpression-values */
  Values: (string | Intrinsic)[]
}

/**
 * The verdict to evaluate in a verdict condition expression.
 * ###### Important
 *
 * This data type is a UNION, so only one of the following members can be specified when used or returned.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleVerdictToEvaluate {
  /**
   * - The Add On ARN and its returned value to evaluate in a verdict condition expression.
   * - _Required_: No
   * - _Type_: [Analysis](./aws-properties-ses-mailmanagerruleset-analysis.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleverdicttoevaluate-analysis */
  Analysis?: Analysis
  /**
   * - The email verdict attribute to evaluate in a string verdict expression.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `SPF | DKIM`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleverdicttoevaluate-attribute */
  Attribute?: string | Intrinsic
}

/**
 * A verdict expression is evaluated against verdicts of the email.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleVerdictExpression {
  /**
   * - The verdict to evaluate in a verdict condition expression.
   * - _Required_: Yes
   * - _Type_: [RuleVerdictToEvaluate](./aws-properties-ses-mailmanagerruleset-ruleverdicttoevaluate.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleverdictexpression-evaluate */
  Evaluate: RuleVerdictToEvaluate
  /**
   * - The matching operator for a verdict condition expression.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | NOT_EQUALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleverdictexpression-operator */
  Operator: string | Intrinsic
  /**
   * - The values to match with the email's verdict using the given operator. For the EQUALS operator, if multiple values are given, the condition is deemed to match if any of the given verdicts match that of the email. For the NOT\_EQUALS operator, if multiple values are given, the condition is deemed to match of none of the given verdicts match the verdict of the email.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-ruleverdictexpression-values */
  Values: (string | Intrinsic)[]
}

/**
 * The conditional expression used to evaluate an email for determining if a rule action should be taken.
 * ###### Important
 *
 * This data type is a UNION, so only one of the following members can be specified when used or returned.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface RuleCondition {
  /**
   * - The condition applies to a boolean expression passed in this field.
   * - _Required_: No
   * - _Type_: [RuleBooleanExpression](./aws-properties-ses-mailmanagerruleset-rulebooleanexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulecondition-booleanexpression */
  BooleanExpression?: RuleBooleanExpression
  /**
   * - The condition applies to a DMARC policy expression passed in this field.
   * - _Required_: No
   * - _Type_: [RuleDmarcExpression](./aws-properties-ses-mailmanagerruleset-ruledmarcexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulecondition-dmarcexpression */
  DmarcExpression?: RuleDmarcExpression
  /**
   * - The condition applies to an IP address expression passed in this field.
   * - _Required_: No
   * - _Type_: [RuleIpExpression](./aws-properties-ses-mailmanagerruleset-ruleipexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulecondition-ipexpression */
  IpExpression?: RuleIpExpression
  /**
   * - The condition applies to a number expression passed in this field.
   * - _Required_: No
   * - _Type_: [RuleNumberExpression](./aws-properties-ses-mailmanagerruleset-rulenumberexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulecondition-numberexpression */
  NumberExpression?: RuleNumberExpression
  /**
   * - The condition applies to a string expression passed in this field.
   * - _Required_: No
   * - _Type_: [RuleStringExpression](./aws-properties-ses-mailmanagerruleset-rulestringexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulecondition-stringexpression */
  StringExpression?: RuleStringExpression
  /**
   * - The condition applies to a verdict expression passed in this field.
   * - _Required_: No
   * - _Type_: [RuleVerdictExpression](./aws-properties-ses-mailmanagerruleset-ruleverdictexpression.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulecondition-verdictexpression */
  VerdictExpression?: RuleVerdictExpression
}

/**
 * A rule contains conditions, "unless conditions" and actions. For each envelope recipient of an email, if all conditions match and none of the "unless conditions" match, then all of the actions are executed sequentially. If no conditions are provided, the rule always applies and the actions are implicitly executed. If only "unless conditions" are provided, the rule applies if the email does not match the evaluation of the "unless conditions".
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface Rule {
  /**
   * - The list of actions to execute when the conditions match the incoming email, and none of the "unless conditions" match.
   * - _Required_: Yes
   * - _Type_: Array of [RuleAction](./aws-properties-ses-mailmanagerruleset-ruleaction.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rule-actions */
  Actions: RuleAction[]
  /**
   * - The conditions of this rule. All conditions must match the email for the actions to be executed. An empty list of conditions means that all emails match, but are still subject to any "unless conditions"
   * - _Required_: No
   * - _Type_: Array of [RuleCondition](./aws-properties-ses-mailmanagerruleset-rulecondition.html)
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rule-conditions */
  Conditions?: RuleCondition[]
  /**
   * - The user-friendly name of the rule.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `32`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rule-name */
  Name?: string | Intrinsic
  /**
   * - The "unless conditions" of this rule. None of the conditions can match the email for the actions to be executed. If any of these conditions do match the email, then the actions are not executed.
   * - _Required_: No
   * - _Type_: Array of [RuleCondition](./aws-properties-ses-mailmanagerruleset-rulecondition.html)
   * - _Minimum_: `0`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rule-unless */
  Unless?: RuleCondition[]
}

/**
 * Resource to create a rule set for a Mail Manager ingress endpoint which contains a list of rules that are evaluated sequentially for each email.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html */

export interface SESMailManagerRuleSet extends ResourceAttributes {
  Type: 'AWS::SES::MailManagerRuleSet'
  Properties: {
    /**
     * - Conditional rules that are evaluated for determining actions on email.
     * - _Required_: Yes
     * - _Type_: Array of [Rule](./aws-properties-ses-mailmanagerruleset-rule.html)
     * - _Minimum_: `0`
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rules */
    Rules: Rule[]
    /**
     * - A user-friendly name for the rule set.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_.-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-rulesetname */
    RuleSetName?: string | Intrinsic
    /**
     * - The tags used to organize, track, or control access for the resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-ses-mailmanagerruleset-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-mailmanagerruleset.html#cfn-ses-mailmanagerruleset-tags */
    Tags?: Tag[]
  }
}
