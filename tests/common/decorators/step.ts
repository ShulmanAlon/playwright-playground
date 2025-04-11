import { test } from '@playwright/test';

export function step(stepName?: string) {
  return function (
    target: (this: any, ...args: any[]) => Promise<any>,
    context: ClassMethodDecoratorContext
  ) {
    return async function (this: any, ...args: any[]) {
      const className = this?.constructor?.name || 'UnknownClass';
      const methodName = stepName || String(context.name);
      const fullStepName = `${className} → ${methodName}`;

      return await test.step(fullStepName, async () => {
        return await target.call(this, ...args);
      });
    };
  };
}
