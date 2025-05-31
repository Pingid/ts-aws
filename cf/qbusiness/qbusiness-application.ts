import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Configuration information for the file upload during chat feature.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface AttachmentsConfiguration {
    /**
     * - Status information about whether file upload functionality is activated or deactivated for your end user.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-attachmentsconfiguration-attachmentscontrolmode */
    "AttachmentsControlMode": string | Intrinsic;
}

/**
 * Subscription configuration information for an Amazon Q Business application using IAM identity federation for user management.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface AutoSubscriptionConfiguration {
    /**
     * - Describes whether automatic subscriptions are enabled for an Amazon Q Business application using IAM identity federation for user management.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-autosubscriptionconfiguration-autosubscribe */
    "AutoSubscribe": string | Intrinsic;
    /**
     * - Describes the default subscription type assigned to an Amazon Q Business application using IAM identity federation for user management. If the value for `autoSubscribe` is set to `ENABLED` you must select a value for this field.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Q_LITE | Q_BUSINESS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-autosubscriptionconfiguration-defaultsubscriptiontype */
    "DefaultSubscriptionType"?: string | Intrinsic;
}

/**
 * Provides the identifier of the AWS KMS key used to encrypt data indexed by Amazon Q Business. Amazon Q Business doesn't support asymmetric keys.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface EncryptionConfiguration {
    /**
     * - The identifier of the AWS KMS key. Amazon Q Business doesn't support asymmetric keys.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `2048`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-encryptionconfiguration-kmskeyid */
    "KmsKeyId"?: string | Intrinsic;
}

/**
 * Configuration information about Amazon Q Apps.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface QAppsConfiguration {
    /**
     * - Status information about whether end users can create and use Amazon Q Apps in the web experience.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-qappsconfiguration-qappscontrolmode */
    "QAppsControlMode": string | Intrinsic;
}

/**
 * Configuration information about chat response personalization. For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface PersonalizationConfiguration {
    /**
     * - An option to allow Amazon Q Business to customize chat responses using user specific metadata—specifically, location and job information—in your IAM Identity Center instance.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-personalizationconfiguration-personalizationcontrolmode */
    "PersonalizationControlMode": string | Intrinsic;
}

/**
 * A list of key/value pairs that identify an index, FAQ, or data source. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface Tag {
    /**
     * - The key for the tag. Keys are not case sensitive and must be unique for the Amazon Q Business application or data source.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value associated with the tag. The value may be an empty string but it can't be null.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-tag-value */
    "Value": string | Intrinsic;
}

/**
 * The Amazon QuickSight configuration for an Amazon Q Business application that uses QuickSight as the identity provider. For more information, see [Creating an Amazon QuickSight integrated application](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/create-quicksight-integrated-application.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface QuickSightConfiguration {
    /**
     * - The Amazon QuickSight namespace that is used as the identity provider. For more information about QuickSight namespaces, see [Namespace operations](https://docs.aws.amazon.com/quicksight/latest/developerguide/namespace-operations.html).
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9._-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-quicksightconfiguration-clientnamespace */
    "ClientNamespace": string | Intrinsic;
}

/**
 * Creates an Amazon Q Business application.
 * ###### Note
 * 
 * There are new tiers for Amazon Q Business. Not all features in Amazon Q Business Pro are also available in Amazon Q Business Lite. For information on what's included in Amazon Q Business Lite and what's included in Amazon Q Business Pro, see [Amazon Q Business tiers](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/tiers.html#user-sub-tiers). You must use the Amazon Q Business console to assign subscription tiers to users.
 * 
 * An Amazon Q Apps service linked role will be created if it's absent in the AWS account when `QAppsConfiguration` is enabled in the request. For more information, see [Using service-linked roles for Q Apps](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles-qapps.html).
 * 
 * When you create an application, Amazon Q Business may securely transmit data for processing from your selected AWS region, but within your geography. For more information, see [Cross region inference in Amazon Q Business](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/cross-region-inference.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html */

export interface QBusinessApplication extends ResourceAttributes {
    "Type": "AWS::QBusiness::Application";
    "Properties": {
        /**
         * - Configuration information for the file upload during chat feature.
         * - _Required_: No
         * - _Type_: [AttachmentsConfiguration](./aws-properties-qbusiness-application-attachmentsconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-attachmentsconfiguration */
        "AttachmentsConfiguration"?: AttachmentsConfiguration;
        /**
         * - Subscription configuration information for an Amazon Q Business application using IAM identity federation for user management.
         * - _Required_: No
         * - _Type_: [AutoSubscriptionConfiguration](./aws-properties-qbusiness-application-autosubscriptionconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-autosubscriptionconfiguration */
        "AutoSubscriptionConfiguration"?: AutoSubscriptionConfiguration;
        /**
         * - The OIDC client ID for a Amazon Q Business application.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-clientidsforoidc */
        "ClientIdsForOIDC"?: (string | Intrinsic)[];
        /**
         * - A description for the Amazon Q Business application.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\s\S]*$`
         * - _Minimum_: `0`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the Amazon Q Business application.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9][a-zA-Z0-9_-]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `1000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-displayname */
        "DisplayName": string | Intrinsic;
        /**
         * - Provides the identifier of the AWS KMS key used to encrypt data indexed by Amazon Q Business. Amazon Q Business doesn't support asymmetric keys.
         * - _Required_: No
         * - _Type_: [EncryptionConfiguration](./aws-properties-qbusiness-application-encryptionconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-encryptionconfiguration */
        "EncryptionConfiguration"?: EncryptionConfiguration;
        /**
         * - The Amazon Resource Name (ARN) of an identity provider being used by an Amazon Q Business application.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws:iam::\d{12}:(oidc-provider|saml-provider)/[a-zA-Z0-9_\.\/@\-]+$`
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-iamidentityproviderarn */
        "IamIdentityProviderArn"?: string | Intrinsic;
        /**
         * - The Amazon Resource Name (ARN) of the IAM Identity Center instance you are either creating for—or connecting to—your Amazon Q Business application.
         * - _Required_: `Yes`
         * - _Required_: Conditional
         * - _Type_: String
         * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso:::instance/(sso)?ins-[a-zA-Z0-9-.]{16}$`
         * - _Minimum_: `10`
         * - _Maximum_: `1224`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-identitycenterinstancearn */
        "IdentityCenterInstanceArn": string | Intrinsic;
        /**
         * - The authentication type being used by a Amazon Q Business application.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `AWS_IAM_IDP_SAML | AWS_IAM_IDP_OIDC | AWS_IAM_IDC | AWS_QUICKSIGHT_IDP | ANONYMOUS`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-identitytype */
        "IdentityType"?: string | Intrinsic;
        /**
         * - Configuration information about chat response personalization. For more information, see [Personalizing chat responses](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/personalizing-chat-responses.html).
         * - _Required_: No
         * - _Type_: [PersonalizationConfiguration](./aws-properties-qbusiness-application-personalizationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-personalizationconfiguration */
        "PersonalizationConfiguration"?: PersonalizationConfiguration;
        /**
         * - Configuration information about Amazon Q Apps.
         * - _Required_: No
         * - _Type_: [QAppsConfiguration](./aws-properties-qbusiness-application-qappsconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-qappsconfiguration */
        "QAppsConfiguration"?: QAppsConfiguration;
        /**
         * - The Amazon QuickSight configuration for an Amazon Q Business application that uses QuickSight as the identity provider.
         * - _Required_: No
         * - _Type_: [QuickSightConfiguration](./aws-properties-qbusiness-application-quicksightconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-quicksightconfiguration */
        "QuickSightConfiguration"?: QuickSightConfiguration;
        /**
         * - The Amazon Resource Name (ARN) of an IAM role with permissions to access your Amazon CloudWatch logs and metrics. If this property is not specified, Amazon Q Business will create a [service linked role (SLR)](https://docs.aws.amazon.com/amazonq/latest/qbusiness-ug/using-service-linked-roles.html#slr-permissions) and use it as the application's role.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:[a-z0-9-\.]{1,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[a-z0-9-\.]{0,63}:[^/].{0,1023}$`
         * - _Minimum_: `0`
         * - _Maximum_: `1284`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-rolearn */
        "RoleArn"?: string | Intrinsic;
        /**
         * - A list of key-value pairs that identify or categorize your Amazon Q Business application. You can also use tags to help control access to the application. Tag keys and values can consist of Unicode letters, digits, white space, and any of the following symbols: \_ . : / = + - @.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-qbusiness-application-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-qbusiness-application.html#cfn-qbusiness-application-tags */
        "Tags"?: Tag[];
    };
}