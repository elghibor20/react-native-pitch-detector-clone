import { NativeModules, NativeEventEmitter, Platform } from 'react-native';
import { Permissions } from '../permissions';
import { PitchDetectorError } from '../erros';
import { merge } from '../utils';
import { PitchDetectorErrors } from '../../types';
export class InternalPitchDetector {
  constructor() {
    this.module = NativeModules === null || NativeModules === void 0 ? void 0 : NativeModules.PitchDetectorModule;
    if (this.module) {
      this.event = new NativeEventEmitter(this.module);
    } else {
      /* istanbul ignore next */
      throw new PitchDetectorError(PitchDetectorErrors.LINKING_ERROR);
    }
  }

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
  getDefaultConfig() {
    return {
      android: {
        algorithm: 'YIN',
        bufferOverLap: 0,
        bufferSize: 1024,
        sampleRate: 22050
      },
      ios: {
        algorithm: 'YIN',
        bufferSize: 1024
      }
    };
  }

  /**
   * Get current audio permission
   * @returns Promise<boolean>
   */
  async hasPermissions() {
    return !!(await Permissions.audio());
  }

  /**
   * Get current status
   * @returns Promise<boolean>
   */
  async isRecording() {
    try {
      var _this$module;
      const status = await ((_this$module = this.module) === null || _this$module === void 0 ? void 0 : _this$module.isRecording());
      return !!status;
    } catch (err) {
      console.warn(err);
      return false;
    }
  }

  /**
   * Trigger audio recording and pitch detection with provided configs
   * @param config
   * @returns Promise<void>
   */
  async start(config) {
    try {
      var _this$module2;
      const permission = await this.hasPermissions();
      if (!permission) {
        throw new PitchDetectorError(PitchDetectorErrors.PERMISSIONS_ERROR);
      }
      const configuration = merge(this.getDefaultConfig(), config ?? {});
      const params = Platform.select({
        android: configuration.android,
        ios: configuration.ios
      });
      await ((_this$module2 = this.module) === null || _this$module2 === void 0 ? void 0 : _this$module2.start(params));
    } catch (err) {
      console.warn(err);
    }
  }

  /**
   * Stop audio recording and pitch detection
   * @returns Promise<void>
   */
  async stop() {
    try {
      var _this$module3;
      await ((_this$module3 = this.module) === null || _this$module3 === void 0 ? void 0 : _this$module3.stop());
    } catch (err) {
      console.warn(err);
    }
  }

  /**
   * Register a event listener
   */
  addListener(callback) {
    var _this$event;
    return (_this$event = this.event) === null || _this$event === void 0 ? void 0 : _this$event.addListener('data', callback);
  }

  /**
   * Method event listeners
   * @alias removeAllListeners
   */
  removeListener() {
    var _this$event2;
    (_this$event2 = this.event) === null || _this$event2 === void 0 ? void 0 : _this$event2.removeAllListeners('data');
  }

  /**
   * Method remove all event listeners
   */
  removeAllListeners() {
    var _this$event3;
    (_this$event3 = this.event) === null || _this$event3 === void 0 ? void 0 : _this$event3.removeAllListeners('data');
  }
}

/**
 * Export an instance of InternalPitchDetector
 */
export const PitchDetector = new InternalPitchDetector();
//# sourceMappingURL=index.js.map