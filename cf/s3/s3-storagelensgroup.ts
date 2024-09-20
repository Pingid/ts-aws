import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A container of a key value name pair.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html */

export interface Tag {
  /**
   * - Name of the object key.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-tag-key */
  Key: string | Intrinsic
  /**
   * - Value of the tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `0`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-tag-value */
  Value: string | Intrinsic
}

/**
 * This resource is a logical operator that allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data. Objects must match all of the listed filter conditions that are joined by the `And` logical operator. Only one of each filter condition is allowed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html */

export interface And {
  /**
   * - This property contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes are allowed.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-and-matchanyprefix */
  MatchAnyPrefix?: (string | Intrinsic)[]
  /**
   * - This property contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes are allowed.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-and-matchanysuffix */
  MatchAnySuffix?: (string | Intrinsic)[]
  /**
   * - This property contains the list of object tags. At least one object tag must be specified. Up to 10 object tags are allowed.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-s3-storagelensgroup-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-and-matchanytag */
  MatchAnyTag?: Tag[]
  /**
   * - This property contains `DaysGreaterThan` and `DaysLessThan` properties to define the object age range (minimum and maximum number of days).
   * - _Required_: No
   * - _Type_: [MatchObjectAge](./aws-properties-s3-storagelensgroup-matchobjectage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-and-matchobjectage */
  MatchObjectAge?: MatchObjectAge
  /**
   * - This property contains `BytesGreaterThan` and `BytesLessThan` to define the object size range (minimum and maximum number of Bytes).
   * - _Required_: No
   * - _Type_: [MatchObjectSize](./aws-properties-s3-storagelensgroup-matchobjectsize.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-and-matchobjectsize */
  MatchObjectSize?: MatchObjectSize
}

/**
 * This resource contains `DaysGreaterThan` and `DaysLessThan` to define the object age range (minimum and maximum number of days).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html */

export interface MatchObjectAge {
  /**
   * - This property indicates the minimum object age in days.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-matchobjectage-daysgreaterthan */
  DaysGreaterThan?: number | Intrinsic
  /**
   * - This property indicates the maximum object age in days.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-matchobjectage-dayslessthan */
  DaysLessThan?: number | Intrinsic
}

/**
 * This resource filters objects that match the specified object size range.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html */

export interface MatchObjectSize {
  /**
   * - This property specifies the minimum object size in bytes. The value must be a positive number, greater than 0 and less than 5 TB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-matchobjectsize-bytesgreaterthan */
  BytesGreaterThan?: number | Intrinsic
  /**
   * - This property specifies the maximum object size in bytes. The value must be a positive number, greater than the minimum object size and less than 5 TB.
   * - _Required_: No
   * - _Type_: Integer
   * - _Minimum_: `1`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-matchobjectsize-byteslessthan */
  BytesLessThan?: number | Intrinsic
}

/**
 * This resource contains the `Or` logical operator, which allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data. Objects can match any of the listed filter conditions that are joined by the `Or` logical operator. Only one of each filter condition is allowed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html */

export interface Or {
  /**
   * - This property contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes are allowed.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-or-matchanyprefix */
  MatchAnyPrefix?: (string | Intrinsic)[]
  /**
   * - This property contains the list of suffixes. At least one suffix must be specified. Up to 10 suffixes are allowed.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-or-matchanysuffix */
  MatchAnySuffix?: (string | Intrinsic)[]
  /**
   * - This property contains the list of S3 object tags. At least one object tag must be specified. Up to 10 object tags are allowed.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-s3-storagelensgroup-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-or-matchanytag */
  MatchAnyTag?: Tag[]
  /**
   * - This property filters objects that match the specified object age range.
   * - _Required_: No
   * - _Type_: [MatchObjectAge](./aws-properties-s3-storagelensgroup-matchobjectage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-or-matchobjectage */
  MatchObjectAge?: MatchObjectAge
  /**
   * - This property contains the `BytesGreaterThan` and `BytesLessThan` values to define the object size range (minimum and maximum number of Bytes).
   * - _Required_: No
   * - _Type_: [MatchObjectSize](./aws-properties-s3-storagelensgroup-matchobjectsize.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-or-matchobjectsize */
  MatchObjectSize?: MatchObjectSize
}

/**
 * This resource sets the criteria for the Storage Lens group data that is displayed. For multiple filter conditions, the `AND` or `OR` logical operator is used.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html */

export interface Filter {
  /**
   * - This property contains the `And` logical operator, which allows multiple filter conditions to be joined for more complex comparisons of Storage Lens group data. Objects must match all of the listed filter conditions that are joined by the `And` logical operator. Only one of each filter condition is allowed.
   * - _Required_: No
   * - _Type_: [And](./aws-properties-s3-storagelensgroup-and.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter-and */
  And?: And
  /**
   * - This property contains a list of prefixes. At least one prefix must be specified. Up to 10 prefixes are allowed.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter-matchanyprefix */
  MatchAnyPrefix?: (string | Intrinsic)[]
  /**
   * - This property contains a list of suffixes. At least one suffix must be specified. Up to 10 suffixes are allowed.
   * - _Required_: No
   * - _Type_: Array of String
   * - _Maximum_: `1024`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter-matchanysuffix */
  MatchAnySuffix?: (string | Intrinsic)[]
  /**
   * - This property contains the list of S3 object tags. At least one object tag must be specified. Up to 10 object tags are allowed.
   * - _Required_: No
   * - _Type_: Array of [Tag](./aws-properties-s3-storagelensgroup-tag.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter-matchanytag */
  MatchAnyTag?: Tag[]
  /**
   * - This property contains `DaysGreaterThan` and `DaysLessThan` to define the object age range (minimum and maximum number of days).
   * - _Required_: No
   * - _Type_: [MatchObjectAge](./aws-properties-s3-storagelensgroup-matchobjectage.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter-matchobjectage */
  MatchObjectAge?: MatchObjectAge
  /**
   * - This property contains `BytesGreaterThan` and `BytesLessThan` to define the object size range (minimum and maximum number of Bytes).
   * - _Required_: No
   * - _Type_: [MatchObjectSize](./aws-properties-s3-storagelensgroup-matchobjectsize.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter-matchobjectsize */
  MatchObjectSize?: MatchObjectSize
  /**
   * - This property contains the `Or` logical operator, which allows multiple filter conditions to be joined. Objects can match any of the listed filter conditions, which are joined by the `Or` logical operator. Only one of each filter condition is allowed.
   * - _Required_: No
   * - _Type_: [Or](./aws-properties-s3-storagelensgroup-or.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter-or */
  Or?: Or
}

/**
 * The `AWS::S3::StorageLensGroup` resource creates an S3 Storage Lens group. A Storage Lens group is a custom grouping of objects that include filters for prefixes, suffixes, object tags, object size, or object age. You can create an S3 Storage Lens group that includes a single filter or multiple filter conditions. To specify multiple filter conditions, you use `AND` or `OR` logical operators. For more information about S3 Storage Lens groups, see [Working with S3 Storage Lens groups](https://docs.aws.amazon.com/AmazonS3/latest/userguide/storage-lens-groups-overview.html).
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html */

export interface S3StorageLensGroup extends ResourceAttributes {
  Type: 'AWS::S3::StorageLensGroup'
  Properties: {
    /**
     * - This property contains the criteria for the Storage Lens group data that is displayed
     * - _Required_: Yes
     * - _Type_: [Filter](./aws-properties-s3-storagelensgroup-filter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-filter */
    Filter: Filter
    /**
     * - This property contains the Storage Lens group name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\-_]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-name */
    Name: string | Intrinsic
    /**
     * - This property contains the AWS resource tags that you're adding to your Storage Lens group. This parameter is optional.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-s3-storagelensgroup-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3-storagelensgroup.html#cfn-s3-storagelensgroup-tags */
    Tags?: Tag[]
  }
}
