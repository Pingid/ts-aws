import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * One custom scope associated with a user pool resource server. This data type is a member of `ResourceServerScopeType`. For more information, see [Scopes, M2M, and API authorization with resource servers](https://docs.aws.amazon.com/cognito/latest/developerguide/cognito-user-pools-define-resource-servers.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html */

export interface ResourceServerScopeType {
    /**
     * - A friendly description of a custom scope.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopedescription */
    "ScopeDescription": string | Intrinsic;
    /**
     * - The name of the scope. Amazon Cognito renders custom scopes in the format `resourceServerIdentifier/ScopeName`. For example, if this parameter is `exampleScope` in the resource server with the identifier `exampleResourceServer`, you request and receive the scope `exampleResourceServer/exampleScope`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\x21\x23-\x2E\x30-\x5B\x5D-\x7E]+`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-resourceserverscopetype-scopename */
    "ScopeName": string | Intrinsic;
}

/**
 * The `AWS::Cognito::UserPoolResourceServer` resource creates a new OAuth2.0 resource server and defines custom scopes in it.
 * ###### Note
 * 
 * If you don't specify a value for a parameter, Amazon Cognito sets it to a default value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html */

export interface CognitoUserPoolResourceServer extends ResourceAttributes {
    "Type": "AWS::Cognito::UserPoolResourceServer";
    "Properties": {
        /**
         * - A unique resource server identifier for the resource server. The identifier can be an API friendly name like `solar-system-data`. You can also set an API URL like `https://solar-system-data-api.example.com` as your identifier.
         * - Amazon Cognito represents scopes in the access token in the format `$resource-server-identifier/$scope`. Longer scope-identifier strings increase the size of your access tokens.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\x21\x23-\x5B\x5D-\x7E]+`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-identifier */
        "Identifier": string | Intrinsic;
        /**
         * - A friendly name for the resource server.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w\s+=,.@-]+`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-name */
        "Name": string | Intrinsic;
        /**
         * - A list of scopes. Each scope is a map with keys `ScopeName` and `ScopeDescription`.
         * - _Required_: No
         * - _Type_: Array of [ResourceServerScopeType](./aws-properties-cognito-userpoolresourceserver-resourceserverscopetype.html)
         * - _Maximum_: `100`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-scopes */
        "Scopes"?: ResourceServerScopeType[];
        /**
         * - The ID of the user pool where you want to create a resource server.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w-]+_[0-9a-zA-Z]+`
         * - _Minimum_: `1`
         * - _Maximum_: `55`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cognito-userpoolresourceserver.html#cfn-cognito-userpoolresourceserver-userpoolid */
        "UserPoolId": string | Intrinsic;
    };
}