import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The user-specified preferences for how CloudFormation performs a stack set operation. For more information on maximum concurrent accounts and failure tolerance, see [Stack set operation options](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-concepts.html#stackset-ops-options) in the _AWS CloudFormation User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface OperationPreferences {
    /**
     * - Specifies how the concurrency level behaves during the operation execution.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `STRICT_FAILURE_TOLERANCE | SOFT_FAILURE_TOLERANCE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences-concurrencymode */
    "ConcurrencyMode"?: string | Intrinsic;
    /**
     * - The number of accounts, per Region, for which this operation can fail before CloudFormation stops the operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't attempt the operation in any subsequent Regions.
     * - Conditional: You must specify either `FailureToleranceCount` or `FailureTolerancePercentage` (but not both).
     * - _Required_: Conditional
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences-failuretolerancecount */
    "FailureToleranceCount"?: number | Intrinsic;
    /**
     * - The percentage of accounts, per Region, for which this stack operation can fail before CloudFormation stops the operation in that Region. If the operation is stopped in a Region, CloudFormation doesn't attempt the operation in any subsequent Regions.
     * - When calculating the number of accounts based on the specified percentage, CloudFormation rounds _down_ to the next whole number.
     * - Conditional: You must specify either `FailureToleranceCount` or `FailureTolerancePercentage`, but not both.
     * - _Required_: Conditional
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences-failuretolerancepercentage */
    "FailureTolerancePercentage"?: number | Intrinsic;
    /**
     * - The maximum number of accounts in which to perform this operation at one time. This is dependent on the value of `FailureToleranceCount`. `MaxConcurrentCount` is at most one more than the `FailureToleranceCount`.
     * - Note that this setting lets you specify the _maximum_ for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
     * - Conditional: You must specify either `MaxConcurrentCount` or `MaxConcurrentPercentage`, but not both.
     * - _Required_: Conditional
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences-maxconcurrentcount */
    "MaxConcurrentCount"?: number | Intrinsic;
    /**
     * - The maximum percentage of accounts in which to perform this operation at one time.
     * - When calculating the number of accounts based on the specified percentage, CloudFormation rounds down to the next whole number. This is true except in cases where rounding down would result is zero. In this case, CloudFormation sets the number as one instead.
     * - Note that this setting lets you specify the _maximum_ for operations. For large deployments, under certain circumstances the actual number of accounts acted upon concurrently may be lower due to service throttling.
     * - Conditional: You must specify either `MaxConcurrentCount` or `MaxConcurrentPercentage`, but not both.
     * - _Required_: Conditional
     * - _Type_: Integer
     * - _Minimum_: `0`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences-maxconcurrentpercentage */
    "MaxConcurrentPercentage"?: number | Intrinsic;
    /**
     * - The concurrency type of deploying StackSets operations in Regions, could be in parallel or one Region at a time.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `SEQUENTIAL | PARALLEL`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences-regionconcurrencytype */
    "RegionConcurrencyType"?: string | Intrinsic;
    /**
     * - The order of the Regions where you want to perform the stack operation.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences-regionorder */
    "RegionOrder"?: (string | Intrinsic)[];
}

/**
 * Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface ManagedExecution {
    /**
     * - When `true`, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
     * - When `false` (default), StackSets performs one operation at a time in request order.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-managedexecution-active */
    "Active"?: boolean | Intrinsic;
}

/**
 * \[`Service-managed` permissions\] Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organizational unit (OU).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface AutoDeployment {
    /**
     * - If set to `true`, StackSets automatically deploys additional stack instances to AWS Organizations accounts that are added to a target organization or organizational unit (OU) in the specified Regions. If an account is removed from a target organization or OU, StackSets deletes stack instances from the account in the specified Regions.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-autodeployment-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - If set to `true`, stack resources are retained when an account is removed from a target organization or OU. If set to `false`, stack resources are deleted. Specify only if `Enabled` is set to `True`.
     * - _Required_: Conditional
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-autodeployment-retainstacksonaccountremoval */
    "RetainStacksOnAccountRemoval"?: boolean | Intrinsic;
}

/**
 * The Parameter data type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface Parameter {
    /**
     * - The key associated with the parameter. If you don't specify a key and value for a particular parameter, CloudFormation uses the default value that's specified in your template.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-parameter-parameterkey */
    "ParameterKey": string | Intrinsic;
    /**
     * - The input value associated with the parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-parameter-parametervalue */
    "ParameterValue": string | Intrinsic;
}

/**
 * The Tag type enables you to specify a key-value pair that can be used to store information about an CloudFormation stack.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface Tag {
    /**
     * - _Required_. A string used to identify this tag. You can specify a maximum of 128 characters for a tag key. Tags owned by AWS have the reserved prefix: `aws:`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:.*)[a-zA-Z0-9\s\:\_\.\/\=\+\-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-tag-key */
    "Key": string | Intrinsic;
    /**
     * - _Required_. A string containing the value for this tag. You can specify a maximum of 256 characters for a tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The AWS OrganizationalUnitIds or Accounts for which to create stack instances in the specified Regions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface DeploymentTargets {
    /**
     * - Limit deployment targets to individual accounts or include additional accounts with provided OUs.
     * - The following is a list of possible values for the `AccountFilterType` operation.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `NONE | UNION | INTERSECTION | DIFFERENCE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-deploymenttargets-accountfiltertype */
    "AccountFilterType"?: string | Intrinsic;
    /**
     * - The account IDs of the AWS accounts. If you have many account numbers, you can provide those accounts using the `AccountsUrl` property instead.
     * - _Pattern_: `^[0-9]{12}$`
     * - _Required_: Conditional
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-deploymenttargets-accounts */
    "Accounts"?: (string | Intrinsic)[];
    /**
     * - The Amazon S3 URL path to a file that contains a list of AWS account IDs. The file format must be either `.csv` or `.txt`, and the data can be comma-separated or new-line-separated. There is currently a 10MB limit for the data (approximately 800,000 accounts).
     * - 
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(s3://|http(s?)://).+`
     * - _Minimum_: `1`
     * - _Maximum_: `5120`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-deploymenttargets-accountsurl */
    "AccountsUrl"?: string | Intrinsic;
    /**
     * - The organization root ID or organizational unit (OU) IDs.
     * - _Pattern_: `^(ou-[a-z0-9]{4,32}-[a-z0-9]{8,32}|r-[a-z0-9]{4,32})$`
     * - _Required_: Conditional
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-deploymenttargets-organizationalunitids */
    "OrganizationalUnitIds"?: (string | Intrinsic)[];
}

/**
 * Stack instances in some specific accounts and Regions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface StackInstances {
    /**
     * - The AWS`OrganizationalUnitIds` or `Accounts` for which to create stack instances in the specified Regions.
     * - _Required_: Yes
     * - _Type_: [DeploymentTargets](./aws-properties-cloudformation-stackset-deploymenttargets.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stackinstances-deploymenttargets */
    "DeploymentTargets": DeploymentTargets;
    /**
     * - A list of stack set parameters whose values you want to override in the selected stack instances.
     * - _Required_: No
     * - _Type_: Array of [Parameter](./aws-properties-cloudformation-stackset-parameter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stackinstances-parameteroverrides */
    "ParameterOverrides"?: Parameter[];
    /**
     * - The names of one or more Regions where you want to create stack instances using the specified AWS accounts.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stackinstances-regions */
    "Regions": (string | Intrinsic)[];
}

/**
 * The `AWS::CloudFormation::StackSet` resource enables you to provision stacks into AWS accounts and across Regions by using a single CloudFormation template. In the stack set, you specify the template to use, in addition to any parameters and capabilities that the template requires.
 * ###### Important
 * 
 * Run deployments to nested StackSets from the parent stack, not directly through the StackSet API.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html */

export interface CloudFormationStackSet extends ResourceAttributes {
    "Type": "AWS::CloudFormation::StackSet";
    "Properties": {
        /**
         * - The Amazon Resource Number (ARN) of the IAM role to use to create this stack set. Specify an IAM role only if you are using customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account.
         * - Use customized administrator roles to control which users or groups can manage specific stack sets within the same administrator account. For more information, see [Grant self-managed permissions](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-prereqs-self-managed.html) in the _AWS CloudFormation User Guide_.
         * - Valid only if the permissions model is `SELF_MANAGED`.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-administrationrolearn */
        "AdministrationRoleARN"?: string | Intrinsic;
        /**
         * - Describes whether StackSets automatically deploys to AWS Organizations accounts that are added to a target organization or organizational unit (OU). For more information, see [Enable or disable automatic deployments for StackSets in AWS Organizations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/stacksets-orgs-manage-auto-deployment.html) in the _AWS CloudFormation User Guide_.
         * - Required if the permissions model is `SERVICE_MANAGED`. (Not used with self-managed permissions.)
         * - _Required_: Conditional
         * - _Type_: [AutoDeployment](./aws-properties-cloudformation-stackset-autodeployment.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-autodeployment */
        "AutoDeployment"?: AutoDeployment;
        /**
         * - Specifies whether you are acting as an account administrator in the organization's management account or as a delegated administrator in a member account.
         * - By default, `SELF` is specified. Use `SELF` for stack sets with self-managed permissions.
         * - Stack sets with service-managed permissions are created in the management account, including stack sets that are created by delegated administrators.
         * - Valid only if the permissions model is `SERVICE_MANAGED`.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `SELF | DELEGATED_ADMIN`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-callas */
        "CallAs"?: string | Intrinsic;
        /**
         * - The capabilities that are allowed in the stack set. Some stack set templates might include resources that can affect permissions in your AWS account—for example, by creating new IAM users. For more information, see [Acknowledging IAM resources in CloudFormation templates](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/control-access-with-iam.html#using-iam-capabilities) in the _AWS CloudFormation User Guide_.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-capabilities */
        "Capabilities"?: (string | Intrinsic)[];
        /**
         * - A description of the stack set.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `1024`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the IAM execution role to use to create the stack set. If you don't specify an execution role, CloudFormation uses the `AWSCloudFormationStackSetExecutionRole` role for the stack set operation.
         * - Valid only if the permissions model is `SELF_MANAGED`.
         * - _Pattern_: `[a-zA-Z_0-9+=,.@-]+`
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-executionrolename */
        "ExecutionRoleName"?: string | Intrinsic;
        /**
         * - Describes whether StackSets performs non-conflicting operations concurrently and queues conflicting operations.
         * - When active, StackSets performs non-conflicting operations concurrently and queues conflicting operations. After conflicting operations finish, StackSets starts queued operations in request order.
         * - When inactive (default), StackSets performs one operation at a time in request order.
         * - _Required_: No
         * - _Type_: [ManagedExecution](./aws-properties-cloudformation-stackset-managedexecution.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-managedexecution */
        "ManagedExecution"?: ManagedExecution;
        /**
         * - The user-specified preferences for how CloudFormation performs a stack set operation.
         * - _Required_: No
         * - _Type_: [OperationPreferences](./aws-properties-cloudformation-stackset-operationpreferences.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-operationpreferences */
        "OperationPreferences"?: OperationPreferences;
        /**
         * - The input parameters for the stack set template.
         * - _Required_: No
         * - _Type_: Array of [Parameter](./aws-properties-cloudformation-stackset-parameter.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-parameters */
        "Parameters"?: Parameter[];
        /**
         * - Describes how the IAM roles required for stack set operations are created.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SERVICE_MANAGED | SELF_MANAGED`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-permissionmodel */
        "PermissionModel": string | Intrinsic;
        /**
         * - A group of stack instances with parameters in some specific accounts and Regions.
         * - _Required_: No
         * - _Type_: Array of [StackInstances](./aws-properties-cloudformation-stackset-stackinstances.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stackinstancesgroup */
        "StackInstancesGroup"?: StackInstances[];
        /**
         * - The name to associate with the stack set. The name must be unique in the Region where you create your stack set.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z][a-zA-Z0-9\-]{0,127}$`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-stacksetname */
        "StackSetName": string | Intrinsic;
        /**
         * - Key-value pairs to associate with this stack. CloudFormation also propagates these tags to supported resources in the stack. You can specify a maximum number of 50 tags.
         * - If you don't specify this parameter, CloudFormation doesn't modify the stack's tags. If you specify an empty value, CloudFormation removes all associated tags.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cloudformation-stackset-tag.html)
         * - _Maximum_: `50`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-tags */
        "Tags"?: Tag[];
        /**
         * - The structure that contains the template body, with a minimum length of 1 byte and a maximum length of 51,200 bytes.
         * - You must include either `TemplateURL` or `TemplateBody` in a StackSet, but you can't use both. Dynamic references in the `TemplateBody` may not work correctly in all cases. It's recommended to pass templates containing dynamic references through `TemplateUrl` instead.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `51200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templatebody */
        "TemplateBody"?: string | Intrinsic;
        /**
         * - The URL of a file containing the template body. The URL must point to a template (max size: 1 MB) that's located in an Amazon S3 bucket or a Systems Manager document. The location for an Amazon S3 bucket must start with `https://`.
         * - Conditional: You must specify only one of the following parameters: `TemplateBody`, `TemplateURL`.
         * - _Required_: Conditional
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `5120`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cloudformation-stackset.html#cfn-cloudformation-stackset-templateurl */
        "TemplateURL"?: string | Intrinsic;
    };
}