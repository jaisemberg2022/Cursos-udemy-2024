export const printObjecect = (argument: any) => {
  console.log(argument);
};

export function generciFunction<T>(argunment: T): T {
  return argunment;
}

export const genericFunctionArrow = <T>(argumnet: T): T => argumnet;
