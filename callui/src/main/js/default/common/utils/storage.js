/*
 * Copyright (c) 2021 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * @file: data storage
 */

import storage from '@ohos.data.storage';
import {PHONE_NUMBER} from '../constant/ImagePathConst.js';

const storageObj = storage.getStorageSync(PHONE_NUMBER);

/**
 * set sync storage
 * @param { string } key
 * @param { string | number | boolean } value
 */
export function setSyncStorage(key, value) {
    if (typeof value !== 'string') {
        value = JSON.stringify(value);
    }
    storageObj.putSync(key, value);
    storageObj.flushSync();
}

/**
 * get sync storage
 * @param { string } key
 */
export const getSyncStorage = (key) => storageObj.getSync(key, '');

/**
 * get async storage
 * @param { string } key
 */
export const getAsyncStorage = (key) => storageObj.get(key, '');

/**
 * has sync storage
 * @param { string } key
 */
export const hasSyncStorage = (key) => storageObj.hasSync(key);
