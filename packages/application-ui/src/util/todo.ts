import { statusColor } from './common';

export const generatestatuscolor = (status: string) => {
  const color =
    status === "Inprogress"
      ? statusColor.inProgress
      : status === "Completed"
        ? statusColor.success
        : status === "Pending"
          ? statusColor.pending
          : statusColor.danger;
  return color;
}