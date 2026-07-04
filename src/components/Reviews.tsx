import { useState, useEffect, FormEvent } from 'react';
import { Star, Quote, Plus, X, CheckCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { fetchReviews, addReview, Review, isSupabaseConfigured } from '../lib/supabase';

export function Reviews() {
  const [reviewsList, setReviewsList] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  // Form states
  const [name, setName] = useState('');
  const [location, setLocation] = useState('Cotonou');
  const [rating, setRating] = useState(5);
  const [text, setText] = useState('');

  useEffect(() => {
    async function loadReviews() {
      try {
        const data = await fetchReviews();
        setReviewsList(data);
      } catch (err) {
        console.error('Failed to load reviews:', err);
      } finally {
        setLoading(false);
      }
    }
    loadReviews();
  }, []);

  const handleRatingSelect = (selectedRating: number) => {
    setRating(selectedRating);
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !text.trim()) return;

    setSubmitting(true);
    const newReview = {
      name,
      location,
      rating,
      text,
    };

    const result = await addReview(newReview);
    setSubmitting(false);

    if (result.success && result.data) {
      setReviewsList((prev) => [result.data!, ...prev]);
      setSuccess(true);
      // Reset form
      setName('');
      setText('');
      setRating(5);
      setLocation('Cotonou');
      setTimeout(() => {
        setSuccess(false);
        setIsFormOpen(false);
      }, 3000);
    }
  };

  return (
    <section className="py-24 bg-sable/30 relative overflow-hidden" aria-labelledby="reviews-heading">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-gold text-xs font-bold tracking-[0.2em] uppercase mb-4">
              <span className="w-6 h-[1px] bg-gold block"></span>
              Avis Clients
            </div>
            <h2 id="reviews-heading" className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-charcoal">
              Ils voient plus loin avec nous
            </h2>
            <p className="text-gray-soft text-base">
              Découvrez les témoignages de nos clients satisfaits à Cotonou, Porto-Novo et Bohicon, ou laissez le vôtre.
            </p>
          </div>
          <button
            onClick={() => setIsFormOpen(true)}
            className="flex items-center gap-2 bg-charcoal text-white hover:bg-gold hover:text-charcoal px-6 py-3 rounded-lg font-bold transition-all text-sm self-start md:self-auto shadow-md"
          >
            <Plus className="w-4 h-4" />
            Laisser un avis
          </button>
        </div>

        {/* Modal for adding review */}
        <AnimatePresence>
          {isFormOpen && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="bg-white rounded-2xl w-full max-w-lg p-6 md:p-8 shadow-2xl relative border border-sable"
              >
                <button
                  onClick={() => setIsFormOpen(false)}
                  className="absolute top-4 right-4 text-gray-soft hover:text-charcoal transition-colors p-1"
                >
                  <X className="w-6 h-6" />
                </button>

                <h3 className="text-2xl font-serif font-semibold mb-6 text-charcoal">Laisser votre avis</h3>

                {success ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <CheckCircle className="w-16 h-16 text-emerald-500 mb-4 animate-bounce" />
                    <h4 className="text-xl font-bold text-charcoal mb-2">Merci pour votre avis !</h4>
                    <p className="text-gray-soft text-sm">Votre témoignage a été enregistré avec succès.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Note</label>
                      <div className="flex gap-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <button
                            type="button"
                            key={star}
                            onClick={() => handleRatingSelect(star)}
                            className="text-2xl transition-transform hover:scale-110 cursor-pointer"
                          >
                            <Star
                              className={`w-8 h-8 ${
                                star <= rating ? 'fill-gold text-gold' : 'text-gray-300'
                              }`}
                            />
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="rev-name" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Nom complet</label>
                        <input
                          id="rev-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ex: Armand D."
                          className="w-full px-4 py-3 bg-creme border border-sable rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm"
                        />
                      </div>
                      <div>
                        <label htmlFor="rev-loc" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Ville / Boutique</label>
                        <select
                          id="rev-loc"
                          value={location}
                          onChange={(e) => setLocation(e.target.value)}
                          className="w-full px-4 py-3 bg-creme border border-sable rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm appearance-none"
                        >
                          <option value="Cotonou">Cotonou (Étoile Rouge)</option>
                          <option value="Porto-Novo">Porto-Novo (Cinquantenaire)</option>
                          <option value="Bohicon">Bohicon (Soglogon)</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="rev-text" className="block text-xs font-bold uppercase tracking-wider text-charcoal mb-2">Votre commentaire</label>
                      <textarea
                        id="rev-text"
                        required
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        rows={4}
                        placeholder="Partagez votre expérience avec FAR-VISION (accueil, montures, qualité de vision...)"
                        className="w-full px-4 py-3 bg-creme border border-sable rounded-lg focus:outline-none focus:ring-2 focus:ring-gold/50 text-sm resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      disabled={submitting}
                      className="w-full bg-gold text-charcoal font-bold py-4 rounded-lg hover:bg-[#d9b65b] transition-colors disabled:opacity-50 cursor-pointer text-center"
                    >
                      {submitting ? 'Envoi en cours...' : 'Publier mon avis'}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          )}
        </AnimatePresence>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="w-8 h-8 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviewsList.map((review, idx) => (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                key={review.id || idx}
                className="bg-white p-8 rounded-2xl border border-gold/20 shadow-sm relative flex flex-col justify-between"
                itemScope
                itemProp="review"
                itemType="https://schema.org/Review"
              >
                <div itemProp="itemReviewed" itemScope itemType="https://schema.org/Organization">
                  <meta itemProp="name" content="FAR-VISION" />
                </div>
                <Quote className="absolute top-8 right-8 w-8 h-8 text-sable opacity-30" aria-hidden="true" />

                <div>
                  <div className="flex items-center gap-1 mb-6" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                    <meta itemProp="worstRating" content="1" />
                    <meta itemProp="ratingValue" content={review.rating.toString()} />
                    <meta itemProp="bestRating" content="5" />
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-gold text-gold" aria-hidden="true" />
                    ))}
                  </div>

                  <blockquote className="mb-6">
                    <p className="text-gray-soft italic leading-relaxed" itemProp="reviewBody">
                      "{review.text}"
                    </p>
                  </blockquote>
                </div>

                <div className="flex items-center gap-3 mt-4" itemProp="author" itemScope itemType="https://schema.org/Person">
                  <div className="w-10 h-10 rounded-full bg-charcoal text-white flex items-center justify-center font-bold text-sm shrink-0">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-bold text-charcoal text-sm" itemProp="name">
                      {review.name}
                    </div>
                    <div className="text-xs text-gold font-semibold uppercase tracking-wider">
                      {review.location}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      {/* Aggregate Rating Schema injected here */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          "@id": "https://www.far-vision.bj/#organization",
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "124"
          }
        })}
      </script>
    </section>
  );
}
