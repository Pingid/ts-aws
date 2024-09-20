import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The input for the AWS Lambda endpoint type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html */

export interface LambdaEndpointInput {
  /**
   * - The Amazon Resource Name (ARN) of the Lambda function or alias.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^arn:(aws[a-zA-Z-]*)?:lambda:[a-z]{2}((-gov)|(-iso(b?)))?-[a-z]+-\d{1}:\d{12}:function:[a-zA-Z0-9-_]+(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-lambdaendpointinput-arn */
  Arn: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::RefactorSpaces::Service](./aws-resource-refactorspaces-service.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:).+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-tag-value */
  Value: string | Intrinsic
}

/**
 * The configuration for the URL endpoint type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html */

export interface UrlEndpointInput {
  /**
   * - The health check URL of the URL endpoint type. If the URL is a public endpoint, the `HealthUrl` must also be a public endpoint. If the URL is a private endpoint inside a virtual private cloud (VPC), the health URL must also be a private endpoint, and the host must be the same as the URL.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^https?://[-a-zA-Z0-9+\x38@#/%?=~_|!:,.;]*[-a-zA-Z0-9+\x38@#/%=~_|]$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-urlendpointinput-healthurl */
  HealthUrl?: string | Intrinsic
  /**
   * - The URL to route traffic to. The URL must be an [rfc3986-formatted URL](https://datatracker.ietf.org/doc/html/rfc3986). If the host is a domain name, the name must be resolvable over the public internet. If the scheme is `https`, the top level domain of the host must be listed in the [IANA root zone database](https://www.iana.org/domains/root/db).
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^https?://[-a-zA-Z0-9+\x38@#/%?=~_|!:,.;]*[-a-zA-Z0-9+\x38@#/%=~_|]$`
   * - _Minimum_: `1`
   * - _Maximum_: `2048`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-urlendpointinput-url */
  Url: string | Intrinsic
}

/**
 * Creates an AWS Migration Hub Refactor Spaces service. The account owner of the service is always the environment owner, regardless of which account in the environment creates the service. Services have either a URL endpoint in a virtual private cloud (VPC), or a Lambda function endpoint.
 * ###### Important
 *
 * If an AWS resource is launched in a service VPC, and you want it to be accessible to all of an environment’s services with VPCs and routes, apply the `RefactorSpacesSecurityGroup` to the resource. Alternatively, to add more cross-account constraints, apply your own security group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html */

export interface RefactorSpacesService extends ResourceAttributes {
  Type: 'AWS::RefactorSpaces::Service'
  Properties: {
    /**
     * - The unique identifier of the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^app-([0-9A-Za-z]{10}$)`
     * - _Minimum_: `14`
     * - _Maximum_: `14`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-applicationidentifier */
    ApplicationIdentifier: string | Intrinsic
    /**
     * - A description of the service.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9-_\s\.\!\*\#\@\']+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-description */
    Description?: string | Intrinsic
    /**
     * - The endpoint type of the service.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `LAMBDA | URL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-endpointtype */
    EndpointType: string | Intrinsic
    /**
     * - The unique identifier of the environment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^env-([0-9A-Za-z]{10}$)`
     * - _Minimum_: `14`
     * - _Maximum_: `14`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-environmentidentifier */
    EnvironmentIdentifier: string | Intrinsic
    /**
     * - A summary of the configuration for the AWS Lambda endpoint type.
     * - _Required_: No
     * - _Type_: [LambdaEndpointInput](./aws-properties-refactorspaces-service-lambdaendpointinput.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-lambdaendpoint */
    LambdaEndpoint?: LambdaEndpointInput
    /**
     * - The name of the service.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!svc-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$`
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-name */
    Name: string | Intrinsic
    /**
     * - The tags assigned to the service.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-refactorspaces-service-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-tags */
    Tags?: Tag[]
    /**
     * - The summary of the configuration for the URL endpoint type.
     * - _Required_: No
     * - _Type_: [UrlEndpointInput](./aws-properties-refactorspaces-service-urlendpointinput.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-urlendpoint */
    UrlEndpoint?: UrlEndpointInput
    /**
     * - The ID of the virtual private cloud (VPC).
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^vpc-[-a-f0-9]{8}([-a-f0-9]{9})?$`
     * - _Minimum_: `12`
     * - _Maximum_: `21`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-service.html#cfn-refactorspaces-service-vpcid */
    VpcId?: string | Intrinsic
  }
}
