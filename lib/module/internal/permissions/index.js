import { Platform } from 'react-native';
import { PERMISSIONS, RESULTS } from 'react-native-permissions';
import Factory from './factory';
export const isDenied = status => status === RESULTS.DENIED;
export const isGranted = status => status === RESULTS.GRANTED;
export const isBlocked = status => status === RESULTS.BLOCKED;
export const isLimited = status => status === RESULTS.LIMITED;
export const isUnavailable = status => status === RESULTS.UNAVAILABLE;
export class Permissions {
  static async audio() {
    const MICROPHONE_PERMISSION = Platform.select({
      android: PERMISSIONS.ANDROID.RECORD_AUDIO,
      ios: PERMISSIONS.IOS.MICROPHONE
    });
    const rationale = {
      title: 'Acesso ao microfone',
      message: 'Para que possamos executar',
      buttonPositive: 'Permitir',
      buttonNegative: 'Negar'
    };
    const audio = Factory(MICROPHONE_PERMISSION, 'AUDIO PERMISSION:');
    const denied = await audio.CheckPermission(isDenied);
    const blocked = await audio.CheckPermission(isBlocked);
    if (denied || blocked) {
      return await audio.RequestPermission(rationale, isGranted);
    }
    return await audio.CheckPermission(isGranted);
  }
}
//# sourceMappingURL=index.js.map