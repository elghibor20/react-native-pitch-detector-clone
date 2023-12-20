import { type Callback, type PitchDetectorConfig, type Subscription } from '../../types';
export declare class InternalPitchDetector {
    private module?;
    private event?;
    constructor();
    /**
     * Returns a default PitchDetector configs
     * @returns PitchDetectorConfig
     * @example
     * ```ts
     * {
     *  android: {
     *    algorithm: 'YIN',
     *    bufferOverLap: 0,
     *    bufferSize: 1024,
     *    sampleRate: 22050,
     *  },
     *  ios: {
     *    algorithm: 'YIN',
     *    bufferSize: 1024,
     *  }
     * }
     */
    private getDefaultConfig;
    /**
     * Get current audio permission
     * @returns Promise<boolean>
     */
    private hasPermissions;
    /**
     * Get current status
     * @returns Promise<boolean>
     */
    isRecording(): Promise<boolean>;
    /**
     * Trigger audio recording and pitch detection with provided configs
     * @param config
     * @returns Promise<void>
     */
    start(config?: PitchDetectorConfig): Promise<void>;
    /**
     * Stop audio recording and pitch detection
     * @returns Promise<void>
     */
    stop(): Promise<void>;
    /**
     * Register a event listener
     */
    addListener(callback: Callback): Subscription;
    /**
     * Method event listeners
     * @alias removeAllListeners
     */
    removeListener(): void;
    /**
     * Method remove all event listeners
     */
    removeAllListeners(): void;
}
/**
 * Export an instance of InternalPitchDetector
 */
export declare const PitchDetector: InternalPitchDetector;
//# sourceMappingURL=index.d.ts.map