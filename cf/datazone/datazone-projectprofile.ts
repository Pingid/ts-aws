import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `DesignationConfiguration` property type specifies Property description not available. for an [AWS::DataZone::ProjectProfile](./aws-resource-datazone-projectprofile.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html */

export interface DesignationConfiguration {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_-]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `36`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-designationconfiguration-designationid */
    "DesignationId": string | Intrinsic;
}

/**
 * The `ProjectScope` property type specifies Property description not available. for an [AWS::DataZone::ProjectProfile](./aws-resource-datazone-projectprofile.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html */

export interface ProjectScope {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[\w -]+$`
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-projectscope-name */
    "Name": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-projectscope-policy */
    "Policy"?: string | Intrinsic;
}

/**
 * The `AWS::DataZone::ProjectProfile` resource Property description not available. for DataZone.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html */

export interface DataZoneProjectProfile extends ResourceAttributes {
    "Type": "AWS::DataZone::ProjectProfile";
    "Properties": {
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [DesignationConfiguration](./aws-properties-datazone-projectprofile-designationconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-alloweddesignations */
        "AllowedDesignations"?: DesignationConfiguration[];
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-changelog */
        "ChangeLog"?: string | Intrinsic;
        /**
         * - The description of the project profile.
         * - _Required_: No
         * - _Type_: String
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-description */
        "Description"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^dzd[_][a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-domainidentifier */
        "DomainIdentifier"?: string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-z0-9_\-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-domainunitidentifier */
        "DomainUnitIdentifier"?: string | Intrinsic;
        /**
         * - The name of a project profile.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\w -]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `64`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-name */
        "Name": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [ProjectScope](./aws-properties-datazone-projectprofile-projectscope.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-projectscopes */
        "ProjectScopes"?: ProjectScope[];
        /**
         * - The status of a project profile.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `ENABLED | DISABLED`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-projectprofile.html#cfn-datazone-projectprofile-status */
        "Status"?: string | Intrinsic;
    };
}