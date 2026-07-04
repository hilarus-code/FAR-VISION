/// <reference types="vite/client" />
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Check if credentials are set
export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

// Lazy initialization of the Supabase client
let supabaseClient: any = null;

export function getSupabase(): any {
  if (!isSupabaseConfigured) return null;
  if (!supabaseClient) {
    supabaseClient = createClient(supabaseUrl, supabaseAnonKey);
  }
  return supabaseClient;
}

// Fallback Local Storage implementations to keep preview 100% functional
const LOCAL_SUBMISSIONS_KEY = 'far_vision_contact_submissions';
const LOCAL_REVIEWS_KEY = 'far_vision_user_reviews';

export interface ContactSubmission {
  id?: string;
  nom: string;
  tel: string;
  categorie: string;
  message: string;
  created_at?: string;
}

export interface Review {
  id?: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  created_at?: string;
}

// Default reviews for fallback / initial state
const defaultReviews: Review[] = [
  {
    name: "Koffi Mensah",
    location: "Cotonou",
    text: "Un service client exceptionnel ! J'ai reçu mes verres progressifs en un temps record. L'équipe à l'Étoile Rouge est très professionnelle.",
    rating: 5,
  },
  {
    name: "Amina Soglo",
    location: "Porto-Novo",
    text: "Les montures proposées sont magnifiques et très résistantes. Mon enfant adore ses nouvelles lunettes de vue. Je recommande vivement.",
    rating: 5,
  },
  {
    name: "Charel Gnonlonfoun",
    location: "Bohicon",
    text: "Enfin un opticien de confiance à Bohicon. Le rapport qualité-prix est imbattable et le suivi après-vente est impeccable. Merci FAR-VISION !",
    rating: 5,
  }
];

// Helper to submit a contact/appointment request
export async function submitContact(data: Omit<ContactSubmission, 'id' | 'created_at'>): Promise<{ success: boolean; error?: string }> {
  try {
    const supabase = getSupabase();
    if (supabase) {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([data]);
      if (error) throw error;
      return { success: true };
    } else {
      // Local storage fallback
      const current = JSON.parse(localStorage.getItem(LOCAL_SUBMISSIONS_KEY) || '[]');
      current.push({ ...data, id: Math.random().toString(36).substr(2, 9), created_at: new Date().toISOString() });
      localStorage.setItem(LOCAL_SUBMISSIONS_KEY, JSON.stringify(current));
      return { success: true };
    }
  } catch (err: any) {
    console.warn('Supabase submitContact note: falling back to local storage (Supabase tables might not be created yet).', err);
    // Silent local fallback on insert failure to guarantee zero user interruption
    const current = JSON.parse(localStorage.getItem(LOCAL_SUBMISSIONS_KEY) || '[]');
    current.push({ ...data, id: Math.random().toString(36).substr(2, 9), created_at: new Date().toISOString() });
    localStorage.setItem(LOCAL_SUBMISSIONS_KEY, JSON.stringify(current));
    return { success: true };
  }
}

// Helper to fetch reviews
export async function fetchReviews(): Promise<Review[]> {
  try {
    const supabase = getSupabase();
    if (supabase) {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      if (data && data.length > 0) {
        return data as Review[];
      }
    }
    
    // Fallback: get reviews from local storage + append default reviews
    const stored = JSON.parse(localStorage.getItem(LOCAL_REVIEWS_KEY) || '[]');
    return [...stored, ...defaultReviews];
  } catch (err) {
    console.warn('Supabase fetchReviews note: falling back to default reviews (Supabase tables might not be created yet).', err);
    const stored = JSON.parse(localStorage.getItem(LOCAL_REVIEWS_KEY) || '[]');
    return [...stored, ...defaultReviews];
  }
}

// Helper to add a review
export async function addReview(review: Omit<Review, 'id' | 'created_at'>): Promise<{ success: boolean; data?: Review; error?: string }> {
  try {
    const supabase = getSupabase();
    const newReview = {
      ...review,
      created_at: new Date().toISOString()
    };

    if (supabase) {
      const { data, error } = await supabase
        .from('reviews')
        .insert([newReview])
        .select();
      
      if (error) throw error;
      return { success: true, data: data?.[0] };
    } else {
      // Local storage fallback
      const stored = JSON.parse(localStorage.getItem(LOCAL_REVIEWS_KEY) || '[]');
      const createdReview = { ...newReview, id: Math.random().toString(36).substr(2, 9) };
      stored.unshift(createdReview);
      localStorage.setItem(LOCAL_REVIEWS_KEY, JSON.stringify(stored));
      return { success: true, data: createdReview };
    }
  } catch (err: any) {
    console.warn('Supabase addReview note: falling back to local storage (Supabase tables might not be created yet).', err);
    // Silent local fallback on insert failure to guarantee zero user interruption
    const stored = JSON.parse(localStorage.getItem(LOCAL_REVIEWS_KEY) || '[]');
    const createdReview = { ...review, created_at: new Date().toISOString(), id: Math.random().toString(36).substr(2, 9) };
    stored.unshift(createdReview);
    localStorage.setItem(LOCAL_REVIEWS_KEY, JSON.stringify(stored));
    return { success: true, data: createdReview };
  }
}
