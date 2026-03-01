/** Centralized product configuration — single source of truth for version, stats, and download URLs */

export const CURRENT_VERSION = "v2.75.0";
export const EXE_SIZE = "843KB";
export const EXE_SIZE_SPACED = "843 KB";
export const TEST_COUNT = 1052;
export const FEATURE_COUNT = "180+";
export const UNIQUE_FEATURES = 55;
export const RELEASE_COUNT = "96";
export const RELEASE_NUMBER = 96;

export const SELF_HOSTED_BASE = `/releases/${CURRENT_VERSION}`;
export const DOWNLOAD_ZIP = `${SELF_HOSTED_BASE}/speedpad-${CURRENT_VERSION}-unsigned.zip`;
export const DOWNLOAD_SHA256 = `${SELF_HOSTED_BASE}/speedpad-${CURRENT_VERSION}-unsigned.sha256`;
export const GITHUB_RELEASES = "https://github.com/AntonSigur/AID-SpeedPad/releases/latest";
