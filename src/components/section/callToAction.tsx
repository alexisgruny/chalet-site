export default function CallToAction({ hideContact = false, hideTarifs = false }: { hideContact?: boolean; hideTarifs?: boolean }) {
    return (

        <section className="section-green">
            <div className="container-section">
                <div className="relative overflow-hidden rounded-3xl bg-[#EBE2D6] p-8 sm:p-10 lg:p-12 ring-1 ring-black/5 shadow-sm">
                    <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#3a4b3c]/10 blur-2xl" />
                    <div className="pointer-events-none absolute -left-24 -bottom-24 h-64 w-64 rounded-full bg-[#3a4b3c]/10 blur-2xl" />

                    <div className="relative grid gap-8 lg:grid-cols-12 lg:items-center">
                        <div className="lg:col-span-8">
                            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#3a4b3c]">
                                Et si le Chalet Jaïa devenait votre refuge à Gérardmer&nbsp;?
                            </h2>
                            <p className="mt-3 text-base sm:text-lg leading-relaxed text-[#3a4b3c]/80 max-w-2xl">
                                Un lieu calme, chaleureux et pensé pour se retrouver en famille ou entre amis.
                                Écrivez-nous simplement, nous vous répondrons personnellement.
                            </p>
                        </div>

                        <div className="lg:col-span-4">
                            <div className="flex flex-col sm:flex-row lg:flex-col gap-3">
                                {!hideContact && (
                                    <a href="/contact" className="btn-primary">
                                        Nous contacter
                                    </a>
                                )}

                                {!hideTarifs && (
                                    <a
                                        href="/tarifs"
                                        className="inline-flex items-center justify-center rounded-full border border-[#3a4b3c]/25 px-6 py-3 text-[#3a4b3c] font-medium hover:bg-[#3a4b3c]/10 transition"
                                    >
                                        Voir les tarifs
                                    </a>
                                )}
                            </div>

                            <p className="mt-3 text-xs text-[#3a4b3c]/60">
                                Échange direct avec les propriétaires • Réponse rapide
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}