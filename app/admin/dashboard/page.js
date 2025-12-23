"use client";

import { useEffect, useState, useCallback } from "react";
import { getContacts, updateContactStatus, deleteContact } from "@/app/actions/admin";
import { Check, Trash2, Mail, Phone, MessageSquare, Loader2 } from "lucide-react";
import { signOut } from "next-auth/react";

export default function AdminDashboard() {
    const [contacts, setContacts] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchContacts = useCallback(async () => {
        try {
            const data = await getContacts();
            setContacts(data);
        } catch (err) {
            console.error("Dashboard Fetch Error:", err);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchContacts();
    }, [fetchContacts]);

    const handleStatusUpdate = async (id, status) => {
        const res = await updateContactStatus(id, status);
        if (res.success) fetchContacts();
    };

    const handleDelete = async (id) => {
        if (confirm("Are you sure you want to delete this inquiry?")) {
            const res = await deleteContact(id);
            if (res.success) fetchContacts();
        }
    };

    if (loading) return (
        <div className="min-h-screen flex items-center justify-center bg-creamy-milk">
            <Loader2 className="w-8 h-8 animate-spin text-accent" />
        </div>
    );

    return (
        <div className="pt-32 pb-20 bg-creamy-milk min-h-screen px-6">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
                    <div>
                        <h1 className="text-sm font-bold uppercase tracking-widest text-accent mb-4">Admin Control Center</h1>
                        <h2 className="text-4xl md:text-5xl font-black text-primary uppercase leading-none">Inquiries.</h2>
                    </div>
                    <button
                        onClick={() => signOut({ callbackUrl: '/' })}
                        className="px-8 py-3 bg-primary text-creamy-milk rounded-2xl text-xs font-black uppercase tracking-widest hover:bg-primary/80 transition-all"
                    >
                        Logout
                    </button>
                </div>

                <div className="bg-white rounded-[2.5rem] shadow-2xl overflow-hidden border border-white/20">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="bg-primary text-creamy-milk">
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em]">Requester</th>
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em]">Service Unit</th>
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em]">Contact Details</th>
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em]">Inquiry Message</th>
                                    <th className="px-8 py-8 text-[10px] font-black uppercase tracking-[0.2em]">Control</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-creamy-milk">
                                {contacts.length === 0 ? (
                                    <tr>
                                        <td colSpan="5" className="px-8 py-24 text-center text-primary/30 font-bold italic">
                                            Systems clear. No pending inquiries at this time.
                                        </td>
                                    </tr>
                                ) : (
                                    contacts.map((contact) => (
                                        <tr key={contact._id} className="hover:bg-creamy-milk/30 transition-colors group">
                                            <td className="px-8 py-8">
                                                <div className="font-black text-primary uppercase tracking-tight text-lg">{contact.name}</div>
                                                <div className="text-[10px] text-primary/30 font-black uppercase mt-1">
                                                    Received: {new Date(contact.createdAt).toLocaleDateString()}
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <span className={`px-4 py-1.5 border-2 text-[10px] font-black uppercase rounded-full inline-block ${contact.service.includes('Civil') || !['Web', 'App', 'Marketing'].some(s => contact.service.includes(s))
                                                        ? 'border-accent/30 text-accent'
                                                        : 'border-primary/30 text-primary'
                                                    }`}>
                                                    {contact.service}
                                                </span>
                                            </td>
                                            <td className="px-8 py-8">
                                                <div className="flex flex-col gap-2 text-xs font-bold text-primary/60">
                                                    <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-default">
                                                        <Mail size={12} className="text-accent" /> {contact.email}
                                                    </span>
                                                    <span className="flex items-center gap-2 hover:text-accent transition-colors cursor-default">
                                                        <Phone size={12} className="text-accent" /> {contact.phone}
                                                    </span>
                                                </div>
                                            </td>
                                            <td className="px-8 py-8 max-w-xs">
                                                <div className="flex items-start gap-2 text-xs font-medium text-primary/70 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                                    <MessageSquare size={14} className="mt-0.5 flex-shrink-0 text-accent opacity-50" />
                                                    {contact.message}
                                                </div>
                                            </td>
                                            <td className="px-8 py-8">
                                                <div className="flex items-center gap-2">
                                                    <button
                                                        onClick={() => handleStatusUpdate(contact._id, contact.status === 'pending' ? 'resolved' : 'pending')}
                                                        className={`p-3 rounded-xl transition-all ${contact.status === 'resolved'
                                                                ? 'bg-green-500 text-white shadow-lg shadow-green-200'
                                                                : 'bg-creamy-milk text-primary/30 hover:bg-green-100 hover:text-green-600'
                                                            }`}
                                                        title={contact.status === 'resolved' ? 'Mark as Pending' : 'Mark as Resolved'}
                                                    >
                                                        <Check size={18} />
                                                    </button>
                                                    <button
                                                        onClick={() => handleDelete(contact._id)}
                                                        className="p-3 bg-creamy-milk text-primary/30 rounded-xl hover:bg-red-500 hover:text-white hover:shadow-lg hover:shadow-red-200 transition-all"
                                                        title="Delete Permanently"
                                                    >
                                                        <Trash2 size={18} />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
