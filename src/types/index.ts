export interface ITask {
	taskId: string;
	taskName: string;
	taskDescription: string;
	taskOwner: string;
}

export interface ILogItem {
	logId: string;
	logAuth: string;
	logMessage: string;
	logTimestamp: string;
}