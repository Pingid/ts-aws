import type { Intrinsic } from '../intrinsic/index.js'
import type { ResourceAttributes } from '../attributes/index.js'
/**
 * The `CSV` processor parses comma-separated values (CSV) from the log events into columns.
 * For more information about this processor including examples, see [csv](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-csv) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface Csv {
    /**
     * - An array of names to use for the columns in the transformed log event.
     * - If you omit this, default column names (`[column_1, column_2 ...]`) are used.
     * - _Required_: No
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `100`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-csv-columns */
    "Columns"?: (string | Intrinsic)[];
    /**
     * - The character used to separate each column in the original comma-separated value log event. If you omit this, the processor looks for the comma `,` character as the delimiter.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `2`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-csv-delimiter */
    "Delimiter"?: string | Intrinsic;
    /**
     * - The character used used as a text qualifier for a single column of data. If you omit this, the double quotation mark `"` character is used.
     * - _Required_: No
     * - _Type_: String
     * - _Maximum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-csv-quotecharacter */
    "QuoteCharacter"?: string | Intrinsic;
    /**
     * - The path to the field in the log event that has the comma separated values to be parsed. If you omit this value, the whole log message is processed.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-csv-source */
    "Source"?: string | Intrinsic;
}

/**
 * This processor converts a datetime string into a format that you specify.
 * For more information about this processor including examples, see [datetimeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-datetimeConverter) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface DateTimeConverter {
    /**
     * - The locale of the source field. If you omit this, the default of `locale.ROOT` is used.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-datetimeconverter-locale */
    "Locale"?: string | Intrinsic;
    /**
     * - A list of patterns to match against the `source` field.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-datetimeconverter-matchpatterns */
    "MatchPatterns": (string | Intrinsic)[];
    /**
     * - The key to apply the date conversion to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-datetimeconverter-source */
    "Source": string | Intrinsic;
    /**
     * - The time zone of the source field. If you omit this, the default used is the UTC zone.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-datetimeconverter-sourcetimezone */
    "SourceTimezone"?: string | Intrinsic;
    /**
     * - The JSON field to store the result in.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-datetimeconverter-target */
    "Target": string | Intrinsic;
    /**
     * - The datetime format to use for the converted data in the target field.
     * - If you omit this, the default of `yyyy-MM-dd'T'HH:mm:ss.SSS'Z` is used.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `64`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-datetimeconverter-targetformat */
    "TargetFormat"?: string | Intrinsic;
    /**
     * - The time zone of the target field. If you omit this, the default used is the UTC zone.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-datetimeconverter-targettimezone */
    "TargetTimezone"?: string | Intrinsic;
}

/**
 * This processor deletes entries from a log event. These entries are key-value pairs.
 * For more information about this processor including examples, see [deleteKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-deleteKeys) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface DeleteKeys {
    /**
     * - The list of keys to delete.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-deletekeys-withkeys */
    "WithKeys": (string | Intrinsic)[];
}

/**
 * This processor uses pattern matching to parse and structure unstructured data. This processor can also extract fields from log messages.
 * For more information about this processor including examples, see [grok](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-Grok) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface Grok {
    /**
     * - The grok pattern to match against the log event. For a list of supported grok patterns, see [Supported grok patterns](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#Grok-Patterns).
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `512`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-grok-match */
    "Match": string | Intrinsic;
    /**
     * - The path to the field in the log event that you want to parse. If you omit this value, the whole log message is parsed.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-grok-source */
    "Source"?: string | Intrinsic;
}

/**
 * This processor takes a list of objects that contain key fields, and converts them into a map of target keys.
 * For more information about this processor including examples, see [listToMap](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-listToMap) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ListToMap {
    /**
     * - A Boolean value to indicate whether the list will be flattened into single items. Specify `true` to flatten the list. The default is `false`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-listtomap-flatten */
    "Flatten"?: boolean | Intrinsic;
    /**
     * - If you set `flatten` to `true`, use `flattenedElement` to specify which element, `first` or `last`, to keep.
     * - You must specify this parameter if `flatten` is `true`
     * - _Required_: No
     * - _Type_: String
     * - _Allowed values_: `first | last`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-listtomap-flattenedelement */
    "FlattenedElement"?: string | Intrinsic;
    /**
     * - The key of the field to be extracted as keys in the generated map
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-listtomap-key */
    "Key": string | Intrinsic;
    /**
     * - The key in the log event that has a list of objects that will be converted to a map.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-listtomap-source */
    "Source": string | Intrinsic;
    /**
     * - The key of the field that will hold the generated map
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-listtomap-target */
    "Target"?: string | Intrinsic;
    /**
     * - If this is specified, the values that you specify in this parameter will be extracted from the `source` objects and put into the values of the generated map. Otherwise, original objects in the source list will be put into the values of the generated map.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-listtomap-valuekey */
    "ValueKey"?: string | Intrinsic;
}

/**
 * This processor converts a string to lowercase.
 * For more information about this processor including examples, see [lowerCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-lowerCaseString) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface LowerCaseString {
    /**
     * - The array caontaining the keys of the fields to convert to lowercase.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-lowercasestring-withkeys */
    "WithKeys": (string | Intrinsic)[];
}

/**
 * This processor parses CloudFront vended logs, extract fields, and convert them into JSON format. Encoded field values are decoded. Values that are integers and doubles are treated as such. For more information about this processor including examples, see [parseCloudfront](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseCloudfront)
 * For more information about CloudFront log format, see [Configure and use standard logs (access logs)](https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/AccessLogs.html).
 * If you use this processor, it must be the first processor in your transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ParseCloudfront {
    /**
     * - Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsecloudfront-source */
    "Source"?: string | Intrinsic;
}

/**
 * This processor parses log events that are in JSON format. It can extract JSON key-value pairs and place them under a destination that you specify.
 * Additionally, because you must have at least one parse-type processor in a transformer, you can use `ParseJSON` as that processor for JSON-format logs, so that you can also apply other processors, such as mutate processors, to these logs.
 * For more information about this processor including examples, see [parseJSON](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseJSON) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ParseJSON {
    /**
     * - The location to put the parsed key value pair into. If you omit this parameter, it is placed under the root node.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsejson-destination */
    "Destination"?: string | Intrinsic;
    /**
     * - Path to the field in the log event that will be parsed. Use dot notation to access child fields. For example, `store.book`
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsejson-source */
    "Source"?: string | Intrinsic;
}

/**
 * This processor parses a specified field in the original log event into key-value pairs.
 * For more information about this processor including examples, see [parseKeyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseKeyValue) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ParseKeyValue {
    /**
     * - The destination field to put the extracted key-value pairs into
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsekeyvalue-destination */
    "Destination"?: string | Intrinsic;
    /**
     * - The field delimiter string that is used between key-value pairs in the original log events. If you omit this, the ampersand `&` character is used.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsekeyvalue-fielddelimiter */
    "FieldDelimiter"?: string | Intrinsic;
    /**
     * - If you want to add a prefix to all transformed keys, specify it here.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsekeyvalue-keyprefix */
    "KeyPrefix"?: string | Intrinsic;
    /**
     * - The delimiter string to use between the key and value in each pair in the transformed log event.
     * - If you omit this, the equal `=` character is used.
     * - _Required_: No
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsekeyvalue-keyvaluedelimiter */
    "KeyValueDelimiter"?: string | Intrinsic;
    /**
     * - A value to insert into the value field in the result, when a key-value pair is not successfully split.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsekeyvalue-nonmatchvalue */
    "NonMatchValue"?: string | Intrinsic;
    /**
     * - Specifies whether to overwrite the value if the destination key already exists. If you omit this, the default is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsekeyvalue-overwriteifexists */
    "OverwriteIfExists"?: boolean | Intrinsic;
    /**
     * - Path to the field in the log event that will be parsed. Use dot notation to access child fields. For example, `store.book`
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsekeyvalue-source */
    "Source"?: string | Intrinsic;
}

/**
 * Use this processor to parse RDS for PostgreSQL vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message. For more information about this processor including examples, see [parsePostGres](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parsePostGres).
 * For more information about RDS for PostgreSQL log format, see [RDS for PostgreSQL database log filesTCP flag sequence](https://docs.aws.amazon.com/AmazonRDS/latest/UserGuide/USER_LogAccess.Concepts.PostgreSQL.html#USER_LogAccess.Concepts.PostgreSQL.Log_Format.log-line-prefix).
 * ###### Important
 * 
 * If you use this processor, it must be the first processor in your transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ParsePostgres {
    /**
     * - Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsepostgres-source */
    "Source"?: string | Intrinsic;
}

/**
 * Use this processor to parse Amazon VPC vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message.
 * This processor doesn't support custom log formats, such as NAT gateway logs. For more information about custom log formats in Amazon VPC, see [parseVPC](https://docs.aws.amazon.com/vpc/latest/userguide/flow-logs-records-examples.html#flow-log-example-tcp-flag) For more information about this processor including examples, see [parseVPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseVPC).
 * ###### Important
 * 
 * If you use this processor, it must be the first processor in your transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ParseVPC {
    /**
     * - Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsevpc-source */
    "Source"?: string | Intrinsic;
}

/**
 * Use this processor to parse AWS WAF vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message. For more information about this processor including examples, see [parseWAF](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parsePostGres).
 * For more information about AWS WAF log format, see [Log examples for web ACL traffic](https://docs.aws.amazon.com/waf/latest/developerguide/logging-examples.html).
 * ###### Important
 * 
 * If you use this processor, it must be the first processor in your transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ParseWAF {
    /**
     * - Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parsewaf-source */
    "Source"?: string | Intrinsic;
}

/**
 * Use this processor to parse Route 53 vended logs, extract fields, and and convert them into a JSON format. This processor always processes the entire log event message. For more information about this processor including examples, see [parseRoute53](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseRoute53).
 * ###### Important
 * 
 * If you use this processor, it must be the first processor in your transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface ParseRoute53 {
    /**
     * - Omit this parameter and the whole log message will be processed by this processor. No other value than `@message` is allowed for `source`.
     * - _Required_: No
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-parseroute53-source */
    "Source"?: string | Intrinsic;
}

/**
 * Use this processor to remove leading and trailing whitespace.
 * For more information about this processor including examples, see [trimString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-trimString) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface TrimString {
    /**
     * - The array containing the keys of the fields to trim.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-trimstring-withkeys */
    "WithKeys": (string | Intrinsic)[];
}

/**
 * This processor converts a string field to uppercase.
 * For more information about this processor including examples, see [upperCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-upperCaseString) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface UpperCaseString {
    /**
     * - The array of containing the keys of the field to convert to uppercase.
     * - _Required_: Yes
     * - _Type_: Array of String
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-uppercasestring-withkeys */
    "WithKeys": (string | Intrinsic)[];
}

/**
 * This object defines one key that will be renamed with the [renameKey](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-renameKey) processor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface RenameKeyEntry {
    /**
     * - The key to rename
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-renamekeyentry-key */
    "Key": string | Intrinsic;
    /**
     * - Specifies whether to overwrite the existing value if the destination key already exists. The default is `false`
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-renamekeyentry-overwriteifexists */
    "OverwriteIfExists"?: boolean | Intrinsic;
    /**
     * - The string to use for the new key name
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-renamekeyentry-renameto */
    "RenameTo": string | Intrinsic;
}

/**
 * Use this processor to rename keys in a log event.
 * For more information about this processor including examples, see [renameKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-renameKeys) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface RenameKeys {
    /**
     * - An array of `RenameKeyEntry` objects, where each object contains the information about a single key to rename.
     * - _Required_: Yes
     * - _Type_: Array of [RenameKeyEntry](./aws-properties-logs-transformer-renamekeyentry.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-renamekeys-entries */
    "Entries": RenameKeyEntry[];
}

/**
 * This object defines one log field key that will be replaced using the [substituteString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-substituteString) processor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface SubstituteStringEntry {
    /**
     * - The regular expression string to be replaced. Special regex characters such as \[ and \] must be escaped using \\\\ when using double quotes and with \\ when using single quotes. For more information, see [Class Pattern](https://docs.oracle.com/en/java/javase/17/docs/api/java.base/java/util/regex/Pattern.html) on the Oracle web site.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-substitutestringentry-from */
    "From": string | Intrinsic;
    /**
     * - The key to modify
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-substitutestringentry-source */
    "Source": string | Intrinsic;
    /**
     * - The string to be substituted for each match of `from`
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-substitutestringentry-to */
    "To": string | Intrinsic;
}

/**
 * This processor matches a key’s value against a regular expression and replaces all matches with a replacement string.
 * For more information about this processor including examples, see [substituteString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-substituteString) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface SubstituteString {
    /**
     * - An array of objects, where each object contains the information about one key to match and replace.
     * - _Required_: Yes
     * - _Type_: Array of [SubstituteStringEntry](./aws-properties-logs-transformer-substitutestringentry.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-substitutestring-entries */
    "Entries": SubstituteStringEntry[];
}

/**
 * This object defines one value type that will be converted using the [typeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-typeConverter) processor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface TypeConverterEntry {
    /**
     * - The key with the value that is to be converted to a different type.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-typeconverterentry-key */
    "Key": string | Intrinsic;
    /**
     * - The type to convert the field value to. Valid values are `integer`, `double`, `string` and `boolean`.
     * - _Required_: Yes
     * - _Type_: String
     * - _Allowed values_: `boolean | integer | double | string`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-typeconverterentry-type */
    "Type": string | Intrinsic;
}

/**
 * Use this processor to convert a value type associated with the specified key to the specified type. It's a casting processor that changes the types of the specified fields. Values can be converted into one of the following datatypes: `integer`, `double`, `string` and `boolean`.
 * For more information about this processor including examples, see [trimString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-trimString) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface TypeConverter {
    /**
     * - An array of `TypeConverterEntry` objects, where each object contains the information about one field to change the type of.
     * - _Required_: Yes
     * - _Type_: Array of [TypeConverterEntry](./aws-properties-logs-transformer-typeconverterentry.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-typeconverter-entries */
    "Entries": TypeConverterEntry[];
}

/**
 * This object defines one log field that will be split with the [splitString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-splitString) processor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface SplitStringEntry {
    /**
     * - The separator characters to split the string entry on.
     * - _Required_: Yes
     * - _Type_: String
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-splitstringentry-delimiter */
    "Delimiter": string | Intrinsic;
    /**
     * - The key of the field to split.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-splitstringentry-source */
    "Source": string | Intrinsic;
}

/**
 * Use this processor to split a field into an array of strings using a delimiting character.
 * For more information about this processor including examples, see [splitString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-splitString) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface SplitString {
    /**
     * - An array of `SplitStringEntry` objects, where each object contains the information about one field to split.
     * - _Required_: Yes
     * - _Type_: Array of [SplitStringEntry](./aws-properties-logs-transformer-splitstringentry.html)
     * - _Minimum_: `1`
     * - _Maximum_: `10`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-splitstring-entries */
    "Entries": SplitStringEntry[];
}

/**
 * This object defines one value to be copied with the [copyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-copyValue) processor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface CopyValueEntry {
    /**
     * - Specifies whether to overwrite the value if the destination key already exists. If you omit this, the default is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-copyvalueentry-overwriteifexists */
    "OverwriteIfExists"?: boolean | Intrinsic;
    /**
     * - The key to copy.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-copyvalueentry-source */
    "Source": string | Intrinsic;
    /**
     * - The key of the field to copy the value to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-copyvalueentry-target */
    "Target": string | Intrinsic;
}

/**
 * This processor copies values within a log event. You can also use this processor to add metadata to log events by copying the values of the following metadata keys into the log events: `@logGroupName`, `@logGroupStream`, `@accountId`, `@regionName`.
 * For more information about this processor including examples, see [copyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-copyValue) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface CopyValue {
    /**
     * - An array of `CopyValueEntry` objects, where each object contains the information about one field value to copy.
     * - _Required_: Yes
     * - _Type_: Array of [CopyValueEntry](./aws-properties-logs-transformer-copyvalueentry.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-copyvalue-entries */
    "Entries": CopyValueEntry[];
}

/**
 * This object defines one key that will be added with the [addKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-addKey) processor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface AddKeyEntry {
    /**
     * - The key of the new entry to be added to the log event
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Maximum_: `128`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-addkeyentry-key */
    "Key": string | Intrinsic;
    /**
     * - Specifies whether to overwrite the value if the key already exists in the log event. If you omit this, the default is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-addkeyentry-overwriteifexists */
    "OverwriteIfExists"?: boolean | Intrinsic;
    /**
     * - The value of the new entry to be added to the log event
     * - _Required_: Yes
     * - _Type_: String
     * - _Minimum_: `1`
     * - _Maximum_: `256`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-addkeyentry-value */
    "Value": string | Intrinsic;
}

/**
 * This processor adds new key-value pairs to the log event.
 * For more information about this processor including examples, see [addKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-addKeys) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface AddKeys {
    /**
     * - An array of objects, where each object contains the information about one key to add to the log event.
     * - _Required_: Yes
     * - _Type_: Array of [AddKeyEntry](./aws-properties-logs-transformer-addkeyentry.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-addkeys-entries */
    "Entries": AddKeyEntry[];
}

/**
 * This object defines one key that will be moved with the [moveKey](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-moveKey) processor.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface MoveKeyEntry {
    /**
     * - Specifies whether to overwrite the value if the destination key already exists. If you omit this, the default is `false`.
     * - _Required_: No
     * - _Type_: Boolean
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-movekeyentry-overwriteifexists */
    "OverwriteIfExists"?: boolean | Intrinsic;
    /**
     * - The key to move.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-movekeyentry-source */
    "Source": string | Intrinsic;
    /**
     * - The key to move to.
     * - _Required_: Yes
     * - _Type_: String
     * - _Pattern_: `^.*[a-zA-Z0-9]+.*$`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-movekeyentry-target */
    "Target": string | Intrinsic;
}

/**
 * This processor moves a key from one field to another. The original key is deleted.
 * For more information about this processor including examples, see [moveKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-moveKeys) in the _CloudWatch Logs User Guide_.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface MoveKeys {
    /**
     * - An array of objects, where each object contains the information about one key to move.
     * - _Required_: Yes
     * - _Type_: Array of [MoveKeyEntry](./aws-properties-logs-transformer-movekeyentry.html)
     * - _Minimum_: `1`
     * - _Maximum_: `5`
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-movekeys-entries */
    "Entries": MoveKeyEntry[];
}

/**
 * This structure contains the information about one processor in a log transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface Processor {
    /**
     * - Use this parameter to include the [addKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-addKeys) processor in your transformer.
     * - _Required_: No
     * - _Type_: [AddKeys](./aws-properties-logs-transformer-addkeys.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-addkeys */
    "AddKeys"?: AddKeys;
    /**
     * - Use this parameter to include the [copyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-copyValue) processor in your transformer.
     * - _Required_: No
     * - _Type_: [CopyValue](./aws-properties-logs-transformer-copyvalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-copyvalue */
    "CopyValue"?: CopyValue;
    /**
     * - Use this parameter to include the [CSV](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-CSV) processor in your transformer.
     * - _Required_: No
     * - _Type_: [Csv](./aws-properties-logs-transformer-csv.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-csv */
    "Csv"?: Csv;
    /**
     * - Use this parameter to include the [datetimeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-datetimeConverter) processor in your transformer.
     * - _Required_: No
     * - _Type_: [DateTimeConverter](./aws-properties-logs-transformer-datetimeconverter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-datetimeconverter */
    "DateTimeConverter"?: DateTimeConverter;
    /**
     * - Use this parameter to include the [deleteKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-deleteKeys) processor in your transformer.
     * - _Required_: No
     * - _Type_: [DeleteKeys](./aws-properties-logs-transformer-deletekeys.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-deletekeys */
    "DeleteKeys"?: DeleteKeys;
    /**
     * - Use this parameter to include the [grok](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-grok) processor in your transformer.
     * - _Required_: No
     * - _Type_: [Grok](./aws-properties-logs-transformer-grok.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-grok */
    "Grok"?: Grok;
    /**
     * - Use this parameter to include the [listToMap](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-listToMap) processor in your transformer.
     * - _Required_: No
     * - _Type_: [ListToMap](./aws-properties-logs-transformer-listtomap.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-listtomap */
    "ListToMap"?: ListToMap;
    /**
     * - Use this parameter to include the [lowerCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-lowerCaseString) processor in your transformer.
     * - _Required_: No
     * - _Type_: [LowerCaseString](./aws-properties-logs-transformer-lowercasestring.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-lowercasestring */
    "LowerCaseString"?: LowerCaseString;
    /**
     * - Use this parameter to include the [moveKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-moveKeys) processor in your transformer.
     * - _Required_: No
     * - _Type_: [MoveKeys](./aws-properties-logs-transformer-movekeys.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-movekeys */
    "MoveKeys"?: MoveKeys;
    /**
     * - Use this parameter to include the [parseCloudfront](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseCloudfront) processor in your transformer.
     * - If you use this processor, it must be the first processor in your transformer.
     * - _Required_: No
     * - _Type_: [ParseCloudfront](./aws-properties-logs-transformer-parsecloudfront.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-parsecloudfront */
    "ParseCloudfront"?: ParseCloudfront;
    /**
     * - Use this parameter to include the [parseJSON](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseJSON) processor in your transformer.
     * - _Required_: No
     * - _Type_: [ParseJSON](./aws-properties-logs-transformer-parsejson.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-parsejson */
    "ParseJSON"?: ParseJSON;
    /**
     * - Use this parameter to include the [parseKeyValue](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseKeyValue) processor in your transformer.
     * - _Required_: No
     * - _Type_: [ParseKeyValue](./aws-properties-logs-transformer-parsekeyvalue.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-parsekeyvalue */
    "ParseKeyValue"?: ParseKeyValue;
    /**
     * - Use this parameter to include the [parsePostGres](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parsePostGres) processor in your transformer.
     * - If you use this processor, it must be the first processor in your transformer.
     * - _Required_: No
     * - _Type_: [ParsePostgres](./aws-properties-logs-transformer-parsepostgres.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-parsepostgres */
    "ParsePostgres"?: ParsePostgres;
    /**
     * - Use this parameter to include the [parseRoute53](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseRoute53) processor in your transformer.
     * - If you use this processor, it must be the first processor in your transformer.
     * - _Required_: No
     * - _Type_: [ParseRoute53](./aws-properties-logs-transformer-parseroute53.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-parseroute53 */
    "ParseRoute53"?: ParseRoute53;
    /**
     * - Use this parameter to include the [parseVPC](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-parseVPC) processor in your transformer.
     * - If you use this processor, it must be the first processor in your transformer.
     * - _Required_: No
     * - _Type_: [ParseVPC](./aws-properties-logs-transformer-parsevpc.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-parsevpc */
    "ParseVPC"?: ParseVPC;
    /**
     * - Use this parameter to include the [parseWAF](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-parseWAF) processor in your transformer.
     * - If you use this processor, it must be the first processor in your transformer.
     * - _Required_: No
     * - _Type_: [ParseWAF](./aws-properties-logs-transformer-parsewaf.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-parsewaf */
    "ParseWAF"?: ParseWAF;
    /**
     * - Use this parameter to include the [renameKeys](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation.html#CloudWatch-Logs-Transformation-renameKeys) processor in your transformer.
     * - _Required_: No
     * - _Type_: [RenameKeys](./aws-properties-logs-transformer-renamekeys.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-renamekeys */
    "RenameKeys"?: RenameKeys;
    /**
     * - Use this parameter to include the [splitString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-splitString) processor in your transformer.
     * - _Required_: No
     * - _Type_: [SplitString](./aws-properties-logs-transformer-splitstring.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-splitstring */
    "SplitString"?: SplitString;
    /**
     * - Use this parameter to include the [substituteString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-substituteString) processor in your transformer.
     * - _Required_: No
     * - _Type_: [SubstituteString](./aws-properties-logs-transformer-substitutestring.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-substitutestring */
    "SubstituteString"?: SubstituteString;
    /**
     * - Use this parameter to include the [trimString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-trimString) processor in your transformer.
     * - _Required_: No
     * - _Type_: [TrimString](./aws-properties-logs-transformer-trimstring.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-trimstring */
    "TrimString"?: TrimString;
    /**
     * - Use this parameter to include the [typeConverter](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-typeConverter) processor in your transformer.
     * - _Required_: No
     * - _Type_: [TypeConverter](./aws-properties-logs-transformer-typeconverter.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-typeconverter */
    "TypeConverter"?: TypeConverter;
    /**
     * - Use this parameter to include the [upperCaseString](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-upperCaseString) processor in your transformer.
     * - _Required_: No
     * - _Type_: [UpperCaseString](./aws-properties-logs-transformer-uppercasestring.html)
     * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
     * 
     * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-processor-uppercasestring */
    "UpperCaseString"?: UpperCaseString;
}

/**
 * Creates or updates a _log transformer_ for a single log group. You use log transformers to transform log events into a different format, making them easier for you to process and analyze. You can also transform logs from different sources into standardized formats that contains relevant, source-specific information.
 * After you have created a transformer, CloudWatch Logs performs the transformations at the time of log ingestion. You can then refer to the transformed versions of the logs during operations such as querying with CloudWatch Logs Insights or creating metric filters or subscription filers.
 * You can also use a transformer to copy metadata from metadata keys into the log events themselves. This metadata can include log group name, log stream name, account ID and Region.
 * A transformer for a log group is a series of processors, where each processor applies one type of transformation to the log events ingested into this log group. The processors work one after another, in the order that you list them, like a pipeline. For more information about the available processors to use in a transformer, see [Processors that you can use](https://docs.aws.amazon.com/AmazonCloudWatch/latest/logs/CloudWatch-Logs-Transformation-Processors.html#CloudWatch-Logs-Transformation-Processors).
 * Having log events in standardized format enables visibility across your applications for your log analysis, reporting, and alarming needs. CloudWatch Logs provides transformation for common log types with out-of-the-box transformation templates for major AWS log sources such as VPC flow logs, Lambda, and Amazon RDS. You can use pre-built transformation templates or create custom transformation policies.
 * You can create transformers only for the log groups in the Standard log class.
 * You can also set up a transformer at the account level. For more information, see [PutAccountPolicy](https://docs.aws.amazon.com/AmazonCloudWatchLogs/latest/APIReference/API_PutAccountPolicy.html). If there is both a log-group level transformer created with `PutTransformer` and an account-level transformer that could apply to the same log group, the log group uses only the log-group level transformer. It ignores the account-level transformer.
 * 
 * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html */

export interface LogsTransformer extends ResourceAttributes {
    "Type": "AWS::Logs::Transformer";
    "Properties": {
        /**
         * - Specify either the name or ARN of the log group to create the transformer for.
         * - _Required_: Yes
         * - _Type_: String
         * - _Pattern_: `[\w#+=/:,.@-]*`
         * - _Minimum_: `1`
         * - _Maximum_: `2048`
         * - _Update requires_: [Replacement](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-replacement)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-loggroupidentifier */
        "LogGroupIdentifier": string | Intrinsic;
        /**
         * - This structure is an array that contains the configuration of this log transformer. A log transformer is an array of processors, where each processor applies one type of transformation to the log events that are ingested.
         * - _Required_: Yes
         * - _Type_: Array of [Processor](./aws-properties-logs-transformer-processor.html)
         * - _Minimum_: `1`
         * - _Maximum_: `20`
         * - _Update requires_: [No interruption](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/using-cfn-updating-stacks-update-behaviors.html#update-no-interrupt)
         * 
         * @see https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-logs-transformer.html#cfn-logs-transformer-transformerconfig */
        "TransformerConfig": Processor[];
    };
}