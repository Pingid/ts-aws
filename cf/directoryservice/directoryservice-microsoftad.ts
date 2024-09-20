import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Contains VPC information for the [CreateDirectory](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateDirectory.html) or [CreateMicrosoftAD](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_CreateMicrosoftAD.html) operation.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html */

export interface VpcSettings {
  /**
   * - The identifiers of the subnets for the directory servers. The two subnets must be in different Availability Zones. AWS Directory Service specifies a directory server and a DNS server in each of these subnets.
   * - _Required_: Yes
   * - _Type_: Array of String
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-vpcsettings-subnetids */
  SubnetIds: (string | Intrinsic)[]
  /**
   * - The identifier of the VPC in which to create the directory.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(vpc-[0-9a-f]{8}|vpc-[0-9a-f]{17})$`
   * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-vpcsettings-vpcid */
  VpcId: string | Intrinsic
}

/**
 * The `AWS::DirectoryService::MicrosoftAD` resource specifies a Microsoft Active Directory in AWS so that your directory users and groups can access the AWS Management Console and AWS applications using their existing credentials. For more information, see [AWS Managed Microsoft AD](https://docs.aws.amazon.com/directoryservice/latest/admin-guide/directory_microsoft_ad.html) in the _AWS Directory Service Admin Guide_.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html */

export interface DirectoryServiceMicrosoftAD extends ResourceAttributes {
  Type: 'AWS::DirectoryService::MicrosoftAD'
  Properties: {
    /**
     * - Specifies an alias for a directory and assigns the alias to the directory. The alias is used to construct the access URL for the directory, such as `http://<alias>.awsapps.com`. By default, AWS CloudFormation does not create an alias.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-createalias */
    CreateAlias?: boolean | Intrinsic
    /**
     * - AWS Managed Microsoft AD is available in two editions: `Standard` and `Enterprise`. `Enterprise` is the default.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Enterprise | Standard`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-edition */
    Edition?: string | Intrinsic
    /**
     * - Whether to enable single sign-on for a Microsoft Active Directory in AWS. Single sign-on allows users in your directory to access certain AWS services from a computer joined to the directory without having to enter their credentials separately. If you don't specify a value, AWS CloudFormation disables single sign-on by default.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-enablesso */
    EnableSso?: boolean | Intrinsic
    /**
     * - The fully qualified domain name for the AWS Managed Microsoft AD directory, such as `corp.example.com`. This name will resolve inside your VPC only. It does not need to be publicly resolvable.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([a-zA-Z0-9]+[\\.-])+([a-zA-Z0-9])+$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-name */
    Name: string | Intrinsic
    /**
     * - The password for the default administrative user named `Admin`.
     * - If you need to change the password for the administrator account, see the [ResetUserPassword](https://docs.aws.amazon.com/directoryservice/latest/devguide/API_ResetUserPassword.html) API call in the _AWS Directory Service API Reference_.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `(?=^.{8,64}$)((?=.*\d)(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[^A-Za-z0-9\s])(?=.*[a-z])|(?=.*[^A-Za-z0-9\s])(?=.*[A-Z])(?=.*[a-z])|(?=.*\d)(?=.*[A-Z])(?=.*[^A-Za-z0-9\s]))^.*`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-password */
    Password: string | Intrinsic
    /**
     * - The NetBIOS name for your domain, such as `CORP`. If you don't specify a NetBIOS name, it will default to the first part of your directory DNS. For example, `CORP` for the directory DNS `corp.example.com`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[^\\/:*?"<>|.]+[^\\/:*?"<>|]*$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-shortname */
    ShortName?: string | Intrinsic
    /**
     * - Specifies the VPC settings of the Microsoft AD directory server in AWS.
     * - _Required_: Yes
     * - _Type_: [VpcSettings](./aws-properties-directoryservice-microsoftad-vpcsettings.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-directoryservice-microsoftad.html#cfn-directoryservice-microsoftad-vpcsettings */
    VpcSettings: VpcSettings
  }
}
