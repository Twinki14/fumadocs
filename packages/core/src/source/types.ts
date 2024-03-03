import type { LoaderOutput } from './loader';
import type { Meta, Page } from './file-system';

export interface MetaData {
  icon?: string;
  title?: string;
  root?: boolean;
  pages?: string[];
  defaultOpen?: boolean;
}

export interface PageData {
  icon?: string;
  title: string;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- infer types
export type InferPageType<Utils extends LoaderOutput<any>> =
  Utils extends LoaderOutput<infer Config>
    ? Page<Config['source']['pageData']>
    : never;

// eslint-disable-next-line @typescript-eslint/no-explicit-any -- infer types
export type InferMetaType<Utils extends LoaderOutput<any>> =
  Utils extends LoaderOutput<infer Config>
    ? Meta<Config['source']['metaData']>
    : never;
