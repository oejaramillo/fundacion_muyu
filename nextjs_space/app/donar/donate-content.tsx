'use client';

// Contenido de la página de donaciones
import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { Heart, CheckCircle2, AlertCircle, Loader2, Phone, MapPin } from 'lucide-react';

const predefinedAmounts = [25, 50, 100, 250, 500];

export function DonatePageContent() {
  const { t, locale } = useLanguage();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    country: 'Ecuador',
    amount: '',
    message: '',
    // anonymous: false, // Comentado temporalmente
  });
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setFormData((prev) => ({ ...(prev ?? {}), amount: amount?.toString?.() ?? '' }));
  };

  const handleCustomAmount = (value: string) => {
    setSelectedAmount(null);
    setFormData((prev) => ({ ...(prev ?? {}), amount: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/donations', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData?.name ?? '',
          email: formData?.email ?? '',
          phone: formData?.phone ?? '',
          address: formData?.address ?? '',
          city: formData?.city ?? '',
          country: formData?.country ?? 'Ecuador',
          amount: parseFloat(formData?.amount ?? '0'),
          message: formData?.message ?? '',
          // anonymous: formData?.anonymous ?? false, // Comentado temporalmente
        }),
      });

      if (response?.ok) {
        setSubmitStatus('success');
        setFormData({ 
          name: '', 
          email: '', 
          phone: '', 
          address: '', 
          city: '', 
          country: 'Ecuador', 
          amount: '', 
          message: '', 
          // anonymous: false 
        });
        setSelectedAmount(null);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar donación:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-teal-600 via-teal-700 to-green-700">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t?.donate?.title ?? 'Apoya Nuestra Misión'}
            </h1>
            <p className="text-white/90 max-w-2xl mx-auto text-lg">
              {t?.donate?.subtitle ?? 'Tu donación impulsa proyectos que transforman vidas'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Formulario */}
      <section className="py-16">
        <div className="max-w-[700px] mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl p-6 sm:p-8"
          >
            {submitStatus === 'success' ? (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <CheckCircle2 className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">
                  {t?.donate?.thankYou ?? '¡Gracias!'}
                </h2>
                <p className="text-gray-600">
                  {t?.donate?.successMessage ?? 'Tu donación ha sido registrada. Te contactaremos pronto.'}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Montos predefinidos */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    {t?.donate?.amountLabel ?? 'Monto de Donación'} (USD) *
                  </label>
                  <div className="grid grid-cols-3 sm:grid-cols-5 gap-2 mb-3">
                    {predefinedAmounts?.map?.((amount) => (
                      <button
                        key={amount}
                        type="button"
                        onClick={() => handleAmountSelect(amount)}
                        className={`py-3 px-4 rounded-lg font-semibold transition-all ${
                          selectedAmount === amount
                            ? 'bg-teal-600 text-white shadow-md'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                        }`}
                      >
                        ${amount}
                      </button>
                    )) ?? null}
                  </div>
                  <input
                    type="number"
                    min="1"
                    step="0.01"
                    placeholder={locale === 'es' ? 'Otro monto' : 'Other amount'}
                    value={selectedAmount ? '' : formData?.amount ?? ''}
                    onChange={(e) => handleCustomAmount(e?.target?.value ?? '')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                  />
                </div>

                {/* Información Personal */}
                <div className="border-t pt-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                    <Heart className="w-5 h-5 text-teal-600" />
                    {locale === 'es' ? 'Información de Contacto' : 'Contact Information'}
                  </h3>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Nombre */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t?.donate?.nameLabel ?? 'Nombre Completo'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData?.name ?? ''}
                        onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), name: e?.target?.value ?? '' }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t?.donate?.emailLabel ?? 'Correo Electrónico'} *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData?.email ?? ''}
                        onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), email: e?.target?.value ?? '' }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* Teléfono */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                        <Phone className="w-4 h-4" />
                        {locale === 'es' ? 'Teléfono' : 'Phone'}
                      </label>
                      <input
                        type="tel"
                        value={formData?.phone ?? ''}
                        onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), phone: e?.target?.value ?? '' }))}
                        placeholder={locale === 'es' ? '+593 99 123 4567' : '+593 99 123 4567'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* Dirección */}
                    <div className="sm:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {locale === 'es' ? 'Dirección' : 'Address'}
                      </label>
                      <input
                        type="text"
                        value={formData?.address ?? ''}
                        onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), address: e?.target?.value ?? '' }))}
                        placeholder={locale === 'es' ? 'Calle, número, sector' : 'Street, number, sector'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* Ciudad */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'es' ? 'Ciudad' : 'City'}
                      </label>
                      <input
                        type="text"
                        value={formData?.city ?? ''}
                        onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), city: e?.target?.value ?? '' }))}
                        placeholder={locale === 'es' ? 'Quito, Guayaquil, etc.' : 'Quito, Guayaquil, etc.'}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* País */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {locale === 'es' ? 'País' : 'Country'}
                      </label>
                      <select
                        value={formData?.country ?? 'Ecuador'}
                        onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), country: e?.target?.value ?? 'Ecuador' }))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      >
                        <option value="Ecuador">Ecuador</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Perú">Perú</option>
                        <option value="Estados Unidos">Estados Unidos</option>
                        <option value="España">España</option>
                        <option value="Otro">{locale === 'es' ? 'Otro' : 'Other'}</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Mensaje */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t?.donate?.messageLabel ?? 'Mensaje (Opcional)'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData?.message ?? ''}
                    onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), message: e?.target?.value ?? '' }))}
                    placeholder={locale === 'es' ? 'Cuéntanos por qué quieres apoyar nuestra misión...' : 'Tell us why you want to support our mission...'}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                  />
                </div>

                {/* Nota sobre contacto */}
                <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
                  <p className="text-sm text-teal-800">
                    {locale === 'es' 
                      ? '📞 Nos pondremos en contacto contigo para coordinar el proceso de donación y enviarte el comprobante correspondiente.'
                      : '📞 We will contact you to coordinate the donation process and send you the corresponding receipt.'
                    }
                  </p>
                </div>

                {/* Anónimo - Comentado temporalmente */}
                {/* <div className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={formData?.anonymous ?? false}
                    onChange={(e) => setFormData((prev) => ({ ...(prev ?? {}), anonymous: e?.target?.checked ?? false }))}
                    className="w-5 h-5 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                  />
                  <label htmlFor="anonymous" className="text-gray-700">
                    {t?.donate?.anonymousLabel ?? 'Deseo que mi donación sea anónima'}
                  </label>
                </div> */}

                {/* Error */}
                {submitStatus === 'error' && (
                  <div className="flex items-center gap-2 text-red-600 bg-red-50 p-3 rounded-lg">
                    <AlertCircle className="w-5 h-5" />
                    <span>{t?.common?.error ?? 'Ha ocurrido un error.'}</span>
                  </div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting || !formData?.amount || !formData?.name || !formData?.email}
                  className="w-full py-4 bg-gradient-to-r from-teal-600 to-green-600 hover:from-teal-500 hover:to-green-500 text-white font-bold rounded-xl shadow-lg disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-5 h-5 animate-spin" />
                      {t?.common?.loading ?? 'Cargando...'}
                    </>
                  ) : (
                    <>
                      <Heart className="w-5 h-5" />
                      {t?.donate?.submitButton ?? 'Realizar Donación'}
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
