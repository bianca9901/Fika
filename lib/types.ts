/**
 * SectionName represents the type for section names, which are from the names
 * of the links defined in the data file.
 */

import { links } from "./data";

export type SectionName = (typeof links)[number]["name"] | null;
