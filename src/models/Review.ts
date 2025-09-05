import mongoose, { Document, Schema } from 'mongoose';

export interface IReview extends Document {
  name: string;
  email?: string;
  rating: number;
  content: string;
  service?: string;
  approved: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ReviewSchema = new Schema<IReview>({
  name: {
    type: String,
    required: true,
    trim: true,
    maxlength: 100
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    maxlength: 100
  },
  rating: {
    type: Number,
    required: true,
    min: 1,
    max: 5
  },
  content: {
    type: String,
    required: true,
    maxlength: 1000
  },
  service: {
    type: String,
    trim: true,
    maxlength: 100
  },
  approved: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

// Index pre rýchle vyhľadávanie
ReviewSchema.index({ approved: 1, createdAt: -1 });
ReviewSchema.index({ rating: -1 });

export default mongoose.models.Review || mongoose.model<IReview>('Review', ReviewSchema);
