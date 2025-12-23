import mongoose from 'mongoose';

const ContactSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    phone: {
        type: String,
        required: [true, 'Please provide a phone number'],
    },
    service: {
        type: String,
        required: [true, 'Please specify the service you are interested in'],
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
    },
    status: {
        type: String,
        enum: ['pending', 'resolved'],
        default: 'pending',
    },
}, { timestamps: true });

export default mongoose.models.Contact || mongoose.model('Contact', ContactSchema);
