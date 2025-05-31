import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The summary of the domain unit.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html */

export interface DataZoneDomainUnit extends ResourceAttributes {
    "Type": "AWS::DataZone::DomainUnit";
    "Properties": {
        /**
         * - The description of the domain unit.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `0`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html#cfn-datazone-domainunit-description */
        "Description"?: string | Intrinsic;
        /**
         * - The ID of the domain where you want to crate a domain unit.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html#cfn-datazone-domainunit-domainidentifier */
        "DomainIdentifier": string | Intrinsic;
        /**
         * - The name of the domain unit.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[\w -]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html#cfn-datazone-domainunit-name */
        "Name": string | Intrinsic;
        /**
         * - The ID of the parent domain unit.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-z0-9_-]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-domainunit.html#cfn-datazone-domainunit-parentdomainunitidentifier */
        "ParentDomainUnitIdentifier": string | Intrinsic;
    };
}