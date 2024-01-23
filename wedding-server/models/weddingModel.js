import Mongoose from 'mongoose';

const weddingSchema = new Mongoose.Schema(
  {
    programName: { type: String, required: true },
    groom: { type: Array },
    bride: { type: Array },
    fatherGroom: { type: String },
    motherGroom: { type: String },
    fatherBride: { type: String },
    motherBride: { type: String },
    guests: [
      {
        name: String,
        from: String,
        phone: Number,
        occupation: String,
        status: String,
        message: String,
      },
    ],
    imageGroom: { type: String },
    urlImageGroom: { type: String },
    imageBride: { type: String },
    urlImageBride: { type: String },
    video: { type: String },
    urlVideo: { type: String },
  },
  {
    timestamps: true,
  }
);

const Wedding = Mongoose.model('Wedding', weddingSchema);
export default Wedding;
