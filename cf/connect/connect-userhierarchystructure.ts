import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The update for level five.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html */

export interface LevelFive {
    /**
     * - The Amazon Resource Name (ARN) of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*agent-group-level/[-0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelfive-hierarchylevelarn */
    "HierarchyLevelArn"?: string | Intrinsic;
    /**
     * - The identifier of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelfive-hierarchylevelid */
    "HierarchyLevelId"?: string | Intrinsic;
    /**
     * - The name of the hierarchy level.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelfive-name */
    "Name": string | Intrinsic;
}

/**
 * The update for level four.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html */

export interface LevelFour {
    /**
     * - The Amazon Resource Name (ARN) of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*agent-group-level/[-0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelfour-hierarchylevelarn */
    "HierarchyLevelArn"?: string | Intrinsic;
    /**
     * - The identifier of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelfour-hierarchylevelid */
    "HierarchyLevelId"?: string | Intrinsic;
    /**
     * - The name of the hierarchy level.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelfour-name */
    "Name": string | Intrinsic;
}

/**
 * The update for level three.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html */

export interface LevelThree {
    /**
     * - The Amazon Resource Name (ARN) of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*agent-group-level/[-0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelthree-hierarchylevelarn */
    "HierarchyLevelArn"?: string | Intrinsic;
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelthree-hierarchylevelid */
    "HierarchyLevelId"?: string | Intrinsic;
    /**
     * - The name of the hierarchy level.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelthree-name */
    "Name": string | Intrinsic;
}

/**
 * The `LevelOne` property type specifies Property description not available. for an [AWS::Connect::UserHierarchyStructure](./aws-resource-connect-userhierarchystructure.html).
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html */

export interface LevelOne {
    /**
     * - The Amazon Resource Name (ARN) of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*agent-group-level/[-0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelone-hierarchylevelarn */
    "HierarchyLevelArn"?: string | Intrinsic;
    /**
     * - The identifier of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelone-hierarchylevelid */
    "HierarchyLevelId"?: string | Intrinsic;
    /**
     * - The name of the hierarchy level.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-levelone-name */
    "Name": string | Intrinsic;
}

/**
 * The update for level two.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html */

export interface LevelTwo {
    /**
     * - The Amazon Resource Name (ARN) of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*agent-group-level/[-0-9]*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-leveltwo-hierarchylevelarn */
    "HierarchyLevelArn"?: string | Intrinsic;
    /**
     * - The identifier of the hierarchy level.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-leveltwo-hierarchylevelid */
    "HierarchyLevelId"?: string | Intrinsic;
    /**
     * - The name of the hierarchy level.
     * - _Required_: Yes
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-leveltwo-name */
    "Name": string | Intrinsic;
}

/**
 * Contains information about a hierarchy structure.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html */

export interface UserHierarchyStructure {
    /**
     * - Property description not available.
     * - _Required_: No
     * - _Type_: [LevelFive](./aws-properties-connect-userhierarchystructure-levelfive.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelfive */
    "LevelFive"?: LevelFive;
    /**
     * - The update for level four.
     * - _Required_: No
     * - _Type_: [LevelFour](./aws-properties-connect-userhierarchystructure-levelfour.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelfour */
    "LevelFour"?: LevelFour;
    /**
     * - The update for level one.
     * - _Required_: No
     * - _Type_: [LevelOne](./aws-properties-connect-userhierarchystructure-levelone.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelone */
    "LevelOne"?: LevelOne;
    /**
     * - The update for level three.
     * - _Required_: No
     * - _Type_: [LevelThree](./aws-properties-connect-userhierarchystructure-levelthree.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-levelthree */
    "LevelThree"?: LevelThree;
    /**
     * - The update for level two.
     * - _Required_: No
     * - _Type_: [LevelTwo](./aws-properties-connect-userhierarchystructure-leveltwo.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure-leveltwo */
    "LevelTwo"?: LevelTwo;
}

/**
 * Contains information about a hierarchy structure.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html */

export interface ConnectUserHierarchyStructure extends ResourceAttributes {
    "Type": "AWS::Connect::UserHierarchyStructure";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the instance.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws[-a-z0-9]*:connect:[-a-z0-9]*:[0-9]{12}:instance/[-a-zA-Z0-9]*$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-instancearn */
        "InstanceArn": string | Intrinsic;
        /**
         * - Contains information about a hierarchy structure.
         * - _Required_: No
         * - _Type_: [UserHierarchyStructure](./aws-properties-connect-userhierarchystructure-userhierarchystructure.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-connect-userhierarchystructure.html#cfn-connect-userhierarchystructure-userhierarchystructure */
        "UserHierarchyStructure"?: UserHierarchyStructure;
    };
}