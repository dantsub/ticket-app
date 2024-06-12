export type Ticket = {
  _id: string,
  title: string,
  description: string,
  category: string,
  status: string,
  priority: number,
  progress: number,
  active: boolean,
  createdAt: Date,
}