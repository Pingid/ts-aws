import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Use the `AWS::SDB::Domain` resource to declare a SimpleDB domain. When you specify `AWS::SDB::Domain` as an argument in a `Ref` function, AWS CloudFormation returns the value of the `DomainName`.
 * ###### Important
 *
 * The `AWS::SDB::Domain` resource does not allow any updates, including metadata updates.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sdb-domain.html */

export interface SDBDomain extends ResourceAttributes {
  Type: 'AWS::SDB::Domain'
  Properties: {
    /**
     * - Information about the SimpleDB domain.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-sdb-domain.html#cfn-sdb-domain-description */
    Description?: string | Intrinsic
  }
}
