import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Adds an inbound (ingress) rule to an Amazon Redshift security group. Depending on whether the application accessing your cluster is running on the Internet or an Amazon EC2 instance, you can authorize inbound access to either a Classless Interdomain Routing (CIDR)/Internet Protocol (IP) range or to an Amazon EC2 security group. You can add as many as 20 ingress rules to an Amazon Redshift security group.
 * If you authorize access to an Amazon EC2 security group, specify _EC2SecurityGroupName_ and _EC2SecurityGroupOwnerId_. The Amazon EC2 security group and Amazon Redshift cluster must be in the same AWS Region.
 * If you authorize access to a CIDR/IP address range, specify _CIDRIP_. For an overview of CIDR blocks, see the Wikipedia article on [Classless Inter-Domain Routing](http://en.wikipedia.org/wiki/Classless_Inter-Domain_Routing).
 * You must also associate the security group with a cluster so that clients running on these IP addresses or the EC2 instance are authorized to connect to the cluster. For information about managing security groups, go to [Working with Security Groups](https://docs.aws.amazon.com/redshift/latest/mgmt/working-with-security-groups.html) in the _Amazon Redshift Cluster Management Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html */

export interface RedshiftClusterSecurityGroupIngress extends ResourceAttributes {
    "Type": "AWS::Redshift::ClusterSecurityGroupIngress";
    "Properties": {
        /**
         * - The IP range to be added the Amazon Redshift security group.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `2147483647`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-cidrip */
        "CIDRIP"?: string | Intrinsic;
        /**
         * - The name of the security group to which the ingress rule is added.
         * - _Required_: Yes
         * - _Type_: String
         * - _Maximum_: `2147483647`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-clustersecuritygroupname */
        "ClusterSecurityGroupName": string | Intrinsic;
        /**
         * - The EC2 security group to be added the Amazon Redshift security group.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `2147483647`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-ec2securitygroupname */
        "EC2SecurityGroupName"?: string | Intrinsic;
        /**
         * - The AWS account number of the owner of the security group specified by the _EC2SecurityGroupName_ parameter. The AWS Access Key ID is not an acceptable value.
         * - Example: `111122223333`
         * - Conditional. If you specify the `EC2SecurityGroupName` property, you must specify this property.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `2147483647`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-redshift-clustersecuritygroupingress.html#cfn-redshift-clustersecuritygroupingress-ec2securitygroupownerid */
        "EC2SecurityGroupOwnerId"?: string | Intrinsic;
    };
}