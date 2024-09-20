import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The routing configuration for a fleet alias.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html */

export interface RoutingStrategy {
  /**
   * - A unique identifier for a fleet that the alias points to. If you specify `SIMPLE` for the `Type` property, you must specify this property.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Pattern_: `^fleet-\S+`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-routingstrategy-fleetid */
  FleetId?: string | Intrinsic
  /**
   * - The message text to be used with a terminal routing strategy. If you specify `TERMINAL` for the `Type` property, you must specify this property.
   * - _Required_: Conditional
   * - _Type_: String
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-routingstrategy-message */
  Message?: string | Intrinsic
  /**
   * - A type of routing strategy.
   * - Possible routing types include the following:
   * - _Required_: Yes
   * - _Type_: String
   * - _Allowed values_: `SIMPLE | TERMINAL`
   * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
   *
   * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-routingstrategy-type */
  Type: string | Intrinsic
}

/**
 * The `AWS::GameLift::Alias` resource creates an alias for an Amazon GameLift (GameLift) fleet destination. There are two types of routing strategies for aliases: simple and terminal. A simple alias points to an active fleet. A terminal alias displays a message instead of routing players to an active fleet. For example, a terminal alias might display a URL link that directs players to an upgrade site. You can use aliases to define destinations in a game session queue or when requesting new game sessions.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html */

export interface GameLiftAlias extends ResourceAttributes {
  Type: 'AWS::GameLift::Alias'
  Properties: {
    /**
     * - A human-readable description of the alias.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-description */
    Description?: string | Intrinsic
    /**
     * - A descriptive label that is associated with an alias. Alias names do not need to be unique.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `.*\S.*`
     * - _Minimum_: `1`
     * - _Maximum_: `1024`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-name */
    Name: string | Intrinsic
    /**
     * - The routing configuration, including routing type and fleet target, for the alias.
     * - _Required_: Yes
     * - _Type_: [RoutingStrategy](./aws-properties-gamelift-alias-routingstrategy.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-gamelift-alias.html#cfn-gamelift-alias-routingstrategy */
    RoutingStrategy: RoutingStrategy
  }
}
