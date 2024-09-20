import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains information about the configuration of the lambda which is being registered as the connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html */

export interface LambdaConnectorProvisioningConfig {
  /**
   * - Lambda ARN of the connector being registered.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `arn:*:.*:.*:[0-9]+:.*`
   * - _Maximum_: `512`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html#cfn-appflow-connector-lambdaconnectorprovisioningconfig-lambdaarn */
  LambdaArn: string | Intrinsic
}

/**
 * Contains information about the configuration of the connector being registered.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html */

export interface ConnectorProvisioningConfig {
  /**
   * - Contains information about the configuration of the lambda which is being registered as the connector.
   * - _Required_: No
   * - _Type_: [LambdaConnectorProvisioningConfig](./aws-properties-appflow-connector-lambdaconnectorprovisioningconfig.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html#cfn-appflow-connector-connectorprovisioningconfig-lambda */
  Lambda?: LambdaConnectorProvisioningConfig
}

/**
 * Creates a new connector profile associated with your AWS account. There is a soft quota of 100 connector profiles per AWS account. If you need more connector profiles than this quota allows, you can submit a request to the Amazon AppFlow team through the Amazon AppFlow support channel. In each connector profile that you create, you can provide the credentials and properties for only one connector.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html */

export interface AppFlowConnector extends ResourceAttributes {
  Type: 'AWS::AppFlow::Connector'
  Properties: {
    /**
     * - The label used for registering the connector.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9][\w!@#.-]+`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html#cfn-appflow-connector-connectorlabel */
    ConnectorLabel?: string | Intrinsic
    /**
     * - The configuration required for registering the connector.
     * - _Required_: Yes
     * - _Type_: [ConnectorProvisioningConfig](./aws-properties-appflow-connector-connectorprovisioningconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html#cfn-appflow-connector-connectorprovisioningconfig */
    ConnectorProvisioningConfig: ConnectorProvisioningConfig
    /**
     * - The provisioning type used to register the connector.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9][\w!@#.-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html#cfn-appflow-connector-connectorprovisioningtype */
    ConnectorProvisioningType: string | Intrinsic
    /**
     * - A description about the connector runtime setting.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[\s\w/!@#+=.-]*`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appflow-connector.html#cfn-appflow-connector-description */
    Description?: string | Intrinsic
  }
}
