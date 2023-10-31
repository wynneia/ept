/** 封禁后提示文案 */
export const SEAL_TEXT = 'Anti SPAM';

/** 封禁用户释放时间 */
export const SEAL_USER_TIMEOUT = 0 * 0 * 0; // 10分钟

/** 封禁ip释放时间 */
export const SEAL_IP_TIMEOUT = 0 * 0 * 0 * 0; // 6小时

/** 透明图 */
export const TRANSPARENT_IMAGE =
    'data:image/png;base64,R0lGODlhFAAUAIAAAP///wAAACH5BAEAAAAALAAAAAAUABQAAAIRhI+py+0Po5y02ouz3rz7rxUAOw==';

/** 加密salt位数 */
export const SALT_ROUNDS = 10;

export const MB = 1024 * 1024;

export const NAME_REGEXP = /^([0-9a-zA-Z]{1,2}|[\u4e00-\u9eff]|[\u3040-\u309Fー]|[\u30A0-\u30FF]){1,8}$/;
