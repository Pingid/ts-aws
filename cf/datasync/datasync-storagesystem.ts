import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The network settings that DataSync Discovery uses to connect with your on-premises storage system's management interface.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html */

export interface ServerConfiguration {
  /**
   * - The domain name or IP address of your storage system's management interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(([a-zA-Z0-9\-]*[a-zA-Z0-9])\.)*([A-Za-z0-9\-]*[A-Za-z0-9])$`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-serverconfiguration-serverhostname */
  ServerHostname: string | Intrinsic
  /**
   * - The network port for accessing the storage system's management interface.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-serverconfiguration-serverport */
  ServerPort?: number | Intrinsic
}

/**
 * The credentials that provide DataSync Discovery read access to your on-premises storage system's management interface.
 * DataSync Discovery stores these credentials in [AWS Secrets Manager](https://docs.aws.amazon.com/secretsmanager/latest/userguide/intro.html). For more information, see [Accessing your on-premises storage system](https://docs.aws.amazon.com/datasync/latest/userguide/discovery-configure-storage.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html */

export interface ServerCredentials {
  /**
   * - Specifies the password for your storage system's management interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-servercredentials-password */
  Password: string | Intrinsic
  /**
   * - Specifies the user name for your storage system's management interface.
   * - _Required_: Yes
   * - _Type_: String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-servercredentials-username */
  Username: string | Intrinsic
}

/**
 * Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your on-premises storage system.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html */

export interface Tag {
  /**
   * - The key for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-tag-key */
  Key: string | Intrinsic
  /**
   * - The value for an AWS resource tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::DataSync::StorageSystem` resource creates an AWS resource for an on-premises storage system that you want DataSync Discovery to collect information about. For more information, see [discovering your storage with DataSync Discovery.](https://docs.aws.amazon.com/datasync/latest/userguide/understanding-your-storage.html)
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html */

export interface DataSyncStorageSystem extends ResourceAttributes {
  Type: 'AWS::DataSync::StorageSystem'
  Properties: {
    /**
     * - Specifies the Amazon Resource Name (ARN) of the DataSync agent that connects to and reads from your on-premises storage system's management interface. You can only specify one ARN.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `128 | 1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-agentarns */
    AgentArns: (string | Intrinsic)[]
    /**
     * - Specifies the ARN of the Amazon CloudWatch log group for monitoring and logging discovery job events.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-cn|aws-us-gov|aws-iso|aws-iso-b):logs:[a-z\-0-9]+:[0-9]{12}:log-group:([^:\*]*)(:\*)?$`
     * - _Maximum_: `562`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-cloudwatchloggrouparn */
    CloudWatchLogGroupArn?: string | Intrinsic
    /**
     * - Specifies a familiar name for your on-premises storage system.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s+=._:@/-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-name */
    Name?: string | Intrinsic
    /**
     * - Specifies the server name and network port required to connect with the management interface of your on-premises storage system.
     * - _Required_: Yes
     * - _Type_: [ServerConfiguration](./aws-properties-datasync-storagesystem-serverconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-serverconfiguration */
    ServerConfiguration: ServerConfiguration
    /**
     * - Specifies the user name and password for accessing your on-premises storage system's management interface.
     * - _Required_: No
     * - _Type_: [ServerCredentials](./aws-properties-datasync-storagesystem-servercredentials.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-servercredentials */
    ServerCredentials?: ServerCredentials
    /**
     * - Specifies the type of on-premises storage system that you want DataSync Discovery to collect information about.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NetAppONTAP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-systemtype */
    SystemType: string | Intrinsic
    /**
     * - Specifies labels that help you categorize, filter, and search for your AWS resources. We recommend creating at least a name tag for your on-premises storage system.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-datasync-storagesystem-tag.html)
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datasync-storagesystem.html#cfn-datasync-storagesystem-tags */
    Tags?: Tag[]
  }
}
