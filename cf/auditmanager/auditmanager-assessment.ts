import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AssessmentReportsDestination` property type specifies the location in which AWS Audit Manager saves assessment reports for the given assessment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface AssessmentReportsDestination {
    /**
     * - The destination bucket where Audit Manager stores assessment reports.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(S|s)3:\/\/[a-zA-Z0-9\-\.\(\)\'\*\_\!\/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-assessmentreportsdestination-destination */
    "Destination"?: string | Intrinsic;
    /**
     * - The destination type, such as Amazon S3.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `S3`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-assessmentreportsdestination-destinationtype */
    "DestinationType"?: string | Intrinsic;
}

/**
 * The `Delegation` property type specifies the assignment of a control set to a delegate for review.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface Delegation {
    /**
     * - The identifier for the assessment that's associated with the delegation.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
     * - _Minimum_: `36`
     * - _Maximum_: `36`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-assessmentid */
    "AssessmentId"?: string | Intrinsic;
    /**
     * - The name of the assessment that's associated with the delegation.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_\.]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-assessmentname */
    "AssessmentName"?: string | Intrinsic;
    /**
     * - The comment that's related to the delegation.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w\W\s\S]*$`
     * - _Maximum_: `350`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-comment */
    "Comment"?: string | Intrinsic;
    /**
     * - The identifier for the control set that's associated with the delegation.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\w\W\s\S]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `300`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-controlsetid */
    "ControlSetId"?: string | Intrinsic;
    /**
     * - The user or role that created the delegation.
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Pattern_: `^[a-zA-Z0-9-_()\\[\\]\\s]+$`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:.*:*:.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-createdby */
    "CreatedBy"?: string | Intrinsic;
    /**
     * - Specifies when the delegation was created.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-creationtime */
    "CreationTime"?: number | Intrinsic;
    /**
     * - The unique identifier for the delegation.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$`
     * - _Minimum_: `36`
     * - _Maximum_: `36`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-id */
    "Id"?: string | Intrinsic;
    /**
     * - Specifies when the delegation was last updated.
     * - _Required_: No
     * - _Type_: Number
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-lastupdated */
    "LastUpdated"?: number | Intrinsic;
    /**
     * - The Amazon Resource Name (ARN) of the IAM role.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:.*:iam:.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-rolearn */
    "RoleArn"?: string | Intrinsic;
    /**
     * - The type of customer persona.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PROCESS_OWNER | RESOURCE_OWNER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-roletype */
    "RoleType"?: string | Intrinsic;
    /**
     * - The status of the delegation.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `IN_PROGRESS | UNDER_REVIEW | COMPLETE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegation-status */
    "Status"?: string | Intrinsic;
}

/**
 * The `AWSAccount` property type specifies the wrapper of the AWS account details, such as account ID, email address, and so on.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface AWSAccount {
    /**
     * - The email address that's associated with the AWS account.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*@.*$`
     * - _Minimum_: `1`
     * - _Maximum_: `320`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-awsaccount-emailaddress */
    "EmailAddress"?: string | Intrinsic;
    /**
     * - The identifier for the AWS account.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]{12}$`
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-awsaccount-id */
    "Id"?: string | Intrinsic;
    /**
     * - The name of the AWS account.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\u0020-\u007E]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-awsaccount-name */
    "Name"?: string | Intrinsic;
}

/**
 * The `Role` property type specifies the wrapper that contains AWS Audit Manager role information, such as the role type and IAM Amazon Resource Name (ARN).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface Role {
    /**
     * - The Amazon Resource Name (ARN) of the IAM role.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:.*:iam:.*`
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-role-rolearn */
    "RoleArn"?: string | Intrinsic;
    /**
     * - The type of customer persona.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `PROCESS_OWNER | RESOURCE_OWNER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-role-roletype */
    "RoleType"?: string | Intrinsic;
}

/**
 * The `Tag` property type specifies the tags that are associated with the assessment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface Tag {
    /**
     * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-tag-key */
    "Key": string | Intrinsic;
    /**
     * - One part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWSService` property type specifies an AWS service such as Amazon S3, AWS CloudTrail, and so on.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface AWSService {
    /**
     * - The name of the AWS service.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-\s().]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `40`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-awsservice-servicename */
    "ServiceName"?: string | Intrinsic;
}

/**
 * The `Scope` property type specifies the wrapper that contains the AWS accounts and services that are in scope for the assessment.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface Scope {
    /**
     * - The AWS accounts that are included in the scope of the assessment.
     * - _Required_: No
     * - _Type_: Array of [AWSAccount](./aws-properties-auditmanager-assessment-awsaccount.html)
     * - _Minimum_: `1`
     * - _Maximum_: `200`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-scope-awsaccounts */
    "AwsAccounts"?: AWSAccount[];
    /**
     * - The AWS services that are included in the scope of the assessment.
     * - _Required_: No
     * - _Type_: Array of [AWSService](./aws-properties-auditmanager-assessment-awsservice.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-scope-awsservices */
    "AwsServices"?: AWSService[];
}

/**
 * The `AWS::AuditManager::Assessment` resource is an Audit Manager resource type that defines the scope of audit evidence collected by Audit Manager. An Audit Manager assessment is an implementation of an Audit Manager framework.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html */

export interface AuditManagerAssessment extends ResourceAttributes {
    "Type": "AWS::AuditManager::Assessment";
    "Properties": {
        /**
         * - The destination that evidence reports are stored in for the assessment.
         * - _Required_: No
         * - _Type_: [AssessmentReportsDestination](./aws-properties-auditmanager-assessment-assessmentreportsdestination.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-assessmentreportsdestination */
        "AssessmentReportsDestination"?: AssessmentReportsDestination;
        /**
         * - The AWS account that's associated with the assessment.
         * - _Required_: No
         * - _Type_: [AWSAccount](./aws-properties-auditmanager-assessment-awsaccount.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-awsaccount */
        "AwsAccount"?: AWSAccount;
        /**
         * - The delegations that are associated with the assessment.
         * - _Required_: No
         * - _Type_: Array of [Delegation](./aws-properties-auditmanager-assessment-delegation.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-delegations */
        "Delegations"?: Delegation[];
        /**
         * - The description of the assessment.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\w\W\s\S]*$`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-description */
        "Description"?: string | Intrinsic;
        /**
         * - The unique identifier for the framework.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^([a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}|.*\S.*)$`
         * - _Minimum_: `32`
         * - _Maximum_: `36`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-frameworkid */
        "FrameworkId"?: string | Intrinsic;
        /**
         * - The name of the assessment.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_\.]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `127`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-name */
        "Name"?: string | Intrinsic;
        /**
         * - The roles that are associated with the assessment.
         * - _Required_: No
         * - _Type_: Array of [Role](./aws-properties-auditmanager-assessment-role.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-roles */
        "Roles"?: Role[];
        /**
         * - The wrapper of AWS accounts and services that are in scope for the assessment.
         * - _Required_: No
         * - _Type_: [Scope](./aws-properties-auditmanager-assessment-scope.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-scope */
        "Scope"?: Scope;
        /**
         * - The overall status of the assessment.
         * - When you create a new assessment, the initial `Status` value is always `ACTIVE`. When you create an assessment, even if you specify the value as `INACTIVE`, the value overrides to `ACTIVE`.
         * - After you create an assessment, you can change the value of the `Status` property at any time. For example, when you want to stop collecting evidence for your assessment, you can change the assessment status to `INACTIVE`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ACTIVE | INACTIVE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-status */
        "Status"?: string | Intrinsic;
        /**
         * - The tags that are associated with the assessment.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-auditmanager-assessment-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-auditmanager-assessment.html#cfn-auditmanager-assessment-tags */
        "Tags"?: Tag[];
    };
}