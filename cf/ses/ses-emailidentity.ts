import type { Intrinsic } from '../intrinsic/index.js' /**
 * Used to associate a configuration set with an email identity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html */

export interface ConfigurationSetAttributes {
  /**
   * - The configuration set to associate with an email identity.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-configurationsetattributes-configurationsetname */
  ConfigurationSetName?: string | Intrinsic
}

/**
 * Used to enable or disable DKIM authentication for an email identity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html */

export interface DkimAttributes {
  /**
   * - Sets the DKIM signing configuration for the identity.
   * - When you set this value `true`, then the messages that are sent from the identity are signed using DKIM. If you set this value to `false`, your messages are sent without DKIM signing.
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimattributes-signingenabled */
  SigningEnabled?: boolean | Intrinsic
}

/**
 * Used to configure or change the DKIM authentication settings for an email domain identity. You can use this operation to do any of the following:
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html */

export interface DkimSigningAttributes {
  /**
   * - \[Bring Your Own DKIM\] A private key that's used to generate a DKIM signature.
   * - The private key must use 1024 or 2048-bit RSA encryption, and must be encoded using base64 encoding.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimsigningattributes-domainsigningprivatekey */
  DomainSigningPrivateKey?: string | Intrinsic
  /**
   * - \[Bring Your Own DKIM\] A string that's used to identify a public key in the DNS configuration for a domain.
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimsigningattributes-domainsigningselector */
  DomainSigningSelector?: string | Intrinsic
  /**
   * - \[Easy DKIM\] The key length of the future DKIM key pair to be generated. This can be changed at most once per day.
   * - Valid Values: `RSA_1024_BIT | RSA_2048_BIT`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `RSA_1024_BIT|RSA_2048_BIT`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimsigningattributes-nextsigningkeylength */
  NextSigningKeyLength?: string | Intrinsic
}

/**
 * Used to enable or disable feedback forwarding for an identity. This setting determines what happens when an identity is used to send an email that results in a bounce or complaint event.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html */

export interface FeedbackAttributes {
  /**
   * - Sets the feedback forwarding configuration for the identity.
   * - If the value is `true`, you receive email notifications when bounce or complaint events occur. These notifications are sent to the address that you specified in the `Return-Path` header of the original email.
   * - You're required to have a method of tracking bounces and complaints. If you haven't set up another mechanism for receiving bounce or complaint notifications (for example, by setting up an event destination), you receive an email notification when these events occur (even if this setting is disabled).
   * - _Required_: No
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-feedbackattributes-emailforwardingenabled */
  EmailForwardingEnabled?: boolean | Intrinsic
}

/**
 * Used to enable or disable the custom Mail-From domain configuration for an email identity.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html */

export interface MailFromAttributes {
  /**
   * - The action to take if the required MX record isn't found when you send an email. When you set this value to `USE_DEFAULT_VALUE`, the mail is sent using _amazonses.com_ as the MAIL FROM domain. When you set this value to `REJECT_MESSAGE`, the Amazon SES API v2 returns a `MailFromDomainNotVerified` error, and doesn't attempt to deliver the email.
   * - These behaviors are taken when the custom MAIL FROM domain configuration is in the `Pending`, `Failed`, and `TemporaryFailure` states.
   * - Valid Values: `USE_DEFAULT_VALUE | REJECT_MESSAGE`
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `USE_DEFAULT_VALUE|REJECT_MESSAGE`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-mailfromattributes-behavioronmxfailure */
  BehaviorOnMxFailure?: string | Intrinsic
  /**
   * - The custom MAIL FROM domain that you want the verified identity to use. The MAIL FROM domain must meet the following criteria:
   * - _Required_: No
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-mailfromattributes-mailfromdomain */
  MailFromDomain?: string | Intrinsic
}

/**
 * Specifies an identity for using within SES. An identity is an email address or domain that you use when you send email. Before you can use an identity to send email, you first have to verify it. By verifying an identity, you demonstrate that you're the owner of the identity, and that you've given Amazon SES API v2 permission to send email from the identity.
 * When you verify an email address, SES sends an email to the address. Your email address is verified as soon as you follow the link in the verification email. When you verify a domain without specifying the `DkimSigningAttributes` properties, OR only the `NextSigningKeyLength` property of `DkimSigningAttributes`, this resource provides a set of CNAME token names and values (_DkimDNSTokenName1_, _DkimDNSTokenValue1_, _DkimDNSTokenName2_, _DkimDNSTokenValue2_, _DkimDNSTokenName3_, _DkimDNSTokenValue3_) as outputs. You can then add these to the DNS configuration for your domain. Your domain is verified when Amazon SES detects these records in the DNS configuration for your domain. This verification method is known as Easy DKIM.
 * Alternatively, you can perform the verification process by providing your own public-private key pair. This verification method is known as Bring Your Own DKIM (BYODKIM). To use BYODKIM, your resource must include `DkimSigningAttributes` properties `DomainSigningSelector` and `DomainSigningPrivateKey`. When you specify this object, you provide a selector (`DomainSigningSelector`) (a component of the DNS record name that identifies the public key to use for DKIM authentication) and a private key (`DomainSigningPrivateKey`).
 * Additionally, you can associate an existing configuration set with the email identity that you're verifying.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html */

export interface SESEmailIdentity {
  Type: 'AWS::SES::EmailIdentity'
  Properties: {
    /**
     * - Used to associate a configuration set with an email identity.
     * - _Required_: No
     * - _Type_: [ConfigurationSetAttributes](./aws-properties-ses-emailidentity-configurationsetattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-configurationsetattributes */
    ConfigurationSetAttributes?: ConfigurationSetAttributes
    /**
     * - An object that contains information about the DKIM attributes for the identity.
     * - _Required_: No
     * - _Type_: [DkimAttributes](./aws-properties-ses-emailidentity-dkimattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimattributes */
    DkimAttributes?: DkimAttributes
    /**
     * - If your request includes this object, Amazon SES configures the identity to use Bring Your Own DKIM (BYODKIM) for DKIM authentication purposes, or, configures the key length to be used for [Easy DKIM](https://docs.aws.amazon.com/ses/latest/DeveloperGuide/easy-dkim.html).
     * - You can only specify this object if the email identity is a domain, as opposed to an address.
     * - _Required_: No
     * - _Type_: [DkimSigningAttributes](./aws-properties-ses-emailidentity-dkimsigningattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-dkimsigningattributes */
    DkimSigningAttributes?: DkimSigningAttributes
    /**
     * - The email address or domain to verify.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-emailidentity */
    EmailIdentity: string | Intrinsic
    /**
     * - Used to enable or disable feedback forwarding for an identity.
     * - _Required_: No
     * - _Type_: [FeedbackAttributes](./aws-properties-ses-emailidentity-feedbackattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-feedbackattributes */
    FeedbackAttributes?: FeedbackAttributes
    /**
     * - Used to enable or disable the custom Mail-From domain configuration for an email identity.
     * - _Required_: No
     * - _Type_: [MailFromAttributes](./aws-properties-ses-emailidentity-mailfromattributes.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ses-emailidentity.html#cfn-ses-emailidentity-mailfromattributes */
    MailFromAttributes?: MailFromAttributes
  }
}