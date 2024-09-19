import type { Intrinsic } from '../intrinsic/index.js' /**
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
  ActivationState: string | Intrinsic
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
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-tag-value */
  Value: string | Intrinsic
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
  ActivationState: string | Intrinsic
  /**
   * - If set to `true`, this option appends the source path to the service URL endpoint.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-appendsourcepath */
  AppendSourcePath?: boolean | Intrinsic
  /**
   * - Indicates whether to match all subpaths of the given source path. If this value is `false`, requests must match the source path exactly before they are forwarded to this route's service.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-includechildpaths */
  IncludeChildPaths?: boolean | Intrinsic
  /**
   * - A list of HTTP methods to match. An empty list matches all values. If a method is present, only HTTP requests using that method are forwarded to this route’s service.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathrouteinput-methods */
  Methods?: (string | Intrinsic)[]
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
  SourcePath?: string | Intrinsic
}

/**
 * Creates an AWS Migration Hub Refactor Spaces route. The account owner of the service resource is always the environment owner, regardless of which account creates the route. Routes target a service in the application. If an application does not have any routes, then the first route must be created as a `DEFAULT` `RouteType`.
 * When created, the default route defaults to an active state so state is not a required input. However, like all other state values the state of the default route can be updated after creation, but only when all other routes are also inactive. Conversely, no route can be active without the default route also being active.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html */

export interface RefactorSpacesRoute {
  Type: 'AWS::RefactorSpaces::Route'
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
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-applicationidentifier */
    ApplicationIdentifier: string | Intrinsic
    /**
     * - Configuration for the default route type.
     * - _Required_: No
     * - _Type_: [DefaultRouteInput](./aws-properties-refactorspaces-route-defaultrouteinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-defaultroute */
    DefaultRoute?: DefaultRouteInput
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
    EnvironmentIdentifier: string | Intrinsic
    /**
     * - The route type of the route.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DEFAULT | URI_PATH`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-routetype */
    RouteType: string | Intrinsic
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
    ServiceIdentifier: string | Intrinsic
    /**
     * - The tags assigned to the route.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-refactorspaces-route-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-tags */
    Tags?: Tag[]
    /**
     * - The configuration for the URI path route type.
     * - _Required_: No
     * - _Type_: [UriPathRouteInput](./aws-properties-refactorspaces-route-uripathrouteinput.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-route.html#cfn-refactorspaces-route-uripathroute */
    UriPathRoute?: UriPathRouteInput
  }
}
