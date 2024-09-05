import type { TurboModule } from 'react-native/Libraries/TurboModule/RCTExport';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    getAvailableBiometrics(): Promise<string>;
    authenticate(): Promise<string>;
}

export default TurboModuleRegistry.get<Spec>('RTNBiometrics') as Spec | null;
