import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `Tag` property type specifies Property description not available. for an [AWS::RefactorSpaces::Environment](./aws-resource-refactorspaces-environment.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html */

export interface Tag {
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^(?!aws:).+`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-tag-key */
    "Key": string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-tag-value */
    "Value": string | Intrinsic;
}

/**
 * Creates an AWS Migration Hub Refactor Spaces environment. The caller owns the environment resource, and all Refactor Spaces applications, services, and routes created within the environment. They are referred to as the _environment owner_. The environment owner has cross-account visibility and control of Refactor Spaces resources that are added to the environment by other accounts that the environment is shared with.
 * When creating an environment with a [CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) of `TRANSIT_GATEWAY`, Refactor Spaces provisions a transit gateway to enable services in VPCs to communicate directly across accounts. If [CreateEnvironment:NetworkFabricType](https://docs.aws.amazon.com/migrationhub-refactor-spaces/latest/APIReference/API_CreateEnvironment.html#migrationhubrefactorspaces-CreateEnvironment-request-NetworkFabricType) is `NONE`, Refactor Spaces does not create a transit gateway and you must use your network infrastructure to route traffic to services with private URL endpoints.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html */

export interface RefactorSpacesEnvironment extends ResourceAttributes {
    "Type": "AWS::RefactorSpaces::Environment";
    "Properties": {
        /**
         * - A description of the environment.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_\s\.\!\*\#\@\']+$`
         * - _Minimum_: `1`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-description */
        "Description"?: string | Intrinsic;
        /**
         * - The name of the environment.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^(?!env-)[a-zA-Z0-9]+[a-zA-Z0-9-_ ]+$`
         * - _Minimum_: `3`
         * - _Maximum_: `63`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-name */
        "Name"?: string | Intrinsic;
        /**
         * - The network fabric type of the environment.
         * - _Required_: No
         * - _Type_: String
         * - _Allowed values_: `TRANSIT_GATEWAY | NONE`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-networkfabrictype */
        "NetworkFabricType"?: string | Intrinsic;
        /**
         * - The tags assigned to the environment.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-refactorspaces-environment-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-refactorspaces-environment.html#cfn-refactorspaces-environment-tags */
        "Tags"?: Tag[];
    };
}