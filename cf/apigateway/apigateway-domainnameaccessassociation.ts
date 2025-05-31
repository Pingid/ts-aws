import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * An array of key-value pairs to apply to this resource.
 * For more information, see [Tag](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html */

export interface Tag {
    /**
     * - A string you can use to assign a value. The combination of tag keys and values can help you organize and categorize your resources.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value for the specified tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The `AWS::ApiGateway::DomainNameAccessAssociation` resource creates a domain name access association between an access association source and a private custom domain name.
 * Use a domain name access association to invoke a private custom domain name while isolated from the public internet.
 * You can only create or delete a DomainNameAccessAssociation using CloudFormation. To reject a domain name access association, use the AWS CLI.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html */

export interface ApiGatewayDomainNameAccessAssociation extends ResourceAttributes {
    "Type": "AWS::ApiGateway::DomainNameAccessAssociation";
    "Properties": {
        /**
         * - The identifier of the domain name access association source. For a `VPCE`, the value is the VPC endpoint ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-accessassociationsource */
        "AccessAssociationSource": string | Intrinsic;
        /**
         * - The type of the domain name access association source. Only `VPCE` is currently supported.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `VPCE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-accessassociationsourcetype */
        "AccessAssociationSourceType": string | Intrinsic;
        /**
         * - The ARN of the domain name.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-domainnamearn */
        "DomainNameArn": string | Intrinsic;
        /**
         * - The collection of tags. Each tag element is associated with a given resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-apigateway-domainnameaccessassociation-tag.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-apigateway-domainnameaccessassociation.html#cfn-apigateway-domainnameaccessassociation-tags */
        "Tags"?: Tag[];
    };
}