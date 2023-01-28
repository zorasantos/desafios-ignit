import { v4 as randomUUID } from "uuid"

export const data = [
  {
    id: randomUUID(),
    title: "Estudar AWS Cloud",
    isComplete: true
  },
  {
    id: randomUUID(),
    title: "Fazer deploy depois do almoço",
    isComplete: false
  },
  {
    id: randomUUID(),
    title: "Estudar algoritmo",
    isComplete: true
  }
]