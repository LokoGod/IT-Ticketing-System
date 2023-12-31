import { Schema, model } from "mongoose";

// Interface
interface Ticket {
  ticketNum: number;
  subject: string;
  description: string;
  urgency: boolean;
  status: number;
  created_at: Date;
}

// Schema
const ticketSchema = new Schema<Ticket>({
  subject: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  urgency: {
    type: Boolean,
  },
  status: {
    type: Number,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});

const ticketModel = model("Ticket", ticketSchema)
export default ticketModel;

