import * as crypto from 'crypto';
import * as moment from 'moment';
import { Logger } from '@nestjs/common';

export const IsEmail = email => {
  let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

export const RandomString = (len: number = 11, charSet: string = null) => {
  charSet =
    charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';
  for (let i = 0; i < len; i++) {
    let randomPoz = Math.floor(Math.random() * charSet.length);
    randomString += charSet.substring(randomPoz, randomPoz + 1);
  }
  return randomString;
};

export const ConvertToSlug = (str: string, sign: string = '-') => {
  return str
    .trim()
    .toLowerCase()
    .replace(/ /g, sign);
};

export const ExistValueInEnum = (enumValue: any, value: any): boolean => {
  return Object.values(enumValue).includes(value);
};

export const IsObjectId = value => {
  let check = new RegExp('^[0-9a-fA-F]{24}$');
  return check.test(value);
};

export const IsArrayObjectId = ids => {
  let flag = true;
  ids.forEach(id => {
    if (!IsObjectId(id)) flag = false;
  });
  return flag;
};

export const IsEmptyObject = obj => {
  return Object.keys(obj).length === 0;
};

export const CheckArrayObject = obj => {
  let result = [];
  obj.forEach(o => {
    if (IsObjectId(o)) result.push(o);
  });
  return result;
};

export const RandomDigit = length => {
  let basePow = Math.pow(10, length - 1);
  return Math.floor(basePow + Math.random() * basePow * 9);
};

export const HashGenerator = length => {
  return crypto.randomBytes(length).toString('hex');
};

const CleanLevelValue = 5; // famous level, increase it if you like!
export const CleanEmpty = (obj, level = 0) => {
  if (level <= CleanLevelValue)
    Object.keys(obj).forEach(
      key =>
        (obj[key] &&
          typeof obj[key] === 'object' &&
          RemoveEmptyValue(obj, key) &&
          CleanEmpty(obj[key], level++)) ||
        (!obj[key] && RemoveEmptyValue(obj, key)),
    );
  return obj;
};

export const RemoveEmptyValue = (obj, key) => {
  try {
    if (obj && key in obj && !obj[key]) delete obj[key];
  } catch (error) {
    // console.log(obj);
  }
  return obj;
};

export const AddDate = (length, type = 'minutes', date = null) => {
  return moment(date ? date : new Date())
    .add(length, type)
    .toDate();
};

export const SubtractDate = (length, type = 'minutes', date = null) => {
  return moment(date ? date : new Date())
    .subtract(length, type)
    .toDate();
};

export const IsPersian = (str: string): boolean | undefined => {
  if (!str) return;
  let result = /[^\u0621-\u06cc]/.test(str);
  return !result;
};

export const IsEnglish = (str: string): boolean | undefined => {
  if (!str) return;
  let result = /^[A-Za-z0-9]*$/.test(str);
  return result;
};

export const StrRemoveSpace = (str: string): string | undefined => {
  if (!str) return;
  return str.replace(/\s/g, '');
};

export const ConvertPersianNumbersToEnglish = value => {
  return value
    .replace(/[\u0660-\u0669]/g, function(c) {
      return c.charCodeAt(0) - 0x0660;
    })
    .replace(/[\u06f0-\u06f9]/g, function(c) {
      return c.charCodeAt(0) - 0x06f0;
    });
};

export const CompareTwoArrayIds = (baseArray, newArray) => {
  let isEqual = true;
  let removedItems = [];
  let addedItems = [];

  newArray.forEach(el => {
    if (!baseArray.includes(el)) {
      isEqual = false;
      addedItems.push(el);
    }
  });

  baseArray.forEach(el => {
    if (!newArray.includes(el)) removedItems.push(el);
  });

  return { isEqual, removedItems, addedItems };
};
