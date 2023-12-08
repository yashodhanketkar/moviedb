import { QuerySalt } from "./constants";

class ParamPropsClass {
  decodeParam = (id: string) => {
    return Buffer.from(id, "base64").toString().split("$")[1];
  };

  encodeParam = (id: number) => {
    return Buffer.from(QuerySalt + id.toString()).toString("base64");
  };
}

export const { decodeParam, encodeParam } = new ParamPropsClass();
