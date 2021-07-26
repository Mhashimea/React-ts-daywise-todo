export const colors = [
  "#1abc9c",
  "#2ecc71",
  "#3498db",
  "#9b59b6",
  "#34495e",
  "#16a085",
  "#27ae60",
  "#2980b9",
  "#2c3e50",
  "#f1c40f",
  "#e67e22",
  "#e74c3c",
  "#f39c12",
  "#d35400",
  "#c0392b",
]

export const statusColor = {
  pending: '#f39c12',
  success: '#27ae60',
  danger: '#c0392b',
  inProgress: "#0f123f",
}

export const todoStatus = [
  "Inprogress", "Pending", "Completed", "Closed"
]

export const projectStatus = ["Active", "Inactive"]

export const generateRandomColor = () => {
  const randomColor = Math.floor(Math.random() * colors.length);
  return colors[randomColor]
}