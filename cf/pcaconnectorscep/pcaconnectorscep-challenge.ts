import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * For general-purpose connectors. Creates a _challenge password_ for the specified connector. The SCEP protocol uses a challenge password to authenticate a request before issuing a certificate from a certificate authority (CA). Your SCEP clients include the challenge password as part of their certificate request to Connector for SCEP. To retrieve the connector Amazon Resource Names (ARNs) for the connectors in your account, call [ListConnectors](https://docs.aws.amazon.com/pca-connector-scep/latest/APIReference/API_ListConnectors.html).
 * To create additional challenge passwords for the connector, call `CreateChallenge` again. We recommend frequently rotating your challenge passwords.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-challenge.html */

export interface PCAConnectorSCEPChallenge extends ResourceAttributes {
    "Type": "AWS::PCAConnectorSCEP::Challenge";
    "Properties": {
        /**
         * - The Amazon Resource Name (ARN) of the connector.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^arn:aws(-[a-z]+)*:pca-connector-scep:[a-z]+(-[a-z]+)+-[1-9]\d*:\d{12}:connector\/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}$`
         * - _Minimum_: `5`
         * - _Maximum_: `200`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-challenge.html#cfn-pcaconnectorscep-challenge-connectorarn */
        "ConnectorArn": string | Intrinsic;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `.+`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-pcaconnectorscep-challenge.html#cfn-pcaconnectorscep-challenge-tags */
        "Tags"?: Record<string, string | Intrinsic>;
    };
}