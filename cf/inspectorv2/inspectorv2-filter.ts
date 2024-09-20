import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * An object that describes the details of a string filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface StringFilter {
  /**
   * - The operator to use when comparing values in the filter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS | PREFIX | NOT_EQUALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-stringfilter-comparison */
  Comparison: string | Intrinsic
  /**
   * - The value to filter on.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-stringfilter-value */
  Value: string | Intrinsic
}

/**
 * Contains details on the time range used to filter findings.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface DateFilter {
  /**
   * - A timestamp representing the end of the time period filtered on.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-datefilter-endinclusive */
  EndInclusive?: number | Intrinsic
  /**
   * - A timestamp representing the start of the time period filtered on.
   * - _Required_: No
   * - _Type_: Integer
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-datefilter-startinclusive */
  StartInclusive?: number | Intrinsic
}

/**
 * An object that describes the details of a number filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface NumberFilter {
  /**
   * - The lowest number to be included in the filter.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-numberfilter-lowerinclusive */
  LowerInclusive?: number | Intrinsic
  /**
   * - The highest number to be included in the filter.
   * - _Required_: No
   * - _Type_: Number
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-numberfilter-upperinclusive */
  UpperInclusive?: number | Intrinsic
}

/**
 * An object that describes the details of a port range filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface PortRangeFilter {
  /**
   * - The port number the port range begins at.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-portrangefilter-begininclusive */
  BeginInclusive?: number | Intrinsic
  /**
   * - The port number the port range ends at.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `0`
   * - _Maximum_: `65535`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-portrangefilter-endinclusive */
  EndInclusive?: number | Intrinsic
}

/**
 * An object that describes details of a map filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface MapFilter {
  /**
   * - The operator to use when comparing values in the filter.
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `EQUALS`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-mapfilter-comparison */
  Comparison: string | Intrinsic
  /**
   * - The tag key used in the filter.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-mapfilter-key */
  Key?: string | Intrinsic
  /**
   * - The tag value used in the filter.
   * - _Required_: No
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-mapfilter-value */
  Value?: string | Intrinsic
}

/**
 * Contains information on the details of a package filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface PackageFilter {
  /**
   * - An object that contains details on the package architecture type to filter on.
   * - _Required_: No
   * - _Type_: [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-packagefilter-architecture */
  Architecture?: StringFilter
  /**
   * - An object that contains details on the package epoch to filter on.
   * - _Required_: No
   * - _Type_: [NumberFilter](./aws-properties-inspectorv2-filter-numberfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-packagefilter-epoch */
  Epoch?: NumberFilter
  /**
   * - An object that contains details on the name of the package to filter on.
   * - _Required_: No
   * - _Type_: [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-packagefilter-name */
  Name?: StringFilter
  /**
   * - An object that contains details on the package release to filter on.
   * - _Required_: No
   * - _Type_: [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-packagefilter-release */
  Release?: StringFilter
  /**
   * - An object that contains details on the source layer hash to filter on.
   * - _Required_: No
   * - _Type_: [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-packagefilter-sourcelayerhash */
  SourceLayerHash?: StringFilter
  /**
   * - The package version to filter on.
   * - _Required_: No
   * - _Type_: [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-packagefilter-version */
  Version?: StringFilter
}

/**
 * Details on the criteria used to define the filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface FilterCriteria {
  /**
   * - Details of the AWS account IDs used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-awsaccountid */
  AwsAccountId?: StringFilter[]
  /**
   * - Details of the component IDs used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-componentid */
  ComponentId?: StringFilter[]
  /**
   * - Details of the component types used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-componenttype */
  ComponentType?: StringFilter[]
  /**
   * - Details of the Amazon EC2 instance image IDs used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ec2instanceimageid */
  Ec2InstanceImageId?: StringFilter[]
  /**
   * - Details of the Amazon EC2 instance subnet IDs used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ec2instancesubnetid */
  Ec2InstanceSubnetId?: StringFilter[]
  /**
   * - Details of the Amazon EC2 instance VPC IDs used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ec2instancevpcid */
  Ec2InstanceVpcId?: StringFilter[]
  /**
   * - Details of the Amazon ECR image architecture types used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ecrimagearchitecture */
  EcrImageArchitecture?: StringFilter[]
  /**
   * - Details of the Amazon ECR image hashes used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ecrimagehash */
  EcrImageHash?: StringFilter[]
  /**
   * - Details on the Amazon ECR image push date and time used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-inspectorv2-filter-datefilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ecrimagepushedat */
  EcrImagePushedAt?: DateFilter[]
  /**
   * - Details on the Amazon ECR registry used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ecrimageregistry */
  EcrImageRegistry?: StringFilter[]
  /**
   * - Details on the name of the Amazon ECR repository used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ecrimagerepositoryname */
  EcrImageRepositoryName?: StringFilter[]
  /**
   * - The tags attached to the Amazon ECR container image.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-ecrimagetags */
  EcrImageTags?: StringFilter[]
  /**
   * - Details on the finding ARNs used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-findingarn */
  FindingArn?: StringFilter[]
  /**
   * - Details on the finding status types used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-findingstatus */
  FindingStatus?: StringFilter[]
  /**
   * - Details on the finding types used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-findingtype */
  FindingType?: StringFilter[]
  /**
   * - Details on the date and time a finding was first seen used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-inspectorv2-filter-datefilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-firstobservedat */
  FirstObservedAt?: DateFilter[]
  /**
   * - The Amazon Inspector score to filter on.
   * - _Required_: No
   * - _Type_: Array of [NumberFilter](./aws-properties-inspectorv2-filter-numberfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-inspectorscore */
  InspectorScore?: NumberFilter[]
  /**
   * - Details on the date and time a finding was last seen used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-inspectorv2-filter-datefilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-lastobservedat */
  LastObservedAt?: DateFilter[]
  /**
   * - Details on network protocol used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-networkprotocol */
  NetworkProtocol?: StringFilter[]
  /**
   * - Details on the port ranges used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [PortRangeFilter](./aws-properties-inspectorv2-filter-portrangefilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-portrange */
  PortRange?: PortRangeFilter[]
  /**
   * - Details on the related vulnerabilities used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-relatedvulnerabilities */
  RelatedVulnerabilities?: StringFilter[]
  /**
   * - Details on the resource IDs used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-resourceid */
  ResourceId?: StringFilter[]
  /**
   * - Details on the resource tags used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [MapFilter](./aws-properties-inspectorv2-filter-mapfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-resourcetags */
  ResourceTags?: MapFilter[]
  /**
   * - Details on the resource types used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-resourcetype */
  ResourceType?: StringFilter[]
  /**
   * - Details on the severity used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-severity */
  Severity?: StringFilter[]
  /**
   * - Details on the finding title used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-title */
  Title?: StringFilter[]
  /**
   * - Details on the date and time a finding was last updated at used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [DateFilter](./aws-properties-inspectorv2-filter-datefilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-updatedat */
  UpdatedAt?: DateFilter[]
  /**
   * - Details on the vendor severity used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-vendorseverity */
  VendorSeverity?: StringFilter[]
  /**
   * - Details on the vulnerability ID used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-vulnerabilityid */
  VulnerabilityId?: StringFilter[]
  /**
   * - Details on the vulnerability score to filter findings by.
   * - _Required_: No
   * - _Type_: Array of [StringFilter](./aws-properties-inspectorv2-filter-stringfilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-vulnerabilitysource */
  VulnerabilitySource?: StringFilter[]
  /**
   * - Details on the vulnerable packages used to filter findings.
   * - _Required_: No
   * - _Type_: Array of [PackageFilter](./aws-properties-inspectorv2-filter-packagefilter.html)
   * - _Minimum_: `1`
   * - _Maximum_: `10`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria-vulnerablepackages */
  VulnerablePackages?: PackageFilter[]
}

/**
 * Details about a filter.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html */

export interface InspectorV2Filter extends ResourceAttributes {
  Type: 'AWS::InspectorV2::Filter'
  Properties: {
    /**
     * - A description of the filter.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-description */
    Description?: string | Intrinsic
    /**
     * - The action that is to be applied to the findings that match the filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `NONE | SUPPRESS`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filteraction */
    FilterAction: string | Intrinsic
    /**
     * - Details on the filter criteria associated with this filter.
     * - _Required_: Yes
     * - _Type_: [FilterCriteria](./aws-properties-inspectorv2-filter-filtercriteria.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-filtercriteria */
    FilterCriteria: FilterCriteria
    /**
     * - The name of the filter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-inspectorv2-filter.html#cfn-inspectorv2-filter-name */
    Name: string | Intrinsic
  }
}
