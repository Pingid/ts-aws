import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `ConfigurationId` property type specifies a configuration Id and the revision of a configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html */

export interface ConfigurationId {
    /**
     * - The unique ID that Amazon MQ generates for the configuration.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-configurationid-id */
    "Id": string | Intrinsic;
    /**
     * - The revision number of the configuration.
     * - _Required_: Yes
     * - _Type_: Integer
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-configurationid-revision */
    "Revision": number | Intrinsic;
}

/**
 * Use the AWS CloudFormation`AWS::AmazonMQ::ConfigurationAssociation` resource to associate a configuration with a broker, or return information about the specified ConfigurationAssociation. Only use one per broker, and don't use a configuration on the broker resource if you have associated a configuration with that broker.
 * ###### Note
 * 
 * Does not apply to RabbitMQ brokers.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html */

export interface AmazonMQConfigurationAssociation extends ResourceAttributes {
    "Type": "AWS::AmazonMQ::ConfigurationAssociation";
    "Properties": {
        /**
         * - The broker to associate with a configuration.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-broker */
        "Broker": string | Intrinsic;
        /**
         * - The configuration to associate with a broker.
         * - _Required_: Yes
         * - _Type_: [ConfigurationId](./aws-properties-amazonmq-configurationassociation-configurationid.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amazonmq-configurationassociation.html#cfn-amazonmq-configurationassociation-configuration */
        "Configuration": ConfigurationId;
    };
}