import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Lambda::Permission` resource grants an AWS service or another account permission to use a function. You can apply the policy at the function level, or specify a qualifier to restrict access to a single version or alias. If you use a qualifier, the invoker must use the full Amazon Resource Name (ARN) of that version or alias to invoke the function.
 * To grant permission to another account, specify the account ID as the `Principal`. To grant permission to an organization defined in AWS Organizations, specify the organization ID as the `PrincipalOrgID`. For AWS services, the principal is a domain-style identifier defined by the service, like `s3.amazonaws.com` or `sns.amazonaws.com`. For AWS services, you can also specify the ARN of the associated resource as the `SourceArn`. If you grant permission to a service principal without specifying the source, other accounts could potentially configure resources in their account to invoke your Lambda function.
 * If your function has a function URL, you can specify the `FunctionUrlAuthType` parameter. This adds a condition to your permission that only applies when your function URL's `AuthType` matches the specified `FunctionUrlAuthType`. For more information about the `AuthType` parameter, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
 * This resource adds a statement to a resource-based permission policy for the function. For more information about function policies, see [Lambda Function Policies](https://docs.aws.amazon.com/lambda/latest/dg/access-control-resource-based.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html */

export interface LambdaPermission extends ResourceAttributes {
    "Type": "AWS::Lambda::Permission";
    "Properties": {
        /**
         * - The action that the principal can use on the function. For example, `lambda:InvokeFunction` or `lambda:GetFunction`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(lambda:[*]|lambda:[a-zA-Z]+|[*])$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-action */
        "Action": string | Intrinsic;
        /**
         * - For Alexa Smart Home functions, a token that the invoker must supply.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9._\-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-eventsourcetoken */
        "EventSourceToken"?: string | Intrinsic;
        /**
         * - The name or ARN of the Lambda function, version, or alias.
         * - You can append a version number or alias to any of the formats. The length constraint applies only to the full ARN. If you specify only the function name, it is limited to 64 characters in length.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^(arn:(aws[a-zA-Z-]*)?:lambda:)?([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1}:)?(\d{12}:)?(function:)?([a-zA-Z0-9-_]+)(:(\$LATEST|[a-zA-Z0-9-_]+))?$`
         * - _Minimum_: `1`
         * - _Maximum_: `140`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-functionname */
        "FunctionName": string | Intrinsic;
        /**
         * - The type of authentication that your function URL uses. Set to `AWS_IAM` if you want to restrict access to authenticated users only. Set to `NONE` if you want to bypass IAM authentication to create a public endpoint. For more information, see [Security and auth model for Lambda function URLs](https://docs.aws.amazon.com/lambda/latest/dg/urls-auth.html).
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `AWS_IAM | NONE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-functionurlauthtype */
        "FunctionUrlAuthType"?: string | Intrinsic;
        /**
         * - The AWS service, AWS account, IAM user, or IAM role that invokes the function. If you specify a service, use `SourceArn` or `SourceAccount` to limit who can invoke the function through that service.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^.*$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-principal */
        "Principal": string | Intrinsic;
        /**
         * - The identifier for your organization in AWS Organizations. Use this to grant permissions to all the AWS accounts under this organization.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^o-[a-z0-9]{10,32}$`
         * - _Minimum_: `12`
         * - _Maximum_: `34`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-principalorgid */
        "PrincipalOrgID"?: string | Intrinsic;
        /**
         * - For AWS service, the ID of the AWS account that owns the resource. Use this together with `SourceArn` to ensure that the specified account owns the resource. It is possible for an Amazon S3 bucket to be deleted by its owner and recreated by another account.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^\d{12}$`
         * - _Minimum_: `12`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-sourceaccount */
        "SourceAccount"?: string | Intrinsic;
        /**
         * - For AWS services, the ARN of the AWS resource that invokes the function. For example, an Amazon S3 bucket or Amazon SNS topic.
         * - Note that Lambda configures the comparison using the `StringLike` operator.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:(aws[a-zA-Z0-9-]*):([a-zA-Z0-9\-])+:([a-z]{2}((-gov)|(-iso([a-z]?)))?-[a-z]+-\d{1})?:(\d{12})?:(.*)$`
         * - _Minimum_: `12`
         * - _Maximum_: `1024`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-lambda-permission.html#cfn-lambda-permission-sourcearn */
        "SourceArn"?: string | Intrinsic;
    };
}