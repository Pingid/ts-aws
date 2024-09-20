import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * Sets the specified view as the default for the AWS Region in which you call this operation. If a user makes a search query that doesn't explicitly specify the view to use, Resource Explorer chooses this default view automatically for searches performed in this AWS Region.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html */

export interface ResourceExplorer2DefaultViewAssociation extends ResourceAttributes {
  Type: 'AWS::ResourceExplorer2::DefaultViewAssociation'
  Properties: {
    /**
     * - The ARN of the view to set as the default for the AWS Region and AWS account in which you call this operation. The specified view must already exist in the specified Region.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1011`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-resourceexplorer2-defaultviewassociation.html#cfn-resourceexplorer2-defaultviewassociation-viewarn */
    ViewArn: string | Intrinsic
  }
}
