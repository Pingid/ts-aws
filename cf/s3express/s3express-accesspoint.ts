import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Public access is blocked by default to access points for directory buckets.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html */

export interface PublicAccessBlockConfiguration {
    /**
     * - Specifies whether Amazon S3 should block public access control lists (ACLs) for this bucket and objects in this bucket. Setting this element to `TRUE` causes the following behavior:
     * - Enabling this setting doesn't affect existing policies or ACLs.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-publicaccessblockconfiguration-blockpublicacls */
    "BlockPublicAcls"?: boolean | Intrinsic;
    /**
     * - Specifies whether Amazon S3 should block public bucket policies for this bucket. Setting this element to `TRUE` causes Amazon S3 to reject calls to PUT Bucket policy if the specified bucket policy allows public access.
     * - Enabling this setting doesn't affect existing bucket policies.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-publicaccessblockconfiguration-blockpublicpolicy */
    "BlockPublicPolicy"?: boolean | Intrinsic;
    /**
     * - Specifies whether Amazon S3 should ignore public ACLs for this bucket and objects in this bucket. Setting this element to `TRUE` causes Amazon S3 to ignore all public ACLs on this bucket and objects in this bucket.
     * - Enabling this setting doesn't affect the persistence of any existing ACLs and doesn't prevent new public ACLs from being set.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-publicaccessblockconfiguration-ignorepublicacls */
    "IgnorePublicAcls"?: boolean | Intrinsic;
    /**
     * - Specifies whether Amazon S3 should restrict public bucket policies for this bucket. Setting this element to `TRUE` restricts access to this bucket to only AWS service principals and authorized users within this account if the bucket has a public policy.
     * - Enabling this setting doesn't affect previously stored bucket policies, except that public and cross-account access within any public bucket policy, including non-public delegation to specific accounts, is blocked.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-publicaccessblockconfiguration-restrictpublicbuckets */
    "RestrictPublicBuckets"?: boolean | Intrinsic;
}

/**
 * You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both.
 * For more information, see [Manage the scope of your access points for directory buckets.](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets-manage-scope.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html */

export interface Scope {
    /**
     * - You can include one or more API operations as permissions.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Allowed values_: `GetObject | GetObjectAttributes | ListMultipartUploadParts | ListBucket | ListBucketMultipartUploads | PutObject | DeleteObject | AbortMultipartUpload`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-scope-permissions */
    "Permissions"?: (string | Intrinsic)[];
    /**
     * - You can specify any amount of prefixes, but the total length of characters of all prefixes must be less than 256 bytes in size.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-scope-prefixes */
    "Prefixes"?: (string | Intrinsic)[];
}

/**
 * The `VpcConfiguration` property type specifies Property description not available. for an [AWS::S3Express::AccessPoint](./aws-resource-s3express-accesspoint.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html */

export interface VpcConfiguration {
    /**
     * - If this field is specified, this access point will only allow connections from the specified VPC ID.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-vpcconfiguration-vpcid */
    "VpcId"?: string | Intrinsic;
}

/**
 * Access points simplify managing data access at scale for shared datasets in Amazon S3. Access points are unique hostnames you create to enforce distinct permissions and network controls for all requests made through an access point. You can create hundreds of access points per bucket, each with a distinct name and permissions customized for each application. Each access point works in conjunction with the bucket policy that is attached to the underlying bucket. For more information, see [Managing access to shared datasets in directory buckets with access points](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html */

export interface S3ExpressAccessPoint extends ResourceAttributes {
    "Type": "AWS::S3Express::AccessPoint";
    "Properties": {
        /**
         * - The name of the bucket that you want to associate the access point with.
         * - _Required_: Yes
         * - _Type_: String
         * - _Minimum_: `3`
         * - _Maximum_: `255`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-bucket */
        "Bucket": string | Intrinsic;
        /**
         * - The AWS account ID that owns the bucket associated with this access point.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^\d{12}$`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-bucketaccountid */
        "BucketAccountId"?: string | Intrinsic;
        /**
         * - An access point name consists of a base name you provide, followed by the zoneID (AWS Local Zone) followed by the prefix `--xa-s3`. For example, accesspointname--zoneID--xa-s3.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-z0-9]([a-z0-9\-]*[a-z0-9])?$`
         * - _Minimum_: `3`
         * - _Maximum_: `50`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-name */
        "Name"?: string | Intrinsic;
        /**
         * - The access point policy associated with the specified access point.
         * - _Required_: No
         * - _Type_: Json
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-policy */
        "Policy"?: any | Intrinsic;
        /**
         * - Public access is blocked by default to access points for directory buckets.
         * - _Required_: No
         * - _Type_: [PublicAccessBlockConfiguration](./aws-properties-s3express-accesspoint-publicaccessblockconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-publicaccessblockconfiguration */
        "PublicAccessBlockConfiguration"?: PublicAccessBlockConfiguration;
        /**
         * - You can use the access point scope to restrict access to specific prefixes, API operations, or a combination of both.
         * - For more information, see [Manage the scope of your access points for directory buckets.](https://docs.aws.amazon.com/AmazonS3/latest/userguide/access-points-directory-buckets-manage-scope.html)
         * - _Required_: No
         * - _Type_: [Scope](./aws-properties-s3express-accesspoint-scope.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-scope */
        "Scope"?: Scope;
        /**
         * - If you include this field, Amazon S3 restricts access to this access point to requests from the specified virtual private cloud (VPC).
         * - _Required_: No
         * - _Type_: [VpcConfiguration](./aws-properties-s3express-accesspoint-vpcconfiguration.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-s3express-accesspoint.html#cfn-s3express-accesspoint-vpcconfiguration */
        "VpcConfiguration"?: VpcConfiguration;
    };
}