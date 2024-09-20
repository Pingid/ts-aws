import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Creates an API destination, which is an HTTP invocation endpoint configured as a target for events.
 * When using ApiDesinations with OAuth authentication we recommend these best practices:
 * *   Create a secret in Secrets Manager with your OAuth credentials.
 *
 * *   Reference that secret in your CloudFormation template for `AWS::Events::Connection` using CloudFormation dynamic reference syntax. For more information, see [Secrets Manager secrets](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/dynamic-references.html#dynamic-references-secretsmanager).
 * When the Connection resource is created the secret will be passed to EventBridge and stored in the customer account using “Service Linked Secrets,” effectively creating two secrets. This will minimize the cost because the original secret is only accessed when a CloudFormation template is created or updated, not every time an event is sent to the ApiDestination. The secret stored in the customer account by EventBridge is the one used for each event sent to the ApiDestination and AWS is responsible for the fees.
 * ###### Note
 *
 * The secret stored in the customer account by EventBridge can’t be updated directly, only when a CloudFormation template is updated.
 * For examples of CloudFormation templates that use secrets, see [Examples](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-connection.html#aws-resource-events-connection--examples).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html */

export interface EventsApiDestination extends ResourceAttributes {
  Type: 'AWS::Events::ApiDestination'
  Properties: {
    /**
     * - The ARN of the connection to use for the API destination. The destination endpoint must support the authorization type specified for the connection.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws([a-z]|\-)*:events:([a-z]|\d|\-)*:([0-9]{12})?:connection\/[\.\-_A-Za-z0-9]+\/[\-A-Za-z0-9]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `1600`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-connectionarn */
    ConnectionArn: string | Intrinsic
    /**
     * - A description for the API destination to create.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-description */
    Description?: string | Intrinsic
    /**
     * - The method to use for the request to the HTTP invocation endpoint.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GET | HEAD | POST | OPTIONS | PUT | DELETE | PATCH`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-httpmethod */
    HttpMethod: string | Intrinsic
    /**
     * - The URL to the HTTP invocation endpoint for the API destination.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^((%[0-9A-Fa-f]{2}|[-()_.!~*';/?:@\x26=+$,A-Za-z0-9])+)([).!';/?:,])?$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationendpoint */
    InvocationEndpoint: string | Intrinsic
    /**
     * - The maximum number of requests per second to send to the HTTP invocation endpoint.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-invocationratelimitpersecond */
    InvocationRateLimitPerSecond?: number | Intrinsic
    /**
     * - The name for the API destination to create.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-events-apidestination.html#cfn-events-apidestination-name */
    Name?: string | Intrinsic
  }
}
