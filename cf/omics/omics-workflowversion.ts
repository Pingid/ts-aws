import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A workflow parameter.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html */

export interface WorkflowParameter {
    /**
     * - The parameter's description.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-workflowparameter-description */
    "Description"?: string | Intrinsic;
    /**
     * - Whether the parameter is optional.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-workflowparameter-optional */
    "Optional"?: boolean | Intrinsic;
}

/**
 * Creates a new workflow version for the workflow that you specify with the `workflowId` parameter.
 * When you create a new version of a workflow, you need to specify the configuration for the new version. It doesn't inherit any configuration values from the workflow.
 * Provide a version name that is unique for this workflow. You cannot change the name after HealthOmics creates the version.
 * ###### Note
 * 
 * Don’t include any personally identifiable information (PII) in the version name. Version names appear in the workflow version ARN.
 * For more information, see [Workflow versioning in AWS HealthOmics](https://docs.aws.amazon.com/omics/latest/dev/workflow-versions.html) in the AWS HealthOmics User Guide.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html */

export interface OmicsWorkflowVersion extends ResourceAttributes {
    "Type": "AWS::Omics::WorkflowVersion";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `GPU`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-accelerators */
        "Accelerators"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-definitionuri */
        "DefinitionUri"?: string | Intrinsic;
        /**
         * - The description of the workflow version.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-description */
        "Description"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `WDL | NEXTFLOW | CWL`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-engine */
        "Engine"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\p{L}||\p{M}||\p{Z}||\p{S}||\p{N}||\p{P}]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-main */
        "Main"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Object of [WorkflowParameter](./aws-properties-omics-workflowversion-workflowparameter.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-parametertemplate */
        "ParameterTemplate"?: Record<string, WorkflowParameter>;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Number
         * - _Minimum_: `0`
         * - _Maximum_: `100000`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-storagecapacity */
        "StorageCapacity"?: number | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `STATIC | DYNAMIC`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-storagetype */
        "StorageType"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Minimum_: `0`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-tags */
        "Tags"?: Record<string, string | Intrinsic>;
        /**
         * - The name of the workflow version.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Za-z0-9][A-Za-z0-9\-\._]*$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-versionname */
        "VersionName": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[0-9]{12}$`
         * - _Minimum_: `1`
         * - _Maximum_: `12`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-workflowbucketownerid */
        "WorkflowBucketOwnerId"?: string | Intrinsic;
        /**
         * - The workflow's ID.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[0-9]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `18`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-omics-workflowversion.html#cfn-omics-workflowversion-workflowid */
        "WorkflowId": string | Intrinsic;
    };
}