import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * Optional. The member who can query can provide this placeholder for a literal data value in an analysis template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface AnalysisParameter {
    /**
     * - Optional. The default value that is applied in the analysis template. The member who can query can override this value in the query editor.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `250`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysisparameter-defaultvalue */
    "DefaultValue"?: string | Intrinsic;
    /**
     * - The name of the parameter. The name must use only alphanumeric, underscore (\_), or hyphen (-) characters but cannot start or end with a hyphen.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[0-9a-zA-Z_]+`
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysisparameter-name */
    "Name": string | Intrinsic;
    /**
     * - The type of parameter.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `SMALLINT | INTEGER | BIGINT | DECIMAL | REAL | DOUBLE_PRECISION | BOOLEAN | CHAR | VARCHAR | DATE | TIMESTAMP | TIMESTAMPTZ | TIME | TIMETZ | VARBYTE | BINARY | BYTE | CHARACTER | DOUBLE | FLOAT | INT | LONG | NUMERIC | SHORT | STRING | TIMESTAMP_LTZ | TIMESTAMP_NTZ | TINYINT`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysisparameter-type */
    "Type": string | Intrinsic;
}

/**
 * An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface Tag {
    /**
     * - The key of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value of the tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-tag-value */
    "Value": string | Intrinsic;
}

/**
 * A relation within an analysis.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface AnalysisSchema {
    /**
     * - The tables referenced in the analysis schema.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `0`
     * - _Update requires_: Updates are not supported.
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysisschema-referencedtables */
    "ReferencedTables": (string | Intrinsic)[];
}

/**
 * Hash
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface Hash {
    /**
     * - The SHA-256 hash value.
     * - _Required_: No
     * - _Type_: String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-hash-sha256 */
    "Sha256"?: string | Intrinsic;
}

/**
 * The analysis template artifact metadata.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface AnalysisTemplateArtifactMetadata {
    /**
     * - Additional artifact hashes for the analysis template.
     * - _Required_: No
     * - _Type_: Array of [Hash](./aws-properties-cleanrooms-analysistemplate-hash.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysistemplateartifactmetadata-additionalartifacthashes */
    "AdditionalArtifactHashes"?: Hash[];
    /**
     * - The hash of the entry point for the analysis template artifact metadata.
     * - _Required_: Yes
     * - _Type_: [Hash](./aws-properties-cleanrooms-analysistemplate-hash.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysistemplateartifactmetadata-entrypointhash */
    "EntryPointHash": Hash;
}

/**
 * The analysis source metadata.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface AnalysisSourceMetadata {
    /**
     * - The artifacts of the analysis source metadata.
     * - _Required_: Yes
     * - _Type_: [AnalysisTemplateArtifactMetadata](./aws-properties-cleanrooms-analysistemplate-analysistemplateartifactmetadata.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysissourcemetadata-artifacts */
    "Artifacts": AnalysisTemplateArtifactMetadata;
}

/**
 * The S3 location.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface S3Location {
    /**
     * - The bucket name.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `3`
     * - _Maximum_: `63`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-s3location-bucket */
    "Bucket": string | Intrinsic;
    /**
     * - The object key.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `[a-zA-Z0-9!_.*'()-/]+`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-s3location-key */
    "Key": string | Intrinsic;
}

/**
 * The analysis template artifact.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface AnalysisTemplateArtifact {
    /**
     * - The artifact location.
     * - _Required_: Yes
     * - _Type_: [S3Location](./aws-properties-cleanrooms-analysistemplate-s3location.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysistemplateartifact-location */
    "Location": S3Location;
}

/**
 * The analysis template artifacts.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface AnalysisTemplateArtifacts {
    /**
     * - Additional artifacts for the analysis template.
     * - _Required_: No
     * - _Type_: Array of [AnalysisTemplateArtifact](./aws-properties-cleanrooms-analysistemplate-analysistemplateartifact.html)
     * - _Minimum_: `1`
     * - _Maximum_: `1`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysistemplateartifacts-additionalartifacts */
    "AdditionalArtifacts"?: AnalysisTemplateArtifact[];
    /**
     * - The entry point for the analysis template artifacts.
     * - _Required_: Yes
     * - _Type_: [AnalysisTemplateArtifact](./aws-properties-cleanrooms-analysistemplate-analysistemplateartifact.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysistemplateartifacts-entrypoint */
    "EntryPoint": AnalysisTemplateArtifact;
    /**
     * - The role ARN for the analysis template artifacts.
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `32`
     * - _Maximum_: `512`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysistemplateartifacts-rolearn */
    "RoleArn": string | Intrinsic;
}

/**
 * The structure that defines the body of the analysis template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface AnalysisSource {
    /**
     * - The artifacts of the analysis source.
     * - _Required_: No
     * - _Type_: [AnalysisTemplateArtifacts](./aws-properties-cleanrooms-analysistemplate-analysistemplateartifacts.html)
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysissource-artifacts */
    "Artifacts"?: AnalysisTemplateArtifacts;
    /**
     * - The query text.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `0`
     * - _Maximum_: `90000`
     * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysissource-text */
    "Text"?: string | Intrinsic;
}

/**
 * Creates a new analysis template.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html */

export interface CleanRoomsAnalysisTemplate extends ResourceAttributes {
    "Type": "AWS::CleanRooms::AnalysisTemplate";
    "Properties": {
        /**
         * - The parameters of the analysis template.
         * - _Required_: No
         * - _Type_: Array of [AnalysisParameter](./aws-properties-cleanrooms-analysistemplate-analysisparameter.html)
         * - _Minimum_: `0`
         * - _Maximum_: `10`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-analysisparameters */
        "AnalysisParameters"?: AnalysisParameter[];
        /**
         * - The description of the analysis template.
         * - _Required_: No
         * - _Type_: String
         * - _Pattern_: `^[\u0020-\uD7FF\uE000-\uFFFD\uD800\uDBFF-\uDC00\uDFFF\t\r\n]*$`
         * - _Maximum_: `255`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-description */
        "Description"?: string | Intrinsic;
        /**
         * - The format of the analysis template.
         * - _Required_: Yes
         * - _Type_: String
         * - _Allowed values_: `SQL | PYSPARK_1_0`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-format */
        "Format": string | Intrinsic;
        /**
         * - The identifier for a membership resource.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}`
         * - _Minimum_: `36`
         * - _Maximum_: `36`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-membershipidentifier */
        "MembershipIdentifier": string | Intrinsic;
        /**
         * - The name of the analysis template.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9_](([a-zA-Z0-9_ ]+-)*([a-zA-Z0-9_ ]+))?$`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-name */
        "Name": string | Intrinsic;
        /**
         * - The entire schema object.
         * - _Required_: No
         * - _Type_: [AnalysisSchema](./aws-properties-cleanrooms-analysistemplate-analysisschema.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-schema */
        "Schema"?: AnalysisSchema;
        /**
         * - The source of the analysis template.
         * - _Required_: Yes
         * - _Type_: [AnalysisSource](./aws-properties-cleanrooms-analysistemplate-analysissource.html)
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-source */
        "Source": AnalysisSource;
        /**
         * - The source metadata for the analysis template.
         * - _Required_: No
         * - _Type_: [AnalysisSourceMetadata](./aws-properties-cleanrooms-analysistemplate-analysissourcemetadata.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-sourcemetadata */
        "SourceMetadata"?: AnalysisSourceMetadata;
        /**
         * - An optional label that you can assign to a resource when you create it. Each tag consists of a key and an optional value, both of which you define. When you use tagging, you can also use tag-based access control in IAM policies to control access to this resource.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-cleanrooms-analysistemplate-tag.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-cleanrooms-analysistemplate.html#cfn-cleanrooms-analysistemplate-tags */
        "Tags"?: Tag[];
    };
}