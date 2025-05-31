import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::Route53RecoveryReadiness::RecoveryGroup](./aws-resource-route53recoveryreadiness-recoverygroup.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html#cfn-route53recoveryreadiness-recoverygroup-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html#cfn-route53recoveryreadiness-recoverygroup-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates a recovery group in Amazon Route 53 Application Recovery Controller. A recovery group represents your application. It typically consists of two or more cells that are replicas of each other in terms of resources and functionality, so that you can fail over from one to the other, for example, from one Region to another. You create recovery groups so you can use readiness checks to audit resources in your application.
 * For more information, see [Readiness checks, resource sets, and readiness scopes](https://docs.aws.amazon.com/r53recovery/latest/dg/recovery-readiness.recovery-groups.readiness-scope.html) in the Amazon Route 53 Application Recovery Controller Developer Guide.
 * Route 53 ARC Readiness supports us-east-1 and us-west-2 AWS Regions only.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html */

export interface Route53RecoveryReadinessRecoveryGroup extends ResourceAttributes {
    "Type": "AWS::Route53RecoveryReadiness::RecoveryGroup";
    "Properties": {
        /**
         * - A list of the cell Amazon Resource Names (ARNs) in the recovery group.
         * - _Required_: No
         * - _Type_: Array of String
         * - _Minimum_: `1`
         * - _Maximum_: `256 | 5`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html#cfn-route53recoveryreadiness-recoverygroup-cells */
        "Cells"?: (string | Intrinsic)[];
        /**
         * - The name of the recovery group to create.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `[a-zA-Z0-9_]+`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html#cfn-route53recoveryreadiness-recoverygroup-recoverygroupname */
        "RecoveryGroupName"?: string | Intrinsic;
        /**
         * - A collection of tags associated with a resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-route53recoveryreadiness-recoverygroup-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53recoveryreadiness-recoverygroup.html#cfn-route53recoveryreadiness-recoverygroup-tags */
        "Tags"?: Tag[];
    };
}