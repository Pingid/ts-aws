import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The details of the subscription target configuration.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html */

export interface SubscriptionTargetForm {
  /**
   * - The content of the subscription target configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-subscriptiontargetform-content */
  Content: string | Intrinsic
  /**
   * - The form name included in the subscription target configuration.
   * - _Required_: Yes
   * - _Type_: String
   * - _Pattern_: `^(?![0-9_])\w+$|^_\w*[a-zA-Z0-9]\w*$`
   * - _Minimum_: `1`
   * - _Maximum_: `128`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-subscriptiontargetform-formname */
  FormName: string | Intrinsic
}

/**
 * The `AWS::DataZone::SubscriptionTarget`resource specifies an Amazon DataZone subscription target. Subscription targets enable you to access the data to which you have subscribed in your projects. A subscription target specifies the location (for example, a database or a schema) and the required permissions (for example, an IAM role) that Amazon DataZone can use to establish a connection with the source data and to create the necessary grants so that members of the Amazon DataZone project can start querying the data to which they have subscribed.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html */

export interface DataZoneSubscriptionTarget extends ResourceAttributes {
  Type: 'AWS::DataZone::SubscriptionTarget'
  Properties: {
    /**
     * - The asset types included in the subscription target.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-applicableassettypes */
    ApplicableAssetTypes: (string | Intrinsic)[]
    /**
     * - The authorized principals included in the subscription target.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-authorizedprincipals */
    AuthorizedPrincipals: (string | Intrinsic)[]
    /**
     * - The ID of the Amazon DataZone domain in which subscription target is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-domainidentifier */
    DomainIdentifier: string | Intrinsic
    /**
     * - The ID of the environment in which subscription target is created.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]{1,36}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-environmentidentifier */
    EnvironmentIdentifier: string | Intrinsic
    /**
     * - The manage access role that is used to create the subscription target.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-manageaccessrole */
    ManageAccessRole: string | Intrinsic
    /**
     * - The name of the subscription target.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-name */
    Name: string | Intrinsic
    /**
     * - The provider of the subscription target.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-provider */
    Provider?: string | Intrinsic
    /**
     * - The configuration of the subscription target.
     * - _Required_: Yes
     * - _Type_: Array of [SubscriptionTargetForm](./aws-properties-datazone-subscriptiontarget-subscriptiontargetform.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-subscriptiontargetconfig */
    SubscriptionTargetConfig: SubscriptionTargetForm[]
    /**
     * - The type of the subscription target.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-subscriptiontarget.html#cfn-datazone-subscriptiontarget-type */
    Type: string | Intrinsic
  }
}
