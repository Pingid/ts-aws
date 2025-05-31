import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The user and group permissions used to run the Lambda function. This setting overrides the default access identity that's specified for the group (by default, ggc\_user and ggc\_group). You can override the user, group, or both. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-access-identity.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * ###### Important
 * 
 * Running as the root user increases risks to your data and device. Do not run as root (UID/GID=0) unless your business case requires it. For more information and requirements, see [Running a Lambda Function as Root](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-running-as-root).
 * In an AWS CloudFormation template, `RunAs` is a property of the [`Execution`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-execution.html) property type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface RunAs {
    /**
     * - The group ID whose permissions are used to run the Lambda function. You can use the **getent group** command on your core device to look up the group ID.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-runas-gid */
    "Gid"?: number | Intrinsic;
    /**
     * - The user ID whose permissions are used to run the Lambda function. You can use the **getent passwd** command on your core device to look up the user ID.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-runas-uid */
    "Uid"?: number | Intrinsic;
}

/**
 * Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
 * In an AWS CloudFormation template, `Execution` is a property of the [`DefaultConfig`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-defaultconfig.html) property type for a function definition version and the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property type for a function.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface Execution {
    /**
     * - The containerization that the Lambda function runs in. Valid values are `GreengrassContainer` or `NoContainer`. Typically, this is `GreengrassContainer`. For more information, see [Containerization](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-function-containerization) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-execution-isolationmode */
    "IsolationMode"?: string | Intrinsic;
    /**
     * - The user and group permissions used to run the Lambda function. Typically, this is the ggc\_user and ggc\_group. For more information, see [Run as](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html#lambda-access-identity.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
     * - _Required_: No
     * - _Type_: [RunAs](./aws-properties-greengrass-functiondefinitionversion-runas.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-execution-runas */
    "RunAs"?: RunAs;
}

/**
 * The default configuration that applies to all Lambda functions in the function definition version. Individual Lambda functions can override these settings.
 * In an AWS CloudFormation template, `DefaultConfig` is a property of the [`AWS::Greengrass::FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface DefaultConfig {
    /**
     * - Configuration settings for the Lambda execution environment on the AWS IoT Greengrass core.
     * - _Required_: Yes
     * - _Type_: [Execution](./aws-properties-greengrass-functiondefinitionversion-execution.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-defaultconfig-execution */
    "Execution": Execution;
}

/**
 * A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
 * ###### Note
 * 
 * This property applies only to Lambda functions that run in a Greengrass container.
 * In an AWS CloudFormation template, `ResourceAccessPolicy` is a property of the [`Environment`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-environment.html) property type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface ResourceAccessPolicy {
    /**
     * - The read-only or read-write access that the Lambda function has to the resource. Valid values are `ro` or `rw`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-resourceaccesspolicy-permission */
    "Permission"?: string | Intrinsic;
    /**
     * - The ID of the resource. This ID is assigned to the resource when you create the resource definition.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-resourceaccesspolicy-resourceid */
    "ResourceId": string | Intrinsic;
}

/**
 * The environment configuration for a Lambda function on the AWS IoT Greengrass core.
 * In an AWS CloudFormation template, `Environment` is a property of the [`FunctionConfiguration`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html) property type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface Environment {
    /**
     * - Indicates whether the function is allowed to access the `/sys` directory on the core device, which allows the read device information from `/sys`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-environment-accesssysfs */
    "AccessSysfs"?: boolean | Intrinsic;
    /**
     * - Settings for the Lambda execution environment in AWS IoT Greengrass.
     * - _Required_: No
     * - _Type_: [Execution](./aws-properties-greengrass-functiondefinitionversion-execution.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-environment-execution */
    "Execution"?: Execution;
    /**
     * - A list of the [resources](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-resourcedefinitionversion-resourceinstance.html) in the group that the function can access, with the corresponding read-only or read-write permissions. The maximum is 10 resources.
     * - _Required_: No
     * - _Type_: Array of [ResourceAccessPolicy](./aws-properties-greengrass-functiondefinitionversion-resourceaccesspolicy.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-environment-resourceaccesspolicies */
    "ResourceAccessPolicies"?: ResourceAccessPolicy[];
    /**
     * - Environment variables for the Lambda function.
     * - _Required_: No
     * - _Type_: Json
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-environment-variables */
    "Variables"?: any | Intrinsic;
}

/**
 * The group-specific configuration settings for a Lambda function. These settings configure the function's behavior in the Greengrass group. For more information, see [Controlling Execution of Greengrass Lambda Functions by Using Group-Specific Configuration](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-group-config.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, `FunctionConfiguration` is a property of the [`Function`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-greengrass-functiondefinitionversion-function.html) property type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface FunctionConfiguration {
    /**
     * - The expected encoding type of the input payload for the function. Valid values are `json` (default) and `binary`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-encodingtype */
    "EncodingType"?: string | Intrinsic;
    /**
     * - The environment configuration of the function.
     * - _Required_: No
     * - _Type_: [Environment](./aws-properties-greengrass-functiondefinitionversion-environment.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-environment */
    "Environment"?: Environment;
    /**
     * - The execution arguments.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-execargs */
    "ExecArgs"?: string | Intrinsic;
    /**
     * - The name of the function executable.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-executable */
    "Executable"?: string | Intrinsic;
    /**
     * - The memory size (in KB) required by the function.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-memorysize */
    "MemorySize"?: number | Intrinsic;
    /**
     * - Indicates whether the function is pinned (or _long-lived_). Pinned functions start when the core starts and process all requests in the same container. The default value is false.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-pinned */
    "Pinned"?: boolean | Intrinsic;
    /**
     * - The allowed execution time (in seconds) after which the function should terminate. For pinned functions, this timeout applies for each request.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functionconfiguration-timeout */
    "Timeout"?: number | Intrinsic;
}

/**
 * A function is a Lambda function that's referenced from an AWS IoT Greengrass group. The function is deployed to a Greengrass core where it runs locally. For more information, see [Run Lambda Functions on the AWS IoT Greengrass Core](https://docs.aws.amazon.com/greengrass/v1/developerguide/lambda-functions.html) in the _AWS IoT Greengrass Version 1 Developer Guide_ .
 * In an AWS CloudFormation template, the `Functions` property of the [`AWS::Greengrass::FunctionDefinitionVersion`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html) resource contains a list of `Function` property types.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface Function {
    /**
     * - The Amazon Resource Name (ARN) of the alias (recommended) or version of the referenced Lambda function.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-function-functionarn */
    "FunctionArn": string | Intrinsic;
    /**
     * - The group-specific settings of the Lambda function. These settings configure the function's behavior in the Greengrass group.
     * - _Required_: Yes
     * - _Type_: [FunctionConfiguration](./aws-properties-greengrass-functiondefinitionversion-functionconfiguration.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-function-functionconfiguration */
    "FunctionConfiguration": FunctionConfiguration;
    /**
     * - A descriptive or arbitrary ID for the function. This value must be unique within the function definition version. Maximum length is 128 characters with pattern `[a-zA-Z0-9:_-]+`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-function-id */
    "Id": string | Intrinsic;
}

/**
 * The `AWS::Greengrass::FunctionDefinitionVersion` resource represents a function definition version for AWS IoT Greengrass. A function definition version contains contain a list of functions.
 * ###### Note
 * 
 * To create a function definition version, you must specify the ID of the function definition that you want to associate with the version. For information about creating a function definition, see [`AWS::Greengrass::FunctionDefinition`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinition.html).
 * 
 * After you create a function definition version that contains the functions you want to deploy, you must add it to your group version. For more information, see [`AWS::Greengrass::Group`](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-group.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html */

export interface GreengrassFunctionDefinitionVersion extends ResourceAttributes {
    "Type": "AWS::Greengrass::FunctionDefinitionVersion";
    "Properties": {
        /**
         * - The default configuration that applies to all Lambda functions in the group. Individual Lambda functions can override these settings.
         * - _Required_: No
         * - _Type_: [DefaultConfig](./aws-properties-greengrass-functiondefinitionversion-defaultconfig.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-defaultconfig */
        "DefaultConfig"?: DefaultConfig;
        /**
         * - The ID of the function definition associated with this version. This value is a GUID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functiondefinitionid */
        "FunctionDefinitionId": string | Intrinsic;
        /**
         * - The functions in this version.
         * - _Required_: Yes
         * - _Type_: Array of [Function](./aws-properties-greengrass-functiondefinitionversion-function.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-greengrass-functiondefinitionversion.html#cfn-greengrass-functiondefinitionversion-functions */
        "Functions": Function[];
    };
}