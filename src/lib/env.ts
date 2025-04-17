

/**
 * Get environment variables that are prefixed with VITE_
 * @param key The environment variable key (without the VITE_ prefix)
 * @param defaultValue A default value if the environment variable is not set
 * @returns The environment variable value or the default value
 */
export const getEnv = (key: string, defaultValue: string = ''): string => {
  const fullKey = `VITE_${key}`;
  return import.meta.env[fullKey] || defaultValue;
};


export const MONGODB_URI = (() => {
  const uri = getEnv('MONGODB_URI');
  console.log(uri);
  const password = getEnv('MONGODB_PASSWORD');
  console.log(password);
  
  
  if (uri && !uri.includes('<db_password>')) {
    return uri;
  }
  
 
  if (uri && uri.includes('<db_password>') && password) {
    return uri.replace('<db_password>', password);
  }
  
  
  return 'mongodb://localhost:27017/alpstech';
})();
