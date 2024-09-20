import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A user-defined key-value pair that describes metadata added to an AWS DMS resource and that is used by operations such as the following:
 * *   `AddTagsToResource`
 *
 * *   `ListTagsForResource`
 *
 * *   `RemoveTagsFromResource`
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html */

export interface Tag {
  /**
   * - A key is the required name of the tag. The string value can be 1-128 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', '/', '=', '+', '-' (Java regular expressions: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-tag-key */
  Key: string | Intrinsic
  /**
   * - A value is the optional value of the tag. The string value can be 1-256 Unicode characters in length and can't be prefixed with "aws:" or "dms:". The string can only contain only the set of Unicode letters, digits, white-space, '\_', '.', '/', '=', '+', '-' (Java regular expressions: "^(\[\\\\p{L}\\\\p{Z}\\\\p{N}\_.:/=+\\\\-\]\*)$").
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::DMS::ReplicationInstance` resource creates an AWS DMS replication instance. To create a ReplicationInstance, you need permissions to create instances. You'll need similar permissions to terminate instances when you delete stacks with instances.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html */

export interface DMSReplicationInstance extends ResourceAttributes {
  Type: 'AWS::DMS::ReplicationInstance'
  Properties: {
    /**
     * - The amount of storage (in gigabytes) to be initially allocated for the replication instance.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-allocatedstorage */
    AllocatedStorage?: number | Intrinsic
    /**
     * - Indicates that major version upgrades are allowed. Changing this parameter does not result in an outage, and the change is asynchronously applied as soon as possible.
     * - This parameter must be set to `true` when specifying a value for the `EngineVersion` parameter that is a different major version than the replication instance's current version.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-allowmajorversionupgrade */
    AllowMajorVersionUpgrade?: boolean | Intrinsic
    /**
     * - A value that indicates whether minor engine upgrades are applied automatically to the replication instance during the maintenance window. This parameter defaults to `true`.
     * - Default: `true`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-autominorversionupgrade */
    AutoMinorVersionUpgrade?: boolean | Intrinsic
    /**
     * - The Availability Zone that the replication instance will be created in.
     * - The default value is a random, system-chosen Availability Zone in the endpoint's AWS Region, for example `us-east-1d`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-availabilityzone */
    AvailabilityZone?: string | Intrinsic
    /**
     * - The engine version number of the replication instance.
     * - If an engine version number is not specified when a replication instance is created, the default is the latest engine version available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-engineversion */
    EngineVersion?: string | Intrinsic
    /**
     * - An AWS KMS key identifier that is used to encrypt the data on the replication instance.
     * - If you don't specify a value for the `KmsKeyId` parameter, AWS DMS uses your default encryption key.
     * - AWS KMS creates the default encryption key for your AWS account. Your AWS account has a different default encryption key for each AWS Region.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - Specifies whether the replication instance is a Multi-AZ deployment. You can't set the `AvailabilityZone` parameter if the Multi-AZ parameter is set to `true`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-multiaz */
    MultiAZ?: boolean | Intrinsic
    /**
     * - The weekly time range during which system maintenance can occur, in UTC.
     * - _Format_: `ddd:hh24:mi-ddd:hh24:mi`
     * - _Default_: A 30-minute window selected at random from an 8-hour block of time per AWS Region, occurring on a random day of the week.
     * - _Valid days_ (`ddd`): `Mon` | `Tue` | `Wed` | `Thu` | `Fri` | `Sat` | `Sun`
     * - _Constraints_: Minimum 30-minute window.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-preferredmaintenancewindow */
    PreferredMaintenanceWindow?: string | Intrinsic
    /**
     * - Specifies the accessibility options for the replication instance. A value of `true` represents an instance with a public IP address. A value of `false` represents an instance with a private IP address. The default value is `true`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-publiclyaccessible */
    PubliclyAccessible?: boolean | Intrinsic
    /**
     * - The compute and memory capacity of the replication instance as defined for the specified replication instance class. For example, to specify the instance class dms.c4.large, set this parameter to `"dms.c4.large"`. For more information on the settings and capacities for the available replication instance classes, see [Selecting the right AWS DMS replication instance for your migration](https://docs.aws.amazon.com/dms/latest/userguide/CHAP_ReplicationInstance.html#CHAP_ReplicationInstance.InDepth) in the _AWS Database Migration Service User Guide_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-replicationinstanceclass */
    ReplicationInstanceClass: string | Intrinsic
    /**
     * - The replication instance identifier. This parameter is stored as a lowercase string.
     * - Constraints:
     * - Example: `myrepinstance`
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-replicationinstanceidentifier */
    ReplicationInstanceIdentifier?: string | Intrinsic
    /**
     * - A subnet group to associate with the replication instance.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-replicationsubnetgroupidentifier */
    ReplicationSubnetGroupIdentifier?: string | Intrinsic
    /**
     * - A display name for the resource identifier at the end of the `EndpointArn` response parameter that is returned in the created `Endpoint` object. The value for this parameter can have up to 31 characters. It can contain only ASCII letters, digits, and hyphen ('-'). Also, it can't end with a hyphen or contain two consecutive hyphens, and can only begin with a letter, such as `Example-App-ARN1`. For example, this value might result in the `EndpointArn` value `arn:aws:dms:eu-west-1:012345678901:rep:Example-App-ARN1`. If you don't specify a `ResourceIdentifier` value, AWS DMS generates a default identifier value for the end of `EndpointArn`.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-resourceidentifier */
    ResourceIdentifier?: string | Intrinsic
    /**
     * - One or more tags to be assigned to the replication instance.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-dms-replicationinstance-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-tags */
    Tags?: Tag[]
    /**
     * - Specifies the virtual private cloud (VPC) security group to be used with the replication instance. The VPC security group must work with the VPC containing the replication instance.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-dms-replicationinstance.html#cfn-dms-replicationinstance-vpcsecuritygroupids */
    VpcSecurityGroupIds?: (string | Intrinsic)[]
  }
}
