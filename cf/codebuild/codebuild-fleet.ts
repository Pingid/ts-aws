import type { Intrinsic } from '../intrinsic/index.js' /**
 * Information about the VPC configuration that AWS CodeBuild accesses.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface VpcConfig {
  /**
   * - A list of one or more security groups IDs in your Amazon VPC.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `5`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-vpcconfig-securitygroupids */
  SecurityGroupIds?: (string | Intrinsic)[]
  /**
   * - A list of one or more subnet IDs in your Amazon VPC.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `16`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-vpcconfig-subnets */
  Subnets?: (string | Intrinsic)[]
  /**
   * - The ID of the Amazon VPC.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-vpcconfig-vpcid */
  VpcId?: string | Intrinsic
}

/**
 * A tag, consisting of a key and a value.
 * This tag is available for use by AWS services that support tags in AWS CodeBuild.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface Tag {
  /**
   * - The tag's key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?!aws:)[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-tag-key */
  Key: string | Intrinsic
  /**
   * - The tag's value.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `[a-zA-Z+-=._:/]+$`
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-tag-value */
  Value: string | Intrinsic
}

/**
 * The `AWS::CodeBuild::Fleet` resource configures a compute fleet, a set of dedicated instances for your build environment.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html */

export interface CodeBuildFleet {
  Type: 'AWS::CodeBuild::Fleet'
  Properties: {
    /**
     * - The initial number of machines allocated to the compute ﬂeet, which deﬁnes the number of builds that can run in parallel.
     * - _Required_: No
     * - _Type_: Integer
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-basecapacity */
    BaseCapacity?: number | Intrinsic
    /**
     * - Information about the compute resources the compute fleet uses. Available values include:
     * - If you use `BUILD_GENERAL1_SMALL`:
     * - If you use `BUILD_GENERAL1_LARGE`:
     * - For more information, see [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the _AWS CodeBuild User Guide._
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `BUILD_GENERAL1_SMALL | BUILD_GENERAL1_MEDIUM | BUILD_GENERAL1_LARGE | BUILD_GENERAL1_XLARGE | BUILD_GENERAL1_2XLARGE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-computetype */
    ComputeType?: string | Intrinsic
    /**
     * - The environment type of the compute fleet.
     * - For more information, see [Build environment compute types](https://docs.aws.amazon.com/codebuild/latest/userguide/build-env-ref-compute-types.html) in the _AWS CodeBuild user guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `WINDOWS_SERVER_2019_CONTAINER | WINDOWS_SERVER_2022_CONTAINER | LINUX_CONTAINER | LINUX_GPU_CONTAINER | ARM_CONTAINER | MAC_ARM`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-environmenttype */
    EnvironmentType?: string | Intrinsic
    /**
     * - The service role associated with the compute fleet. For more information, see [Allow a user to add a permission policy for a fleet service role](https://docs.aws.amazon.com/codebuild/latest/userguide/auth-and-access-control-iam-identity-based-access-control.html#customer-managed-policies-example-permission-policy-fleet-service-role.html) in the _AWS CodeBuild User Guide_.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^(?:arn:)[a-zA-Z+-=,._:/@]+$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetservicerole */
    FleetServiceRole?: string | Intrinsic
    /**
     * - Information about the VPC configuration that AWS CodeBuild accesses.
     * - _Required_: No
     * - _Type_: [VpcConfig](./aws-properties-codebuild-fleet-vpcconfig.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-fleetvpcconfig */
    FleetVpcConfig?: VpcConfig
    /**
     * - The Amazon Machine Image (AMI) of the compute fleet.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^((aws/codebuild/[A-Za-z-]+:[0-9]+(-[0-9._]+)?)|ami-[a-z0-9]{1,1020})$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-imageid */
    ImageId?: string | Intrinsic
    /**
     * - The name of the compute fleet.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `2`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-name */
    Name?: string | Intrinsic
    /**
     * - The compute fleet overflow behavior.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `QUEUE | ON_DEMAND`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-overflowbehavior */
    OverflowBehavior?: string | Intrinsic
    /**
     * - A list of tag key and value pairs associated with this compute fleet.
     * - These tags are available for use by AWS services that support AWS CodeBuild compute fleet tags.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-codebuild-fleet-tag.html)
     * - _Minimum_: `0`
     * - _Maximum_: `50`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-codebuild-fleet.html#cfn-codebuild-fleet-tags */
    Tags?: Tag[]
  }
}
