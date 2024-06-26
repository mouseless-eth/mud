import { StaticPrimitiveType } from "@latticexyz/schema-type/internal";
import { SchemaToPrimitives } from "@latticexyz/store";
import { Table } from "@latticexyz/store/config/v2";
import { Hex } from "viem";

export type TableRecord<table extends Table> = {
  readonly table: table;
  // TODO: refine to just static types
  // TODO: add helper to extract primary key of primitive types from table primary key + field values
  readonly primaryKey: readonly StaticPrimitiveType[];
  readonly keyTuple: readonly Hex[];
  readonly fields: SchemaToPrimitives<table["schema"]>;
};
