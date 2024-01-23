import Mongoose from 'mongoose';

const weddingSchema = new Mongoose.Schema(
  {
    programName: { type: String, required: true },
    programDate: { type: Date },
    programDetails: {
      negara: String,
      waktu: String,
      gedung: String,
      jalan: String,
      desa: String,
      kecamatan: String,
      kabupaten: String,
      provinsi: String,
    },
    commitDate: { type: Date },
    commitDetails: {
      negara: String,
      waktu: String,
      gedung: String,
      jalan: String,
      desa: String,
      kecamatan: String,
      kabupaten: String,
      provinsi: String,
    },
    partyDate: { type: Date },
    partyDetails: {
      negara: String,
      waktu: String,
      gedung: String,
      jalan: String,
      desa: String,
      kecamatan: String,
      kabupaten: String,
      provinsi: String,
    },
    groom: { type: Array },
    bride: { type: Array },
    fatherGroom: { type: String },
    motherGroom: { type: String },
    fatherBride: { type: String },
    motherBride: { type: String },
    gifts: {
      gift1: Number,
      nameGift1: String,
      bankGift1: String,
      gift2: Number,
      nameGift2: String,
      bankGift2: String,
      gift3: Number,
      nameGift3: String,
      bankGift3: String,
      gift4: Number,
      nameGift4: String,
      bankGift4: String,
    },
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
