import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * You can optionally create a run group to limit the compute resources for the runs that you add to the group.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html */

export interface OmicsRunGroup extends ResourceAttributes {
  Type: 'AWS::Omics::RunGroup'
  Properties: {
    /**
     * - The group's maximum CPU count setting.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `100000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxcpus */
    MaxCpus?: number | Intrinsic
    /**
     * - The group's maximum duration setting in minutes.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `100000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxduration */
    MaxDuration?: number | Intrinsic
    /**
     * - The maximum GPUs that can be used by a run group.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `100000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxgpus */
    MaxGpus?: number | Intrinsic
    /**
     * - The group's maximum concurrent run setting.
     * - _Required_: No
     * - _Type_: Number
     * - _Minimum_: `1`
     * - _Maximum_: `100000`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-maxruns */
    MaxRuns?: number | Intrinsic
    /**
     * - The group's name.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-name */
    Name?: string | Intrinsic
    /**
     * - Tags for the group.
     * - _Required_: No
     * - _Type_: Object of String
     * - _Pattern_: `.+`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-rungroup.html#cfn-omics-rungroup-tags */
    Tags?: Record<string, string | Intrinsic>
  }
}
