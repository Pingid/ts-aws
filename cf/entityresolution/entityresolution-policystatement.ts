import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Adds a policy statement object. To retrieve a list of existing policy statements, use the `GetPolicy` API.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html */

export interface EntityResolutionPolicyStatement extends ResourceAttributes {
  Type: 'AWS::EntityResolution::PolicyStatement'
  Properties: {
    /**
     * - The action that the principal can use on the resource.
     * - For example, `entityresolution:GetIdMappingJob`, `entityresolution:GetMatchingJob`.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-action */
    Action?: (string | Intrinsic)[]
    /**
     * - The Amazon Resource Name (ARN) of the resource that will be accessed by the principal.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:(aws|aws-us-gov|aws-cn):entityresolution:[a-z]{2}-[a-z]{1,10}-[0-9]:[0-9]{12}:((schemamapping|matchingworkflow|idmappingworkflow|idnamespace)/[a-zA-Z_0-9-]{1,255})$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-arn */
    Arn: string | Intrinsic
    /**
     * - A set of condition keys that you can use in key policies.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `40960`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-condition */
    Condition?: string | Intrinsic
    /**
     * - Determines whether the permissions specified in the policy are to be allowed (`Allow`) or denied (`Deny`).
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `Allow | Deny`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-effect */
    Effect?: string | Intrinsic
    /**
     * - The AWS service or AWS account that can access the resource defined as ARN.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-principal */
    Principal?: (string | Intrinsic)[]
    /**
     * - A statement identifier that differentiates the statement from others in the same policy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[0-9A-Za-z]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-entityresolution-policystatement.html#cfn-entityresolution-policystatement-statementid */
    StatementId: string | Intrinsic
  }
}
