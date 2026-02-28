/** Centralized product configuration — single source of truth for version, stats, and download URLs */

export const CURRENT_VERSION = "v2.73.0";
export const EXE_SIZE = "843KB";
export const EXE_SIZE_SPACED = "843 KB";
export const TEST_COUNT = 1009;
export const FEATURE_COUNT = "180+";
export const UNIQUE_FEATURES = 55;
export const RELEASE_COUNT = "94";
export const RELEASE_NUMBER = 94;

export const SELF_HOSTED_BASE = `https://itant.is/releases/${CURRENT_VERSION}`;
export const DOWNLOAD_EXE = `${SELF_HOSTED_BASE}/SpeedPad.exe`;
export const DOWNLOAD_ZIP = `${SELF_HOSTED_BASE}/SpeedPad-${CURRENT_VERSION}.zip`;
export const SPEEDHEXPAD_EXE = `${SELF_HOSTED_BASE}/SpeedHexPad.exe`;
export const SPEEDHEXPAD_ZIP = `${SELF_HOSTED_BASE}/SpeedHexPad-${CURRENT_VERSION}.zip`;
export const GITHUB_RELEASES = "https://github.com/AntonSigur/AID-SpeedPad/releases/latest";
