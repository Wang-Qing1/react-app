// utils.js

import {nanoid} from "nanoid";

/**
 * nanoid UUID生成
 * @param prefix 前缀
 * @param size  UUID位数，默认6位
 */
function getUid(prefix, size) {
  if (!size || Number(size) <= 0) {
    size = 6;
  }
  if (prefix) {
    return `${prefix}_${nanoid(size)}`
  } else {
    return nanoid(size);
  }
}


export { getUid };