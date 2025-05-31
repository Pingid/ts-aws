import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes a configuration revision.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html */

export interface LatestRevision {
    /**
     * - The time when the configuration revision was created.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-latestrevision-creationtime */
    "CreationTime"?: string | Intrinsic;
    /**
     * - The description of the configuration revision.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-latestrevision-description */
    "Description"?: string | Intrinsic;
    /**
     * - The revision number.
     * - _Required_: No
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-latestrevision-revision */
    "Revision"?: number | Intrinsic;
}

/**
 * Creates a new MSK configuration. To see an example of how to use this operation, first save the following text to a file and name the file `config-file.txt`.
 * `auto.create.topics.enable = true zookeeper.connection.timeout.ms = 1000 log.roll.ms = 604800000`
 * Now run the following Python 3.6 script in the folder where you saved `config-file.txt`. This script uses the properties specified in `config-file.txt` to create a configuration named `SalesClusterConfiguration`. This configuration can work with Apache Kafka versions 1.1.1 and 2.1.0.
 * `import boto3 client = boto3.client('kafka') config_file = open('config-file.txt', 'r') server_properties = config_file.read() response = client.create_configuration( Name='SalesClusterConfiguration', Description='The configuration to use on all sales clusters.', KafkaVersions=['1.1.1', '2.1.0'], ServerProperties=server_properties ) print(response)`
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html */

export interface MSKConfiguration extends ResourceAttributes {
    "Type": "AWS::MSK::Configuration";
    "Properties": {
        /**
         * - The description of the configuration.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-description */
        "Description"?: string | Intrinsic;
        /**
         * - The [versions of Apache Kafka](https://docs.aws.amazon.com/msk/latest/developerguide/supported-kafka-versions.html) with which you can use this MSK configuration.
         * - When you update the `KafkaVersionsList` property, AWS CloudFormation recreates a new configuration with the updated property before deleting the old configuration. Such an update requires a [resource replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement). To successfully update `KafkaVersionsList`, you must also update the `Name` property in the same operation.
         * - If your configuration is attached with any clusters created using the AWS Management Console or AWS CLI, you'll need to manually delete the old configuration from the console after the update completes.
         * - For more information, see [Can’t update KafkaVersionsList in MSK configuration](https://docs.aws.amazon.com/msk/latest/developerguide/troubleshooting.html#troubleshoot-kafkaversionslist-cfn-update-failure) in the _Amazon MSK Developer Guide_.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-kafkaversionslist */
        "KafkaVersionsList"?: (string | Intrinsic)[];
        /**
         * - Latest revision of the MSK configuration.
         * - _Required_: No
         * - _Type_: [LatestRevision](./aws-properties-msk-configuration-latestrevision.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-latestrevision */
        "LatestRevision"?: LatestRevision;
        /**
         * - The name of the configuration. Configuration names are strings that match the regex "^\[0-9A-Za-z\]\[0-9A-Za-z-\]{0,}$".
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-name */
        "Name": string | Intrinsic;
        /**
         * - Contents of the `server.properties` file. When using the console, the SDK, or the AWS CLI, the contents of `server.properties` can be in plaintext.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-msk-configuration.html#cfn-msk-configuration-serverproperties */
        "ServerProperties": string | Intrinsic;
    };
}