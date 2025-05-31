import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Creates an _alias_, or a friendly name, for an AWS Payment Cryptography key. You can use an alias to identify a key in the console and when you call cryptographic operations such as [EncryptData](https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_EncryptData.html) or [DecryptData](https://docs.aws.amazon.com/payment-cryptography/latest/DataAPIReference/API_DecryptData.html).
 * You can associate the alias with any key in the same AWS Region. Each alias is associated with only one key at a time, but a key can have multiple aliases. You can't create an alias without a key. The alias must be unique in the account and AWS Region, but you can create another alias with the same name in a different AWS Region.
 * To change the key that's associated with the alias, call [UpdateAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html). To delete the alias, call [DeleteAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html). These operations don't affect the underlying key. To get the alias that you created, call [ListAliases](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html).
 * **Cross-account use**: This operation can't be used across different AWS accounts.
 * **Related operations:**
 * *   [DeleteAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_DeleteAlias.html)
 *     
 * *   [GetAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_GetAlias.html)
 *     
 * *   [ListAliases](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_ListAliases.html)
 *     
 * *   [UpdateAlias](https://docs.aws.amazon.com/payment-cryptography/latest/APIReference/API_UpdateAlias.html)
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html */

export interface PaymentCryptographyAlias extends ResourceAttributes {
    "Type": "AWS::PaymentCryptography::Alias";
    "Properties": {
        /**
         * - A friendly name that you can use to refer to a key. The value must begin with `alias/`.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^alias/[a-zA-Z0-9/_-]+$`
         * - _Minimum_: `7`
         * - _Maximum_: `256`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html#cfn-paymentcryptography-alias-aliasname */
        "AliasName": string | Intrinsic;
        /**
         * - The `KeyARN` of the key associated with the alias.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^arn:aws:payment-cryptography:[a-z]{2}-[a-z]{1,16}-[0-9]+:[0-9]{12}:key/[0-9a-zA-Z]{16,64}$`
         * - _Minimum_: `70`
         * - _Maximum_: `150`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-paymentcryptography-alias.html#cfn-paymentcryptography-alias-keyarn */
        "KeyArn"?: string | Intrinsic;
    };
}