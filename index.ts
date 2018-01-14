export default function RNStyleNames(...args: (string | object)[]): (number | object)[] {
  const styleNames: (number | object)[] = [];

  for (let i = 0; i < args.length; i++) {
    const arg = args[i] as any;
    if (typeof arg === 'number') {
      styleNames.push(arg);
    } else if (typeof arg === 'object') {
      for(let key in arg) {
        if (arg.hasOwnProperty(key) && !parseInt(key)) {
          styleNames.push(arg);
          break;
        } else if (arg.hasOwnProperty(key) && arg[key]) {
          styleNames.push(Number(key));
        }
      }
    } else if (Array.isArray(arg) && arg.length) {
      styleNames.push(...RNStyleNames.apply(null, arg));
    }
  }
  
  return styleNames;
}