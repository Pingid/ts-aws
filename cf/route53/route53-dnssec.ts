import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `AWS::Route53::DNSSEC` resource is used to enable DNSSEC signing in a hosted zone.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html */

export interface Route53DNSSEC extends ResourceAttributes {
    "Type": "AWS::Route53::DNSSEC";
    "Properties": {
        /**
         * - A unique string (ID) that is used to identify a hosted zone. For example: `Z00001111A1ABCaaABC11`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[A-Z0-9]{1,32}$`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-dnssec.html#cfn-route53-dnssec-hostedzoneid */
        "HostedZoneId": string | Intrinsic;
    };
}