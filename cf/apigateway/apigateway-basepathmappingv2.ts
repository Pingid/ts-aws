import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::ApiGateway::BasePathMappingV2` resource creates a base path that clients who call your API must use in the invocation URL. Supported only for private custom domain names.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html */

export interface ApiGatewayBasePathMappingV2 extends ResourceAttributes {
    "Type": "AWS::ApiGateway::BasePathMappingV2";
    "Properties": {
        /**
         * - The base path name that callers of the private API must provide as part of the URL after the domain name.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-basepath */
        "BasePath"?: string | Intrinsic;
        /**
         * - The ARN of the domain name for the BasePathMappingV2 resource to be described.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-domainnamearn */
        "DomainNameArn": string | Intrinsic;
        /**
         * - The private API's identifier. This identifier is unique across all of your APIs in API Gateway.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-restapiid */
        "RestApiId": string | Intrinsic;
        /**
         * - Represents a unique identifier for a version of a deployed private RestApi that is callable by users. The Stage must depend on the `RestApi`'s stage. To create a dependency, add a DependsOn attribute to the BasePathMappingV2 resource.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-basepathmappingv2.html#cfn-apigateway-basepathmappingv2-stage */
        "Stage"?: string | Intrinsic;
    };
}