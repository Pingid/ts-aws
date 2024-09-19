import type { Intrinsic } from '../intrinsic/index.js' /**
 * The `AWS::ApiGateway::GatewayResponse` resource creates a gateway response for your API. For more information, see [API Gateway Responses](https://docs.aws.amazon.com/apigateway/latest/developerguide/customize-gateway-responses.html#api-gateway-gatewayResponse-definition) in the _API Gateway Developer Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html */

export interface ApiGatewayGatewayResponse {
  Type: 'AWS::ApiGateway::GatewayResponse'
  Properties: {
    /**
     * - Response parameters (paths, query strings and headers) of the GatewayResponse as a string-to-string map of key-value pairs.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z0-9]+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responseparameters */
    ResponseParameters?: Record<string, string | Intrinsic>
    /**
     * - Response templates of the GatewayResponse as a string-to-string map of key-value pairs.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `[a-zA-Z0-9]+`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetemplates */
    ResponseTemplates?: Record<string, string | Intrinsic>
    /**
     * - The response type of the associated GatewayResponse.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `DEFAULT_4XX | DEFAULT_5XX | RESOURCE_NOT_FOUND | UNAUTHORIZED | INVALID_API_KEY | ACCESS_DENIED | AUTHORIZER_FAILURE | AUTHORIZER_CONFIGURATION_ERROR | INVALID_SIGNATURE | EXPIRED_TOKEN | MISSING_AUTHENTICATION_TOKEN | INTEGRATION_FAILURE | INTEGRATION_TIMEOUT | API_CONFIGURATION_ERROR | UNSUPPORTED_MEDIA_TYPE | BAD_REQUEST_PARAMETERS | BAD_REQUEST_BODY | REQUEST_TOO_LARGE | THROTTLED | QUOTA_EXCEEDED | WAF_FILTERED`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-responsetype */
    ResponseType: string | Intrinsic
    /**
     * - The string identifier of the associated RestApi.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-restapiid */
    RestApiId: string | Intrinsic
    /**
     * - The HTTP status code for this GatewayResponse.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-gatewayresponse.html#cfn-apigateway-gatewayresponse-statuscode */
    StatusCode?: string | Intrinsic
  }
}
