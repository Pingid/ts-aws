import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Specifies a tag. For more information, see [Resource tags](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-properties-resource-tags.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html */

export interface Tag {
    /**
     * - The tag key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The tag value.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Specifies a Traffic Mirror filter.
 * A Traffic Mirror filter is a set of rules that defines the traffic to mirror.
 * By default, no traffic is mirrored. To mirror traffic, use [AWS::EC2::TrafficMirrorFilterRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilterrule.html) to add Traffic Mirror rules to the filter. The rules you add define what traffic gets mirrored.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html */

export interface EC2TrafficMirrorFilter extends ResourceAttributes {
    "Type": "AWS::EC2::TrafficMirrorFilter";
    "Properties": {
        /**
         * - The description of the Traffic Mirror filter.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-description */
        "Description"?: string | Intrinsic;
        /**
         * - The network service traffic that is associated with the Traffic Mirror filter.
         * - Valid values are `amazon-dns`.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-networkservices */
        "NetworkServices"?: (string | Intrinsic)[];
        /**
         * - The tags to assign to a Traffic Mirror filter.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-ec2-trafficmirrorfilter-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-ec2-trafficmirrorfilter.html#cfn-ec2-trafficmirrorfilter-tags */
        "Tags"?: Tag[];
    };
}