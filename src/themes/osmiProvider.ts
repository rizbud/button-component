import {OsmiProvider} from 'osmicsx';
import CustomTheme from './customTheme';

const provider = new OsmiProvider(CustomTheme);

export const apply = (styles: string) => provider.apply(styles);
export const connect = (styles: object) => provider.connect(styles);
