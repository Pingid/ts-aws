import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * A structure that describes an assignment of a principal to an application.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html */

export interface SSOApplicationAssignment extends ResourceAttributes {
  Type: 'AWS::SSO::ApplicationAssignment'
  Properties: {
    /**
     * - The ARN of the application that has principals assigned.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `arn:(aws|aws-us-gov|aws-cn|aws-iso|aws-iso-b):sso::\d{12}:application/(sso)?ins-[a-zA-Z0-9-.]{16}/apl-[a-zA-Z0-9]{16}`
     * - _Minimum_: `10`
     * - _Maximum_: `1224`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html#cfn-sso-applicationassignment-applicationarn */
    ApplicationArn: string | Intrinsic
    /**
     * - The unique identifier of the principal assigned to the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$`
     * - _Minimum_: `1`
     * - _Maximum_: `47`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html#cfn-sso-applicationassignment-principalid */
    PrincipalId: string | Intrinsic
    /**
     * - The type of the principal assigned to the application.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `USER | GROUP`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sso-applicationassignment.html#cfn-sso-applicationassignment-principaltype */
    PrincipalType: string | Intrinsic
  }
}
