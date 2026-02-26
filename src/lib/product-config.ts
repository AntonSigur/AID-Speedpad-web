/** Centralized product configuration — single source of truth for version, stats, and download URLs */

export const CURRENT_VERSION = "v2.58.0";
export const EXE_SIZE = "844KB";
export const EXE_SIZE_SPACED = "844 KB";
export const TEST_COUNT = 265;
export const FEATURE_COUNT = "160+";
export const UNIQUE_FEATURES = 33;
export const RELEASE_COUNT = "70+";
export const RELEASE_NUMBER = 79;

export const SELF_HOSTED_BASE = `https://itant.is/releases/${CURRENT_VERSION}`;
export const DOWNLOAD_EXE = `${SELF_HOSTED_BASE}/SpeedPad.exe`;
export const DOWNLOAD_ZIP = `${SELF_HOSTED_BASE}/SpeedPad-${CURRENT_VERSION}.zip`;
export const GITHUB_RELEASES = "https://github.com/AntonSigur/AID-SpeedPad/releases/latest";
