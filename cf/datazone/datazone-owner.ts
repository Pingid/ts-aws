import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The properties of the domain unit owners group.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html */

export interface OwnerGroupProperties {
    /**
     * - The ID of the domain unit owners group.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|[\p{L}\p{M}\p{S}\p{N}\p{P}\t\n\r ]+)`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-ownergroupproperties-groupidentifier */
    "GroupIdentifier"?: string | Intrinsic;
}

/**
 * The properties of the owner user.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html */

export interface OwnerUserProperties {
    /**
     * - The ID of the owner user.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `(^([0-9a-f]{10}-|)[A-Fa-f0-9]{8}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{4}-[A-Fa-f0-9]{12}$|^[a-zA-Z_0-9+=,.@-]+$|^arn:aws:iam::\d{12}:.+$)`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-owneruserproperties-useridentifier */
    "UserIdentifier"?: string | Intrinsic;
}

/**
 * The properties of a domain unit's owner.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html */

export interface OwnerProperties {
    /**
     * - Specifies that the domain unit owner is a group.
     * - _Required_: No
     * - _Type_: [OwnerGroupProperties](./aws-properties-datazone-owner-ownergroupproperties.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-ownerproperties-group */
    "Group"?: OwnerGroupProperties;
    /**
     * - Specifies that the domain unit owner is a user.
     * - _Required_: No
     * - _Type_: [OwnerUserProperties](./aws-properties-datazone-owner-owneruserproperties.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-ownerproperties-user */
    "User"?: OwnerUserProperties;
}

/**
 * The owner that you want to add to the entity.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html */

export interface DataZoneOwner extends ResourceAttributes {
    "Type": "AWS::DataZone::Owner";
    "Properties": {
        /**
         * - The ID of the domain in which you want to add the entity owner.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^dzd[-_][a-zA-Z0-9_-]{1,36}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-domainidentifier */
        "DomainIdentifier": string | Intrinsic;
        /**
         * - The ID of the entity to which you want to add an owner.
         * - _Required_: Yes
         * - _Type_: String
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-entityidentifier */
        "EntityIdentifier": string | Intrinsic;
        /**
         * - The type of an entity.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `DOMAIN_UNIT`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-entitytype */
        "EntityType": string | Intrinsic;
        /**
         * - The owner that you want to add to the entity.
         * - _Required_: Yes
         * - _Type_: [OwnerProperties](./aws-properties-datazone-owner-ownerproperties.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-datazone-owner.html#cfn-datazone-owner-owner */
        "Owner": OwnerProperties;
    };
}