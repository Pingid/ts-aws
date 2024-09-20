import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A custom key-value pair associated with a Billing Conductor resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html */

export interface Tag {
  /**
   * - The key in a key-value pair.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-tag-key */
  Key: string | Intrinsic
  /**
   * - The value in a key-value pair of a tag.
   * - _Required_: Yes
   * - _Type_: String
   * - _Minimum_: `1`
   * - _Maximum_: `256`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-tag-value */
  Value: string | Intrinsic
}

/**
 * The possible AWS Free Tier configurations.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html */

export interface FreeTier {
  /**
   * - Activate or deactivate AWS Free Tier.
   * - _Required_: Yes
   * - _Type_: Boolean
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-freetier-activated */
  Activated: boolean | Intrinsic
}

/**
 * The set of tiering configurations for the pricing rule.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html */

export interface Tiering {
  /**
   * - The possible AWS Free Tier configurations.
   * - _Required_: No
   * - _Type_: [FreeTier](./aws-properties-billingconductor-pricingrule-freetier.html)
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-tiering-freetier */
  FreeTier?: FreeTier
}

/**
 * Creates a pricing rule which can be associated with a pricing plan, or a set of pricing plans.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html */

export interface BillingConductorPricingRule extends ResourceAttributes {
  Type: 'AWS::BillingConductor::PricingRule'
  Properties: {
    /**
     * - The seller of services provided by AWS, their affiliates, or third-party providers selling services via AWS Marketplace.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `AWS | AWS Marketplace | AISPL`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-billingentity */
    BillingEntity?: string | Intrinsic
    /**
     * - The pricing rule description.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-description */
    Description?: string | Intrinsic
    /**
     * - A percentage modifier applied on the public pricing rates.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `0`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-modifierpercentage */
    ModifierPercentage?: number | Intrinsic
    /**
     * - The name of a pricing rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9_\+=\.\-@]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-name */
    Name: string | Intrinsic
    /**
     * - Operation is the specific AWS action covered by this line item. This describes the specific usage of the line item.
     * - If the `Scope` attribute is set to `SKU`, this attribute indicates which operation the `PricingRule` is modifying. For example, a value of `RunInstances:0202` indicates the operation of running an Amazon EC2 instance.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-operation */
    Operation?: string | Intrinsic
    /**
     * - The scope of pricing rule that indicates if it's globally applicable or service-specific.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `GLOBAL | SERVICE | BILLING_ENTITY | SKU`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-scope */
    Scope: string | Intrinsic
    /**
     * - If the `Scope` attribute is `SERVICE`, this attribute indicates which service the `PricingRule` is applicable for.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9\.\-]+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-service */
    Service?: string | Intrinsic
    /**
     * - A map that contains tag keys and tag values that are attached to a pricing rule.
     * - _Required_: No
     * - _Type_: Array of [Tag](./aws-properties-billingconductor-pricingrule-tag.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-tags */
    Tags?: Tag[]
    /**
     * - The set of tiering configurations for the pricing rule.
     * - _Required_: No
     * - _Type_: [Tiering](./aws-properties-billingconductor-pricingrule-tiering.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-tiering */
    Tiering?: Tiering
    /**
     * - The type of pricing rule.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `MARKUP | DISCOUNT | TIERING`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-type */
    Type: string | Intrinsic
    /**
     * - Usage Type is the unit that each service uses to measure the usage of a specific type of resource.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^\S+$`
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-billingconductor-pricingrule.html#cfn-billingconductor-pricingrule-usagetype */
    UsageType?: string | Intrinsic
  }
}
