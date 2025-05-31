import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Describes the cache configuration for an Amplify app.
 * For more information about how Amplify applies an optimal cache configuration for your app based on the type of content that is being served, see [Managing cache configuration](https://docs.aws.amazon.com/amplify/latest/userguide/managing-cache-configuration) in the _Amplify User guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html */

export interface CacheConfig {
    /**
     * - The type of cache configuration to use for an Amplify app.
     * - The `AMPLIFY_MANAGED` cache configuration automatically applies an optimized cache configuration for your app based on its platform, routing rules, and rewrite rules. This is the default setting.
     * - The `AMPLIFY_MANAGED_NO_COOKIES` cache configuration type is the same as `AMPLIFY_MANAGED`, except that it excludes all cookies from the cache key.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AMPLIFY_MANAGED | AMPLIFY_MANAGED_NO_COOKIES`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-cacheconfig-type */
    "Type"?: string | Intrinsic;
}

/**
 * Use the BasicAuthConfig property type to set password protection at an app level to all your branches.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html */

export interface BasicAuthConfig {
    /**
     * - Enables basic authorization for the Amplify app's branches.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-basicauthconfig-enablebasicauth */
    "EnableBasicAuth"?: boolean | Intrinsic;
    /**
     * - The password for basic authorization.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-basicauthconfig-password */
    "Password"?: string | Intrinsic;
    /**
     * - The user name for basic authorization.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-basicauthconfig-username */
    "Username"?: string | Intrinsic;
}

/**
 * Use the AutoBranchCreationConfig property type to automatically create branches that match a certain pattern.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html */

export interface AutoBranchCreationConfig {
    /**
     * - Automated branch creation glob patterns for the Amplify app.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-autobranchcreationpatterns */
    "AutoBranchCreationPatterns"?: (string | Intrinsic)[];
    /**
     * - Sets password protection for your auto created branch.
     * - _Required_: No
     * - _Type_: [BasicAuthConfig](./aws-properties-amplify-app-basicauthconfig.html)
     * - _Pattern_: `(?s).*`
     * - _Maximum_: `2000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-basicauthconfig */
    "BasicAuthConfig"?: BasicAuthConfig;
    /**
     * - The build specification (build spec) for the autocreated branch.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `25000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-buildspec */
    "BuildSpec"?: string | Intrinsic;
    /**
     * - Enables automated branch creation for the Amplify app.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-enableautobranchcreation */
    "EnableAutoBranchCreation"?: boolean | Intrinsic;
    /**
     * - Enables auto building for the auto created branch.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-enableautobuild */
    "EnableAutoBuild"?: boolean | Intrinsic;
    /**
     * - Enables performance mode for the branch.
     * - Performance mode optimizes for faster hosting performance by keeping content cached at the edge for a longer interval. When performance mode is enabled, hosting configuration or code changes can take up to 10 minutes to roll out.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-enableperformancemode */
    "EnablePerformanceMode"?: boolean | Intrinsic;
    /**
     * - Sets whether pull request previews are enabled for each branch that Amplify Hosting automatically creates for your app. Amplify creates previews by deploying your app to a unique URL whenever a pull request is opened for the branch. Development and QA teams can use this preview to test the pull request before it's merged into a production or integration branch.
     * - To provide backend support for your preview, Amplify Hosting automatically provisions a temporary backend environment that it deletes when the pull request is closed. If you want to specify a dedicated backend environment for your previews, use the `PullRequestEnvironmentName` property.
     * - For more information, see [Web Previews](https://docs.aws.amazon.com/amplify/latest/userguide/pr-previews.html) in the _AWS Amplify Hosting User Guide_.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-enablepullrequestpreview */
    "EnablePullRequestPreview"?: boolean | Intrinsic;
    /**
     * - The environment variables for the autocreated branch.
     * - _Required_: No
     * - _Type_: Array of [EnvironmentVariable](./aws-properties-amplify-app-environmentvariable.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-environmentvariables */
    "EnvironmentVariables"?: EnvironmentVariable[];
    /**
     * - The framework for the autocreated branch.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(?s).*`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-framework */
    "Framework"?: string | Intrinsic;
    /**
     * - If pull request previews are enabled, you can use this property to specify a dedicated backend environment for your previews. For example, you could specify an environment named `prod`, `test`, or `dev` that you initialized with the Amplify CLI.
     * - To enable pull request previews, set the `EnablePullRequestPreview` property to `true`.
     * - If you don't specify an environment, Amplify Hosting provides backend support for each preview by automatically provisioning a temporary backend environment. Amplify deletes this environment when the pull request is closed.
     * - For more information about creating backend environments, see [Feature Branch Deployments and Team Workflows](https://docs.aws.amazon.com/amplify/latest/userguide/multi-environments.html) in the _AWS Amplify Hosting User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(?s).*`
     * - _Maximum_: `20`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-pullrequestenvironmentname */
    "PullRequestEnvironmentName"?: string | Intrinsic;
    /**
     * - Stage for the auto created branch.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `EXPERIMENTAL | BETA | PULL_REQUEST | PRODUCTION | DEVELOPMENT`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig-stage */
    "Stage"?: string | Intrinsic;
}

/**
 * The CustomRule property type allows you to specify redirects, rewrites, and reverse proxies. Redirects enable a web app to reroute navigation from one URL to another.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html */

export interface CustomRule {
    /**
     * - The condition for a URL rewrite or redirect rule, such as a country code.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(?s).*`
     * - _Minimum_: `0`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customrule-condition */
    "Condition"?: string | Intrinsic;
    /**
     * - The source pattern for a URL rewrite or redirect rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?s).+`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customrule-source */
    "Source": string | Intrinsic;
    /**
     * - The status code for a URL rewrite or redirect rule.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `.{3,7}`
     * - _Minimum_: `3`
     * - _Maximum_: `7`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customrule-status */
    "Status"?: string | Intrinsic;
    /**
     * - The target pattern for a URL rewrite or redirect rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?s).+`
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customrule-target */
    "Target": string | Intrinsic;
}

/**
 * The `Tag` property specifies a key-value pair for tagging an `AWS:Amplify::App` resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html */

export interface Tag {
    /**
     * - Specifies the key for the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Specifies the value for the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Environment variables are key-value pairs that are available at build time. Set environment variables for all branches in your app.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html */

export interface EnvironmentVariable {
    /**
     * - The environment variable name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?s).*`
     * - _Maximum_: `255`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-environmentvariable-name */
    "Name": string | Intrinsic;
    /**
     * - The environment variable value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?s).*`
     * - _Maximum_: `5500`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-environmentvariable-value */
    "Value": string | Intrinsic;
}

/**
 * The AWS::Amplify::App resource specifies Apps in Amplify Hosting. An App is a collection of branches.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html */

export interface AmplifyApp extends ResourceAttributes {
    "Type": "AWS::Amplify::App";
    "Properties": {
        /**
         * - The personal access token for a GitHub repository for an Amplify app. The personal access token is used to authorize access to a GitHub repository using the Amplify GitHub App. The token is not stored.
         * - Use `AccessToken` for GitHub repositories only. To authorize access to a repository provider such as Bitbucket or CodeCommit, use `OauthToken`.
         * - You must specify either `AccessToken` or `OauthToken` when you create a new app.
         * - Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the _Amplify User Guide_ .
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-accesstoken */
        "AccessToken"?: string | Intrinsic;
        /**
         * - Sets the configuration for your automatic branch creation.
         * - _Required_: No
         * - _Type_: [AutoBranchCreationConfig](./aws-properties-amplify-app-autobranchcreationconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-autobranchcreationconfig */
        "AutoBranchCreationConfig"?: AutoBranchCreationConfig;
        /**
         * - The credentials for basic authorization for an Amplify app. You must base64-encode the authorization credentials and provide them in the format `user:password`.
         * - _Required_: No
         * - _Type_: [BasicAuthConfig](./aws-properties-amplify-app-basicauthconfig.html)
         * - _Pattern_: `(?s).*`
         * - _Maximum_: `2000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-basicauthconfig */
        "BasicAuthConfig"?: BasicAuthConfig;
        /**
         * - The build specification (build spec) for an Amplify app.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(?s).+`
         * - _Minimum_: `1`
         * - _Maximum_: `25000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-buildspec */
        "BuildSpec"?: string | Intrinsic;
        /**
         * - The cache configuration for the Amplify app. If you don't specify the cache configuration `type`, Amplify uses the default `AMPLIFY_MANAGED` setting.
         * - _Required_: No
         * - _Type_: [CacheConfig](./aws-properties-amplify-app-cacheconfig.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-cacheconfig */
        "CacheConfig"?: CacheConfig;
        /**
         * - The Amazon Resource Name (ARN) of the IAM role for an SSR app. The Compute role allows the Amplify Hosting compute service to securely access specific AWS resources based on the role's permissions. For more information about the SSR Compute role, see [Adding an SSR Compute role](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-SSR-compute-role.html) in the _Amplify User Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(?s).*`
         * - _Minimum_: `0`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-computerolearn */
        "ComputeRoleArn"?: string | Intrinsic;
        /**
         * - The custom HTTP headers for an Amplify app.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(?s).*`
         * - _Minimum_: `0`
         * - _Maximum_: `25000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customheaders */
        "CustomHeaders"?: string | Intrinsic;
        /**
         * - The custom rewrite and redirect rules for an Amplify app.
         * - _Required_: No
         * - _Type_: Array of [CustomRule](./aws-properties-amplify-app-customrule.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-customrules */
        "CustomRules"?: CustomRule[];
        /**
         * - The description of the Amplify app.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(?s).*`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-description */
        "Description"?: string | Intrinsic;
        /**
         * - Automatically disconnect a branch in Amplify Hosting when you delete a branch from your Git repository.
         * - _Required_: No
         * - _Type_: Boolean
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-enablebranchautodeletion */
        "EnableBranchAutoDeletion"?: boolean | Intrinsic;
        /**
         * - The environment variables for the Amplify app.
         * - For a list of the environment variables that are accessible to Amplify by default, see [Amplify Environment variables](https://docs.aws.amazon.com/amplify/latest/userguide/amplify-console-environment-variables.html) in the _Amplify Hosting User Guide_.
         * - _Required_: No
         * - _Type_: Array of [EnvironmentVariable](./aws-properties-amplify-app-environmentvariable.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-environmentvariables */
        "EnvironmentVariables"?: EnvironmentVariable[];
        /**
         * - AWS Identity and Access Management (IAM) service role for the Amazon Resource Name (ARN) of the Amplify app.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(?s).*`
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-iamservicerole */
        "IAMServiceRole"?: string | Intrinsic;
        /**
         * - The name of the Amplify app.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `(?s).+`
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-name */
        "Name": string | Intrinsic;
        /**
         * - The OAuth token for a third-party source control system for an Amplify app. The OAuth token is used to create a webhook and a read-only deploy key using SSH cloning. The OAuth token is not stored.
         * - Use `OauthToken` for repository providers other than GitHub, such as Bitbucket or CodeCommit. To authorize access to GitHub as your repository provider, use `AccessToken`.
         * - You must specify either `OauthToken` or `AccessToken` when you create a new app.
         * - Existing Amplify apps deployed from a GitHub repository using OAuth continue to work with CI/CD. However, we strongly recommend that you migrate these apps to use the GitHub App. For more information, see [Migrating an existing OAuth app to the Amplify GitHub App](https://docs.aws.amazon.com/amplify/latest/userguide/setting-up-GitHub-access.html#migrating-to-github-app-auth) in the _Amplify User Guide_ .
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(?s).*`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-oauthtoken */
        "OauthToken"?: string | Intrinsic;
        /**
         * - The platform for the Amplify app. For a static app, set the platform type to `WEB`. For a dynamic server-side rendered (SSR) app, set the platform type to `WEB_COMPUTE`. For an app requiring Amplify Hosting's original SSR support only, set the platform type to `WEB_DYNAMIC`.
         * - If you are deploying an SSG only app with Next.js version 14 or later, you must set the platform type to `WEB_COMPUTE` and set the artifacts `baseDirectory` to `.next` in the application's build settings. For an example of the build specification settings, see [Amplify build settings for a Next.js 14 SSG application](https://docs.aws.amazon.com/amplify/latest/userguide/deploy-nextjs-app.html#build-setting-detection-ssg-14) in the _Amplify Hosting User Guide_.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `WEB | WEB_DYNAMIC | WEB_COMPUTE`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-platform */
        "Platform"?: string | Intrinsic;
        /**
         * - The Git repository for the Amplify app.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `(?s).*`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-repository */
        "Repository"?: string | Intrinsic;
        /**
         * - The tag for an Amplify app.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-amplify-app-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-amplify-app.html#cfn-amplify-app-tags */
        "Tags"?: Tag[];
    };
}