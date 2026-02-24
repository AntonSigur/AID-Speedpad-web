/** Centralized product configuration — single source of truth for version, stats, and download URLs */

export const CURRENT_VERSION = "v2.47.0";
export const EXE_SIZE = "758KB";
export const EXE_SIZE_SPACED = "758 KB";
export const TEST_COUNT = 215;
export const FEATURE_COUNT = "154+";
export const UNIQUE_FEATURES = 30;
export const RELEASE_COUNT = "60+";
export const RELEASE_NUMBER = 68;

export const SELF_HOSTED_BASE = `https://itant.is/releases/${CURRENT_VERSION}`;
export const DOWNLOAD_EXE = `${SELF_HOSTED_BASE}/SpeedPad.exe`;
export const DOWNLOAD_ZIP = `${SELF_HOSTED_BASE}/SpeedPad-${CURRENT_VERSION}-win64.zip`;
export const GITHUB_RELEASES = "https://github.com/AntonSigur/AID-SpeedPad/releases/latest";
