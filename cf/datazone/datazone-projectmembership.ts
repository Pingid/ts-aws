import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The details about a project member.
 * Important - this data type is a UNION, so only one of the following members can be specified when used or returned.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html */

export interface Member {
    /**
     * - The ID of the group of a project member.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-member-groupidentifier */
    "GroupIdentifier"?: string | Intrinsic;
    /**
     * - The user ID of a project member.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-member-useridentifier */
    "UserIdentifier"?: string | Intrinsic;
}

/**
 * The `AWS::DataZone::ProjectMembership` resource adds a member to an Amazon DataZone project. Project members consume assets from the Amazon DataZone catalog and produce new assets using one or more analytical workflows.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html */

export interface DataZoneProjectMembership extends ResourceAttributes {
    "Type": "AWS::DataZone::ProjectMembership";
    "Properties": {
        /**
         * - The designated role of a project member.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `PROJECT_OWNER | PROJECT_CONTRIBUTOR | PROJECT_CATALOG_VIEWER | PROJECT_CATALOG_CONSUMER | PROJECT_CATALOG_STEWARD`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-designation */
        "Designation": string | Intrinsic;
        /**
         * - The ID of the Amazon DataZone domain in which project membership is created.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-domainidentifier */
        "DomainIdentifier": string | Intrinsic;
        /**
         * - The details about a project member.
         * - _Required_: Yes
         * - _Type_: [Member](./aws-properties-datazone-projectmembership-member.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-member */
        "Member": Member;
        /**
         * - The ID of the project for which this project membership was created.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectmembership.html#cfn-datazone-projectmembership-projectidentifier */
        "ProjectIdentifier": string | Intrinsic;
    };
}