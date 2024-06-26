import { extendMUDCoreConfig, fromZodErrorCustom } from "@latticexyz/config/library";
import { ZodError } from "zod";
import { zMyPluginConfig } from "../library";

extendMUDCoreConfig((config) => {
  // This function gets called within mudConfig.
  // The call order of config extenders depends on the order of their imports.
  // Any config validation and transformation should be placed here.
  try {
    return zMyPluginConfig.parse(config);
  } catch (error) {
    if (error instanceof ZodError) {
      throw fromZodErrorCustom(error, "MyPluginConfig Validation Error");
    } else {
      throw error;
    }
  }
});
