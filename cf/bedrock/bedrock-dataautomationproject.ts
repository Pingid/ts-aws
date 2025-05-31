import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * A tag associated with a resource. A tag consists of a key and value.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface Tag {
    /**
     * - The key associated with a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-tag-key */
    "Key": string | Intrinsic;
    /**
     * - The value associated with a tag.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^[a-zA-Z0-9\s._:/=+@-]*$`
     * - _Minimum_: `0`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-tag-value */
    "Value": string | Intrinsic;
}

/**
 * This element allows you to set up where JPEG, PNG, MOV, and MP4 files get routed to for processing. JPEG routing applies to both "JPEG" and "JPG" file extensions.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ModalityRoutingConfiguration {
    /**
     * - Sets whether JPEG files are routed to document or image processing.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DOCUMENT | IMAGE | VIDEO | AUDIO`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-modalityroutingconfiguration-jpeg */
    "jpeg"?: string | Intrinsic;
    /**
     * - Sets whether MOV files are routed to audio or video processing.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DOCUMENT | IMAGE | VIDEO | AUDIO`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-modalityroutingconfiguration-mov */
    "mov"?: string | Intrinsic;
    /**
     * - Sets whether MP4 files are routed to audio or video processing.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DOCUMENT | IMAGE | VIDEO | AUDIO`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-modalityroutingconfiguration-mp4 */
    "mp4"?: string | Intrinsic;
    /**
     * - Sets whether PNG files are routed to document or image processing.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DOCUMENT | IMAGE | VIDEO | AUDIO`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-modalityroutingconfiguration-png */
    "png"?: string | Intrinsic;
}

/**
 * An abbreviated summary of a blueprint.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface BlueprintItem {
    /**
     * - The blueprint's ARN.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^arn:aws(|-cn|-us-gov):bedrock:[a-zA-Z0-9-]*:(aws|[0-9]{12}):blueprint/(bedrock-data-automation-public-[a-zA-Z0-9-_]{1,30}|[a-zA-Z0-9-]{12,36})$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-blueprintitem-blueprintarn */
    "BlueprintArn": string | Intrinsic;
    /**
     * - The blueprint's stage.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `DEVELOPMENT | LIVE`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-blueprintitem-blueprintstage */
    "BlueprintStage"?: string | Intrinsic;
    /**
     * - The blueprint's version.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^[0-9]*$`
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-blueprintitem-blueprintversion */
    "BlueprintVersion"?: string | Intrinsic;
}

/**
 * Blueprints to apply to objects processed by the project.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface CustomOutputConfiguration {
    /**
     * - A list of blueprints.
     * - _Required_: No
     * - _Type_: Array of [BlueprintItem](./aws-properties-bedrock-dataautomationproject-blueprintitem.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-customoutputconfiguration-blueprints */
    "Blueprints"?: BlueprintItem[];
}

/**
 * Sets whether your project will process videos or not.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface VideoOverrideConfiguration {
    /**
     * - Sets modality processing for video files. All modalities are enabled by default.
     * - _Required_: No
     * - _Type_: [ModalityProcessingConfiguration](./aws-properties-bedrock-dataautomationproject-modalityprocessingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videooverrideconfiguration-modalityprocessing */
    "ModalityProcessing"?: ModalityProcessingConfiguration;
}

/**
 * Sets whether your project will process images or not.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ImageOverrideConfiguration {
    /**
     * - Sets modality processing for image files. All modalities are enabled by default.
     * - _Required_: No
     * - _Type_: [ModalityProcessingConfiguration](./aws-properties-bedrock-dataautomationproject-modalityprocessingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imageoverrideconfiguration-modalityprocessing */
    "ModalityProcessing"?: ModalityProcessingConfiguration;
}

/**
 * This element is used to determine if the modality it is associated with is enabled or disabled. All modalities are enabled by default.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ModalityProcessingConfiguration {
    /**
     * - Stores the state of the modality for your project, set to either enabled or disabled
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-modalityprocessingconfiguration-state */
    "State"?: string | Intrinsic;
}

/**
 * Sets whether your project will process audio or not.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface AudioOverrideConfiguration {
    /**
     * - Sets modality processing for audio files. All modalities are enabled by default.
     * - _Required_: No
     * - _Type_: [ModalityProcessingConfiguration](./aws-properties-bedrock-dataautomationproject-modalityprocessingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audiooverrideconfiguration-modalityprocessing */
    "ModalityProcessing"?: ModalityProcessingConfiguration;
}

/**
 * Document splitter settings. If a document is too large to be processed in one pass, the document splitter splits it into smaller documents.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface SplitterConfiguration {
    /**
     * - Whether document splitter is enabled for a project.
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-splitterconfiguration-state */
    "State"?: string | Intrinsic;
}

/**
 * Additional settings for a project.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentOverrideConfiguration {
    /**
     * - Sets modality processing for document files. All modalities are enabled by default.
     * - _Required_: No
     * - _Type_: [ModalityProcessingConfiguration](./aws-properties-bedrock-dataautomationproject-modalityprocessingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentoverrideconfiguration-modalityprocessing */
    "ModalityProcessing"?: ModalityProcessingConfiguration;
    /**
     * - Whether document splitter is enabled for a project.
     * - _Required_: No
     * - _Type_: [SplitterConfiguration](./aws-properties-bedrock-dataautomationproject-splitterconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentoverrideconfiguration-splitter */
    "Splitter"?: SplitterConfiguration;
}

/**
 * Additional settings for a project.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface OverrideConfiguration {
    /**
     * - This element declares whether your project will process audio files.
     * - _Required_: No
     * - _Type_: [AudioOverrideConfiguration](./aws-properties-bedrock-dataautomationproject-audiooverrideconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-overrideconfiguration-audio */
    "Audio"?: AudioOverrideConfiguration;
    /**
     * - Additional settings for a project.
     * - _Required_: No
     * - _Type_: [DocumentOverrideConfiguration](./aws-properties-bedrock-dataautomationproject-documentoverrideconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-overrideconfiguration-document */
    "Document"?: DocumentOverrideConfiguration;
    /**
     * - This element declares whether your project will process image files.
     * - _Required_: No
     * - _Type_: [ImageOverrideConfiguration](./aws-properties-bedrock-dataautomationproject-imageoverrideconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-overrideconfiguration-image */
    "Image"?: ImageOverrideConfiguration;
    /**
     * - Lets you set which modalities certain file types are processed as.
     * - _Required_: No
     * - _Type_: [ModalityRoutingConfiguration](./aws-properties-bedrock-dataautomationproject-modalityroutingconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-overrideconfiguration-modalityrouting */
    "ModalityRouting"?: ModalityRoutingConfiguration;
    /**
     * - This element declares whether your project will process video files.
     * - _Required_: No
     * - _Type_: [VideoOverrideConfiguration](./aws-properties-bedrock-dataautomationproject-videooverrideconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-overrideconfiguration-video */
    "Video"?: VideoOverrideConfiguration;
}

/**
 * Settings for generating descriptions of images.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ImageStandardGenerativeField {
    /**
     * - Whether generating descriptions is enabled for images.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imagestandardgenerativefield-state */
    "State": string | Intrinsic;
    /**
     * - Settings for generating descriptions of images.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imagestandardgenerativefield-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * Settings for generating descriptions of audio.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface AudioStandardGenerativeField {
    /**
     * - Whether generating descriptions is enabled for audio.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audiostandardgenerativefield-state */
    "State": string | Intrinsic;
    /**
     * - The types of description to generate.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audiostandardgenerativefield-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * Settings for generating descriptions of documents.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentStandardGenerativeField {
    /**
     * - Whether generating descriptions is enabled for documents.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentstandardgenerativefield-state */
    "State": string | Intrinsic;
}

/**
 * Settings for generating descriptions of video.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface VideoStandardGenerativeField {
    /**
     * - Whether generating descriptions is enabled for video.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videostandardgenerativefield-state */
    "State": string | Intrinsic;
    /**
     * - The types of description to generate.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videostandardgenerativefield-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * Settings for generating categorical data from images.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ImageExtractionCategory {
    /**
     * - Whether generating categorical data from images is enabled.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imageextractioncategory-state */
    "State": string | Intrinsic;
    /**
     * - The types of data to generate.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imageextractioncategory-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * Bounding box settings for a project.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ImageBoundingBox {
    /**
     * - Bounding box settings for a project.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imageboundingbox-state */
    "State": string | Intrinsic;
}

/**
 * Settings for generating data from images.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ImageStandardExtraction {
    /**
     * - Settings for generating bounding boxes.
     * - _Required_: Yes
     * - _Type_: [ImageBoundingBox](./aws-properties-bedrock-dataautomationproject-imageboundingbox.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imagestandardextraction-boundingbox */
    "BoundingBox": ImageBoundingBox;
    /**
     * - Settings for generating categorical data.
     * - _Required_: Yes
     * - _Type_: [ImageExtractionCategory](./aws-properties-bedrock-dataautomationproject-imageextractioncategory.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imagestandardextraction-category */
    "Category": ImageExtractionCategory;
}

/**
 * Output settings for processing images.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface ImageStandardOutputConfiguration {
    /**
     * - Settings for populating data fields that describe the image.
     * - _Required_: No
     * - _Type_: [ImageStandardExtraction](./aws-properties-bedrock-dataautomationproject-imagestandardextraction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imagestandardoutputconfiguration-extraction */
    "Extraction"?: ImageStandardExtraction;
    /**
     * - Whether to generate descriptions of the data.
     * - _Required_: No
     * - _Type_: [ImageStandardGenerativeField](./aws-properties-bedrock-dataautomationproject-imagestandardgenerativefield.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-imagestandardoutputconfiguration-generativefield */
    "GenerativeField"?: ImageStandardGenerativeField;
}

/**
 * Granularity settings for documents.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentExtractionGranularity {
    /**
     * - Granularity settings for documents.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentextractiongranularity-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * Bounding box settings for documents.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentBoundingBox {
    /**
     * - Whether bounding boxes are enabled for documents.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentboundingbox-state */
    "State": string | Intrinsic;
}

/**
 * Settings for generating data from documents.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentStandardExtraction {
    /**
     * - Whether to generate bounding boxes.
     * - _Required_: Yes
     * - _Type_: [DocumentBoundingBox](./aws-properties-bedrock-dataautomationproject-documentboundingbox.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentstandardextraction-boundingbox */
    "BoundingBox": DocumentBoundingBox;
    /**
     * - Which granularities to generate data for.
     * - _Required_: Yes
     * - _Type_: [DocumentExtractionGranularity](./aws-properties-bedrock-dataautomationproject-documentextractiongranularity.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentstandardextraction-granularity */
    "Granularity": DocumentExtractionGranularity;
}

/**
 * Settings for generating data from audio.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface AudioExtractionCategory {
    /**
     * - Whether generating categorical data from audio is enabled.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audioextractioncategory-state */
    "State": string | Intrinsic;
    /**
     * - The types of data to generate.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audioextractioncategory-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * Settings for generating data from audio.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface AudioStandardExtraction {
    /**
     * - Settings for generating data from audio.
     * - _Required_: Yes
     * - _Type_: [AudioExtractionCategory](./aws-properties-bedrock-dataautomationproject-audioextractioncategory.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audiostandardextraction-category */
    "Category": AudioExtractionCategory;
}

/**
 * Output settings for processing audio.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface AudioStandardOutputConfiguration {
    /**
     * - Settings for populating data fields that describe the audio.
     * - _Required_: No
     * - _Type_: [AudioStandardExtraction](./aws-properties-bedrock-dataautomationproject-audiostandardextraction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audiostandardoutputconfiguration-extraction */
    "Extraction"?: AudioStandardExtraction;
    /**
     * - Whether to generate descriptions of the data.
     * - _Required_: No
     * - _Type_: [AudioStandardGenerativeField](./aws-properties-bedrock-dataautomationproject-audiostandardgenerativefield.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-audiostandardoutputconfiguration-generativefield */
    "GenerativeField"?: AudioStandardGenerativeField;
}

/**
 * Output settings for additional file formats.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentOutputAdditionalFileFormat {
    /**
     * - Whether additional file formats are enabled for a project.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentoutputadditionalfileformat-state */
    "State": string | Intrinsic;
}

/**
 * An output text format.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentOutputTextFormat {
    /**
     * - The types of output text to generate.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentoutputtextformat-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * A document output format.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentOutputFormat {
    /**
     * - Output settings for additional file formats.
     * - _Required_: Yes
     * - _Type_: [DocumentOutputAdditionalFileFormat](./aws-properties-bedrock-dataautomationproject-documentoutputadditionalfileformat.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentoutputformat-additionalfileformat */
    "AdditionalFileFormat": DocumentOutputAdditionalFileFormat;
    /**
     * - An output text format.
     * - _Required_: Yes
     * - _Type_: [DocumentOutputTextFormat](./aws-properties-bedrock-dataautomationproject-documentoutputtextformat.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentoutputformat-textformat */
    "TextFormat": DocumentOutputTextFormat;
}

/**
 * Output settings for processing documents.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface DocumentStandardOutputConfiguration {
    /**
     * - Settings for populating data fields that describe the document.
     * - _Required_: No
     * - _Type_: [DocumentStandardExtraction](./aws-properties-bedrock-dataautomationproject-documentstandardextraction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentstandardoutputconfiguration-extraction */
    "Extraction"?: DocumentStandardExtraction;
    /**
     * - Whether to generate descriptions.
     * - _Required_: No
     * - _Type_: [DocumentStandardGenerativeField](./aws-properties-bedrock-dataautomationproject-documentstandardgenerativefield.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentstandardoutputconfiguration-generativefield */
    "GenerativeField"?: DocumentStandardGenerativeField;
    /**
     * - The output format to generate.
     * - _Required_: No
     * - _Type_: [DocumentOutputFormat](./aws-properties-bedrock-dataautomationproject-documentoutputformat.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-documentstandardoutputconfiguration-outputformat */
    "OutputFormat"?: DocumentOutputFormat;
}

/**
 * Bounding box settings for video.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface VideoBoundingBox {
    /**
     * - Whether bounding boxes are enabled for video.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videoboundingbox-state */
    "State": string | Intrinsic;
}

/**
 * Settings for generating categorical data from video.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface VideoExtractionCategory {
    /**
     * - Whether generating categorical data from video is enabled.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `ENABLED | DISABLED`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videoextractioncategory-state */
    "State": string | Intrinsic;
    /**
     * - The types of data to generate.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videoextractioncategory-types */
    "Types"?: (string | Intrinsic)[];
}

/**
 * Settings for generating data from video.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface VideoStandardExtraction {
    /**
     * - Settings for generating bounding boxes.
     * - _Required_: Yes
     * - _Type_: [VideoBoundingBox](./aws-properties-bedrock-dataautomationproject-videoboundingbox.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videostandardextraction-boundingbox */
    "BoundingBox": VideoBoundingBox;
    /**
     * - Settings for generating categorical data.
     * - _Required_: Yes
     * - _Type_: [VideoExtractionCategory](./aws-properties-bedrock-dataautomationproject-videoextractioncategory.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videostandardextraction-category */
    "Category": VideoExtractionCategory;
}

/**
 * Output settings for processing video.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface VideoStandardOutputConfiguration {
    /**
     * - Settings for populating data fields that describe the video.
     * - _Required_: No
     * - _Type_: [VideoStandardExtraction](./aws-properties-bedrock-dataautomationproject-videostandardextraction.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videostandardoutputconfiguration-extraction */
    "Extraction"?: VideoStandardExtraction;
    /**
     * - Whether to generate descriptions of the video.
     * - _Required_: No
     * - _Type_: [VideoStandardGenerativeField](./aws-properties-bedrock-dataautomationproject-videostandardgenerativefield.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-videostandardoutputconfiguration-generativefield */
    "GenerativeField"?: VideoStandardGenerativeField;
}

/**
 * The project's standard output configuration.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface StandardOutputConfiguration {
    /**
     * - Settings for processing audio.
     * - _Required_: No
     * - _Type_: [AudioStandardOutputConfiguration](./aws-properties-bedrock-dataautomationproject-audiostandardoutputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-standardoutputconfiguration-audio */
    "Audio"?: AudioStandardOutputConfiguration;
    /**
     * - Settings for processing documents.
     * - _Required_: No
     * - _Type_: [DocumentStandardOutputConfiguration](./aws-properties-bedrock-dataautomationproject-documentstandardoutputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-standardoutputconfiguration-document */
    "Document"?: DocumentStandardOutputConfiguration;
    /**
     * - Settings for processing images.
     * - _Required_: No
     * - _Type_: [ImageStandardOutputConfiguration](./aws-properties-bedrock-dataautomationproject-imagestandardoutputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-standardoutputconfiguration-image */
    "Image"?: ImageStandardOutputConfiguration;
    /**
     * - Settings for processing video.
     * - _Required_: No
     * - _Type_: [VideoStandardOutputConfiguration](./aws-properties-bedrock-dataautomationproject-videostandardoutputconfiguration.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-standardoutputconfiguration-video */
    "Video"?: VideoStandardOutputConfiguration;
}

/**
 * A data automation project.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html */

export interface BedrockDataAutomationProject extends ResourceAttributes {
    "Type": "AWS::Bedrock::DataAutomationProject";
    "Properties": {
        /**
         * - Blueprints to apply to objects processed by the project.
         * - _Required_: No
         * - _Type_: [CustomOutputConfiguration](./aws-properties-bedrock-dataautomationproject-customoutputconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-customoutputconfiguration */
        "CustomOutputConfiguration"?: CustomOutputConfiguration;
        /**
         * - The AWS KMS encryption context to use for encryption.
         * - _Required_: No
         * - _Type_: Object of String
         * - _Pattern_: `^.*$`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-kmsencryptioncontext */
        "KmsEncryptionContext"?: Record<string, string | Intrinsic>;
        /**
         * - The AWS KMS key to use for encryption.
         * - _Required_: No
         * - _Type_: String
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-kmskeyid */
        "KmsKeyId"?: string | Intrinsic;
        /**
         * - Additional settings for the project.
         * - _Required_: No
         * - _Type_: [OverrideConfiguration](./aws-properties-bedrock-dataautomationproject-overrideconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-overrideconfiguration */
        "OverrideConfiguration"?: OverrideConfiguration;
        /**
         * - The project's description.
         * - _Required_: No
         * - _Type_: String
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-projectdescription */
        "ProjectDescription"?: string | Intrinsic;
        /**
         * - The project's name.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `^[a-zA-Z0-9-_]+$`
         * - _Minimum_: `1`
         * - _Maximum_: `128`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-projectname */
        "ProjectName": string | Intrinsic;
        /**
         * - The project's standard output configuration.
         * - _Required_: No
         * - _Type_: [StandardOutputConfiguration](./aws-properties-bedrock-dataautomationproject-standardoutputconfiguration.html)
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-standardoutputconfiguration */
        "StandardOutputConfiguration"?: StandardOutputConfiguration;
        /**
         * - Property description not available.
         * - _Required_: No
         * - _Type_: Array of [Tag](./aws-properties-bedrock-dataautomationproject-tag.html)
         * - _Minimum_: `0`
         * - _Maximum_: `200`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-bedrock-dataautomationproject.html#cfn-bedrock-dataautomationproject-tags */
        "Tags"?: Tag[];
    };
}