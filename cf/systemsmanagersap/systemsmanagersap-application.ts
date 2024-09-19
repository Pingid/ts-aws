import type { Intrinsic } from '../intrinsic/index.js' /**
 * The credentials of your SAP application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html */

export interface Credential {
  /**
   * - The type of the application credentials.
   * - _Required_: No
   * - _Type_: String
   * - _Allowed values_: `ADMIN`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-credential-credentialtype */
  CredentialType?: string | Intrinsic
  /**
   * - The name of the SAP HANA database.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?=.{1,100}$).*`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-credential-databasename */
  DatabaseName?: string | Intrinsic
  /**
   * - The secret ID created in AWS Secrets Manager to store the credentials of the SAP application.
   * - _Required_: No
   * - _Type_: String
   * - _Pattern_: `^(?=.{1,100}$).*`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-credential-secretid */
  SecretId?: string | Intrinsic
}

/**
 * The `Tag` property type specifies Property description not available. for an [AWS::SystemsManagerSAP::Application](./aws-resource-systemsmanagersap-application.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html */

export interface Tag {
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-tag-key */
  Key: string | Intrinsic
  /**
   * - Property description not available.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-tag-value */
  Value: string | Intrinsic
}

/**
 * An SAP application registered with AWS Systems Manager for SAP.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html */

export interface SystemsManagerSAPApplication {
  Type: 'AWS::SystemsManagerSAP::Application'
  Properties: {
    /**
     * - The ID of the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[\w\d\.-]{1,60}`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-applicationid */
    ApplicationId: string | Intrinsic
    /**
     * - The type of the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `HANA | SAP_ABAP`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-applicationtype */
    ApplicationType: string | Intrinsic
    /**
     * - The credentials of the SAP application.
     * - _Required_: No
     * - _Type_: Array of [Credential](./aws-properties-systemsmanagersap-application-credential.html)
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-credentials */
    Credentials?: Credential[]
    /**
     * - The Amazon Resource Name (ARN) of the database.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:(.+:){2,4}.+$|^arn:(.+:){1,3}.+\/.+$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-databasearn */
    DatabaseArn?: string | Intrinsic
    /**
     * - The Amazon EC2 instances on which your SAP application is running.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-instances */
    Instances?: (string | Intrinsic)[]
    /**
     * - The SAP instance number of the application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[0-9]{2}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-sapinstancenumber */
    SapInstanceNumber?: string | Intrinsic
    /**
     * - The System ID of the application.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[A-Z][A-Z0-9]{2}`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-sid */
    Sid?: string | Intrinsic
    /**
     * - The tags on the application.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-systemsmanagersap-application-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-systemsmanagersap-application.html#cfn-systemsmanagersap-application-tags */
    Tags?: Tag[]
  }
}
