/**
 * "Task" is often taken by server for async, etc. so we must use an alternative
 *  So we use "H" to stand for Heroku
 */
export class HTask {
    id = 0;
    name = '';
    properties: Properties;
}

export class Properties {
    dynoSize = '';
    frequency = '';
    lastRun = '';
    nextDue = '';
}


/**
 * Test data
 */
export const htasks: HTask[] = [
    {
        id: 1,
        name: 'Run first task',
        properties: 
            { dynoSize :'free', frequency: 'Daily', lastRun: 'never', nextDue: 'May 09' }
        
    },
    {
        id: 2,
        name: 'Run second task',
        properties: 
            { dynoSize: 'free', frequency: 'Hourly', lastRun: 'never', nextDue: 'May 10' }
        
    }
];

/**
 * Some items for drop down menus
 */
export const dynoSizes = ['free'];
export const frequencies = ['Daily', 'Hourly', 'Every 10 minutes'];