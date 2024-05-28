import { DevtoolsOptions } from "zustand/middleware";
import { devtoolsConfig as sharedDevtoolsConfig } from '@mf-app/store/utils/store.utils';

export const devtoolsConfig = (name: string): DevtoolsOptions => sharedDevtoolsConfig(name, '@mf-app/host');