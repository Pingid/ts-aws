import type { ResourceAttributes } from '../attributes/index.js'
import type { Intrinsic } from '../intrinsic/index.js'
/**
 * The `AWS::Route53::KeySigningKey` resource creates a new key-signing key (KSK) in a hosted zone. The hosted zone ID is passed as a parameter in the KSK properties. You can specify the properties of this KSK using the `Name`, `Status`, and `KeyManagementServiceArn` properties of the resource.
 *
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html */

export interface Route53KeySigningKey extends ResourceAttributes {
  Type: 'AWS::Route53::KeySigningKey'
  Properties: {
    /**
     * - The unique string (ID) that is used to identify a hosted zone. For example: `Z00001111A1ABCaaABC11`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[A-Z0-9]{1,32}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-hostedzoneid */
    HostedZoneId: string | Intrinsic
    /**
     * - The Amazon resource name (ARN) for a customer managed customer master key (CMK) in AWS Key Management Service (AWS KMS ). The `KeyManagementServiceArn` must be unique for each key-signing key (KSK) in a single hosted zone. For example: `arn:aws:kms:us-east-1:111122223333:key/111a2222-a11b-1ab1-2ab2-1ab21a2b3a111`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-keymanagementservicearn */
    KeyManagementServiceArn: string | Intrinsic
    /**
     * - A string used to identify a key-signing key (KSK). `Name` can include numbers, letters, and underscores (\_). `Name` must be unique for each key-signing key in the same hosted zone.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9_]{3,128}$`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-name */
    Name: string | Intrinsic
    /**
     * - A string that represents the current key-signing key (KSK) status.
     * - Status can have one of the following values:
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ACTIVE | INACTIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     *
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-route53-keysigningkey.html#cfn-route53-keysigningkey-status */
    Status: string | Intrinsic
  }
}
