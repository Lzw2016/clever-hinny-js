type JByte = number | never;

type JShort = number | never;

type JInt = number | never;

type JLong = number | never;

type JDouble = number | never;

type JBoolean = boolean | never;

type JChar = string | never;

type JString = string | never;

type JDate = never;

type BigDecimal = never;

interface JObject {
    asJByte(arg: number | string): JByte;

    asJShort(arg: number | string): JShort;

    asJInt(arg: number | string): JInt;

    as(): JByte;

    // TODO: ...
}

declare const JObject: JObject;