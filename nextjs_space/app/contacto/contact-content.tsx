'use client';

// Contenido de la página de contacto
import { useState } from 'react';
import { useLanguage } from '@/lib/language-context';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone, CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

export function ContactPageContent() {
  const { t, locale } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    serviceType: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const serviceOptions = [
    { value: 'statistical', label: t?.serviceTypes?.statistical ?? 'Análisis Estadístico' },
    { value: 'market', label: t?.serviceTypes?.market ?? 'Investigación de Mercado' },
    { value: 'policy', label: t?.serviceTypes?.policy ?? 'Política Pública' },
    { value: 'social', label: t?.serviceTypes?.social ?? 'Proyectos Sociales' },
    { value: 'investment', label: t?.serviceTypes?.investment ?? 'Análisis de Inversión' },
    { value: 'other', label: t?.serviceTypes?.other ?? 'Otro' },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e?.preventDefault?.();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData ?? {}),
      });

      if (response?.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          company: '',
          phone: '',
          serviceType: '',
          subject: '',
          message: '',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center justify-center w-16 h-16 bg-teal-600 rounded-xl mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
              {t?.contact?.title ?? 'Contáctanos'}
            </h1>
            <p className="text-gray-300 max-w-2xl mx-auto text-lg">
              {t?.contact?.subtitle ?? 'Estamos aquí para ayudarte'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contenido */}
      <section className="py-16">
        <div className="max-w-[1200px] mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Información de contacto */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 mb-6">
                <h3 className="font-bold text-gray-900 mb-6">
                  {locale === 'es' ? 'Información de Contacto' : 'Contact Information'}
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {locale === 'es' ? 'Dirección' : 'Address'}
                      </p>
                      <p className="text-gray-600 text-sm">Quito, Ecuador</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <p className="text-gray-600 text-sm">info@fundacionmuyu.org</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-teal-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-teal-600" />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">
                        {locale === 'es' ? 'Teléfono' : 'Phone'}
                      </p>
                      <p className="text-gray-600 text-sm">+593 2 XXX XXXX</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Nota de privacidad */}
              <div className="bg-teal-50 rounded-xl p-4 text-sm text-teal-800">
                <p>
                  {locale === 'es'
                    ? 'Tu información será tratada de forma confidencial y solo será utilizada para responder a tu consulta.'
                    : 'Your information will be treated confidentially and will only be used to respond to your inquiry.'}
                </p>
              </div>
            </motion.div>

            {/* Formulario */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="lg:col-span-2"
            >
              <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
                {submitStatus === 'success' ? (
                  <div className="text-center py-12">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                      <CheckCircle2 className="w-8 h-8 text-green-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                      {locale === 'es' ? '¡Mensaje Enviado!' : 'Message Sent!'}
                    </h2>
                    <p className="text-gray-600">
                      {t?.contact?.successMessage ?? ''}
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      {/* Nombre */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.nameLabel ?? 'Nombre'} *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData?.name ?? ''}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...(prev ?? {}), name: e?.target?.value ?? '' }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>

                      {/* Email */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.emailLabel ?? 'Email'} *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData?.email ?? ''}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...(prev ?? {}), email: e?.target?.value ?? '' }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>

                      {/* Empresa */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.companyLabel ?? 'Empresa'}
                        </label>
                        <input
                          type="text"
                          value={formData?.company ?? ''}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...(prev ?? {}), company: e?.target?.value ?? '' }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>

                      {/* Teléfono */}
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          {t?.contact?.phoneLabel ?? 'Teléfono'}
                        </label>
                        <input
                          type="tel"
                          value={formData?.phone ?? ''}
                          onChange={(e) =>
                            setFormData((prev) => ({ ...(prev ?? {}), phone: e?.target?.value ?? '' }))
                          }
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Servicio */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t?.contact?.serviceLabel ?? 'Servicio'} *
                      </label>
                      <select
                        required
                        value={formData?.serviceType ?? ''}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...(prev ?? {}), serviceType: e?.target?.value ?? '' }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white"
                      >
                        <option value="">{t?.contact?.selectService ?? 'Selecciona'}</option>
                        {serviceOptions?.map?.((option) => (
                          <option key={option?.value} value={option?.value ?? ''}>
                            {option?.label ?? ''}
                          </option>
                        )) ?? null}
                      </select>
                    </div>

                    {/* Asunto */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t?.contact?.subjectLabel ?? 'Asunto'} *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData?.subject ?? ''}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...(prev ?? {}), subject: e?.target?.value ?? '' }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                      />
                    </div>

                    {/* Mensaje */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        {t?.contact?.messageLabel ?? 'Mensaje'} *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData?.message ?? ''}
                        onChange={(e) =>
                          setFormData((prev) => ({ ...(prev ?? {}), message: e?.target?.value ?? '' }))
                        }
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none"
                      />
                    </div>

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
                      disabled={isSubmitting}
                      className="w-full py-4 bg-teal-600 hover:bg-teal-700 text-white font-bold rounded-xl shadow-md disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          {t?.common?.loading ?? 'Cargando...'}
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          {t?.contact?.submitButton ?? 'Enviar Mensaje'}
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
