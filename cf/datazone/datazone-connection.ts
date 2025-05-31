import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The location of a project.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface AwsLocation {
    /**
     * - The access role of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-awslocation-accessrole */
    "AccessRole"?: string | Intrinsic;
    /**
     * - The account ID of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\d{12}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-awslocation-awsaccountid */
    "AwsAccountId"?: string | Intrinsic;
    /**
     * - The Region of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z]{2}-[a-z]{4,10}-\d$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-awslocation-awsregion */
    "AwsRegion"?: string | Intrinsic;
    /**
     * - The IAM connection ID of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9]+$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-awslocation-iamconnectionid */
    "IamConnectionId"?: string | Intrinsic;
}

/**
 * The Amazon Athena properties of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface AthenaPropertiesInput {
    /**
     * - The Amazon Athena workgroup name of a connection.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9._-]+$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-athenapropertiesinput-workgroupname */
    "WorkgroupName": string | Intrinsic;
}

/**
 * The hyper pod properties of a AWS Glue properties patch.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface HyperPodPropertiesInput {
    /**
     * - The cluster name the hyper pod properties.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9](-*[a-zA-Z0-9])*$`
     * - _Minimum_: `1`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-hyperpodpropertiesinput-clustername */
    "ClusterName": string | Intrinsic;
}

/**
 * The IAM properties of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface IamPropertiesInput {
    /**
     * - Specifies whether AWS Glue lineage sync is enabled for a connection.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-iampropertiesinput-gluelineagesyncenabled */
    "GlueLineageSyncEnabled"?: boolean | Intrinsic;
}

/**
 * The Spark EMR properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface SparkEmrPropertiesInput {
    /**
     * - The compute ARN of Spark EMR.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-(cn|us-gov|iso(-[bef])?))?:(elasticmapreduce|emr-serverless):.*`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkemrpropertiesinput-computearn */
    "ComputeArn"?: string | Intrinsic;
    /**
     * - The instance profile ARN of Spark EMR.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkemrpropertiesinput-instanceprofilearn */
    "InstanceProfileArn"?: string | Intrinsic;
    /**
     * - The java virtual env of the Spark EMR.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkemrpropertiesinput-javavirtualenv */
    "JavaVirtualEnv"?: string | Intrinsic;
    /**
     * - The log URI of the Spark EMR.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^s3://.+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkemrpropertiesinput-loguri */
    "LogUri"?: string | Intrinsic;
    /**
     * - The Python virtual env of the Spark EMR.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkemrpropertiesinput-pythonvirtualenv */
    "PythonVirtualEnv"?: string | Intrinsic;
    /**
     * - The runtime role of the Spark EMR.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:iam::\d{12}:(role|role/service-role)/[\w+=,.@-]*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkemrpropertiesinput-runtimerole */
    "RuntimeRole"?: string | Intrinsic;
    /**
     * - The certificates S3 URI of the Spark EMR.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^s3://.+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkemrpropertiesinput-trustedcertificatess3uri */
    "TrustedCertificatesS3Uri"?: string | Intrinsic;
}

/**
 * The Spark AWS Glue args.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface SparkGlueArgs {
    /**
     * - The connection in the Spark AWS Glue args.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9]+$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkglueargs-connection */
    "Connection"?: string | Intrinsic;
}

/**
 * The Spark AWS Glue properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface SparkGluePropertiesInput {
    /**
     * - The additional args in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: [SparkGlueArgs](./aws-properties-datazone-connection-sparkglueargs.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-additionalargs */
    "AdditionalArgs"?: SparkGlueArgs;
    /**
     * - The AWS Glue connection name in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-glueconnectionname */
    "GlueConnectionName"?: string | Intrinsic;
    /**
     * - The AWS Glue version in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\w+\.\w+$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-glueversion */
    "GlueVersion"?: string | Intrinsic;
    /**
     * - The idle timeout in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `3000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-idletimeout */
    "IdleTimeout"?: number | Intrinsic;
    /**
     * - The Java virtual env in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-javavirtualenv */
    "JavaVirtualEnv"?: string | Intrinsic;
    /**
     * - The number of workers in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `1000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-numberofworkers */
    "NumberOfWorkers"?: number | Intrinsic;
    /**
     * - The Python virtual env in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-pythonvirtualenv */
    "PythonVirtualEnv"?: string | Intrinsic;
    /**
     * - The worker type in the Spark AWS Glue properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[G|Z].*$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-sparkgluepropertiesinput-workertype */
    "WorkerType"?: string | Intrinsic;
}

/**
 * The Amazon Redshift storage properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface RedshiftStorageProperties {
    /**
     * - The cluster name in the Amazon Redshift storage properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9-]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `63`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftstorageproperties-clustername */
    "ClusterName"?: string | Intrinsic;
    /**
     * - The workgroup name in the Amazon Redshift storage properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9-]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftstorageproperties-workgroupname */
    "WorkgroupName"?: string | Intrinsic;
}

/**
 * The username and password of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface UsernamePassword {
    /**
     * - The password of a connection.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-usernamepassword-password */
    "Password": string | Intrinsic;
    /**
     * - The username of a connection.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `127`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-usernamepassword-username */
    "Username": string | Intrinsic;
}

/**
 * Amazon Redshift credentials of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface RedshiftCredentials {
    /**
     * - The secret ARN of the Amazon Redshift credentials of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[^:]*:secretsmanager:[a-z]{2}-?(iso|gov)?-{1}[a-z]*-{1}[0-9]:\d{12}:secret:.*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftcredentials-secretarn */
    "SecretArn"?: string | Intrinsic;
    /**
     * - The username and password of the Amazon Redshift credentials of a connection.
     * - _Required_: No
     * - _Type_: [UsernamePassword](./aws-properties-datazone-connection-usernamepassword.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftcredentials-usernamepassword */
    "UsernamePassword"?: UsernamePassword;
}

/**
 * Physical connection requirements of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface PhysicalConnectionRequirements {
    /**
     * - The availability zone of the physical connection requirements of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-physicalconnectionrequirements-availabilityzone */
    "AvailabilityZone"?: string | Intrinsic;
    /**
     * - The group ID list of the physical connection requirements of a connection.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1 | 0`
     * - _Maximum_: `255 | 50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-physicalconnectionrequirements-securitygroupidlist */
    "SecurityGroupIdList"?: (string | Intrinsic)[];
    /**
     * - The subnet ID of the physical connection requirements of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^subnet-[a-z0-9]+$`
     * - _Maximum_: `32`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-physicalconnectionrequirements-subnetid */
    "SubnetId"?: string | Intrinsic;
    /**
     * - The subnet ID list of the physical connection requirements of a connection.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `32 | 50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-physicalconnectionrequirements-subnetidlist */
    "SubnetIdList"?: (string | Intrinsic)[];
}

/**
 * The lineage sync schedule.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface LineageSyncSchedule {
    /**
     * - The lineage sync schedule.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^cron\((\b[0-5]?[0-9]\b) (\b2[0-3]\b|\b[0-1]?[0-9]\b) ([-?*,/\dLW]){1,83} ([-*,/\d]|[a-zA-Z]{3}){1,23} ([-?#*,/\dL]|[a-zA-Z]{3}){1,13} ([^\)]+)\)$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-lineagesyncschedule-schedule */
    "Schedule"?: string | Intrinsic;
}

/**
 * The Amaon Redshift lineage sync configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface RedshiftLineageSyncConfigurationInput {
    /**
     * - Specifies whether the Amaon Redshift lineage sync configuration is enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftlineagesyncconfigurationinput-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - The schedule of the Amaon Redshift lineage sync configuration.
     * - _Required_: No
     * - _Type_: [LineageSyncSchedule](./aws-properties-datazone-connection-lineagesyncschedule.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftlineagesyncconfigurationinput-schedule */
    "Schedule"?: LineageSyncSchedule;
}

/**
 * The Amazon Redshift properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface RedshiftPropertiesInput {
    /**
     * - The Amaon Redshift credentials.
     * - _Required_: No
     * - _Type_: [RedshiftCredentials](./aws-properties-datazone-connection-redshiftcredentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftpropertiesinput-credentials */
    "Credentials"?: RedshiftCredentials;
    /**
     * - The Amazon Redshift database name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftpropertiesinput-databasename */
    "DatabaseName"?: string | Intrinsic;
    /**
     * - The Amazon Redshift host.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\S]*$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftpropertiesinput-host */
    "Host"?: string | Intrinsic;
    /**
     * - The lineage sync of the Amazon Redshift.
     * - _Required_: No
     * - _Type_: [RedshiftLineageSyncConfigurationInput](./aws-properties-datazone-connection-redshiftlineagesyncconfigurationinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftpropertiesinput-lineagesync */
    "LineageSync"?: RedshiftLineageSyncConfigurationInput;
    /**
     * - The Amaon Redshift port.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Maximum_: `65535`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftpropertiesinput-port */
    "Port"?: number | Intrinsic;
    /**
     * - The Amazon Redshift storage.
     * - _Required_: No
     * - _Type_: [RedshiftStorageProperties](./aws-properties-datazone-connection-redshiftstorageproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-redshiftpropertiesinput-storage */
    "Storage"?: RedshiftStorageProperties;
}

/**
 * The basic authentication credentials of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface BasicAuthenticationCredentials {
    /**
     * - The password for a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*$`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-basicauthenticationcredentials-password */
    "Password"?: string | Intrinsic;
    /**
     * - The user name for the connecion.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-basicauthenticationcredentials-username */
    "UserName"?: string | Intrinsic;
}

/**
 * The authorization code properties of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface AuthorizationCodeProperties {
    /**
     * - The authorization code of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authorizationcodeproperties-authorizationcode */
    "AuthorizationCode"?: string | Intrinsic;
    /**
     * - The redirect URI of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authorizationcodeproperties-redirecturi */
    "RedirectUri"?: string | Intrinsic;
}

/**
 * The OAuth2Client application.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface OAuth2ClientApplication {
    /**
     * - The AWS managed client application reference in the OAuth2Client application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2clientapplication-awsmanagedclientapplicationreference */
    "AWSManagedClientApplicationReference"?: string | Intrinsic;
    /**
     * - The user managed client application client ID in the OAuth2Client application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2clientapplication-usermanagedclientapplicationclientid */
    "UserManagedClientApplicationClientId"?: string | Intrinsic;
}

/**
 * The GlueOAuth2 credentials of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface GlueOAuth2Credentials {
    /**
     * - The access token of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\x20-\x7E]*$`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueoauth2credentials-accesstoken */
    "AccessToken"?: string | Intrinsic;
    /**
     * - The jwt token of the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_=]+)\.([a-zA-Z0-9_\-\+\/=]*)$`
     * - _Maximum_: `8000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueoauth2credentials-jwttoken */
    "JwtToken"?: string | Intrinsic;
    /**
     * - The refresh token of the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\x20-\x7E]*$`
     * - _Maximum_: `4096`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueoauth2credentials-refreshtoken */
    "RefreshToken"?: string | Intrinsic;
    /**
     * - The user managed client application client secret of the connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\x20-\x7E]*$`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueoauth2credentials-usermanagedclientapplicationclientsecret */
    "UserManagedClientApplicationClientSecret"?: string | Intrinsic;
}

/**
 * The OAuth2 properties.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface OAuth2Properties {
    /**
     * - The authorization code properties of the OAuth2 properties.
     * - _Required_: No
     * - _Type_: [AuthorizationCodeProperties](./aws-properties-datazone-connection-authorizationcodeproperties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2properties-authorizationcodeproperties */
    "AuthorizationCodeProperties"?: AuthorizationCodeProperties;
    /**
     * - The OAuth2 client application of the OAuth2 properties.
     * - _Required_: No
     * - _Type_: [OAuth2ClientApplication](./aws-properties-datazone-connection-oauth2clientapplication.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2properties-oauth2clientapplication */
    "OAuth2ClientApplication"?: OAuth2ClientApplication;
    /**
     * - The OAuth2 credentials of the OAuth2 properties.
     * - _Required_: No
     * - _Type_: [GlueOAuth2Credentials](./aws-properties-datazone-connection-glueoauth2credentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2properties-oauth2credentials */
    "OAuth2Credentials"?: GlueOAuth2Credentials;
    /**
     * - The OAuth2 grant type of the OAuth2 properties.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AUTHORIZATION_CODE | CLIENT_CREDENTIALS | JWT_BEARER`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2properties-oauth2granttype */
    "OAuth2GrantType"?: string | Intrinsic;
    /**
     * - The OAuth2 token URL of the OAuth2 properties.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(https?)://[-a-zA-Z0-9+&@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&@#/%=~_|]$`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2properties-tokenurl */
    "TokenUrl"?: string | Intrinsic;
    /**
     * - The OAuth2 token URL parameter map of the OAuth2 properties.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-oauth2properties-tokenurlparametersmap */
    "TokenUrlParametersMap"?: Record<string, string | Intrinsic>;
}

/**
 * The authentication configuration of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface AuthenticationConfigurationInput {
    /**
     * - The authentication type of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `BASIC | OAUTH2 | CUSTOM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authenticationconfigurationinput-authenticationtype */
    "AuthenticationType"?: string | Intrinsic;
    /**
     * - The basic authentication credentials of a connection.
     * - _Required_: No
     * - _Type_: [BasicAuthenticationCredentials](./aws-properties-datazone-connection-basicauthenticationcredentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authenticationconfigurationinput-basicauthenticationcredentials */
    "BasicAuthenticationCredentials"?: BasicAuthenticationCredentials;
    /**
     * - The custom authentication credentials of a connection.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authenticationconfigurationinput-customauthenticationcredentials */
    "CustomAuthenticationCredentials"?: Record<string, string | Intrinsic>;
    /**
     * - The KMS key ARN of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^$|arn:aws[a-z0-9-]*:kms:.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authenticationconfigurationinput-kmskeyarn */
    "KmsKeyArn"?: string | Intrinsic;
    /**
     * - The oAuth2 properties of a connection.
     * - _Required_: No
     * - _Type_: [OAuth2Properties](./aws-properties-datazone-connection-oauth2properties.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authenticationconfigurationinput-oauth2properties */
    "OAuth2Properties"?: OAuth2Properties;
    /**
     * - The secret ARN of a connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws(-(cn|us-gov|iso(-[bef])?))?:secretsmanager:.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-authenticationconfigurationinput-secretarn */
    "SecretArn"?: string | Intrinsic;
}

/**
 * The AWS Glue connecton input.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface GlueConnectionInput {
    /**
     * - The Amazon Athena properties of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[\u0020-\uD7FF\uE000-\uFFFF\t]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-athenaproperties */
    "AthenaProperties"?: Record<string, string | Intrinsic>;
    /**
     * - The authentication configuration of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: [AuthenticationConfigurationInput](./aws-properties-datazone-connection-authenticationconfigurationinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-authenticationconfiguration */
    "AuthenticationConfiguration"?: AuthenticationConfigurationInput;
    /**
     * - The connection properties of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-connectionproperties */
    "ConnectionProperties"?: Record<string, string | Intrinsic>;
    /**
     * - The connection type of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-connectiontype */
    "ConnectionType"?: string | Intrinsic;
    /**
     * - The description of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\u0020-\uD7FF\uE000-\uFFFF\r\n\t]*$`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-description */
    "Description"?: string | Intrinsic;
    /**
     * - The match criteria of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-matchcriteria */
    "MatchCriteria"?: string | Intrinsic;
    /**
     * - The name of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\u0020-\uD7FF\uE000-\uFFFF\t]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-name */
    "Name"?: string | Intrinsic;
    /**
     * - The physical connection requirements for the AWS Glue connection.
     * - _Required_: No
     * - _Type_: [PhysicalConnectionRequirements](./aws-properties-datazone-connection-physicalconnectionrequirements.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-physicalconnectionrequirements */
    "PhysicalConnectionRequirements"?: PhysicalConnectionRequirements;
    /**
     * - The Python properties of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[\u0020-\uD7FF\uE000-\uFFFF\t]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-pythonproperties */
    "PythonProperties"?: Record<string, string | Intrinsic>;
    /**
     * - The Spark properties of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `^[\u0020-\uD7FF\uE000-\uFFFF\t]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-sparkproperties */
    "SparkProperties"?: Record<string, string | Intrinsic>;
    /**
     * - Speciefies whether to validate credentials of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-validatecredentials */
    "ValidateCredentials"?: boolean | Intrinsic;
    /**
     * - Speciefies whether to validate for compute environments of the AWS Glue connection.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-glueconnectioninput-validateforcomputeenvironments */
    "ValidateForComputeEnvironments"?: (string | Intrinsic)[];
}

/**
 * The AWS Glue properties of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface GluePropertiesInput {
    /**
     * - The AWS Glue connection.
     * - _Required_: No
     * - _Type_: [GlueConnectionInput](./aws-properties-datazone-connection-glueconnectioninput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-gluepropertiesinput-glueconnectioninput */
    "GlueConnectionInput"?: GlueConnectionInput;
}

/**
 * The properties of a connection.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface ConnectionPropertiesInput {
    /**
     * - The Amazon Athena properties of a connection.
     * - _Required_: No
     * - _Type_: [AthenaPropertiesInput](./aws-properties-datazone-connection-athenapropertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-connectionpropertiesinput-athenaproperties */
    "AthenaProperties"?: AthenaPropertiesInput;
    /**
     * - The AWS Glue properties of a connection.
     * - _Required_: No
     * - _Type_: [GluePropertiesInput](./aws-properties-datazone-connection-gluepropertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-connectionpropertiesinput-glueproperties */
    "GlueProperties"?: GluePropertiesInput;
    /**
     * - The hyper pod properties of a connection.
     * - _Required_: No
     * - _Type_: [HyperPodPropertiesInput](./aws-properties-datazone-connection-hyperpodpropertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-connectionpropertiesinput-hyperpodproperties */
    "HyperPodProperties"?: HyperPodPropertiesInput;
    /**
     * - The IAM properties of a connection.
     * - _Required_: No
     * - _Type_: [IamPropertiesInput](./aws-properties-datazone-connection-iampropertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-connectionpropertiesinput-iamproperties */
    "IamProperties"?: IamPropertiesInput;
    /**
     * - The Amazon Redshift properties of a connection.
     * - _Required_: No
     * - _Type_: [RedshiftPropertiesInput](./aws-properties-datazone-connection-redshiftpropertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-connectionpropertiesinput-redshiftproperties */
    "RedshiftProperties"?: RedshiftPropertiesInput;
    /**
     * - The Spark EMR properties of a connection.
     * - _Required_: No
     * - _Type_: [SparkEmrPropertiesInput](./aws-properties-datazone-connection-sparkemrpropertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-connectionpropertiesinput-sparkemrproperties */
    "SparkEmrProperties"?: SparkEmrPropertiesInput;
    /**
     * - The Spark AWS Glue properties of a connection.
     * - _Required_: No
     * - _Type_: [SparkGluePropertiesInput](./aws-properties-datazone-connection-sparkgluepropertiesinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-connectionpropertiesinput-sparkglueproperties */
    "SparkGlueProperties"?: SparkGluePropertiesInput;
}

/**
 * In Amazon DataZone, a connection enables you to connect your resources (domains, projects, and environments) to external resources and services.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html */

export interface DataZoneConnection extends ResourceAttributes {
    "Type": "AWS::DataZone::Connection";
    "Properties": {
        /**
         * - The location where the connection is created.
         * - _Required_: No
         * - _Type_: [AwsLocation](./aws-properties-datazone-connection-awslocation.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-awslocation */
        "AwsLocation"?: AwsLocation;
        /**
         * - Connection description.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\S\s]*$`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-description */
        "Description"?: string | Intrinsic;
        /**
         * - The ID of the domain where the connection is created.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^dzd[_][a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-domainidentifier */
        "DomainIdentifier": string | Intrinsic;
        /**
         * - The ID of the environment where the connection is created.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-environmentidentifier */
        "EnvironmentIdentifier": string | Intrinsic;
        /**
         * - The name of the connection.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\w][\w\.\-\_]*$`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-name */
        "Name": string | Intrinsic;
        /**
         * - Connection props.
         * - _Required_: No
         * - _Type_: [ConnectionPropertiesInput](./aws-properties-datazone-connection-connectionpropertiesinput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-connection.html#cfn-datazone-connection-props */
        "Props"?: ConnectionPropertiesInput;
    };
}