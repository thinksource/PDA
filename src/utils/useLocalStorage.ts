import { useState, useEffect } from "react";

/**
 * Retrieve the stored value for the given key from the local storage, or return the default value if the key does not exist.
 *
 * @param {string} key - The key used to retrieve the value from the local storage.
 * @param {T} defaultValue - The default value to return if the key does not exist in the local storage.
 * @return {T} The retrieved value from the local storage, or the default value if the key does not exist.
 */
function getStorageValue<T>(key: string, defaultValue: T): T {
  // getting stored value
  const saved = localStorage.getItem(key)?.toString();
  const initial:T = saved?JSON.parse(saved):undefined;
  return initial || defaultValue;
}

/**
 * localStorage hook to store the value of a given key in the local storage.
 * @param {string} key - The key used to store the value in the local storage.
 * @param {T} defaultValue - The default value to store in the local storage.
 * @return {[T, (tasks: T) => void]} - The value stored in the local storage, and a function to update the value in the local storage.
 */

export const useLocalStorage = <T>(key:string, defaultValue: T)  : [T, (tasks: T) => void]=> {
  const [value, setValue] : [T, (tasks: T) => void]= useState(() => {
    return getStorageValue<T>(key, defaultValue);
  });

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};