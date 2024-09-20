import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Configuration information for the superuser.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html */

export interface SuperuserParameters {
  /**
   * - The email address of the superuser.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+[.]+[A-Za-z]+`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-superuserparameters-emailaddress */
  EmailAddress?: string | Intrinsic
  /**
   * - The first name of the superuser.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]{1,50}$`
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-superuserparameters-firstname */
  FirstName?: string | Intrinsic
  /**
   * - The last name of the superuser.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[a-zA-Z0-9]{1,50}$`
   * - _Minimum_: `1`
   * - _Maximum_: `50`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-superuserparameters-lastname */
  LastName?: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::FinSpace::Environment](./aws-resource-finspace-environment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AttributeMapItems` property type specifies Property description not available. for an [AWS::FinSpace::Environment](./aws-resource-finspace-environment.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html */

export interface AttributeMapItems {
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-attributemapitems-key */
  Key?: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-attributemapitems-value */
  Value?: string | Intrinsic
}

/**
 * Configuration information when authentication mode is FEDERATED.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html */

export interface FederationParameters {
  /**
   * - The redirect or sign-in URL that should be entered into the SAML 2.0 compliant identity provider configuration (IdP).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^https?://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]{1,1000}`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters-applicationcallbackurl */
  ApplicationCallBackURL?: string | Intrinsic
  /**
   * - SAML attribute name and value. The name must always be `Email` and the value should be set to the attribute definition in which user email is set. For example, name would be `Email` and value `http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress`. Please check your SAML 2.0 compliant identity provider (IdP) documentation for details.
   * - _Required_: No
   * - _Type_: Array of [AttributeMapItems](./aws-properties-finspace-environment-attributemapitems.html)
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters-attributemap */
  AttributeMap?: AttributeMapItems[]
  /**
   * - Name of the identity provider (IdP).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `[^_\p{Z}][\p{L}\p{M}\p{S}\p{N}\p{P}][^_\p{Z}]+`
   * - _Minimum_: `1`
   * - _Maximum_: `32`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters-federationprovidername */
  FederationProviderName?: string | Intrinsic
  /**
   * - The Uniform Resource Name (URN). Also referred as Service Provider URN or Audience URI or Service Provider Entity ID.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^[A-Za-z0-9._\-:\/#\+]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `255`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters-federationurn */
  FederationURN?: string | Intrinsic
  /**
   * - SAML 2.0 Metadata document from identity provider (IdP).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `.*`
   * - _Minimum_: `1000`
   * - _Maximum_: `10000000`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters-samlmetadatadocument */
  SamlMetadataDocument?: string | Intrinsic
  /**
   * - Provide the metadata URL from your SAML 2.0 compliant identity provider (IdP).
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^https?://[-a-zA-Z0-9+&amp;@#/%?=~_|!:,.;]*[-a-zA-Z0-9+&amp;@#/%=~_|]{1,1000}`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters-samlmetadataurl */
  SamlMetadataURL?: string | Intrinsic
}

/**
 * The `AWS::FinSpace::Environment` resource represents an Amazon FinSpace environment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html */

export interface FinSpaceEnvironment extends ResourceAttributes {
  Type: 'AWS::FinSpace::Environment'
  Properties: {
    /**
     * - The description of the FinSpace environment.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9. ]{1,1000}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-description */
    Description?: string | Intrinsic
    /**
     * - The authentication mode for the environment.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `LOCAL | FEDERATED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationmode */
    FederationMode?: string | Intrinsic
    /**
     * - Configuration information when authentication mode is FEDERATED.
     * - _Required_: No
     * - _Type_: [FederationParameters](./aws-properties-finspace-environment-federationparameters.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-federationparameters */
    FederationParameters?: FederationParameters
    /**
     * - The KMS key id used to encrypt in the FinSpace environment.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z-0-9-:\/]*{1,1000}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-kmskeyid */
    KmsKeyId?: string | Intrinsic
    /**
     * - The name of the FinSpace environment.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9]+[a-zA-Z0-9-]*[a-zA-Z0-9]{1,255}$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-name */
    Name: string | Intrinsic
    /**
     * - Configuration information for the superuser.
     * - _Required_: No
     * - _Type_: [SuperuserParameters](./aws-properties-finspace-environment-superuserparameters.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-superuserparameters */
    SuperuserParameters?: SuperuserParameters
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-finspace-environment-tag.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-finspace-environment.html#cfn-finspace-environment-tags */
    Tags?: Tag[]
  }
}
