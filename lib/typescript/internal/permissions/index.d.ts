import { PermissionStatus } from 'react-native-permissions';
export declare const isDenied: (status: PermissionStatus) => boolean;
export declare const isGranted: (status: PermissionStatus) => boolean;
export declare const isBlocked: (status: PermissionStatus) => boolean;
export declare const isLimited: (status: PermissionStatus) => boolean;
export declare const isUnavailable: (status: PermissionStatus) => boolean;
export declare class Permissions {
    static audio(): Promise<boolean | PermissionStatus | null>;
}
//# sourceMappingURL=index.d.ts.map