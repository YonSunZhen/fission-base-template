import { FN_CONFIG } from './fn.config';

export interface TimerInfo {
  name: string; 
  functionName: string; 
  cron: string
}

export const TIMER_CONFIG: Array<TimerInfo> = [
  {
    name: FN_CONFIG.test.name,
    functionName: FN_CONFIG.test.name,
    cron: '0 0 0-14/2 * * *'
  }
];