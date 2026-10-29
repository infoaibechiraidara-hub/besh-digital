import crypto from 'crypto';
import { supabase } from './supabase';

// Génère un token de téléchargement sécurisé
export async function generateDownloadToken(orderId: string): Promise<string> {
  const token = crypto.randomBytes(32).toString('hex');
  
  // Mettre à jour la commande avec le token
  const { error } = await supabase
    .from('orders')
    .update({ download_token: token })
    .eq('id', orderId);
  
  if (error) throw error;
  
  return token;
}

// Vérifie un token de téléchargement
export async function verifyDownloadToken(token: string): Promise<boolean> {
  const { data, error } = await supabase
    .from('orders')
    .select('download_used, expires_at')
    .eq('download_token', token)
    .single();
  
  if (error || !data) {
    return false;
  }
  
  // Vérifie si le téléchargement a déjà été utilisé
  if (data.download_used) {
    return false;
  }
  
  // Vérifie si le token est expiré
  if (data.expires_at && new Date(data.expires_at) < new Date()) {
    return false;
  }
  
  return true;
}

// Marque un téléchargement comme utilisé
export async function markDownloadUsed(token: string): Promise<void> {
  const { error } = await supabase
    .from('orders')
    .update({ download_used: true })
    .eq('download_token', token);
  
  if (error) throw error;
}

// Génère une URL de téléchargement signée temporaire
export async function generateSignedDownloadUrl(filePath: string, expiresInSeconds = 86400): Promise<string> {
  const { data, error } = await supabase.storage
    .from('products')
    .createSignedUrl(filePath, expiresInSeconds);
  
  if (error) throw error;
  
  return data.signedUrl;
}

// Vérifie la signature d'une requête
export function verifySignature(payload: any, signature: string, secret: string): boolean {
  const expectedSignature = crypto
    .createHmac('sha256', secret)
    .update(JSON.stringify(payload))
    .digest('hex');
  
  return crypto.timingSafeEqual(
    Buffer.from(signature, 'hex'),
    Buffer.from(expectedSignature, 'hex')
  );
}