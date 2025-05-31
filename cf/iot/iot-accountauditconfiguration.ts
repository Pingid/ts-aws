import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Which audit checks are enabled and disabled for this account.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface AuditCheckConfiguration {
    /**
     * - True if this audit check is enabled for this account.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfiguration-enabled */
    "Enabled"?: boolean | Intrinsic;
}

/**
 * Information about the targets to which audit notifications are sent.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface AuditNotificationTarget {
    /**
     * - True if notifications to the target are enabled.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditnotificationtarget-enabled */
    "Enabled"?: boolean | Intrinsic;
    /**
     * - The ARN of the role that grants permission to send notifications to the target.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `20`
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditnotificationtarget-rolearn */
    "RoleArn"?: string | Intrinsic;
    /**
     * - The ARN of the target (SNS topic) to which audit notifications are sent.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2048`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditnotificationtarget-targetarn */
    "TargetArn"?: string | Intrinsic;
}

/**
 * The configuration of the audit notification target.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface AuditNotificationTargetConfigurations {
    /**
     * - The `Sns` notification target.
     * - _Required_: No
     * - _Type_: [AuditNotificationTarget](./aws-properties-iot-accountauditconfiguration-auditnotificationtarget.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditnotificationtargetconfigurations-sns */
    "Sns"?: AuditNotificationTarget;
}

/**
 * Configuration structure containing settings for the device certificate age check.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface CertAgeCheckCustomConfiguration {
    /**
     * - The number of days that defines when a device certificate is considered to have aged. The check will report a finding if a certificate has been active for a number of days greater than or equal to this threshold value.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-certagecheckcustomconfiguration-certagethresholdindays */
    "CertAgeThresholdInDays"?: string | Intrinsic;
}

/**
 * Configuration for the device certificate age audit check.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface DeviceCertAgeAuditCheckConfiguration {
    /**
     * - Configuration settings for the device certificate age check, including the threshold in days for certificate age. This configuration is of type `CertAgeCheckCustomConfiguration`.
     * - _Required_: No
     * - _Type_: [CertAgeCheckCustomConfiguration](./aws-properties-iot-accountauditconfiguration-certagecheckcustomconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-devicecertageauditcheckconfiguration-configuration */
    "Configuration"?: CertAgeCheckCustomConfiguration;
    /**
     * - True if this audit check is enabled for this account.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-devicecertageauditcheckconfiguration-enabled */
    "Enabled"?: boolean | Intrinsic;
}

/**
 * Configuration structure containing settings for the device certificate expiration check.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface CertExpirationCheckCustomConfiguration {
    /**
     * - The number of days before expiration that defines when a device certificate is considered to be approaching expiration. The check will report a finding if a certificate will expire within this number of days.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-certexpirationcheckcustomconfiguration-certexpirationthresholdindays */
    "CertExpirationThresholdInDays"?: string | Intrinsic;
}

/**
 * Configuration for the device certificate expiration audit check.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface DeviceCertExpirationAuditCheckConfiguration {
    /**
     * - Configuration settings for the device certificate expiration check, including the threshold in days before expiration. This configuration is of type `CertExpirationCheckCustomConfiguration`
     * - _Required_: No
     * - _Type_: [CertExpirationCheckCustomConfiguration](./aws-properties-iot-accountauditconfiguration-certexpirationcheckcustomconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-devicecertexpirationauditcheckconfiguration-configuration */
    "Configuration"?: CertExpirationCheckCustomConfiguration;
    /**
     * - True if this audit check is enabled for this account.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-devicecertexpirationauditcheckconfiguration-enabled */
    "Enabled"?: boolean | Intrinsic;
}

/**
 * The types of audit checks that can be performed.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface AuditCheckConfigurations {
    /**
     * - Checks the permissiveness of an authenticated Amazon Cognito identity pool role. For this check, AWS IoT Device Defender audits all Amazon Cognito identity pools that have been used to connect to the AWS IoT message broker during the 31 days before the audit is performed.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-authenticatedcognitoroleoverlypermissivecheck */
    "AuthenticatedCognitoRoleOverlyPermissiveCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if a CA certificate is expiring. This check applies to CA certificates expiring within 30 days or that have expired.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-cacertificateexpiringcheck */
    "CaCertificateExpiringCheck"?: AuditCheckConfiguration;
    /**
     * - Checks the quality of the CA certificate key. The quality checks if the key is in a valid format, not expired, and if the key meets a minimum required size. This check applies to CA certificates that are `ACTIVE` or `PENDING_TRANSFER`.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-cacertificatekeyqualitycheck */
    "CaCertificateKeyQualityCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if multiple devices connect using the same client ID.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-conflictingclientidscheck */
    "ConflictingClientIdsCheck"?: AuditCheckConfiguration;
    /**
     * - Checks when a device certificate has been active for a number of days greater than or equal to the number you specify.
     * - _Required_: No
     * - _Type_: [DeviceCertAgeAuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-devicecertageauditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-devicecertificateagecheck */
    "DeviceCertificateAgeCheck"?: DeviceCertAgeAuditCheckConfiguration;
    /**
     * - Checks if a device certificate is expiring. By default, this check applies to device certificates expiring within 30 days or that have expired. You can modify this threshold by configuring the DeviceCertExpirationAuditCheckConfiguration.
     * - _Required_: No
     * - _Type_: [DeviceCertExpirationAuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-devicecertexpirationauditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-devicecertificateexpiringcheck */
    "DeviceCertificateExpiringCheck"?: DeviceCertExpirationAuditCheckConfiguration;
    /**
     * - Checks the quality of the device certificate key. The quality checks if the key is in a valid format, not expired, signed by a registered certificate authority, and if the key meets a minimum required size.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-devicecertificatekeyqualitycheck */
    "DeviceCertificateKeyQualityCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if multiple concurrent connections use the same X.509 certificate to authenticate with AWS IoT.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-devicecertificatesharedcheck */
    "DeviceCertificateSharedCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if device certificates are still active despite being revoked by an intermediate CA.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-intermediatecarevokedforactivedevicecertificatescheck */
    "IntermediateCaRevokedForActiveDeviceCertificatesCheck"?: AuditCheckConfiguration;
    /**
     * - Checks the permissiveness of a policy attached to an authenticated Amazon Cognito identity pool role.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotpolicyoverlypermissivecheck */
    "IotPolicyOverlyPermissiveCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if an AWS IoT policy is potentially misconfigured. Misconfigured policies, including overly permissive policies, can cause security incidents like allowing devices access to unintended resources. This check is a warning for you to make sure that only intended actions are allowed before updating the policy.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotpolicypotentialmisconfigurationcheck */
    "IoTPolicyPotentialMisConfigurationCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if a role alias has access to services that haven't been used for the AWS IoT device in the last year.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotrolealiasallowsaccesstounusedservicescheck */
    "IotRoleAliasAllowsAccessToUnusedServicesCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if the temporary credentials provided by AWS IoT role aliases are overly permissive.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-iotrolealiasoverlypermissivecheck */
    "IotRoleAliasOverlyPermissiveCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if AWS IoT logs are disabled.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-loggingdisabledcheck */
    "LoggingDisabledCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if a revoked CA certificate is still active.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-revokedcacertificatestillactivecheck */
    "RevokedCaCertificateStillActiveCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if a revoked device certificate is still active.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-revokeddevicecertificatestillactivecheck */
    "RevokedDeviceCertificateStillActiveCheck"?: AuditCheckConfiguration;
    /**
     * - Checks if policy attached to an unauthenticated Amazon Cognito identity pool role is too permissive.
     * - _Required_: No
     * - _Type_: [AuditCheckConfiguration](./aws-properties-iot-accountauditconfiguration-auditcheckconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations-unauthenticatedcognitoroleoverlypermissivecheck */
    "UnauthenticatedCognitoRoleOverlyPermissiveCheck"?: AuditCheckConfiguration;
}

/**
 * Use the `AWS::IoT::AccountAuditConfiguration` resource to configure or reconfigure the Device Defender audit settings for your account. Settings include how audit notifications are sent and which audit checks are enabled or disabled. For API reference, see [UpdateAccountAuditConfiguration](https://docs.aws.amazon.com/iot/latest/apireference/API_UpdateAccountAuditConfiguration.html) and for detailed information on all available audit checks, see [Audit checks](https://docs.aws.amazon.com/iot/latest/developerguide/device-defender-audit-checks.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html */

export interface IoTAccountAuditConfiguration extends ResourceAttributes {
    "Type": "AWS::IoT::AccountAuditConfiguration";
    "Properties": {
        /**
         * - The ID of the account. You can use the expression `!Sub "${AWS::AccountId}"` to use your account ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `12`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-accountid */
        "AccountId": string | Intrinsic;
        /**
         * - Specifies which audit checks are enabled and disabled for this account.
         * - Some data collection might start immediately when certain checks are enabled. When a check is disabled, any data collected so far in relation to the check is deleted. To disable a check, set the value of the `Enabled:` key to `false`.
         * - If an enabled check is removed from the template, it will also be disabled.
         * - You can't disable a check if it's used by any scheduled audit. You must delete the check from the scheduled audit or delete the scheduled audit itself to disable the check.
         * - For more information on available audit checks see [AWS::IoT::AccountAuditConfiguration AuditCheckConfigurations](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html)
         * - _Required_: Yes
         * - _Type_: [AuditCheckConfigurations](./aws-properties-iot-accountauditconfiguration-auditcheckconfigurations.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditcheckconfigurations */
        "AuditCheckConfigurations": AuditCheckConfigurations;
        /**
         * - Information about the targets to which audit notifications are sent.
         * - _Required_: No
         * - _Type_: [AuditNotificationTargetConfigurations](./aws-properties-iot-accountauditconfiguration-auditnotificationtargetconfigurations.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-auditnotificationtargetconfigurations */
        "AuditNotificationTargetConfigurations"?: AuditNotificationTargetConfigurations;
        /**
         * - The Amazon Resource Name (ARN) of the role that grants permission to AWS IoT to access information about your devices, policies, certificates, and other items as required when performing an audit.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `20`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-iot-accountauditconfiguration.html#cfn-iot-accountauditconfiguration-rolearn */
        "RoleArn": string | Intrinsic;
    };
}