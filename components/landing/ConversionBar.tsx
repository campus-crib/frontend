export default function ConversionBar() {
    return (
        <div className="bg-white p-2 rounded-3xl shadow-2xl shadow-cool-slate/10 border border-warm-grey flex flex-col md:flex-row gap-2">
            <select className="flex-1 h-14 px-6 bg-transparent outline-none font-body font-bold text-lg cursor-pointer">
                <option>Select University</option>
                <option>UNILAG</option>
                <option>UI (Ibadan)</option>
                <option>FUNAAB</option>
            </select>
            <input
                type="tel"
                placeholder="WhatsApp for Portal Alerts"
                className="flex-[1.5] h-14 px-6 bg-soft-pearl rounded-2xl outline-none font-body focus:ring-2 ring-burnt-amber/20 transition-all"
            />
            <button className="h-14 px-10 bg-burnt-amber text-white font-header font-black rounded-2xl hover:scale-[1.02] active:scale-95 transition-all">
                JOIN WAITLIST
            </button>
        </div>
    );
}