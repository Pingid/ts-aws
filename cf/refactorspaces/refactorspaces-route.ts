import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The configuration for the default route type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html */

export interface DefaultRouteInput {
    /**
     * - If set to `ACTIVE`, traffic is forwarded to this route’s service after the route is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INACTIVE | ACTIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-defaultrouteinput-activationstate */
    "ActivationState": string | Intrinsic;
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::RefactorSpaces::Route](./aws-resource-refactorspaces-route.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html */

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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The configuration for the URI path route type.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html */

export interface UriPathRouteInput {
    /**
     * - If set to `ACTIVE`, traffic is forwarded to this route’s service after the route is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `INACTIVE | ACTIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-activationstate */
    "ActivationState": string | Intrinsic;
    /**
     * - If set to `true`, this option appends the source path to the service URL endpoint.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-appendsourcepath */
    "AppendSourcePath"?: boolean | Intrinsic;
    /**
     * - Indicates whether to match all subpaths of the given source path. If this value is `false`, requests must match the source path exactly before they are forwarded to this route's service.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-includechildpaths */
    "IncludeChildPaths"?: boolean | Intrinsic;
    /**
     * - A list of HTTP methods to match. An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-methods */
    "Methods"?: (string | Intrinsic)[];
    /**
     * - This is the path that Refactor Spaces uses to match traffic. Paths must start with `/` and are relative to the base of the application. To use path parameters in the source path, add a variable in curly braces. For example, the resource path {user} represents a path parameter called 'user'.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(/([a-zA-Z0-9._:-]+|\{[a-zA-Z0-9._:-]+\}))+$`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-sourcepath */
    "SourcePath"?: string | Intrinsic;
}

/**
 * Creates an AWS Migration Hub Refactor Spaces route. The account owner of the service resource is always the environment owner, regardless of which account creates the route. Routes target a service in the application. If an application does not have any routes, then the first route must be created as a `DEFAULT``RouteType`.
 * When created, the default route defaults to an active state so state is not a required input. However, like all other state values the state of the default route can be updated after creation, but only when all other routes are also inactive. Conversely, no route can be active without the default route also being active.
 * ###### Note
 * 
 * In the `AWS::RefactorSpaces::Route` resource, you can only update the `ActivationState` property, which resides under the `UriPathRoute` and `DefaultRoute` properties. All other properties associated with the `AWS::RefactorSpaces::Route` cannot be updated, even though the property description might indicate otherwise. Updating all other properties will result in the replacement of Route.
 * When you create a route, Refactor Spaces configures the Amazon API Gateway to send traffic to the target service as follows:
 * *   **URL Endpoints**
 *     
 *     If the service has a URL endpoint, and the endpoint resolves to a private IP address, Refactor Spaces routes traffic using the API Gateway VPC link. If a service endpoint resolves to a public IP address, Refactor Spaces routes traffic over the public internet. Services can have HTTP or HTTPS URL endpoints. For HTTPS URLs, publicly-signed certificates are supported. Private Certificate Authorities (CAs) are permitted only if the CA's domain is also publicly resolvable.
 *     
 *     Refactor Spaces automatically resolves the public Domain Name System (DNS) names that are set in `CreateService:UrlEndpoint` when you create a service. The DNS names resolve when the DNS time-to-live (TTL) expires, or every 60 seconds for TTLs less than 60 seconds. This periodic DNS resolution ensures that the route configuration remains up-to-date.
 *     
 *     **One-time health check**
 *     
 *     A one-time health check is performed on the service when either the route is updated from inactive to active, or when it is created with an active state. If the health check fails, the route transitions the route state to `FAILED`, an error code of `SERVICE_ENDPOINT_HEALTH_CHECK_FAILURE` is provided, and no traffic is sent to the service.
 *     
 *     For private URLs, a target group is created on the Network Load Balancer and the load balancer target group runs default target health checks. By default, the health check is run against the service endpoint URL. Optionally, the health check can be performed against a different protocol, port, and/or path using the [CreateService:UrlEndpoint](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateService.html#migrationhubrefactorspaces-CreateService-request-UrlEndpoint) parameter. All other health check settings for the load balancer use the default values described in the [Health checks for your target groups](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/target-group-health-checks.html) in the _Elastic Load Balancing guide_. The health check is considered successful if at least one target within the target group transitions to a healthy state.
 *     
 * *   **AWS Lambda function endpoints**
 *     
 *     If the service has an AWS Lambda function endpoint, then Refactor Spaces configures the Lambda function's resource policy to allow the application's API Gateway to invoke the function.
 *     
 *     The Lambda function state is checked. If the function is not active, the function configuration is updated so that Lambda resources are provisioned. If the Lambda state is `Failed`, then the route creation fails. For more information, see the [GetFunctionConfiguration's State response parameter](https://docs.aws.amazon.com/lambda/latest/dg/API_GetFunctionConfiguration.html#SSS-GetFunctionConfiguration-response-State) in the _AWS Lambda Developer Guide_.
 *     
 *     A check is performed to determine that a Lambda function with the specified ARN exists. If it does not exist, the health check fails. For public URLs, a connection is opened to the public endpoint. If the URL is not reachable, the health check fails.
 * **Environments without a network bridge**
 * When you create environments without a network bridge ([CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) is `NONE)` and you use your own networking infrastructure, you need to configure [VPC to VPC connectivity](https://docs.aws.amazon.com/whitepapers/latest/aws-vpc-connectivity-options/amazon-vpc-to-amazon-vpc-connectivity-options.html) between your network and the application proxy VPC. Route creation from the application proxy to service endpoints will fail if your network is not configured to connect to the application proxy VPC. For more information, see [Create a route](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/userguide/getting-started-create-role.html) in the _Refactor Spaces User Guide_.
 * 
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html */

export interface RefactorSpacesRoute extends ResourceAttributes {
    "Type": "AWS::RefactorSpaces::Route";
    "Properties": {
        /**
         * - The unique identifier of the application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^app-([0-9A-Za-z]{10}$)`
         * - _Minimum_: `14`
         * - _Maximum_: `14`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-applicationidentifier */
        "ApplicationIdentifier": string | Intrinsic;
        /**
         * - Configuration for the default route type.
         * - _Required_: No
         * - _Type_: [DefaultRouteInput](./aws-properties-refactorspaces-route-defaultrouteinput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-defaultroute */
        "DefaultRoute"?: DefaultRouteInput;
        /**
         * - The unique identifier of the environment.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^env-([0-9A-Za-z]{10}$)`
         * - _Minimum_: `14`
         * - _Maximum_: `14`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-environmentidentifier */
        "EnvironmentIdentifier": string | Intrinsic;
        /**
         * - The route type of the route.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `DEFAULT | URI_PATH`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-routetype */
        "RouteType": string | Intrinsic;
        /**
         * - The unique identifier of the service.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^svc-([0-9A-Za-z]{10}$)`
         * - _Minimum_: `14`
         * - _Maximum_: `14`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-serviceidentifier */
        "ServiceIdentifier": string | Intrinsic;
        /**
         * - The tags assigned to the route.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-refactorspaces-route-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-tags */
        "Tags"?: Tag[];
        /**
         * - The configuration for the URI path route type.
         * - _Required_: No
         * - _Type_: [UriPathRouteInput](./aws-properties-refactorspaces-route-uripathrouteinput.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathroute */
        "UriPathRoute"?: UriPathRouteInput;
    };
}