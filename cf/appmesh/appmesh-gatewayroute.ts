import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface Tag {
  /**
   * - One part of a key-value pair that make up a tag. A `key` is a general label that acts like a category for more specific tag values.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-tag-key */
  Key: string | Intrinsic
  /**
   * - The optional part of a key-value pair that make up a tag. A `value` acts as a descriptor within a tag category (key).
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-tag-value */
  Value: string | Intrinsic
}

/**
 * An object representing the gateway route host name to match.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GatewayRouteHostnameMatch {
  /**
   * - The exact host name to match on.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutehostnamematch-exact */
  Exact?: string | Intrinsic
  /**
   * - The specified ending characters of the host name to match on.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `253`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutehostnamematch-suffix */
  Suffix?: string | Intrinsic
}

/**
 * An object representing the path to match in the request.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpPathMatch {
  /**
   * - The exact path to match on.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httppathmatch-exact */
  Exact?: string | Intrinsic
  /**
   * - The regex used to match the path.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httppathmatch-regex */
  Regex?: string | Intrinsic
}

/**
 * An object representing the gateway route host name to rewrite.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GatewayRouteHostnameRewrite {
  /**
   * - The default target host name to write to.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutehostnamerewrite-defaulttargethostname */
  DefaultTargetHostname?: string | Intrinsic
}

/**
 * An object that represents the virtual service that traffic is routed to.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GatewayRouteVirtualService {
  /**
   * - The name of the virtual service that traffic is routed to.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutevirtualservice-virtualservicename */
  VirtualServiceName: string | Intrinsic
}

/**
 * An object that represents the path to rewrite.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRoutePathRewrite {
  /**
   * - The exact path to rewrite.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutepathrewrite-exact */
  Exact?: string | Intrinsic
}

/**
 * An object representing the beginning characters of the route to rewrite.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRoutePrefixRewrite {
  /**
   * - The default prefix used to replace the incoming route prefix when rewritten.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ENABLED | DISABLED`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteprefixrewrite-defaultprefix */
  DefaultPrefix?: string | Intrinsic
  /**
   * - The value used to replace the incoming route prefix when rewritten.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteprefixrewrite-value */
  Value?: string | Intrinsic
}

/**
 * An object that represents the method and value to match with the header value sent in a request. Specify one match method.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRouteHeaderMatch {
  /**
   * - The value sent by the client must match the specified value exactly.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-exact */
  Exact?: string | Intrinsic
  /**
   * - The value sent by the client must begin with the specified characters.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-prefix */
  Prefix?: string | Intrinsic
  /**
   * - An object that represents the range of values to match on.
   * - _Required_: No
   * - _Type_: [GatewayRouteRangeMatch](./aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-range */
  Range?: GatewayRouteRangeMatch
  /**
   * - The value sent by the client must include the specified characters.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-regex */
  Regex?: string | Intrinsic
  /**
   * - The value sent by the client must end with the specified characters.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheadermatch-suffix */
  Suffix?: string | Intrinsic
}

/**
 * An object representing the query parameter to match.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpQueryParameterMatch {
  /**
   * - The exact query parameter to match on.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpqueryparametermatch-exact */
  Exact?: string | Intrinsic
}

/**
 * An object that represents the range of values to match on. The first character of the range is included in the range, though the last character is not. For example, if the range specified were 1-100, only values 1-99 would be matched.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GatewayRouteRangeMatch {
  /**
   * - The end of the range.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayrouterangematch-end */
  End: number | Intrinsic
  /**
   * - The start of the range.
   * - _Required_: Yes
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayrouterangematch-start */
  Start: number | Intrinsic
}

/**
 * An object that represents the gateway route to rewrite.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GrpcGatewayRouteRewrite {
  /**
   * - The host name of the gateway route to rewrite.
   * - _Required_: No
   * - _Type_: [GatewayRouteHostnameRewrite](./aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayrouterewrite-hostname */
  Hostname?: GatewayRouteHostnameRewrite
}

/**
 * An object that represents a gateway route target.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GatewayRouteTarget {
  /**
   * - The port number of the gateway route target.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutetarget-port */
  Port?: number | Intrinsic
  /**
   * - An object that represents a virtual service gateway route target.
   * - _Required_: Yes
   * - _Type_: [GatewayRouteVirtualService](./aws-properties-appmesh-gatewayroute-gatewayroutevirtualservice.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutetarget-virtualservice */
  VirtualService: GatewayRouteVirtualService
}

/**
 * An object representing the gateway route to rewrite.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRouteRewrite {
  /**
   * - The host name to rewrite.
   * - _Required_: No
   * - _Type_: [GatewayRouteHostnameRewrite](./aws-properties-appmesh-gatewayroute-gatewayroutehostnamerewrite.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-hostname */
  Hostname?: GatewayRouteHostnameRewrite
  /**
   * - The path to rewrite.
   * - _Required_: No
   * - _Type_: [HttpGatewayRoutePathRewrite](./aws-properties-appmesh-gatewayroute-httpgatewayroutepathrewrite.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-path */
  Path?: HttpGatewayRoutePathRewrite
  /**
   * - The specified beginning characters to rewrite.
   * - _Required_: No
   * - _Type_: [HttpGatewayRoutePrefixRewrite](./aws-properties-appmesh-gatewayroute-httpgatewayrouteprefixrewrite.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouterewrite-prefix */
  Prefix?: HttpGatewayRoutePrefixRewrite
}

/**
 * An object that represents the HTTP header in the gateway route.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRouteHeader {
  /**
   * - Specify `True` to match anything except the match criteria. The default value is `False`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheader-invert */
  Invert?: boolean | Intrinsic
  /**
   * - An object that represents the method and value to match with the header value sent in a request. Specify one match method.
   * - _Required_: No
   * - _Type_: [HttpGatewayRouteHeaderMatch](./aws-properties-appmesh-gatewayroute-httpgatewayrouteheadermatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheader-match */
  Match?: HttpGatewayRouteHeaderMatch
  /**
   * - A name for the HTTP header in the gateway route that will be matched on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteheader-name */
  Name: string | Intrinsic
}

/**
 * An object that represents the query parameter in the request.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface QueryParameter {
  /**
   * - The query parameter to match on.
   * - _Required_: No
   * - _Type_: [HttpQueryParameterMatch](./aws-properties-appmesh-gatewayroute-httpqueryparametermatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-queryparameter-match */
  Match?: HttpQueryParameterMatch
  /**
   * - A name for the query parameter that will be matched on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-queryparameter-name */
  Name: string | Intrinsic
}

/**
 * An object representing the method header to be matched.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GatewayRouteMetadataMatch {
  /**
   * - The exact method header to be matched on.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-exact */
  Exact?: string | Intrinsic
  /**
   * - The specified beginning characters of the method header to be matched on.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-prefix */
  Prefix?: string | Intrinsic
  /**
   * - An object that represents the range of values to match on.
   * - _Required_: No
   * - _Type_: [GatewayRouteRangeMatch](./aws-properties-appmesh-gatewayroute-gatewayrouterangematch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-range */
  Range?: GatewayRouteRangeMatch
  /**
   * - The regex used to match the method header.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-regex */
  Regex?: string | Intrinsic
  /**
   * - The specified ending characters of the method header to match on.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutemetadatamatch-suffix */
  Suffix?: string | Intrinsic
}

/**
 * An object that represents the action to take if a match is determined.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GrpcGatewayRouteAction {
  /**
   * - The gateway route action to rewrite.
   * - _Required_: No
   * - _Type_: [GrpcGatewayRouteRewrite](./aws-properties-appmesh-gatewayroute-grpcgatewayrouterewrite.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayrouteaction-rewrite */
  Rewrite?: GrpcGatewayRouteRewrite
  /**
   * - An object that represents the target that traffic is routed to when a request matches the gateway route.
   * - _Required_: Yes
   * - _Type_: [GatewayRouteTarget](./aws-properties-appmesh-gatewayroute-gatewayroutetarget.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayrouteaction-target */
  Target: GatewayRouteTarget
}

/**
 * An object that represents the action to take if a match is determined.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRouteAction {
  /**
   * - The gateway route action to rewrite.
   * - _Required_: No
   * - _Type_: [HttpGatewayRouteRewrite](./aws-properties-appmesh-gatewayroute-httpgatewayrouterewrite.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteaction-rewrite */
  Rewrite?: HttpGatewayRouteRewrite
  /**
   * - An object that represents the target that traffic is routed to when a request matches the gateway route.
   * - _Required_: Yes
   * - _Type_: [GatewayRouteTarget](./aws-properties-appmesh-gatewayroute-gatewayroutetarget.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayrouteaction-target */
  Target: GatewayRouteTarget
}

/**
 * An object that represents the criteria for determining a request match.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRouteMatch {
  /**
   * - The client request headers to match on.
   * - _Required_: No
   * - _Type_: Array of [HttpGatewayRouteHeader](./aws-properties-appmesh-gatewayroute-httpgatewayrouteheader.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-headers */
  Headers?: HttpGatewayRouteHeader[]
  /**
   * - The host name to match on.
   * - _Required_: No
   * - _Type_: [GatewayRouteHostnameMatch](./aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-hostname */
  Hostname?: GatewayRouteHostnameMatch
  /**
   * - The method to match on.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `GET | HEAD | POST | PUT | DELETE | CONNECT | OPTIONS | TRACE | PATCH`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-method */
  Method?: string | Intrinsic
  /**
   * - The path to match on.
   * - _Required_: No
   * - _Type_: [HttpPathMatch](./aws-properties-appmesh-gatewayroute-httppathmatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-path */
  Path?: HttpPathMatch
  /**
   * - The port number to match on.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-port */
  Port?: number | Intrinsic
  /**
   * - Specifies the path to match requests with. This parameter must always start with `/`, which by itself matches all requests to the virtual service name. You can also match for path-based routing of requests. For example, if your virtual service name is `my-service.local` and you want the route to match requests to `my-service.local/metrics`, your prefix should be `/metrics`.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-prefix */
  Prefix?: string | Intrinsic
  /**
   * - The query parameter to match on.
   * - _Required_: No
   * - _Type_: Array of [QueryParameter](./aws-properties-appmesh-gatewayroute-queryparameter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroutematch-queryparameters */
  QueryParameters?: QueryParameter[]
}

/**
 * An object representing the metadata of the gateway route.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GrpcGatewayRouteMetadata {
  /**
   * - Specify `True` to match anything except the match criteria. The default value is `False`.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-invert */
  Invert?: boolean | Intrinsic
  /**
   * - The criteria for determining a metadata match.
   * - _Required_: No
   * - _Type_: [GatewayRouteMetadataMatch](./aws-properties-appmesh-gatewayroute-gatewayroutemetadatamatch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-match */
  Match?: GatewayRouteMetadataMatch
  /**
   * - A name for the gateway route metadata.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroutemetadata-name */
  Name: string | Intrinsic
}

/**
 * An object that represents an HTTP gateway route.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface HttpGatewayRoute {
  /**
   * - An object that represents the action to take if a match is determined.
   * - _Required_: Yes
   * - _Type_: [HttpGatewayRouteAction](./aws-properties-appmesh-gatewayroute-httpgatewayrouteaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroute-action */
  Action: HttpGatewayRouteAction
  /**
   * - An object that represents the criteria for determining a request match.
   * - _Required_: Yes
   * - _Type_: [HttpGatewayRouteMatch](./aws-properties-appmesh-gatewayroute-httpgatewayroutematch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-httpgatewayroute-match */
  Match: HttpGatewayRouteMatch
}

/**
 * An object that represents the criteria for determining a request match.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GrpcGatewayRouteMatch {
  /**
   * - The gateway route host name to be matched on.
   * - _Required_: No
   * - _Type_: [GatewayRouteHostnameMatch](./aws-properties-appmesh-gatewayroute-gatewayroutehostnamematch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-hostname */
  Hostname?: GatewayRouteHostnameMatch
  /**
   * - The gateway route metadata to be matched on.
   * - _Required_: No
   * - _Type_: Array of [GrpcGatewayRouteMetadata](./aws-properties-appmesh-gatewayroute-grpcgatewayroutemetadata.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-metadata */
  Metadata?: GrpcGatewayRouteMetadata[]
  /**
   * - The gateway route port to be matched on.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-port */
  Port?: number | Intrinsic
  /**
   * - The fully qualified domain name for the service to match from the request.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroutematch-servicename */
  ServiceName?: string | Intrinsic
}

/**
 * An object that represents a gRPC gateway route.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GrpcGatewayRoute {
  /**
   * - An object that represents the action to take if a match is determined.
   * - _Required_: Yes
   * - _Type_: [GrpcGatewayRouteAction](./aws-properties-appmesh-gatewayroute-grpcgatewayrouteaction.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroute-action */
  Action: GrpcGatewayRouteAction
  /**
   * - An object that represents the criteria for determining a request match.
   * - _Required_: Yes
   * - _Type_: [GrpcGatewayRouteMatch](./aws-properties-appmesh-gatewayroute-grpcgatewayroutematch.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-grpcgatewayroute-match */
  Match: GrpcGatewayRouteMatch
}

/**
 * An object that represents a gateway route specification. Specify one gateway route type.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface GatewayRouteSpec {
  /**
   * - An object that represents the specification of a gRPC gateway route.
   * - _Required_: No
   * - _Type_: [GrpcGatewayRoute](./aws-properties-appmesh-gatewayroute-grpcgatewayroute.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutespec-grpcroute */
  GrpcRoute?: GrpcGatewayRoute
  /**
   * - An object that represents the specification of an HTTP/2 gateway route.
   * - _Required_: No
   * - _Type_: [HttpGatewayRoute](./aws-properties-appmesh-gatewayroute-httpgatewayroute.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutespec-http2route */
  Http2Route?: HttpGatewayRoute
  /**
   * - An object that represents the specification of an HTTP gateway route.
   * - _Required_: No
   * - _Type_: [HttpGatewayRoute](./aws-properties-appmesh-gatewayroute-httpgatewayroute.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutespec-httproute */
  HttpRoute?: HttpGatewayRoute
  /**
   * - The ordering of the gateway routes spec.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `1000`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutespec-priority */
  Priority?: number | Intrinsic
}

/**
 * Creates a gateway route.
 * A gateway route is attached to a virtual gateway and routes traffic to an existing virtual service. If a route matches a request, it can distribute traffic to a target virtual service.
 * For more information about gateway routes, see [Gateway routes](https://docs.aws.amazon.com/app-mesh/latest/userguide/gateway-routes.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html */

export interface AppMeshGatewayRoute extends ResourceAttributes {
  Type: 'AWS::AppMesh::GatewayRoute'
  Properties: {
    /**
     * - The name of the gateway route.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-gatewayroutename */
    GatewayRouteName?: string | Intrinsic
    /**
     * - The name of the service mesh that the resource resides in.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-meshname */
    MeshName: string | Intrinsic
    /**
     * - The AWS IAM account ID of the service mesh owner. If the account ID is not your own, then it's the ID of the account that shared the mesh with your account. For more information about mesh sharing, see [Working with shared meshes](https://docs.aws.amazon.com/app-mesh/latest/userguide/sharing.html).
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `12`
     * - _Maximum_: `12`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-meshowner */
    MeshOwner?: string | Intrinsic
    /**
     * - The specifications of the gateway route.
     * - _Required_: Yes
     * - _Type_: [GatewayRouteSpec](./aws-properties-appmesh-gatewayroute-gatewayroutespec.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-spec */
    Spec: GatewayRouteSpec
    /**
     * - Optional metadata that you can apply to the gateway route to assist with categorization and organization. Each tag consists of a key and an optional value, both of which you define. Tag keys can have a maximum character length of 128 characters, and tag values can have a maximum length of 256 characters.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-appmesh-gatewayroute-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-tags */
    Tags?: Tag[]
    /**
     * - The virtual gateway that the gateway route is associated with.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-appmesh-gatewayroute.html#cfn-appmesh-gatewayroute-virtualgatewayname */
    VirtualGatewayName: string | Intrinsic
  }
}
